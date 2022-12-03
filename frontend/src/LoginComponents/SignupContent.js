import { Link } from "react-router-dom";
import { useState, React } from "react";

const SignupContent = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7bV6EruS7OcpFi8wpZINsxCbVfE4PCPY",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res.json();
    });
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <label htmlFor="email">User ID</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default SignupContent;
