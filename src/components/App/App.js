import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';

// Import components
import HomePage from '../HomePage';
import Navbar from '../NavBar';
import UserListPage from '../UserListPage';
import About from '../About';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mylists" component={UserListPage} />
        <Route exact path="/about" component={About} />
        <Route >404 PAGE NOT FOUND</Route>
      </Switch>
    </div>
  );
};

export default App;
