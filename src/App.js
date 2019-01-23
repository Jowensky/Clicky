import React, { Component } from "react";
import CharacterCards from "./components/characterCards";
import Instructions from "./components/instructions";
import Tally from "./components/tally";
import recipes from "./recipes.json";

class Game extends Component {
  // Setting the initial state of the Game component
  state = {
    recipes,
    count: 0,
    clicked: [],
    status: "Don't Waste My Money"
  };

  // Checks if image have been clicked
  check = event => {

    this.setState({ status: "Good Luck!" });
  
    const cart = event.target.id

    console.log(cart)
  };


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <Instructions />
        <Tally score={this.state.score} status={this.state.status} />
        {this.state.recipes.map(recipe =>( 
        <CharacterCards
            id={recipe.id}
            image={recipe.img}
            check={this.check}
        />
        ))}
      </div>
    );
  }
}

export default Game;
