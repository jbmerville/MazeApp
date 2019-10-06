import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        // this.down = this.down.bind(this);
        // this.up = this.up.bind(this);
        this.state = {
            grid: [],
            height: props.height,
            width: props.width,
            hold: true
        };
    }

    componentDidMount() {
        const grid = [];
        for (let i = 0; i < this.state.height; i++) {
            const row = [];
            for (let j = 0; j < this.state.width; j++) {
                const node = {
                    row: i,
                    col: j,
                    type: "univisited"
                };
                this.setDefault(node);
                row.push(node);
            }
            grid.push(row);
        }
        this.setState({ grid: grid });
    }

    setDefault(node) {
        let i = node.row;
        let j = node.col;
        let k = 9;
        let u = 7;
        if (i == k) {
            if (
                j == u ||
                j == u + 3 ||
                j == u + 5 ||
                j == u + 6 ||
                j == u + 7 ||
                j == u + 9 ||
                j == u + 13 ||
                j == u + 17 ||
                j == u + 18 ||
                j == u + 19 ||
                j == u + 20
            )
                node.type = "wall";
        }
        if (i == k + 1) {
            if (
                j == u ||
                j == u + 3 ||
                j == u + 5 ||
                j == u + 9 ||
                j == u + 13 ||
                j == u + 17 ||
                j == u + 20
            )
                node.type = "wall";
        }
        if (i == k + 2) {
            if (
                j == u ||
                j == u + 1 ||
                j == u + 2 ||
                j == u + 3 ||
                j == u + 5 ||
                j == u + 6 ||
                j == u + 7 ||
                j == u + 9 ||
                j == u + 13 ||
                j == u + 17 ||
                j == u + 20
            )
                node.type = "wall";
        }
        if (i == k + 3) {
            if (
                j == u ||
                j == u + 3 ||
                j == u + 5 ||
                j == u + 9 ||
                j == u + 13 ||
                j == u + 17 ||
                j == u + 20
            )
                node.type = "wall";
        }
        if (i == k + 4) {
            if (
                j == u ||
                j == u + 3 ||
                j == u + 5 ||
                j == u + 6 ||
                j == u + 7 ||
                j == u + 9 ||
                j == u + 10 ||
                j == u + 11 ||
                j == u + 13 ||
                j == u + 14 ||
                j == u + 15 ||
                j == u + 17 ||
                j == u + 18 ||
                j == u + 19 ||
                j == u + 20
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
    };

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
