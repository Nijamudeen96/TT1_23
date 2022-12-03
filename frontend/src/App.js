import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <Switch>
    <Route path="/" exact>
      <Redirect to="/login" />
    </Route>
    <Route path="/login" exact>
      <LoginPage />
    </Route>
    <Route path="/signup" exact>
      <SignupPage />
    </Route>
    <Route path="/profile" exact>
      <ProfilePage />
    </Route>
    
 
    </Switch>
  );
}

export default App;
