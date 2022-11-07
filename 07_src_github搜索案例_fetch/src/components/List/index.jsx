import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false,
    err: ''
  };
  componentDidMount(){
    this.token = PubSub.subscribe('message',(_,data)=>{
      this.setState(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>输入关键字，随后点击搜索</h2>
        ) : isLoading ? (
          <h2>Loading......</h2>
        ) : err ? (
          <h2>{err}</h2>
        ) : (
          users.map((item) => {
            return (
              <div key={item.id} className="card">
                <a rel="noreferrer" href={item.html_url} target="_blank">
                  <img
                    alt="Avator"
                    src={item.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
