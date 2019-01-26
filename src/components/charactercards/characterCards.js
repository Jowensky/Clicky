import React from "react";

const styles = {
 imgsize: {
   height: "120px",
   width: "148px",
  //  display: "inline-block",
   float: "left"
 },
 center: {
   width: "70vh",
   margin: "0 auto",
 }
};

const CharacterCards = props => {
  return ( 
    <div style={styles.center} onClick={props.check}>
      <img style={styles.imgsize} data-id={props.id} alt={props.name} src={props.image}  />
    </div>
  );
}

export default CharacterCards;