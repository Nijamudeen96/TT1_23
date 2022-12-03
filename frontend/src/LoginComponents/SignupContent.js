import { Link } from "react-router-dom";
import { useState, React } from "react";
import "./SignupContent.css";

const SignupContent = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFirstName, setFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");
  const [enteredAddress, setAddress] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
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
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}/>
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
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstname"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastname"
          value={enteredLastName}
          onChange={lastNameChangeHandler}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={enteredAddress}
          onChange={addressChangeHandler}/>
      </div>
      
      
      <div>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default SignupContent;
