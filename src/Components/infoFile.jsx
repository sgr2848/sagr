import React, { Component } from "react";
import classes from "./css/main.module.css";
import BarTable from "./table";

class Info extends Component {
  state = {
    toggle: true,
    api_res: "",
  };
  constructor(props) {
    super(props)
    this.state = {apiResponse:""}
  }
  call_backend() {
    fetch("http://localhost:9000/getDb")
      .then((res) => res.json())
      .then((res) => this.setState({ api_res: res.title }))
      .catch((err) => err);
  }
  componentWillMount() {
    this.call_backend();
  }
  render() {
    return (
      <div className={classes.info}>
        <h1 className={classes.title}>
          <ul className={classes.list}>
            <li>Hello I'm Sagar</li>
            <li> म सागर।</li>
            <li>さがら です</li>
          </ul>
        </h1>
        <p className={classes.para}>
          I am currently a student at CUNY. I like doing stuff like this making
          music and drinking coffee.
        </p>
        <p className={classes.newpara}>Here are some of my work</p>
        <div className={classes.wrapper}>
          <BarTable/>
        </div>

        <p>{this.state.api_res}</p>
      </div>
    );
  }
}

export default Info;
