import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';

const App = () => (
	<ContactState>
		<Router>
			<Fragment>
				<Navbar icon="fas fa-id-card" title=" ContactKeeper" />
				<div className="containter">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	</ContactState>
);

export default App;
