import React from "react";

const Input = (props) => {
  const handleSelectChange = (event) => {
    props.selectChange(props.selectName, event.target.checked);
  };
  return (
    <div className="col-sm-6 col-md-4 form-check form-switch">
      <input
        className="form-check-input mx-1"
        id="flexSwitchCheckChecked"
        type="checkbox"
        onChange={handleSelectChange}
        defaultChecked
      />
      <label
        className="form-check-label" 
        htmlFor="flexSwitchCheckDisabled"
      >{props.selectText}</label>
    </div>
  );
};

export default Input;