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
        let width = window.innerWidth - 450;
        let height = window.innerHeight ;
        this.state = {
            width: Math.floor(width / size) - 1,
            height: Math.floor(height / size) - 1,
            margin: (height - size * (Math.floor(height / size)- 1)) / 2,
        };
    }

    componentDidMount() {
        const { reset, recursiveBacktracking, euclidian, aStar, dijkstra, iterativeRandom, BFS, recursiveDivision } = this.ref.current;
        this.setState({
            reset: reset,
            recursiveBacktracking: recursiveBacktracking,
            euclidian: euclidian,
            aStar: aStar,
            dijkstra: dijkstra,
            iterativeRandom: iterativeRandom,
            BFS: BFS,
            recursiveDivision: recursiveDivision,
        });
    }

    render() {
        const { margin, height, width, reset, recursiveBacktracking, euclidian, aStar, dijkstra, iterativeRandom, BFS, recursiveDivision } = this.state;
        return (
            <div style={ {margin }} className="container">
                <Tutorial></Tutorial>
                <Grid  height={height} width={width} ref={this.ref}></Grid>
                <SideBar reset={reset} recursiveBacktracking={recursiveBacktracking} dijkstra={dijkstra} euclidian={euclidian} aStar={aStar} iterativeRandom={iterativeRandom} BFS={BFS} recursiveDivision={recursiveDivision}></SideBar>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
