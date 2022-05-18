import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis} from "victory";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-white p-2 m-3">
        <VictoryChart padding={{ left: 30, top: 30, right: 50, bottom: 100 }}>
          <VictoryAxis
            tickFormat={this.props.averageAll.assignment}
            style={{
              tickLabels: { angle: 45, textAnchor: "start", fontSize: 5 },
              ticks: { stroke: "grey", size: 5 },
              grid: { stroke: "rgb(244, 244, 244)" },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={[0, 1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 5 },
              ticks: { stroke: "grey", size: 5 },
              grid: { stroke: "rgb(244, 244, 244)" },
            }}
          />
          <VictoryLine
            style={{
              data: { stroke: "black" },
              parent: { border: "1px solid #ccc" },
            }}
            data={this.props.averageAll}
            x="assignment"
            y="average"
          />
        </VictoryChart>
        <div className="small mx-3 div-chart-graph-under">
          <p className="mx-5"><em>
            Het gemiddelde cijfer van een opdracht over alle studenten
            </em></p>
        </div>
      </div>
    );
  }
}

export default Graph;