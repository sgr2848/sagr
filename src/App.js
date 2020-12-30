import React, { Component} from 'react';
import Start from "./Components/mainBar";
import classes from './Components/css/app.module.css';
import Projects from "./Components/projects";
class App extends Component{
  render() {
    return (
      <div className={classes.app}>
        <Start/>
        {/* <Player/> */}
        {/* <Blogs/> */}
        {/* <Projects/> */}
      </div>
    );
  }
}
export default App;
