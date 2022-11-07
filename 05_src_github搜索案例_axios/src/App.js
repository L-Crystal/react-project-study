// 创建“外壳”组件App
import React, { Component } from "react"; //多种export
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false,
    err: ''
  };

  updateAppState = (sateObj) => {
    this.setState(sateObj);
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
// 暴露App组件
export default App;
