import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js";

function CreateChart({ type, width, height, data }) {
  let canvasNode = useRef();

  // remember to handle re-rendering
  useEffect(() => {
    let ctx = canvasNode.current;

    new Chart(ctx, {
      type,
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 30, 50, 20, 30],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
        // showLines: false
      }
    });
  }, [type]);

  return <canvas width={width} height={height} ref={canvasNode} />;
}

CreateChart.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default CreateChart;
