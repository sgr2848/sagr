import React, { Component} from 'react';
import Start from "./Components/mainBar";
import classes from './Components/css/app.module.css';
import Blogs from "./Components/blogs";
import Player from "./Components/songPlayer";

class App extends Component{
  render() {
    return (
      <div className={classes.app}>
        <Start/>
        {/* <Player/> */}
      {/* <Blogs/> */}
      </div>
    );
  }
}
export default App;
