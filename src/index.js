import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import groceryItem from "./reducers";

let persistedState = localStorage.getItem("initialState")

	? JSON.parse(localStorage.getItem("initialState"))
	: undefined;
let store = createStore(groceryItem, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
	localStorage.setItem('initialState', JSON.stringify(store.getState()));
});


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
