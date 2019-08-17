import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from './components/Grid';
import Home from './components/Home';
import FourZeroFour from './components/404';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGridAnimationFinished: false,
    };
    this.handleGridAnimationChange = this.handleGridAnimationChange.bind(this);
  }

  handleGridAnimationChange(bool) {
    this.setState({
      isGridAnimationFinished: bool,
    });
  }

  render() {
    const { isGridAnimationFinished } = this.state;
    return (
      <Router>
        <Grid
          onGridAnimationChange={this.handleGridAnimationChange}
          isGridAnimationFinished={isGridAnimationFinished}
        />
        <Switch>
          <Route exact path="/" component={() => <Home isGridAnimationFinished={isGridAnimationFinished} />} />
          <Route component={FourZeroFour} />
        </Switch>
      </Router>
    );
  }
}
