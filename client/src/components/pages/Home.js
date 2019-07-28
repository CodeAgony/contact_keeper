import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => (
	<div className="grid-2">
		<ContactForm />
		<div style={{ justifySelf: 'center' }}>
			<Contacts />
		</div>
	</div>
);

export default Home;
