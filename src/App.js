import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import { Header } from './components';
import Projects from './containers/Projects'
import Customers from './containers/Customers'

class App extends Component {
  render() {
      return (
          <Fragment>
              <Header/>
              <Provider store={Store}>
                  <BrowserRouter>
                      <Switch>
                          <Route path='/customers' component={Customers} />
                          <Route path='/projects' component={Projects} />
                      </Switch>
                  </BrowserRouter>
              </Provider>
          </Fragment>
      );
  }
}

export default App;
