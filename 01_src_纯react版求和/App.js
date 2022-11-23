import React, { Component } from "react";
import Count from "./components/Count";
export default class App extends Component {
  onChange;
  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}
