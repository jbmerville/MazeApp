import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.toWall = this.toWall.bind(this);
        this.lock = this.lock.bind(this);
        this.click = this.click.bind(this);
        this.drag = this.drag.bind(this);
        this.makeCurrent = this.makeCurrent.bind(this);
        this.state = {
            node: props.node,
            hold: props.hold,
            locked: true,
            drag: props.dxrag,
            dragType: props.dragType,
            lockAll: props.lockAll,
            current: props.current,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hold !== this.props.hold) {
            this.setState({ hold: this.props.hold, drag: this.props.drag, dragType: this.props.dragType });
        }
        if (prevProps.node !== this.props.node) {
            this.setState({ node: this.props.node });
        }
    }

    // Changes the nodes 
    toWall() {
        const { hold, locked, dragType, node } = this.state;
        if (!hold  && locked) {
            if (node.type === "unvisited") {
                node.type = dragType === null ? "wall" : dragType;
                this.setState({ node });
            } else if (node.type === "wall") {
                node.type = dragType === null ? "unvisited" : dragType;
                this.setState({ node });
            }
        } 
    }


    lock(bool) {
        const { hold, dragType, node } = this.state;
        if (!hold) {
            if (dragType !== null) node.type = "unvisited";
            this.setState({ locked: bool });
        } 
    }

    // Turn on and off walls on click.
    click() {
        if (this.state.node.type === "unvisited") {
            let node = this.state.node;
            node.type = "wall";
            this.setState({ node: node });
        } else if (this.state.node.type === "wall") {
            let node = this.state.node;
            node.type = "unvisited";
            this.setState({ node: node });
        }
    }

    // Drag the start and end nodes.
    drag() {
        const { node, lockAll } = this.state;
        lockAll(node.type);
        this.setState({ node });
    }

    // Update which node the user is currently hovering.
    makeCurrent() {
        this.state.current(this.state.node);
    }

    render() {
        if (this.state.node.type === "start" || this.state.node.type === "end") {
            return (
                <td
                    className={"cell " + this.state.node.type}
                    onMouseEnter={this.toWall}
                    onMouseLeave={(e) => this.lock(true)}
                    onClick={this.click}
                    onMouseDown={this.drag}
                    onMouseOver={this.makeCurrent}
                ></td>
            );
        }

        return (
            <td
                className={"cell " + this.state.node.type}
                onMouseEnter={this.toWall}
                onMouseLeave={(e) => this.lock(true)}
                onClick={this.click}
                onMouseOver={this.makeCurrent}
            ></td>
        );
    }
}

export default Cell;
