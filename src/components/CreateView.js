import React, { useEffect, useState } from "react";
import DropDownWithSearch from "./DropDownWithSearch.js";
import ReactDatePicker from "react-datepicker";
import axios from "axios";

const CreateView = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    indicator: "",
    chartType: "",
    startDate: "",
    endDate: "",
  });

  const countries = [
    { label: "India", value: "India" },
    { label: "Japan", value: "Japan" },
    { label: "Russia", value: "Russia" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send data to a server, etc.
    console.log("Form data submitted:", formData);
  };
  console.log(formData);

  return (
    <div>
      <h2>Create a View</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                name: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <DropDownWithSearch
            options={countries}
            onChange={({ value }) => {
              console.log(value);
              setFormData((prevData) => ({
                ...prevData,
                country: value,
              }));
            }}
            value={{ label: formData.country, value: formData.country }}
          />
        </div>

        <div>
          <label htmlFor="indicator">Indicator</label>
          <DropDownWithSearch
            options={countries}
            onChange={({ value }) =>
              setFormData((prevData) => ({
                ...prevData,
                indicator: value,
              }))
            }
            value={{ label: formData.country, value: formData.country }}
          />
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <ReactDatePicker
            selected={formData.startDate}
            onChange={(value) => {
              setFormData((prevData) => ({
                ...prevData,
                startDate: value,
              }));
              return;
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <ReactDatePicker
            selected={formData.endDate}
            onChange={(value) => {
              setFormData((prevData) => ({
                ...prevData,
                endDate: value,
              }));
              return;
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select end date"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateView;
