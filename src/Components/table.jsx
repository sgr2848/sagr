import React, { Component } from "react";
import classes from "./css/table.module.css";
import Player from "./songPlayer";
import Draggable from "react-draggable";
import Picture from "./picture";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Blogs from "./blogs";

class BarTable extends Component {
  state = {
    musicThere: false,
    picturePreview: false,
  };
  render() {
    const isMusicPlay = this.state.musicThere;
    const isPicture = this.state.picturePreview;
    return (
      <div>
        <div className={classes.mainList}>
          <Router>

                <button className={classes.draw_border}>Projects</button>

                <button
                  className={classes.draw_border}
                  onClick={() => {
                    this.setState({
                      musicThere: true,
                    });
                  }}
                >
                  Music And That Sort of Things
                </button>

                <button
                  className={classes.draw_border}
                  onClick={() => {
                    this.setState({
                      picturePreview: true,
                    });
                  }}
                >
                  Pictures I took
                </button>

                <button className={classes.draw_border}>
                  <Link to="/blogs">Writings & Blogs</Link>
                </button>
                <Switch>
                  <Route path="/blogs">
                    <Blogs />
                  </Route>
                </Switch>
          </Router>
        </div>
        <div className={classes.Picture}>
          {isPicture ? (
            <div className={classes.picture}>
              <button
                className={classes.closeButton}
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

        <div className={classes.musicPop}>
          {isMusicPlay ? (
            <Draggable>
              <div>
                <button
                  className={classes.closeButton}
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
export default BarTable;
