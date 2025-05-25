import { useEffect, useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { ContactCard } from '../components/ContactCard.jsx';
import { getContactList, deleteContactById } from '../service/contact.js'
import { ConfirmModal } from '../components/ConfirmModal.jsx';

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const navigate = useNavigate()

	const [contactToDelete, setContactToDelete] = useState(null) //obtenemos el contacto a eliminar
	const [showModal, setShowModal] = useState(false)

	const getContacts = async () => {

		const data = await getContactList();
		if (data) {
			dispatch({ type: 'addContact', payload: data })
		}
	}

	const deleteClicked = (contact) => {
		console.log(contact)
		setContactToDelete(contact)//Seteo el contacto a eliminar
		setShowModal(true) //Muestro modal
	}

	const confirmDelete = async () => {
		if (contactToDelete) {
			const confirm = await deleteContactById(contactToDelete.id) //obtendo el Id del contacto que viene de ContactCard
			if (confirm) {
				await getContacts()
			}
			setShowModal(false)
			setContactToDelete(null)
		}
	}

	const cancelDelete = async () => {
		setShowModal(false)
		setContactToDelete(null)
	}

	const editContact = (contact) => {
		dispatch({ type: 'edit', payload: contact });
		navigate('/edit-contact')
	}

	useEffect(() => {
		getContacts()
	}, [])

	return (
		<div>
			<div className="d-flex justify-content-end m-5">
				<Link to="/add-contact" className="btn btn-success">Add contact</Link>
			</div>
			<div className='row justify-content-center'>
				{store.contacts.map((contact, index) => (
					<ContactCard
						key={index}
						contact={contact}
						deleteContact={() => deleteClicked(contact)}
						editContact={editContact} />
				))}
			</div>
			{showModal && <ConfirmModal
				contactToDelete={contactToDelete}
				confirmDelete={confirmDelete}
				cancelDelete={cancelDelete} />}
		</div>
	);
}; 