import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkAllTodo: PropTypes.func.isRequired,
    clearDone: PropTypes.func.isRequired,
  };

  render() {
    const { todos } = this.props;
    // 已完成个数
    const doneCount = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    // 总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            onChange={(event) => {
              this.props.checkAllTodo(event.target.checked);
            }}
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.props.clearDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
