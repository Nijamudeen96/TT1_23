import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import Homepage from './Homepage';
import TransactionPage from './Pages/TransactionPage';

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
    <Route path="/homepage" exact>
      <Homepage />
    </Route>
    <Route path="/transactions" exact>
      <TransactionPage />
    </Route>
    
 
    </Switch>
  );
}

export default App; 
