import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import SideBar from "./SideBar";
import Tutorial from "./Tutorial";



let size = 30;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        let width = window.innerWidth - 480;
        let height = window.innerHeight - 20;
        this.state = { width: Math.floor(width/size), height: Math.floor(height/size)};
    }

    

    render() {
        return (
            <div className="container">
                <Tutorial></Tutorial>
                <Grid height={this.state.height} width={this.state.width} ref={this.ref}></Grid>
                <SideBar reset={(e) => this.ref.current.reset(false)}></SideBar>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
