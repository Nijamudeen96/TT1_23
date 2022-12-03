import {Link, useHistory} from "react-router-dom";
import { useState, useEffect, useContext, React } from "react";
import AuthContext from "../Store/auth-context";
import "./ProfileForm.css";

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


const ProfileForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  useEffect(() => {
setEnteredUsername(MockData[0]['username'])
setEnteredEmail(MockData[0]['email'])
setEnteredPassword(MockData[0]['password'])
setEnteredFirstName(MockData[0]['firstname'])
setEnteredLastName(MockData[0]['lastname'])
setEnteredAddress(MockData[0]['address'])

  } ,[])

const history = useHistory(); 
  const authCtx = useContext(AuthContext);

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
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    history.replace('/profile');}
  //   fetch
  //     ('127.0.0.1:5000',
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //           user_id: enteredId,
  //         email: enteredEmail,
  //       address: enteredAddress,
  //         auth_token: true,
  //       }),
  //       headers: {
  //          "Content-Type": "application/json", 
  //          'Authorization': localStorage.getItem('auth_token'),
  //       },
  //     })
  //     .then((res) => {
  //       if (res.ok) {
  //           return res.json();
  //       } else {
  //           return res.json().then((data) => {
  //               let errorMessage = 'Authentication failed!';
  //               throw new Error(errorMessage);
  //           });
  //       }
  //     })
  //     .then((data) => {
  //       authCtx.login(data.idToken);
  //       history.replace('/profile');
  //     })
  //     .catch((err)=>{
  //       alert(err.message);
  //     });
  // };

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="disabled"
          id="username"
          // value={enteredUsername}
          value="test"
          onChange={usernameChangeHandler}/>
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="disabled"
          id="firstname"
          // value={enteredFirstName}
          value="test"
          onChange={firstNameChangeHandler}/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="disabled"
          id="lastname"
          //value={enteredLastName}
          value="test"
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
        <button type="submit">Confirm</button>
        </div>
    </form>
  );
};

export default ProfileForm;
