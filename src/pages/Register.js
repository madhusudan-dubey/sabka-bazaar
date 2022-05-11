import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/register.scss";

const labelStyle = {
  display: "block",
};

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Register() {
  const [formData, setFormData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState("");
  const id = useId();
  let navigate = useNavigate();
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let spaceRegex = "^\\S*$";
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i in formData) {
      if (!formData[i].trim().length) {
        return setErrorMsg(`${i} should not be blank`);
      }
    }
    if (!formData.email.match(regex)) {
      setErrorMsg("Please Enter a valid email address");
      return;
    }
    if (!formData.password.match(spaceRegex)) {
      setErrorMsg("Password should not contain spaces");
      return;
    }

    if (formData.password.trim().length < 6) {
      setErrorMsg("Password should be of minimum 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Both passwords do not match");
      return;
    }
    setFormData(initialState);
    setErrorMsg(null);
    navigate("/");
  };
  return (
    <div className="register__form auth-wrapper col-auto">
      <div className="register__left">
        <h2>SignUp</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="regigster__form_wrap">
        <form>
          <div>
            <label htmlFor={id + "-firstName"} style={labelStyle}>
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              id={id + "-firstName"}
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor={id + "-lastName"} style={labelStyle}>
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              id={id + "-lastName"}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor={id + "-email"} style={labelStyle}>
              Email
            </label>
            <input
              name="email"
              type="email"
              id={id + "-email"}
              minLength="6"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor={id + "-password"} style={labelStyle}>
              Password
            </label>
            <input
              name="password"
              type="password"
              id={id + "-password"}
              minLength="6"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor={id + "-confirmPassword"} style={labelStyle}>
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              id={id + "-confirmPassword"}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <footer>
            <p className="error-msg">{errorMsg && errorMsg}</p>
          </footer>
          <button type="submit" onClick={handleSubmit}>
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
