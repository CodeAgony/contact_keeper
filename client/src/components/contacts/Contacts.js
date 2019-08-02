import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, [])

	if (contacts !== null && contacts.length === 0 && !loading) {
		return (
			<h5 style={{ display: 'block', maxWidth: '400px', margin: '0 auto' }}>
				Nothing to filter yet. Feel free to add your contacts
			</h5>
		);
	}

	return (
		<Fragment>
			{contacts !== null && !loading ? (
				<TransitionGroup>
					{filtered !== null
						? filtered.map(contact => (
								<ContactItem key={contact._id} contact={contact} />
						  ))
						: contacts.map(contact => (
								<CSSTransition
									key={contact._id}
									timeout={500}
									classNames="item"
								>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))}
				</TransitionGroup>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Contacts;
