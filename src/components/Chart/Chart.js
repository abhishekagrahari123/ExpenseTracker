import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return <ChartBar
          key={datapoint.label}
          label={datapoint.label}
          value={datapoint.value}
          maxVal={props.maxVal}
        />;
      })}
    </div>
  );
}

export default Chart;
