import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors } = authContext;

	useEffect(() => {
		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
	}, [error]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please fill in all the fields', 'danger');
		} else if (password.length < 6) {
			setAlert('Please make your pasword at least 6 characters long', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">
						Name
						<input
							type="text"
							name="name"
							id="name"
							value={name}
							onChange={onChange}
						/>
					</label>

					<label htmlFor="email">
						Email Adress
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={onChange}
						/>
					</label>

					<label htmlFor="password">
						Password
						<input
							type="text"
							name="password"
							id="password"
							placeholder="At least 6 characters for your safety"
							value={password}
							onChange={onChange}
						/>
					</label>

					<label htmlFor="password2">
						Confirm Password
						<input
							type="text"
							name="password2"
							id="password2"
							value={password2}
							onChange={onChange}
						/>
					</label>

					<input
						type="submit"
						value="Register"
						className="btn btn-primary btn-block"
					/>
				</div>
			</form>
		</div>
	);
};

export default Register;
