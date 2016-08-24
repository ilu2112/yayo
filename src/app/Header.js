import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        Yayo <span className="main-header__version">0.1</span>
      </header>
    );
  }
}