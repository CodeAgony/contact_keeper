import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;

	const onDelete = () => {
		deleteContact(contact.id);
		clearCurrent();
	};

	const { name, email, phone, type } = contact;
	return (
		<div className="card bg-light" style={{ margin: '0 auto' }}>
			<h3 className="text-primary text-left">
				{name}{' '}
				<span
					// style={{ float: 'right' }}
					className={`badge
						${type === 'professional' ? 'badge-success' : 'badge-primary'}`}
				>
					{// Start from uppercase
					type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className="list">
				{email && <li className="fas fa-envelope-open bl"> {email}</li>}
				{phone && <li className="fas fa-phone bl"> {phone}</li>}
			</ul>
			<p>
				<button
					type="button"
					className="btn btn-dark btn-sm"
					onClick={() => setCurrent(contact)}
				>
					Edit
				</button>
				<button
					type="button"
					className="btn btn-danger btn-sm"
					onClick={onDelete}
				>
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
