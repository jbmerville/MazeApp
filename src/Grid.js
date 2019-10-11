import React from "react";
import Cell from "./Cell";
import { endianness } from "os";

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
            current: null,
        };
    }

    componentDidMount() {
        this.reset(true);
        // this.recursiveBacktracking();
        
    }


    // univsited: default;

    reset(message) {
        const grid = [];
        for (let i = 0; i < this.state.height; i++) {
            const row = [];
            for (let j = 0; j < this.state.width; j++) {
                const node = {
                    row: i,
                    col: j,
                    weight: Math.ceil(Math.random()*50),
                    type: "unvisited"
                };
                if (message) this.setDefault(node);
                if (i === 0 && j === 0) node.type = "start";
                if (i === this.state.height - 1 && j === this.state.width - 1) node.type = "end";
                row.push(node);
            }
            grid.push(row);
        }
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
        if (this.state.drag[0]) {
            this.state.current.type = this.state.drag[1];
            this.setState({ drag: [false, null] });
        }
    };

    // Lock wall creation while moving the start and end states.
    lockAll = event => {
        if (!this.state.drag[0])
            this.setState({ drag: [true, this.state.current.type] });
    };

    // Update which node the user is currently hovering.
    makeCurrent(node) {
        this.setState({ current: node });
    }

    // ---- Justin's method go here ----

    // Make an async function sleep for time in milliseconds.
    sleep = time => {
        return new Promise(resolve => setTimeout(resolve, time));
    };

    async recursiveBacktracking() {
        let stack = [];
        await this.sleep(10);
        let grid = this.state.grid;
        let cur = grid[0][0];
        stack.push(cur);
        this.setState({ grid: grid });
        let neighbours = this.getNeighbours(cur);
        while (stack.length > 0) {
            if (neighbours.length > 0) {
                stack.push(cur);
                let rand = Math.floor(Math.random() * neighbours.length);
                for (let i = 0; i < neighbours.length; i++) {
                    if (i != rand && i != rand-1) {
                        neighbours[i].type = "wall";
                    }
                }
                cur = neighbours[rand];
                stack.push(cur);
                cur.type = "current";
                this.setState({ grid: grid });
                await this.sleep(10);
                cur.type = "visitited";
                this.setState({ grid: grid });
                neighbours = this.getNeighbours(cur);
            }
            else if (stack.length > 0) {
                cur = stack.pop();
                while (stack.length > 0 && this.getNeighbours(cur).length == 0){
                    cur = stack.pop();
                }
                neighbours = this.getNeighbours(cur);
            }
        }
    }

    // ---- helper methods ----

    getStart() {
        let grid = this.state.grid;
        for (let i = 0; i < this.state.width; i++) {
            for (let j = 0; j < this.state; j++) {
                if (grid[i][j].type === "start" ) return grid[i][j];
            }
        }
        return null;
    }

    getStart() {
        let grid = this.state.grid;
        for (let i = 0; i < this.state.width; i++) {
            for (let j = 0; j < this.state; j++) {
                if (grid[i][j].type === "end" ) return grid[i][j];
            }
        }
        return null;
    }

    getNeighbours(node) {
        let grid = this.state.grid;
        let neighbours = [];
        let i = node.row;
        let j = node.col;
        if (i > 0 )
            neighbours.push(grid[i - 1][j]);
        if (i < grid.length - 1 )
            neighbours.push(grid[i + 1][j]);
        if (j > 0)
            neighbours.push(grid[i][j - 1]);
        if (j < grid[0].length - 1 )
            neighbours.push(grid[i][j + 1]);
        return neighbours;
    }

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
