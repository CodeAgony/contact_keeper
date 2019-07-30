import React, { useState } from 'react';

const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		console.log('submit login');
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
