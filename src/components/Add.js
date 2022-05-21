import React, { useState } from "react";
//rect toastify
import { toast } from "react-toastify";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { ADD_CONTACT } from "../redux/contactActions";
//react router
import { useNavigate } from "react-router-dom";

const Add = () => {
	//redux
	const contacts = useSelector((state) => state);
	const dispatch = useDispatch();
	//react router
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name && email && number) {
			const data = {
				id: contacts[contacts.length - 1].id + 1,
				name: name,
				email: email,
				number: number,
			};
			toast.success("Student was added successfully!");
			dispatch({ type: ADD_CONTACT, payload: data });
			navigate("/");
		} else {
			toast.warning("Please fill in all fields!");
		}
	};

	return (
		<div className="container">
			<h1 className="display-3 my-5 text-center">Add Contact</h1>
			<div className="row">
				<div className="col-md-6 shadow mx-auto p-5">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<input
								type="email"
								className="form-control"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<input
								type="number"
								className="form-control"
								placeholder="Phone Number"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<input
								type="submit"
								value="Add Student"
								className="btn btn-secondary"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Add;
