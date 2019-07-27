import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACT,
	CLEAR_FILTER,
	SET_ALERT,
	REMOVE_ALERT,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				_id: 1,
				type: 'personal',
				name: 'Ted Williams',
				email: 'jsth@gmail.com',
				phone: '123456789',
			},
			{
				id: 2,
				type: 'professional',
				name: 'Rob Cooper',
				email: 'jsth@gmail.com',
				phone: '123456789',
			},
			{
				id: 3,
				type: 'personal',
				name: 'Bob Dylan',
				phone: '22233345664',
				email: 'bdyln@getMaxListeners.com',
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filter

	return (
		<ContactContext.Provider value={{ contacts: state.contacts }}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
