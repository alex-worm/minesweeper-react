import React from "react";

export default class Timer extends React.Component {
  render() {
    return <div className="timer">{this.props.value}</div>;
  }
}
