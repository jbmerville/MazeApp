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
        let width = window.innerWidth - 460;
        let height = window.innerHeight - 20;
        this.state = {
            width: Math.floor(width / size),
            height: Math.floor(height / size),
            reset: null,
            recursiveBacktracking: null
        };
    }

    componentDidMount() {
        this.setState({
            reset: this.ref.current.reset,
            recursiveBacktracking: this.ref.current.recursiveBacktracking,
            euclidian: this.ref.current.euclidian,
            aStar: this.ref.current.aStar,
            dijkstra: this.ref.current.dijkstra
        });
    }

    render() {
        const { height, width, reset, recursiveBacktracking, euclidian, aStar, dijkstra } = this.state;
        return (
            <div className="container">
                <Tutorial></Tutorial>
                <Grid height={height} width={width} ref={this.ref}></Grid>
                <SideBar reset={reset} recursiveBacktracking={recursiveBacktracking} dijkstra={dijkstra} euclidian={euclidian} aStar={aStar} ></SideBar>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
