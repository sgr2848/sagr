import React, { Component } from "react";
import classes from "./css/main.module.css";

import Player from "./songPlayer";
import Draggable from "react-draggable";
import Picture from "./picture";
import Projects from "./projects";
import oasis from "./css/table.module.css";

class Info extends Component {
  state = {
    toggle: true,
    api_res: "",
    musicThere: false,
    picturePreview: false,
    projectThere: false,
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
    const projectThere = this.state.projectThere;
    const isPicture = this.state.picturePreview;
    return (
      <div className={classes.info}>
        <div className={classes.wrapper}>
          <div>
            <div className={oasis.mainList}>
              <button
                className={oasis.draw_border}
                onClick={() => {
                  this.setState({
                    projectThere: true,
                  });
                }}
              >Projects</button>

              <button
                className={oasis.draw_border}
                onClick={() => {
                  this.setState({
                    musicThere: true,
                  });
                }}
              >
                Wierd Music I Wrote
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

            </div>
          </div>
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
        <div className={oasis.Proj}>
          {projectThere ? (
            <div className={oasis.Proj}>              
              <Projects />
            </div>
          ) : (
              <span></span>
            )}
        </div>

        
        <div className={classes.picture}>
          <h1 className={classes.title}>
            <ul className={classes.list}>
              <li>Hello I'm Sagar</li>
              <li> म सागर।</li>
              <li>さがら です</li>
            </ul>
          </h1>
          <img height ="40%" className={classes.pictureI} src="me.svg"/>
          </div>
        <p className={classes.para}>
          I am currently a student studying computer at CUNY. I enjoy doing stuff like these(coding and stuff), making
          music and drinking coffee.
                
        </p>
        <p className={classes.new_para}>
          My prior experience revolved around data engineering and full stack development and these are the stack that I have experience in::<ul className={classes.exp}>
            <li className={classes.list_f}> <u>Technologies</u>
              <ul>
                
                <li><img height="40" src="https://img.icons8.com/officel/40/000000/react.png" /> React</li>
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" /></li>
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg" />Apache Kafka</li>
                <li ><img height="40" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" /> </li>
                <li ><img height="40" src="https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg" /> </li>
                <li><img height="40" src="https://img.icons8.com/ultraviolet/40/000000/selenium-test-automation.png" /> Selenium</li>
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Dask_logo.svg" /> Dask </li>

              </ul>
            </li>
            <li className={classes.list_f}> <u>Languages</u>
              <ul>
                <li><img height="40" src="https://img.icons8.com/dusk/64/000000/python.png" /> Python</li>
                <li><img height="40" src="https://img.icons8.com/dusk/64/000000/javascript.png" /> JavaScript</li>
                <li><img height="40" src="https://img.icons8.com/dusk/64/000000/java.png" /> Java</li>            
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"/> Rust</li>
                <li><img height="40" src="https://img.icons8.com/ios/50/000000/golang.png"/> Go</li>
              </ul>
            </li>
            <li className={classes.list_f}> <u>Database</u>
               <ul>
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" /> PostGreSQL</li>
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/en/e/ee/MySQL_Logo.png" /> </li>
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg" /> </li>
                <li><img height="40" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" /> </li>
                </ul>
              </li>

            <li className={classes.list_f}> <u>Cloud</u>
              <ul>
                <li><img height="40" src="https://img.icons8.com/windows/64/000000/amazon-web-services.png" /></li>
                <li><img height="40" src="https://img.icons8.com/color/48/000000/google-cloud-platform.png" /> GCP</li>
                <li><img height="40" src="https://img.icons8.com/color/48/000000/azure-1.png" /> Azure</li>                
            </ul>
            </li>
          </ul>
            
          </p>
        

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
