import React, { Component } from "react";
import CharacterCards from "./components/charactercards/characterCards";
import Instructions from "./components/instructions/instructions";
import Tally from "./components/tally/tally";
import recipes from "./recipes.json";

class Game extends Component {
  // Setting the initial state of the Game component
  state = {
    recipes,
    count: 0,
    clicked: [],
    status: "Don't Waste My Money",
  };

  // Checks if image have been clicked
  check = event => {
    event.preventDefault();

    this.setState({ status: "Good Luck!" });
    const cart = event.target.alt;
    this.setState({ clicked: [...this.state.clicked, cart] });
    const repeated = this.state.clicked.indexOf(cart) > -1;

    if (repeated) {
      this.setState({
        clicked: [],
        count: 0,
        recipes: recipes.sort(function() { return 0.5 - Math.random() })
      })
    } else  {
      this.setState({
        count: this.state.count + 1,
        recipes: recipes.sort(function() { return 0.5 - Math.random() })
      })
    }
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <Instructions />
        <Tally score={this.state.count} status={this.state.status} />
        {this.state.recipes.map(recipe =>( 
        <CharacterCards
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          check={this.check}
          key={recipe.id}
        />
        ))}
      </div>
    );
  }

};

export default Game;