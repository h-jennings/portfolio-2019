import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from './components/Grid';
import Home from './components/Home';
import FourZeroFour from './components/404';

export default function App() {
  return (
    <Router>
      <Grid />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={FourZeroFour} />
      </Switch>
    </Router>
  );
}
