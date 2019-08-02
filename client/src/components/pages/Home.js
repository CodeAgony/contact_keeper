import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);

	const { contacts } = contactContext;

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	const contactsEmpty = contacts === null;

	return (
		<div className="grid-2">
			<ContactForm />
			<div>
				{!contactsEmpty && (
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
