import React from 'react';
import Contacts from '../contacts/Contacts';

const Home = () => (
	<div className="grid-2">
		<div>{/* Contact Form */}</div>
		<div style={{ justifySelf: 'center' }}>
			<Contacts />
		</div>
	</div>
);

export default Home;
