import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => (
	<AuthState>
		<ContactState>
			<AlertState>
				<Router>
					<Fragment>
						<Navbar icon="fas fa-id-card" title=" ContactKeeper" />
						<div className="containter m-1">
							<Alerts />
							<Switch>
								<PrivateRoute exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</AlertState>
		</ContactState>
	</AuthState>
);

export default App;
