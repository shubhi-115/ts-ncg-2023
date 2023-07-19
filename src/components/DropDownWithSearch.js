import Select from "react-select";

const DropDownWithSearch = ({ options, value, onChange }) => {
  return <Select options={options} value={value} onChange={onChange} />;
};

export default DropDownWithSearch;
