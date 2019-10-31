import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import SideBar from "./SideBar";
import Tutorial from "./Tutorial";

let size = 25;


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
        const { reset, recursiveBacktracking, depthFirstSearch, aStar, dijkstra, iterativeRandom, BFS, recursiveDivision, recursiveDivision2 } = this.ref.current;
        this.setState({
            reset: reset,
            recursiveBacktracking: recursiveBacktracking,
            depthFirstSearch: depthFirstSearch,
            aStar: aStar,
            dijkstra: dijkstra,
            iterativeRandom: iterativeRandom,
            BFS: BFS,
            recursiveDivision: recursiveDivision,
            recursiveDivision2: recursiveDivision2,
        });
    }

    render() {
        const { margin, height, width, reset, recursiveBacktracking, depthFirstSearch, aStar, dijkstra, iterativeRandom, BFS, recursiveDivision, recursiveDivision2 } = this.state;
        return (
            <div style={ {margin }} className="container">
                <Tutorial></Tutorial>
                <Grid  height={height} width={width} ref={this.ref}></Grid>
                <SideBar reset={reset} recursiveBacktracking={recursiveBacktracking} dijkstra={dijkstra} depthFirstSearch={depthFirstSearch} aStar={aStar} iterativeRandom={iterativeRandom} BFS={BFS} recursiveDivision={recursiveDivision} recursiveDivision2={recursiveDivision2}></SideBar>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
