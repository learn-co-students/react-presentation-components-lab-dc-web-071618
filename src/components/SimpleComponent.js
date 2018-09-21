// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    };
  }

  handleClick = () => {
    switch (this.state.mood) {
      case "happy":
        this.setState({
          mood: "sad"
        });
        break;
      default:
        this.setState({
          mood: "happy"
        });
    }
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
