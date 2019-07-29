import React, { useContext } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import ContactContext from '../../context/contact/contactContext';

const Home = () => {
	const contactContext = useContext(ContactContext);
	return (
		<div className="grid-2">
			<ContactForm />
			<div style={{ justifySelf: 'center' }}>
				{contactContext.contacts.length !== 0 && (
					<div>
						<ContactFilter />
					</div>
				)}
				<div>
					<Contacts />
				</div>
			</div>
		</div>
	);
};

export default Home;
