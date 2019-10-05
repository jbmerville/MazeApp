import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";

class App extends React.Component {
    constructor(props) {
        super(props);
        let width = window.innerWidth;
        let height = window.innerHeight;
        this.state = { width: Math.floor(width/25), height: Math.floor(height/25)};
    }


    render() {
        return (
            <div>
                <Grid height={this.state.height} width={this.state.width} ></Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
