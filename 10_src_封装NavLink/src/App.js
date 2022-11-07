// 创建“外壳”组件App
import React, { Component } from "react"; //多种export
import { Route } from "react-router-dom";
import Home from "./pages/Home"; //Home是路由组件
import About from "./pages/About"; //About是路由组件
import Header from "./components/Header"; //Header是一般组件
import MyNavLink from "./components/MyNavLink";
class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在react中靠路由链接实现切换组件 ---编写路由链接*/}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// 暴露App组件
export default App;
