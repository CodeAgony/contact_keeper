import React, { useState } from 'react';

const Register = () => {
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
		console.log('submit register');
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
							required
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

					<label htmlFor="password2">
						Confirm Password
						<input
							type="text"
							name="password2"
							id="password2"
							value={password2}
							onChange={onChange}
							required
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
