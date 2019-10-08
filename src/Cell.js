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
            drag: props.drag,
            lockAll: props.lockAll,
            current: props.current
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hold !== this.props.hold) {
            this.setState({ hold: this.props.hold, drag: this.props.drag });
        }
    }

    // Changes the nodes 
    toWall() {
        if (!this.state.hold && !this.state.drag && this.state.locked) {
            if (this.state.node.type !== "wall") {
                let node = this.state.node;
                node.type = "wall";
                this.setState({ node: node });
            } else {
                let node = this.state.node;
                node.type = "unvisited";
                this.setState({ node: node });
            }
        } 
        this.lock(true);
    }


    lock(bool) {
        if (!this.state.hold) {
            this.setState({ locked: bool });
        }
    }

    // Turn on and off walls on click.
    click() {
        if (this.state.node.type !== "wall") {
            let node = this.state.node;
            node.type = "wall";
            this.setState({ node: node });
        } else {
            let node = this.state.node;
            node.type = "unvisited";
            this.setState({ node: node });
        }
    }

    // Drag the start and end nodes.
    drag() {
        let node = this.state.node;
        this.state.lockAll(this.state.node.type);
        node.type = "unvisited";
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
