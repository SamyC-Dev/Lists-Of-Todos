import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';


// Import components
import HomePage from '../HomePage';
import Navbar from '../NavBar';
import UserListPage from '../UserListPage';
import List from '../List';
import About from '../About';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/mylists" exact component={UserListPage} />
        <Route path="/liste/:title" exact component={List} />
        <Route path="/about" exact component={About} />
        <Route >404 PAGE NOT FOUND</Route>
      </Switch>
    </div>
  );
};

export default App;
