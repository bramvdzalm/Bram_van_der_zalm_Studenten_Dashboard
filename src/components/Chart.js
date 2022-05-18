import React from "react";
import Input from "./Input";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficult: true,
      fun: true,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(name, state) {

    if (name === "difficult") {
      this.setState(() => {
        return {
          difficult: state,
        };
      });
    } else if (name === "fun") {
      this.setState(() => {
        return {
          fun: state,
        };
      });
    }
  }

  render() {
    const difficultBar = (difficult) => {
      if (difficult) {
        return (
          <VictoryBar
            color={"red"}
            alignment="middle"
            data={this.props.studentData}
            x="assignment"
            y="difficult"
          />
        );
      }
    };

    const funBar = (fun) => {
      if (fun) {
        return (
          <VictoryBar
            color={"black"}
            alignment="end"
            data={this.props.studentData}
            x="assignment"
            y="fun"
          />
        );
      }
    };
    return (
      
        
     <div className="bg-white p-2 m-3">   
      <div>
        <VictoryChart
          domainPadding={{ x: 17 }}
          padding={{ left: 30, top: 30, right: 30, bottom: 100 }}
        >
          <VictoryAxis
            tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            tickFormat={this.props.studentData.assigment}
            style={{
              tickLabels: { angle: 45, textAnchor: "start", fontSize: 5 },
              ticks: { stroke: "grey", size: 5 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={[0, 1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 5 },
              ticks: { stroke: "grey", size: 5 },
            }}
          />
          <VictoryGroup offset={13} style={{ data: { width: 8 } }}>
            {difficultBar(this.state.difficult)}
            {funBar(this.state.fun)}
          </VictoryGroup>
        </VictoryChart>
        </div>
        <div className="mx-3 div-chart-graph-under">
          <Input
            selectName={"difficult"}
            selectText={<p className="text-danger small"><em>Moeilijkheid</em></p>}
            selectChange={this.handleFilterChange}
          />
          <Input
            selectName={"fun"}
            selectText={<p className="small"><em>Leuk</em></p>}
            selectChange={this.handleFilterChange}
          />
        </div>
      </div>
    );
  }
}

export default Chart;