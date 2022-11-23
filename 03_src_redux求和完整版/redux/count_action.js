/*
该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from "./constant";
export function createIncrementAction(data) {
  return { type: INCREMENT, data };
}
export function createDecrementAction(data) {
  return { type: DECREMENT, data };
}
