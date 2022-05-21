import React, { useState, useEffect } from "react";
//react router
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//react toastify
import { toast } from "react-toastify";
//action
import { UPDATE_CONTACT } from "../redux/contactActions";

const Edit = () => {
	//react router
	const { id } = useParams();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	//redux
	const contacts = useSelector((state) => state);
	const dispatch = useDispatch();
	const currentContact = contacts.find(
		(contact) => contact.id === parseInt(id)
	);

	useEffect(() => {
		setName(currentContact.name);
		setEmail(currentContact.email);
		setNumber(currentContact.number);
	}, [currentContact]);

	const updateStudent = (e) => {
		e.preventDefault();
		if (name && email && number) {
			const data = {
				id: parseInt(id),
				name: name,
				email: email,
				number: number,
			};
			toast.success("Student was updated successfully!");
			dispatch({ type: UPDATE_CONTACT, payload: data });
			navigate("/");
		}
	};

	return (
		<div className="container">
			<h1 className="display-3 my-5 text-center">
				Edit Contact {parseInt(id) + 1}
			</h1>
			<div className="row">
				<div className="col-md-6 shadow mx-auto p-5">
					<form>
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
								value="Update Student"
								className="btn btn-outline-secondary"
								onClick={updateStudent}
							/>
							<Link to="/" className="btn btn-outline-danger m-1">
								Cancel
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Edit;
