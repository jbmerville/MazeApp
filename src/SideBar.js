import React from "react";
import Button from "./Button"

class SideBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="side-bar">
                <Button text={"Reset"} subtext={"Click to reset the grid to an empty grid."}></Button>
                <Button text={"Algo 1"} subtext={"Visualize the path from start to finish using Algo 1."}></Button>
                <Button text={"Algo 2"} subtext={"Visualize the path from start to finish using Algo 1."}></Button>
                <Button text={"Algo 3"} subtext={"Visualize the path from start to finish using Algo 1."}></Button>
                <Button text={"Maze 1"} subtext={"Create a maze using Maze 1."}></Button>
                <Button text={"Maze 2"} subtext={"Create a maze using Maze 2."}></Button>
                <Button text={"Maze 3"} subtext={"Create a maze using Maze 3."}></Button>

            </div>
        );
    }

}

export default SideBar;