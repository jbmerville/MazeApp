import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";



class App extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid></Grid>
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);