import React, { Component } from "react";

// function tally(props)
class Tally extends Component {
  render() {
    return (
      <div>
          <p>{this.props.status}</p>
        <div>
        {this.props.score} | 12
        </div>
      </div>
    );
  }
}

export default Tally;
