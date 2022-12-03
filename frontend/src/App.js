import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

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
 
    </Switch>
  );
}

export default App; 
