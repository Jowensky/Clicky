import React, { Component } from "react";

// function tally(props)
class Tally extends Component {
  render() {
    return (
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
         <p className="navbar-brand">{this.props.status}</p>
         <p>{this.props.score} | 12</p>&nbsp; &nbsp;
         <p>Highscore: {this.props.highscore}</p>
      </nav>
    </div>    
    );
  }
}
export default Tally;
