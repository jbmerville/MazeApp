import React from "react";
import Button from "./Button";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.switchColors = this.switchColors.bind(this);
        let mainColor = getComputedStyle(
            document.documentElement
        ).getPropertyValue("--main");
        let accentColor = getComputedStyle(
            document.documentElement
        ).getPropertyValue("--accent");
        let hoverColor = getComputedStyle(
            document.documentElement
        ).getPropertyValue("--hover");
        this.state = {
            mainColor: mainColor,
            accentColor: accentColor,
            hoverColor: hoverColor,
            darkMode: false
        };
    }

    switchColors() {
        let darkMode = this.state.darkMode;
        if (!darkMode) {
            document.documentElement.style.setProperty(
                "--main",
                this.state.accentColor
            );
            document.documentElement.style.setProperty(
                "--accent",
                this.state.mainColor
            );
            document.documentElement.style.setProperty("--hover", "#0029a9");
            darkMode = true;
        } else {
            document.documentElement.style.setProperty(
                "--main",
                this.state.mainColor
            );
            document.documentElement.style.setProperty(
                "--accent",
                this.state.accentColor
            );
            document.documentElement.style.setProperty(
                "--hover",
                this.state.hoverColor
            );
            darkMode = false;
        }
        this.setState({ darkMode: darkMode });
    }

    render() {
        return (
            <div className="side-bar">
                <div className="section">
                    <div className="section-text">Controls</div>

                    <Button
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
                        text={"Algo 1"}
                        subtext={
                            "Visualize the path from start to finish using Algo 1."
                        }
                    ></Button>
                    <Button
                        text={"Algo 2"}
                        subtext={
                            "Visualize the path from start to finish using Algo 1."
                        }
                    ></Button>
                    <Button
                        text={"Algo 3"}
                        subtext={
                            "Visualize the path from start to finish using Algo 1."
                        }
                    ></Button>
                </div>
                <div className="section">
                    <div className="section-text">Maze Generators</div>
                    <Button
                        text={"Maze 1"}
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
