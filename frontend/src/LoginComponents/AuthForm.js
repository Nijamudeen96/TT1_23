import {Link, useHistory} from "react-router-dom";
import { useState, useEffect, useContext, React } from "react";
import AuthContext from "../Store/auth-context";
import "./AuthForm.css";
const MockData = [
    {
        "UserID": 1,
        "Username": "ExecutiveDBS",
        "Password": "DBSBestBank2022",
        "Firstname": "Tom",
        "Lastname": "Lim",
        "Email": "TomLim@easymail.com",
        "Address": "Block 123 Serangoon Garden #10-129",
        "OptIntoPhyStatements": 0
    },
    {
        "UserID": 2,
        "Username": "SeederDBS",
        "Password": "iWant2JoinDBS",
        "Firstname": "Mary",
        "Lastname": "Tan",
        "Email": "MaryTan@simplemail.com",
        "Address": "Block 234 Changi Business Park #50-123",
        "OptIntoPhyStatements": 1
    },
    {
        "UserID": 3,
        "Username": "AcerDBS",
        "Password": "Top5Seeder",
        "Firstname": "Gary",
        "Lastname": "Ong",
        "Email": "GaryOng@easymail.com",
        "Address": "Block 345 Jurong Business Park #25-214",
        "OptIntoPhyStatements": 0
    },
    {
        "UserID": 4,
        "Username": "AssociateDBS",
        "Password": "Whatis2Years",
        "Firstname": "Harry",
        "Lastname": "Goh",
        "Email": "HarryGoh@bestbank.com",
        "Address": "Block 456 One North Fusionopolis #34-743",
        "OptIntoPhyStatements": 0
    },
    {
        "UserID": 5,
        "Username": "PresidentDBS",
        "Password": "Multiplier3.5%",
        "Firstname": "Cheryl",
        "Lastname": "Chia",
        "Email": "CherylChia@bestbank.com",
        "Address": "Block 567 Marina Bay Sands #63-743",
        "OptIntoPhyStatements": 1
    }
]

const AuthForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  useEffect(() => {
    setEnteredUsername(MockData[0]['id'])
    setEnteredPassword(MockData[0]['password'])
    
      } ,[])

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
    history.replace('/profile')}
//     fetch
//       ('127.0.0.1:5000',
//       {
//         method: "POST",
//         body: JSON.stringify({
//           email: enteredUsername,
//           password: enteredPassword,
//           returnSecureToken: true,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         if (res.ok) {
//             return res.json();
//         } else {
//             return res.json().then((data) => {
//                 let errorMessage = 'Authentication failed!';
//                 throw new Error(errorMessage);
//             });
//         }
//       })
//       .then((data) => {
//         authCtx.login(data.idToken);
//         history.replace('/profile');
//       })
//       .catch((err)=>{
//         alert(err.message);
//       });
//   };

  return (
    // <form onSubmit={SubmitHandler}>
    //   <div>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       id="username"
    //       value={enteredUsername}
    //       onChange={usernameChangeHandler}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       id="password"
    //       value={enteredPassword}
    //       onChange={passwordChangeHandler}
    //     />
    //   </div>
    //   <div>
    //     <button type="submit">Login</button>
    //     </div>
    //     <div>
    //         <Link to= "/SignUp">
    //     <button type="submit" >Get Started</button>
    //     </Link>
    //   </div>
    // </form>
    <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="Username" required=""/>
					<input type="text" name="firstname" placeholder="First Name" required=""/>
          <input type="text" name="lastname" placeholder="Last Name" required=""/>
          <input type="email" name="email" placeholder="Email" required=""/>
          <input type="text" name="address" placeholder="Address" required=""/>
          <div>
          <label>Opt for physical statements?</label>
          <input class="checkbox" type="checkbox" name="optfor"/>
          </div>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form onSubmit={SubmitHandler}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="id" name="username" placeholder="Username" required="" value={enteredUsername} onChange={usernameChangeHandler}/>
					<input type="password" name="pswd" placeholder="Password" required="" value={enteredPassword} onChange={passwordChangeHandler}/>
					<button>Login</button>
				</form>
    </div>
  </div>
  )
};

export default AuthForm;
