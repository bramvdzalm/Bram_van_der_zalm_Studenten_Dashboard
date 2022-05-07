import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="bg-white m-3">
        <VictoryChart padding={{ left: 30, top: 30, right: 50, bottom: 100 }}>
          <VictoryAxis
            tickFormat={this.props.averageStudent.assigment}
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
              data: { stroke: "red" },
              parent: { border: "1px solid #ccc" },
            }}
            data={this.props.averageStudent}
            x="assignment"
            y="average"
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
        <div className="small m-3">
          <p className="text-danger"><em>
            Gemiddeld cijfer van een opdracht over alle studenten
            </em></p>
          <p><em>
            Gemiddeld cijfer van deze student voor alle opdrachten
            </em></p>
        </div>
      </div>
    );
  }
}

export default Graph;