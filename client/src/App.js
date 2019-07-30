import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const App = () => (
	<AuthState>
		<ContactState>
			<Router>
				<Fragment>
					<Navbar icon="fas fa-id-card" title=" ContactKeeper" />
					<div className="containter">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/register" component={Register} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		</ContactState>
	</AuthState>
);

export default App;
