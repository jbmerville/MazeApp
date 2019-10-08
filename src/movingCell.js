import React from "react";

class movingCells extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: props.color };
    }

    handleDragStart(e, order) {
        console.log(e);
    }

    render() {
        return (
            <div
                draggable
                onDragStart={e => this.handleDragStart(e)}
                className={"cell-drag " + this.state.color}
            ></div>
        );
    }
}

export default movingCells;
