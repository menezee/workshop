import React, { Component, Fragment } from 'react';
import { Header } from './components';
import Projects from './containers/Projects'

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header />
          <Projects greeting='olar' />
        </Fragment>
    );
  }
}

export default App;
