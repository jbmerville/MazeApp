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
            reset: null,
            padding: (height - size * (Math.floor(height / size)- 1)) / 2,
        };
    }

    componentDidMount() {
        console.log(this.state.padding);
        this.setState({
            reset: this.ref.current.reset,
            recursiveBacktracking: this.ref.current.recursiveBacktracking,
            euclidian: this.ref.current.euclidian,
            aStar: this.ref.current.aStar,
            dijkstra: this.ref.current.dijkstra,
            iterativeRandom: this.ref.current.iterativeRandom,

        });
    }

    render() {
        const { padding, height, width, reset, recursiveBacktracking, euclidian, aStar, dijkstra, iterativeRandom } = this.state;
        return (
            <div style={{padding: padding}} className="container">
                <Tutorial></Tutorial>
                <Grid  height={height} width={width} ref={this.ref}></Grid>
                <SideBar reset={reset} recursiveBacktracking={recursiveBacktracking} dijkstra={dijkstra} euclidian={euclidian} aStar={aStar} iterativeRandom={iterativeRandom}></SideBar>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
