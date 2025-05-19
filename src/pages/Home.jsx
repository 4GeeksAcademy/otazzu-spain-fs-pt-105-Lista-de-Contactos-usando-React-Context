import { useState, useEffect } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from 'react-router-dom';
import { ContactCard } from '../components/ContactCard.jsx';
import { getContactList, deleteContactById } from '../service/contact.js'

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	console.log({ store })

	const getContacts = async () => {
		const data = await getContactList();
		if (data){
			dispatch({type: 'addContact', payload: data})
		}
	}

	useEffect(() => {
		getContacts()
	}, [])

	const deleteContact = async (id) => {
		console.log(id)
		const isDelete = await deleteContactById(id)
		if(isDelete){
			getContacts()
		}
	}

	return (
		<div>
			<div className="text-center mt-5">
				<Link to="/add-contact" className="btn btn-success">Add contact</Link>
				<h1>Hello Rigo!!</h1>
			</div>
			<div className='row justify-content-center'>
				{store.contacts.map((contact, index) => (
					<ContactCard key={index} contact={contact} deleteContact={deleteContact} />
				))}
			</div>
		</div>
	);
}; 