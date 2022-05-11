import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/login.scss";

const labelStyle = {
  display: "block",
};

const initialState = {
  email: "",
  password: "",
};
function Login() {
  const [formData, setFormData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState("");

  const id = useId();
  let navigate = useNavigate();
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let spaceRegex = "^\\S*$";

  const handleLogin = (event) => {
    event.preventDefault();
    if (!formData.email.match(regex)) {
      setErrorMsg("Please Enter a valid email address");
      return;
    }
    for (let i in formData) {
      if (!formData[i].trim().length) {
        console.log(i);
        return setErrorMsg(`${i} should not be blank`);
      }
    }

    if (!formData.password.match(spaceRegex)) {
      setErrorMsg("Password should not contain spaces");
      return;
    }
    if (formData.password.trim().length < 6) {
      setErrorMsg("Password should be of minimum 6 characters");
      return;
    }
    setFormData(initialState);
    setErrorMsg(null);
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login auth-wrapper col-auto">
      <div className="login__left">
        <h2>Login</h2>
        <p>Get access to your Orders. Wishlist and Recommendations</p>
      </div>
      <div className="login__form">
        <form noValidate={false}>
          <div>
            <label htmlFor={id + "-email"} style={labelStyle}>
              Email
            </label>
            <input
              type="email"
              name="email"
              aria-required="true"
              id={id + "-email"}
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor={id + "-password"} style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              name="password"
              aria-required="true"
              id={id + "-password"}
              minLength="6"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <footer>
            <p className="error-msg">{errorMsg && errorMsg}</p>
          </footer>
          <button type="submit" className="login__button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
