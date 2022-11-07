// 创建“外壳”组件App
import React, { Component } from "react"; //多种export
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    );
  }
}
// 暴露App组件
export default App;
