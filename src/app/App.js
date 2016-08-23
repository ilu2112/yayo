import React, { Component } from 'react';


export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>My app</h1>
        { children }
      </div>
    );
  }
}