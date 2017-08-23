import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={()=><div>404</div>} />
      </Switch>
    );
  }

}

export default Main;
