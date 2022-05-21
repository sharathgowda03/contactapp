import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//redux dev tools
import { composeWithDevTools } from "redux-devtools-extension";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//toastify
import "react-toastify/dist/ReactToastify.css";
//router
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//redux
import { Provider } from "react-redux";
import contactReducer from "./redux/contactReducer";
import { createStore } from "redux";
const store = createStore(contactReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
