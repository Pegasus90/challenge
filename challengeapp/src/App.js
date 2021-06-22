import React from "react";
import './App.css';


class App extends React.Component {
  state = {
    timer: 0,
    started : false
  };

    handleClickStart = () => {
        this.setState({
            started: true
        })
         this.timer = setInterval(() => {
              this.setState({ timer: this.state.timer + 1 });
          }, 1000);
    }
    handleClickStop= () => {
        this.setState({
            started: false
        })
        clearInterval(this.timer)
    }
    handleClickReset= () => {
        this.setState({
            started: false
        })
        this.setState({ timer: 0});
        clearInterval(this.timer);
    }
  render() {
    return (
      <div className="App">
          <div className="content">
            <p>{this.state.timer}</p>
            <div className="buttons">
              {!this.state.started &&
                <button onClick={this.handleClickStart}>Start</button>
              }
              {this.state.started &&
                <button onClick={this.handleClickStop}>Stop</button>
              }
              <button onClick={this.handleClickReset}>Reset</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

