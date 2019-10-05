import React from "react";

class Cell extends React.Component {


    constructor(props) {
        super(props);
        let cls = "default";
        if(props.type === 0){
            cls = "unvisited";
        }
        this.state = {cls: cls};
    }

    render() {
        return (
        <div className={"cell " + this.state.cls} key={this.state.row + "-" + this.state.column}>
        </div>
        );
    }
}

export default Cell;