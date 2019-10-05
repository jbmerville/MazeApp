import React from "react";
import Cell from "./Cell";


const Row = (props) => {
    // row[i] = {type: int, index: int}
    // Generate the cell components of based on an array.
    let cells = [];
    for (let i = 0; i < props.arr.length; i++) {
        cells.push(<Cell type={props.arr[i]} row={props.index} column={i}></Cell>);
    }

    return (
        <div className={"row"} key={props.row}>
            {cells}
        </div>
    );
};

export default Row;