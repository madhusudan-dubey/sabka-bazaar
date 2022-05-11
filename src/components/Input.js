import React from "react";

const Input = ({ value, type, name, label, onChange, ...rest }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input">
        <input
          type={type}
          name={name}
          id={name}
          className="form-control"
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
