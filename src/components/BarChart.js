import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    datasets: [
      {
        label: "Bar Chart Example",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
