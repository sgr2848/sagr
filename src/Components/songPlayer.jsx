import React, { Component } from "react";
import classes from "./css/music.module.css";

const idle = "musics/i_six.mp3";
const shin = "musics/shin(henka).mp3";
const crystal = "musics/Crystalize.mp3";
const pheri = "musics/Pheri.mp3";
const a_jig = "musics/a_jig.mp3";
const khoi = "musics/khoi.mp3";
const llvm = "musics/llvm.mp3";
const oval = "musics/oval.mp3";
const eol = "musics/eol.mp3";

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

const TRACKS = [
  { id: 1, title: "a jig" },
  { id: 2, title: "खोइ" },
  { id: 3, title: "फेरी" },
  { id: 4, title: "shin" },
  { id: 5, title: "Crystalize" },
  { id: 6, title: "i_six" },
  { id: 7, title: "LLVM" },
  { id: 8, title: "E>O>L" },
  { id: 9, title: "mornings" },

];

class Player extends React.Component {
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null,
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", (e) => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration,
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => { });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "i_six":
          track = idle;
          break;
        case "खोइ":
          track = khoi;
          break;
        case "shin":
          track = shin;
          break;
        case "Crystalize":
          track = crystal;
          break;
        case "फेरी":
          track = pheri;
          break;
        case "a jig":
          track = a_jig;
          break;
        case "LLVM":
          track = llvm;
          break;
        case "E>O>L":
          track = eol;
          break;
        case "mornings":
          track = oval;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
    if (
      this.state.duration &&
      !isNaN(this.state.duration) &&
      this.state.duration === this.state.currentTime
    ) {
      const currentTrackIndex = TRACKS.findIndex(
        (track) => track.title === this.state.selectedTrack
      );
      const tracksAmount = TRACKS.length - 1;
      if (currentTrackIndex === tracksAmount) {
        this.setState({
          selectedTrack: null,
          player: "stopped",
          currentTime: null,
          duration: null,
        });
      } else {
        this.handleSkip("next");
      }
    }
  }

  handleSkip = (direction) => {
    const currentTrackIndex = TRACKS.findIndex(
      (track) => track.title === this.state.selectedTrack
    );
    const tracksAmount = TRACKS.length - 1;
    if (direction === "previous") {
      const previousTrack =
        currentTrackIndex === 0 ? tracksAmount : currentTrackIndex - 1;
      const trackToPlay = TRACKS[previousTrack];
      this.setState({ selectedTrack: trackToPlay.title });
    } else if (direction === "next") {
      const nextTrack =
        currentTrackIndex === tracksAmount ? 0 : currentTrackIndex + 1;
      const trackToPlay = TRACKS[nextTrack];
      this.setState({ selectedTrack: trackToPlay.title, duration: null });
    }
  };

  setTime = (time) => {
    this.player.currentTime = time;
  };

  render() {
    const list = TRACKS.map((item) => {
      return item.title === this.state.selectedTrack ? (
        <li
          className={classes.listName}
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
          style={{
            fontWeight: item.title === this.state.selectedTrack && "bold",
          }}
        >
          &#128266;  {item.title}
        </li>
      ) : (
          <li
            className={classes.listName}
            key={item.id}
            onClick={() => this.setState({ selectedTrack: item.title })}
          >
            {item.title}
          </li>
        );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <div>
        <div className={classes.mainDiv}>
          <h2
            style={{
              paddingLeft: "30%",
              width: "inherit",
              margin: "auto",
              fontFamily: "Inconsolata",
            }}
          >
            Music Lists
          </h2>
          <ul className={classes.trackList}>{list}</ul>
          <TimeBar
            className={classes.timebar}
            setTime={this.setTime}
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
          {this.state.player !== "stopped" && (
            <div className={classes.buttons}>
              <div className={classes.insideB}>
                <button
                  className={classes.prevButton}
                  onClick={() => this.handleSkip("previous")}
                >
                  |&#9665;
                </button>
                {this.state.player === "paused" && (
                  <button
                    className={this.playButton}
                    onClick={() => this.setState({ player: "playing" })}
                  >
                    &#9655;
                  </button>
                )}
                {this.state.player === "playing" && (
                  <button
                    className={classes.pauseButton}
                    onClick={() => this.setState({ player: "paused" })}
                  >
                    | |
                  </button>
                )}
                <button
                  className={classes.stopButton}
                  onClick={() => this.setState({ player: "stopped" })}
                >
                  &#x25A2;
                </button>
                <button
                  className={classes.nextButton}
                  onClick={() => this.handleSkip("next")}
                >
                  &#9655;|
                </button>
              </div>
            </div>
          )}
        </div>
        <audio ref={(ref) => (this.player = ref)} />
      </div>
    );
  }
}

function TimeBar({ currentTime, duration, setTime }) {
  const formattedCurrentTime = getTime(currentTime);
  const formattedDuration = getTime(duration);
  const sBits = [];
  let count = 0;
  while (count < duration) {
    sBits.push(count);
    count++;
  }
  const seconds = sBits.map((second) => {
    return (
      <div
        key={second}
        onClick={() => setTime(second)}
        style={{
          float: "left",
          cursor: "pointer",
          height: "10px",
          borderBottomRightRadius: "80%",
          width: `${300 / Math.round(duration)}px`,
          background:
            currentTime && Math.round(currentTime) === second
              ? "black"
              : "white",
          transition: "all 0.5s ease-in-out",
        }}
      />
    );
  });

  return (
    <div className={classes.timebar}>
      {currentTime ? (
        <text>
          <text className={classes.elapsedTime}>{formattedCurrentTime}</text>
        </text>
      ) : (
          ""
        )}
      <div className={classes.ntimebar}>
        {seconds}
        {currentTime ? (
          <text>
            <text className={classes.totalTime}>{formattedDuration}</text>
          </text>
        ) : (
            ""
          )}
      </div>
    </div>
  );
}
export default Player;
