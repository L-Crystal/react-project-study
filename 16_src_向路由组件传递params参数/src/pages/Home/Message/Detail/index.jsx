import React, { Component } from "react";
const DetailData = [
  { id: "01", content: "快去做核酸" },
  { id: "02", content: "快去吃饭" },
  { id: "03", content: "该吃药了" },
];
export default class Detail extends Component {
  render() {
    // 接收params参数
    const { id, title } = this.props.match.params;
    const findResult = DetailData.find((item) => {
      return item.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
