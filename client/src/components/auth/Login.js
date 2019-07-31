import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'Invalid credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="email">
						Email Adress
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={onChange}
							required
						/>
					</label>

					<label htmlFor="password">
						Password
						<input
							type="text"
							name="password"
							id="password"
							value={password}
							onChange={onChange}
							required
						/>
					</label>

					<input
						type="submit"
						value="Login"
						className="btn btn-primary btn-block"
					/>
				</div>
			</form>
		</div>
	);
};

export default Login;
