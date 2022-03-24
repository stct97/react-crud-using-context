import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import {GlobalProvider} from "../contexts/GlobalState";

class App extends React.Component {
    render() {
        return (
            <GlobalProvider>
                <div className="container">
                <Table />
            </div>
            </GlobalProvider>
        )
    }
}

export default App;