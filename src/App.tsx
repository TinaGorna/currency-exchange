import React from "react";
import "./App.css";
import Currency from "./currency/Currency";
import {createStore} from "redux";
import {reducers} from "./redux/state";
import {Provider} from "react-redux";


function App() {
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <div className="container">
                <Currency/>
            </div>
        </Provider>
    );
}

export default App;
