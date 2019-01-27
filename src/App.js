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
    status: "Lets' Go",
  };

  // Checks if image have been clicked
  click = event => {
    event.preventDefault();
    this.setState({ status: "Lets' Go" });
    this.setState({ clicked: [...this.state.clicked, event.target.alt] });

    if (this.state.clicked.indexOf(event.target.alt) > -1) {
      this.setState({ status: `One to many ${event.target.alt}` })
      this.reset();
    } else {
      this.play();
    }
  };

  play = () => {
    this.setState({
      count: this.state.count + 1,
      recipes: recipes.sort(function() { return 0.5 - Math.random() })
    })

   if (this.state.count === 12) {
      this.setState({ status: "Great Job You've Got Everything!" })
      this.reset();
    } 
  };

  reset = () => {
    this.setState({
      clicked: [],
      count: 0,
      recipes: recipes.sort(function() { return 0.5 - Math.random() })
    })
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <Instructions />
        <Tally score={this.state.count} status={this.state.status}/>
        {this.state.recipes.map(recipe =>( 
        <CharacterCards
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          check={this.click}
          key={recipe.id}
        />
        ))}
      </div>
    );
  }
};

export default Game;