import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.toWall = this.toWall.bind(this);
        let type = this.getType(props);
        this.state = { type: type, hold: props.hold };
    }

    getType(props) {
        let type = "default";
        if (props.type === 0) {
            type = "unvisited";
        }
        if (props.type === 1) {
            type = "wall";
        }
        if (props.type === 2) {
            type = "start";
        }
        if (props.type === 3) {
            type = "end";
        }
        if (props.type === 4) {
            type = "visiting";
        }
        return type;
    }

    toWall() {
        if (!this.state.hold) this.setState({ type: "wall" });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hold !== this.props.hold) {
            this.setState({ hold: this.props.hold });
        }
    }

    render() {
        return (
            <td 
                className={"cell " + this.state.type}
                key={this.state.row + "-" + this.state.column}
                onMouseMove={this.toWall}
            ></td>
        );
    }
}

export default Cell;
