import React, { Component } from "react";
import classes from "./css/start.module.css";
import Info from "./infoFile";

class Start extends Component {
  // time = new Date();

  state = {
    x: 500,
    y: 500,
    angle: 0,
    running: false,
  };
  mousefollow = (some_event) => {
    this.setState({
      x: some_event.clientX,
      y: some_event.clientY,
      //   angle: this.state.angle + 0.02,
    });
  };

  render() {
    return (
      <div
        className={classes.start}
        onMouseMove={this.mousefollow}
        onMouseEnter={this.follow}
        onTouchStart={this.mousefollow}
      >
        <div
          className={classes.ball}
          style={{
            top: this.state.y + 200 * Math.cos(this.state.angle),
            left: this.state.x + 200 * Math.sin(this.state.angle),
            background: `linear-gradient(${this.state.angle}deg,black,yellow)`,
          }}
        ></div>
        <div
          className={classes.smallball}
          style={{
            top:
              this.state.y +
              100 * Math.cos(this.state.angle - 20) +
              40 * Math.cos(this.state.angle - 20),
            left:
              this.state.x +
              100 * Math.sin(this.state.angle) +
              40 * Math.sin(this.state.angle),
            width: "10px",
            height: "10px",
            background: `linear-gradient(${this.state.angle}deg,black,grey,white)`,
          }}
        ></div>
        <div
          className={classes.smallball}
          style={{
            top:
              this.state.y +
              100 * Math.cos(this.state.angle - 60) +
              40 * Math.cos(this.state.angle - 60),
            left:
              this.state.x +
              100 * Math.sin(this.state.angle) +
              40 * Math.cos(this.state.angle),
            width: "20px",
            height: "20px",
            background: `linear-gradient(${this.state.angle}deg,black,blue,white)`,
          }}
        ></div>
        <Info />
      </div>
    );
    
  }
  follow=(e)=>{
      setInterval(()=>{
          this.setState({
             angle: this.state.angle + 0.01   
          });
        },30)
    //   console.log(this.state.angle)
  }
}
export default Start;
