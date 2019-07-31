import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, [])

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
