import React from "react";

function tally(props) {
    return(
        <div>
            {this.props.outof} | {this.props.score}
        </div>
    );
}

export default tally;