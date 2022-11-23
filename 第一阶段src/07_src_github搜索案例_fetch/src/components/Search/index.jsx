import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from "axios";

export default class Search extends Component {
  search = async () => {
    const {
      keyWordElement: { value: keyWord },
    } = this; //连续解构赋值+重命名
    // 发送请求前通知List更新状态
    PubSub.publish("message", { isFirst: false, isLoading: true });

    // 发送网络请求---使用fetch发送(优化)
    try {
      const res = await fetch(
        `http://localhost:3000/api1/search/users2?q=${keyWord}`
      );
      const data = await res.json();
      console.log(data);
      PubSub.publish("message", { isLoading: false, users: data.items });
    } catch (err) {
      console.log("请求出错：", err);
      PubSub.publish("message", {
        isLoading: false,
        err: err.message || "请求出错",
      });
    }

    // 发送网络请求---使用fetch发送(未优化)
    // fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`)
    //   .then(
    //     (response) => {
    //       console.log("联系服务器成功了");
    //       return response.json();
    //     }
    //     (error) => {
    //        console.log("联系服务器失败了", error);
    //        return new Promise(()=>{})
    //      }
    //   )
    //   .then(
    //     (data) => console.log(data)
    //     (error) => {
    //        console.log("获取数据失败了", error);
    //      }
    //   )

    //#region 发送网络请求---使用axios发送
    // axios.get(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
    //   (res) => {
    //     //请求成功后通知List更新状态
    //     console.log(res);
    //     PubSub.publish("message", { isLoading: false, users: res.data.items });
    //   },
    //   (err) => {
    //     PubSub.publish("message", {
    //       isLoading: false,
    //       err: err.message || "请求出错",
    //     });
    //   }
    // );
    //#endregion
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
