import React, {Component} from "react";
import styles from './index.module.css'

export default class Welcome extends Component{
    render(){
        return <h2 className={styles.title}>Welcome</h2>
    }
}