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
import {loadState, saveState} from './loadstate'
const hours = 1

let now = new Date().getTime()
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}

/*const persistedState = localStorage.getItem("initialState")
	? JSON.parse(localStorage.getItem("initialState"))
	: undefined*/
const persistedState = loadState();

const store = createStore(groceryItem, persistedState, applyMiddleware(thunk));
console.log(store.getState())
/*store.subscribe(() => {
	localStorage.setItem("initialState", JSON.stringify(store.getState()));
});*/

store.subscribe(()=>{
saveState(store.getState())

})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
