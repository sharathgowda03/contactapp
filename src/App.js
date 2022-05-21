import "./App.css";
//react toastify
import { ToastContainer } from "react-toastify";
//react router
import { Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<ToastContainer />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add" element={<Add />} />
				<Route path="/edit/:id" element={<Edit />} />
			</Routes>
		</div>
	);
}

export default App;
