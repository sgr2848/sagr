import React, { Component } from "react";
import classes from "./css/image.module.css";

const picture_list = () => {
  let picture_array = [];
  for (var i = 1; i < 17; i++) {
    picture_array.push(`pictures/${i}.jpg`);
    console.log();
  }
  return picture_array;
};
var img_list = picture_list();
class Picture extends Component {
  state = { fullscreen: false, fullScreenImage: null };
  render() {
    const isFullScreen = this.state.fullscreen;
    const image_name = this.state.fullScreenImage;
    const image_span = img_list.map((item) => {
      return (
        <div className={classes.galleryContainer}>
          <div className={classes.item}>
            <div key={item} className={classes.indivImage}>
              <img
                className={classes.imageSpan}
                src={item}
                
                onClick={() => {
                  this.setState({
                    fullscreen: true,
                    fullScreenImage: item,
                  });
                
                }}
              ></img>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className={classes.body}>
        <div className={classes.main}>{image_span}</div>
        <div>
          {isFullScreen ? (
            <div className={classes.fullScreen}>
              <button
                className={classes.button}
                onClick={() => {
                  this.setState({
                    fullscreen: false,
                    fullScreenImage: null,
                  });
                }}
                            style={{

                
                }}
              >
                Close
              </button>
              <img src={image_name}></img>
              <div className={classes.imgbg}></div>
            </div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    );
  }
}

export default Picture;
