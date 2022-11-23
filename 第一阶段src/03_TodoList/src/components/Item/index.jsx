import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };
  handleMouse = (state) => {
    return () => {
      this.setState({ mouse: state });
    };
  };
  handleCheck = (id) => {
    return (event) => {
      this.props.changeItemState(id, event.target.checked);
    };
  };
  handleDelete = (id) => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { done, name, id } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            onChange={this.handleCheck(id)}
            type="checkbox"
            checked={done}

          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => {
            this.handleDelete(id);
          }}
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
