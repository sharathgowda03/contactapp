import React from "react";
//react router
import { Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { DELETE_CONTACT } from "../redux/contactActions";
//react toastify
import { toast } from "react-toastify";

const Home = () => {
	//redux
	const contacts = useSelector((state) => state);
	const dispatch = useDispatch();

	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
		toast.success("Contact was deleted successfully!");
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 my-5 text-end">
					<Link to="/add" className="btn btn-outline-dark">
						Add Contact
					</Link>
				</div>
				<div className="col-md-10 mx-auto">
					<table className="table table-striped table-hover">
						<thead className="text-center">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody className="text-center align-middle">
							{contacts.map((contact) => {
								const { id, name, email, number } = contact;
								return (
									<tr key={id}>
										<td>{parseInt(id) + 1}</td>
										<td>{name}</td>
										<td>{email}</td>
										<td>{number}</td>
										<td>
											<Link
												to={`/edit/${id}`}
												className="btn btn-outline-primary btn-sm"
											>
												Edit
											</Link>
											<button
												type="button"
												className="btn btn-outline-danger btn-sm m-1"
												onClick={() => deleteContact(id)}
											>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Home;
