import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import SideBar from "./SideBar";

let size = 30;

class App extends React.Component {
    constructor(props) {
        super(props);
        let width = window.innerWidth - 300;
        let height = window.innerHeight;
        this.state = { width: Math.floor(width/size), height: Math.floor(height/size)};
    }



    render() {
        return (
            <div className="container">
                <SideBar></SideBar>
                <Grid height={this.state.height} width={this.state.width} ></Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
