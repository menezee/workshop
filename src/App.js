import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components';
import Projects from './containers/Projects'
import Customers from './containers/Customers'

class App extends Component {
  render() {
      return (
          <Fragment>
              <Header/>
              <BrowserRouter>
                  <Switch>
                      <Route path='/customers' render={props => <Customers {...props} customers={['Gap', 'Latam']} />} />
                      <Route path='/projects' component={Projects} />
                  </Switch>
              </BrowserRouter>
          </Fragment>
      );
  }
}

export default App;
