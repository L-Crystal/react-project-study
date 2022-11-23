// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

const CountContainer = connect()(CountUI);
export default CountContainer;
