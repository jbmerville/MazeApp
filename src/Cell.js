import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        let cls = "default";
        if (props.type === 0) {
            cls = "unvisited";
        }
        if (props.type == 1) {
            cls = "walls";
        }
        if (props.type == 2) {
            cls = "start";
        }
        if (props.type == 3) {
            cls = "end";
        }
        if (props.type == 4) {
            cls = "visiting";
        }
        this.state = { cls: cls };
    }

    render() {
        return (
            <div
                className={"cell " + this.state.cls}
                key={this.state.row + "-" + this.state.column}
            ></div>
        );
    }
}

export default Cell;
