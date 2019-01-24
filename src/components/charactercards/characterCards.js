import React from "react";

const styles = {
 size: {
   height: "70px",
   width: "98px"
 }
};

const CharacterCards = props => {
  return ( 
    <div onClick={props.check}>
      <img style={styles.size} data-id={props.id} alt={props.name} src={props.image}  />
    </div>
  );
}

export default CharacterCards;