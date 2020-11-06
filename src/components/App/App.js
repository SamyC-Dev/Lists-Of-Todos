import React, { useContext } from 'react';
import { AuthContext } from "../../utils/auth/Auth";
import { Route, Switch, Redirect } from 'react-router';
import './App.css';

// Import components
import HomePage from '../HomePage';
import Navbar from '../NavBar';
import UserHomePage from '../UserHomePage';
import Login from '../Login';
import About from '../About';


function App() {
  const { currentUser } = useContext(AuthContext);

  console.log('Chargement App ---');

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => {
          if (!currentUser) { return <HomePage /> } return <Redirect to="/userhomepage" />
        }} />
        <Route exact path="/userhomepage" render={() => {
          if (currentUser) { return <UserHomePage /> } return <Redirect to="/" />
        }} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route >404 PAGE NOT FOUND</Route>
      </Switch>
    </div>
  );
};

export default App;
