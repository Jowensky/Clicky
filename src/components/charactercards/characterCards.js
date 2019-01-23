import React from "react";

function characterCard(props) {
  return (
    <div onclick={props.check}>
      <img data-id={props.image} src={props.image} />
    </div>
  );
}

export default characterCard;