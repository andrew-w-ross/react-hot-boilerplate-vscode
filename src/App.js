import React, { Component } from 'react';

export default class App extends Component {
  
  clickHandler(event) {
    debugger;
  }
  
  render() {
    return (
      <button onClick={this.clickHandler}>Debug</button>
    );
  }
}
