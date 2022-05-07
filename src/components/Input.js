import React from "react";

const Input = (props) => {
  const handleSelectChange = (event) => {
    props.selectChange(props.selectName, event.target.checked);
  };
  return (
    <div class="col-sm-6 col-md-4 col-lg-2 form-check form-switch">
      <input
        className="form-check-input"
        id="flexSwitchCheckChecked"
        type="checkbox"
        onChange={handleSelectChange}
        defaultChecked
      />
      <label
        className="form-check-label" 
        for="flexSwitchCheckDisabled"
      >{props.selectText}</label>
    </div>
  );
};

export default Input;