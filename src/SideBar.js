import React from "react";
import Button from "./Button";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.switchColors = this.switchColors.bind(this);
        this.state = {};
    }

    switchColors() {
        this.swapCSSvar("main");
        this.swapCSSvar("button");
        this.swapCSSvar("hover");
        this.swapCSSvar("side");
        this.swapCSSvar("wall");
        this.swapCSSvar("accent");
    }

    swapCSSvar(property) {
        let temp = getComputedStyle(document.documentElement).getPropertyValue(
            "--" + property
        );
        document.documentElement.style.setProperty(
            "--" + property,
            getComputedStyle(document.documentElement).getPropertyValue(
                "--" + property + "1"
            )
        );
        document.documentElement.style.setProperty("--" + property + "1", temp);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                reset: this.props.reset,
                recursiveBacktracking: this.props.recursiveBacktracking,
                euclidian: this.props.euclidian,
                aStar: this.props.aStar,
                dijkstra: this.props.dijkstra
            });
        }
    }

    render() {
        const {
            reset,
            recursiveBacktracking,
            dijkstra,
            aStar,
            euclidian
        } = this.state;
        return (
            <div className="side-bar">
                <div className="section">
                    <div className="section-text">Controls</div>

                    <Button
                        onClick={reset}
                        text={"Reset"}
                        subtext={"Click to reset the grid to an empty grid."}
                    ></Button>
                    <Button
                        onClick={this.switchColors}
                        text={"Dark/Light Mode"}
                        subtext={"Click to reset the grid to an empty grid."}
                    ></Button>
                </div>
                <div className="section">
                    <div className="section-text">Path Finders</div>
                    <Button
                        onClick={dijkstra}
                        text={"Dijkstra's algorithm"}
                        subtext={
                            "Visualize the path from start to finish using Algo 1."
                        }
                    ></Button>
                    <Button
                        onClick={aStar}
                        text={"A* algorithm"}
                        subtext={
                            "Visualize the path from start to finish using Algo 1."
                        }
                    ></Button>
                    <Button
                        onClick={euclidian}
                        text={"Euclidian shortest path"}
                        subtext={
                            "Visualize the path from start to finish using Algo 1."
                        }
                    ></Button>
                </div>
                <div className="section">
                    <div className="section-text">Maze Generators</div>
                    <Button
                        onClick={recursiveBacktracking}
                        text={"Recursive Backtracking"}
                        subtext={"Create a maze using Maze 1."}
                    ></Button>
                    <Button
                        text={"Maze 2"}
                        subtext={"Create a maze using Maze 2."}
                    ></Button>
                    <Button
                        text={"Maze 3"}
                        subtext={"Create a maze using Maze 3."}
                    ></Button>
                </div>
            </div>
        );
    }
}

export default SideBar;
