/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Calc from './components/pages/Calc';
import Qoute from './components/pages/Quote';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/calc" component={Calc} />
            <Route path="/qoute" component={Qoute} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
