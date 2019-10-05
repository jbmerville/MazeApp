import React from "react";


const toWall = () => {
    return "wall";
}

const Cell = props => {
    // row[i] = {type: int, index: int}
    // Generate the cell components of based on an array.
    let type = "default";
    if (props.type === 0) {
        type = "unvisited";
    }
    if (props.type === 1) {
        type = "wall";
    }
    if (props.type === 2) {
        type = "start";
    }
    if (props.type === 3) {
        type = "end";
    }
    if (props.type === 4) {
        type = "visiting";
    }

    return (
        <td
            className={"cell " + this.state.type}
            key={this.state.row + "-" + this.state.column}
            onMouseDown={this.toWall}
        ></td>
    );
};

export default Cell;
