import React from "react";

const Students = (props) => {
  const studentLinks = props.students.map((item) => {
    const studentUrl = "/Students/Student/" + item;

    return (
        <a href={studentUrl} key={item} className="text-decoration-none text-primary col-sm-6 col-md-4 col-lg-3">
          <div  className="p-1 m-1 border border-primary rounded hover-btn">
            {item}
          </div>
        </a>
    );
  });

  return (
    
    <div className="row p-3 text-center m-1 b-dark">
      {studentLinks}
    </div>
    
  );
};

export default Students;