import React from "react";

function charactercards(props) {
  return (
    <div onclick={props.check}>
      <img data-id={props.image} src={props.image} />
    </div>
  );
}

export default charactercards;