import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyWord },
    } = this; //连续解构赋值+重命名
    // 发送请求前通知app更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (res) => {
        //请求成功后通知app更新状态
        console.log(res);
        this.props.updateAppState({ isLoading: false, users: res.data.items });
      },
      (err) => {
        this.props.updateAppState({ isLoading: false, err: err.message||'请求出错' });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => {
              this.keyWordElement = c;
            }}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
