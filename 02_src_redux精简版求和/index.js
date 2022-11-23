// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入App组件
import App from "./App";
import store from './redux/store'

// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
store.subscribe(()=>{
    // ReactDOM.createRoot(document.getElementById("root")).render(<App />);
    root.render(<App />)
})