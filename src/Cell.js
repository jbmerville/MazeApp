import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.toWall = this.toWall.bind(this);
        this.lock = this.lock.bind(this);
        this.unlock = this.unlock.bind(this);
        this.click = this.click.bind(this);
        this.state = {
            node: props.node,
            hold: props.hold,
            locked: true
        };
    }

    toWall() {
        
        if (!this.state.hold && this.state.locked) {
            if (this.state.node.type !== "wall") {
                let node = this.state.node;
                node.type = "wall";
                this.setState({ node: node });
            } else {
                let node = this.state.node;
                node.type = "unvisited";
                this.setState({ node: node });
            }
            this.lock();
        }
    }

    lock() {
        if (!this.state.hold) {
            this.setState({ locked: false });
        }
    }

    unlock() {
        if (!this.state.hold) {
            this.setState({ locked: true });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hold !== this.props.hold) {
            this.setState({ hold: this.props.hold });
        }
    }

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

    render() {
        return (
            <td
                className={"cell " + this.state.node.type}
                onMouseEnter={this.toWall}
                onMouseLeave={this.unlock}
                onClick={this.click}
            ></td>
        );
    }
}

export default Cell;
