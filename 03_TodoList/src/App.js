// 创建“外壳”组件App
import React, { Component } from "react"; //多种export
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: false },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: false },
    ],
  };
  addTodo = (todoObj) => {
    this.setState({ todos: [todoObj, ...this.state.todos] });
  };
  changeItemState = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: done };
      } else {
        return item;
      }
    });
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  checkAllTodo = (state) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      return { ...item, done: state };
    });
    this.setState({ todos: newTodos });
  };
  clearDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return !item.done;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            deleteTodo={this.deleteTodo}
            changeItemState={this.changeItemState}
            todos={this.state.todos}
          />
          <Footer
            clearDone={this.clearDone}
            checkAllTodo={this.checkAllTodo}
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}
// 暴露App组件
export default App;
