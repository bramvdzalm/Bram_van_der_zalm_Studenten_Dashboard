import React from "react";
import Chart from "../components/Chart";
import Graph from "../components/Graph";


class Student extends React.Component {
  
  constructor(props) {
    super(props);

    let pathEnd = window.location.pathname.split("/").pop()

    this.state = {
      studentName: pathEnd
    };
  }
  

  calcAverageAssignmentFunDifficult(studentData, assignment) {
    let average = 0;
    let persons = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += (item.difficult + item.fun) / 2;
        persons++;
      }
    });
    return average / persons;
    
  }



  calcAverageForAllStudents(studentData) {
    const averageStudentData = [];
    let filterItemId = 1;
    studentData.forEach((studentItem) => {
      const data = averageStudentData.find((filterItem) => {
        return studentItem.assignment === filterItem.assignment;
      });
      if (data === undefined) {
        const average = this.calcAverageAssignmentFunDifficult(
          studentData,
          studentItem.assignment
        );
        averageStudentData.push({
          id: filterItemId++,
          name: "average",
          assignment: studentItem.assignment,
          average: average,
        });
      }
    });
    return averageStudentData;
  }

  render() {
    const studentData = this.props.studentData.filter((item) => {
      
      return item.name === this.state.studentName;
    });

    
    const averageDataAll = this.calcAverageForAllStudents(
      this.props.studentData
    );
    return (
      <div className="row">
        <h1 className="text-center py-3">{this.state.studentName} </h1>
        <div className="col-lg-6">
        <Chart studentData={studentData} />
        </div>
        <div className="col-lg-6">
        <Graph averageAll={averageDataAll}/>
        </div>
      </div>
    );
  }
}

export default Student;