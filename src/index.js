import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import SideBar from "./SideBar";
import Tutorial from "./Tutorial";



let size = 30;

class App extends React.Component {
    constructor(props) {
        super(props);
        let width = window.innerWidth - 450;
        let height = window.innerHeight - 20;
        this.state = { width: Math.floor(width/size), height: Math.floor(height/size)};
    }



    render() {
        return (
            <div className="container">
                <Tutorial></Tutorial>
                <SideBar></SideBar>
                <Grid height={this.state.height} width={this.state.width} ></Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
