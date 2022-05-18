import React from "react";
import Input from "./Input";

const SelectStudents = (props) => {
  const inputSelects = props.students.map((item) => {
    return (
      <Input
        key={item}
        selectName={item}
        selectText={item}
        selectChange={props.studentsChange}
      />
    );
  });
  return (
    <div className="container-lg">
      <button className="btn btn-outline-primary m-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">
          Filter op naam
      </button>
      <div className="collapse" id="collapse">
        <div className="m-3 card card-body">
          <div className="row">{inputSelects}</div>
        </div>
      </div>

    </div>
  );
};

export default SelectStudents;