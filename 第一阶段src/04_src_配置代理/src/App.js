// 创建“外壳”组件App
import React, { Component } from "react"; //多种export
import axios from "axios";

class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (res) => {
        console.log("成功", res);
      },
      (error) => {
        console.log("失败", error);
      }
    );
  };
  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (res) => {
        console.log("成功", res);
      },
      (error) => {
        console.log("失败", error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}
// 暴露App组件
export default App;
