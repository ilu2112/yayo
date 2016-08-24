require('../styles/App.scss');


import React, { Component } from 'react';

import Header from './Header';


export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <main>
          { children }
        </main>
      </div>
    );
  }
}