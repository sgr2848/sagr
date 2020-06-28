import React, { Component } from "react";
import classes from "./css/main.module.css";
import Blogs from "./blogs";
import Player from "./songPlayer";
import Draggable from "react-draggable";
import Picture from "./picture";
import oasis from "./css/table.module.css";

class Info extends Component {
  state = {
    toggle: true,
    api_res: "",
    musicThere: false,
    picturePreview: false,
  };
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  // call_backend() {
  //   fetch("http://localhost:9000/getDb")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ api_res: res.title }))
  //     .catch((err) => err);
  // }
  // componentWillMount() {
  //   this.call_backend();
  // }
  render() {
        const isMusicPlay = this.state.musicThere;
        const isPicture = this.state.picturePreview;
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
          <div>
            <div className={oasis.mainList}>
              
                <button className={oasis.draw_border}>Projects</button>

                <button
                  className={oasis.draw_border}
                  onClick={() => {
                    this.setState({
                      musicThere: true,
                    });
                  }}
                >
                  Music And That Sort of Things
                </button>

                <button
                  className={oasis.draw_border}
                  onClick={() => {
                    this.setState({
                      picturePreview: true,
                    });
                  }}
                >
                  Pictures I took
                </button>

                <button className={oasis.draw_border}>
                  Writings & Blogs
                </button>

 
                 

            </div>
            <div className={oasis.Picture}>
              {isPicture ? (
                <div className={oasis.picture}>
                  <button
                    className={oasis.closeButton}
                    onClick={() => {
                      this.setState({
                        picturePreview: false,
                      });
                    }}
                  >
                    x
                  </button>
                  <Picture />
                </div>
              ) : (
                <span></span>
              )}
            </div>

            <div className={oasis.musicPop}>
              {isMusicPlay ? (
                <Draggable>
                  <div>
                    <button
                      className={oasis.closeButton}
                      onClick={() => {
                        this.setState({ musicThere: false });
                      }}
                    >
                      x
                    </button>
                    <Player />
                  </div>
                </Draggable>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>

        <p>{this.state.api_res}</p>
      </div>
    );
  }
  player() {
    return (
      <div>
        <Player />
      </div>
    );
  }
}



export default Info;
