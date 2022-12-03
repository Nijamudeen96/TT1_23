import {Link, useHistory} from "react-router-dom";
import { useState, useContext, React } from "react";
import AuthContext from "../Store/auth-context";

const AuthForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

const history = useHistory(); 
  const authCtx = useContext(AuthContext);
  
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    fetch
      ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7bV6EruS7OcpFi8wpZINsxCbVfE4PCPY',
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredUsername,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then((data) => {
                let errorMessage = 'Authentication failed!';
                throw new Error(errorMessage);
            });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/StartingPage');
      })
      .catch((err)=>{
        alert(err.message);
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
          onChange={usernameChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Login</button>
        </div>
        <div>
            <Link to= "/SignUp">
        <button type="submit" >Get Started</button>
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
