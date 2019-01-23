import React from "react";

const CharacterCards = props => {
  return ( 
    <div onclick={props.check}>
      <img data-id={props.id} src={props.image} />
    </div>
  );
}

export default CharacterCards;