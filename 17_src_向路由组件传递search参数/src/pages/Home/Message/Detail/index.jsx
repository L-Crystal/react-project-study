import React, { Component } from "react";
import qs from "qs";
let obj = { name: "tom", age: 18 };
console.log(qs.stringify(obj)); //name=tom&age=18
let str = "carName=奔驰&price=99";
console.log(qs.parse(str)); //{carName: '奔驰', price: '99'}

const DetailData = [
  { id: "01", content: "快去做核酸" },
  { id: "02", content: "快去吃饭" },
  { id: "03", content: "该吃药了" },
];
export default class Detail extends Component {
  render() {
    // 接收search参数
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));

    // 接收params参数
    // const { id, title } = this.props.match.params;
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
