import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeItemState: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, changeItemState, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return (
            <Item
              deleteTodo={deleteTodo}
              changeItemState={changeItemState}
              key={item.id}
              {...item}
            />
          );
        })}
      </ul>
    );
  }
}
