import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.makeCurrent = this.makeCurrent.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            grid: [],
            height: props.height,
            width: props.width,
            hold: true,
            drag: [false, null],
            current: null
        };
    }

    componentDidMount() {
        this.reset(true);
    }

    reset(message) {
        console.log(this);
        const grid = [];
        for (let i = 0; i < this.state.height; i++) {
            const row = [];
            for (let j = 0; j < this.state.width; j++) {
                const node = {
                    row: i,
                    col: j,
                    type: "unvisited"
                };
                if (message) this.setDefault(node);
                if (i === 3 && j === this.state.width - 3) node.type = "end";
                if (i === this.state.height - 3 && j === 3) node.type = "start"
                row.push(node);
            }
            grid.push(row);
        }
        console.log(grid);
        this.setState({ grid: grid });
    }

    // Prints "Hello" when the grid is initiated.
    setDefault(node) {
        let i = node.row;
        let j = node.col;
        let k = 11;
        let u = 6;
        if (i === k) {
            if (
                j === u ||
                j === u + 3 ||
                j === u + 5 ||
                j === u + 6 ||
                j === u + 7 ||
                j === u + 9 ||
                j === u + 13 ||
                j === u + 17 ||
                j === u + 18 ||
                j === u + 19 ||
                j === u + 20
            )
                node.type = "wall";
        }
        if (i === k + 1) {
            if (
                j === u ||
                j === u + 3 ||
                j === u + 5 ||
                j === u + 9 ||
                j === u + 13 ||
                j === u + 17 ||
                j === u + 20
            )
                node.type = "wall";
        }
        if (i === k + 2) {
            if (
                j === u ||
                j === u + 1 ||
                j === u + 2 ||
                j === u + 3 ||
                j === u + 5 ||
                j === u + 6 ||
                j === u + 7 ||
                j === u + 9 ||
                j === u + 13 ||
                j === u + 17 ||
                j === u + 20
            )
                node.type = "wall";
        }
        if (i === k + 3) {
            if (
                j === u ||
                j === u + 3 ||
                j === u + 5 ||
                j === u + 9 ||
                j === u + 13 ||
                j === u + 17 ||
                j === u + 20
            )
                node.type = "wall";
        }
        if (i === k + 4) {
            if (
                j === u ||
                j === u + 3 ||
                j === u + 5 ||
                j === u + 6 ||
                j === u + 7 ||
                j === u + 9 ||
                j === u + 10 ||
                j === u + 11 ||
                j === u + 13 ||
                j === u + 14 ||
                j === u + 15 ||
                j === u + 17 ||
                j === u + 18 ||
                j === u + 19 ||
                j === u + 20
            )
                node.type = "wall";
        }
        return node;
    }

    // Turn on hover.
    down = event => {
        this.setState({ hold: false });
    };

    // Turn off hover.
    up = event => {
        this.setState({ hold: true });
        if (this.state.drag[0]) 
        {
            this.state.current.type = this.state.drag[1];
            this.setState({ drag: [false, null] });
        }
    };


    // Lock wall creation while moving the start and end states.
    lockAll = event => {
        if (!this.state.drag[0]) this.setState({ drag: [true, this.state.current.type] });
    };

    // Update which node the user is currently hovering.
    makeCurrent(node) {
        this.setState({current: node});
    }

    // ---- Justin's method go here ----










    // ----

    render() {
        const { grid } = this.state;
        return (
            <table>
                <tbody
                    className="grid"
                    onMouseDown={this.down}
                    onMouseUp={this.up}
                >
                    {grid.map((row, rowIdx) => {
                        return (
                            <tr className={"row"} key={rowIdx}>
                                {row.map((node, nodeIdx) => {
                                    return (
                                        <Cell
                                            current={this.makeCurrent}
                                            drag={this.state.drag[0]}
                                            lockAll={this.lockAll}
                                            node={node}
                                            hold={this.state.hold}
                                            key={node.row + "-" + node.col}
                                        ></Cell>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default Grid;
