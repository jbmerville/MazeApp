import React from "react";
import Row from "./Row";

let N = 20;

class Grid extends React.Component {
    constructor(props) {
        super(props);
        // 2D array of size N*2N
        let grid = new Array(N).fill(0).map(() => new Array(2 * N).fill(0));
        let gridComponent = [];
        for (let i = 0; i < grid.length; i++) {
            gridComponent.push(<Row arr={grid[i]} row={i}></Row>);
        }
        this.state = { grid: grid, gridComponent: gridComponent };
    }

    // Renders the Grid Components based on the grid 2D array.
    renderGrid() {
        let gridComponent = [];
        for (let i = 0; i < this.state.grid.length; i++) {
            gridComponent.push(<Row arr={this.state.grid[i]} row={i}></Row>);
        }
        this.setState({ gridComponent: gridComponent });
    }

    render() {
        return (
            <table>
                <tbody className="grid">{this.state.gridComponent}</tbody>
            </table>
        );
    }
}

export default Grid;
