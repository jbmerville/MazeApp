import React from "react";
import Row from "./Row";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        // 2D array of size N*2N
        let grid = new Array(this.props.height)
            .fill(0)
            .map(() => new Array(this.props.width).fill(0));
        let gridComponent = [];
        for (let i = 0; i < grid.length; i++) {
            gridComponent.push(<Row arr={grid[i]} row={i} key={i} hold={true}></Row>);
        }
        this.state = { grid: grid, gridComponent: gridComponent, hold: false };
    }

    // Renders the Grid Components based on the grid 2D array.
    renderGrid(grid) {
        let gridComponent = [];
        for (let i = 0; i < grid.length; i++) {
            gridComponent.push(<Row arr={grid[i]} row={i} key={i} hold={this.state.hold}></Row>);
        }
        this.setState({ gridComponent: gridComponent });
    }

    // Turn on hover.
    down = event => {
        this.setState({hold: true});
        this.renderGrid(this.state.grid);
    }

    // Turn off hover.
    up = event => {
        this.setState({hold: false});
        this.renderGrid(this.state.grid);
    }

    render() {
        return (
            <div>
                <table>
                    <tbody className="grid" onMouseDown={this.down} onMouseUp={this.up}>{this.state.gridComponent}</tbody>
                </table>
            </div>
        );
    }
}

export default Grid;
