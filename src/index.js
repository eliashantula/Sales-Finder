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

let persistedState = localStorage.getItem("reduxState")

	? JSON.parse(localStorage.getItem("reduxState"))
	: undefined;
let store = createStore(groceryItem, persistedState, applyMiddleware(thunk));

let saveLocal = store.subscribe(() => {
	localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
saveLocal();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
