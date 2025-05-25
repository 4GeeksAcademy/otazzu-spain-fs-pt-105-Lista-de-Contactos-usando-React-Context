import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { addContact, putContact } from '../service/contact'
import { SuccessContact } from '../components/SuccessContact'
import { Spinner } from '../components/Spinner'

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    address: ''
}

export const AddContact = ({ type }) => {
    const { store } = useGlobalReducer();

    const isEdit = type === 'edit';

    const navigate = useNavigate();

    const [contact, setContact] = useState(INITIAL_STATE);

    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log(store)
        const contactState = isEdit ? store.contact : INITIAL_STATE;
        setContact(contactState)
    }, [])

    const onChange = (event) => {

        const name = event.target.name
        const value = event.target.value
        setContact({ ...contact, [name]: value })//Obtengo una copia del objeto y seteo el valor del input al valor del campo de cada input

    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        if (isEdit) {
            await editContact()
            navigate('/')
            return;
        }
        setShowModal(true)
        await createContact()
        setTimeout(() => {
            navigate('/')
            setLoading(false)
            setShowModal(false)
        }, 5000)
        return
    }

    const createContact = async () => {
        await addContact(contact)
    }

    const editContact = async () => {
        await putContact(contact)
    }

    return (
        <div>
            {showModal && <SuccessContact/>}
            <div className='text-center m-3'>
                <h1>Add a new Contact</h1>
            </div>
            <form onChange={onChange} onSubmit={onSubmit} className='m-5'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" value={contact.name} className="form-control" name="name" placeholder="Full name" />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" value={contact.email} className="form-control" name="email" placeholder="Enter email" />

                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="number" value={contact.phone} className="form-control" name="phone" placeholder="Enter phone" />

                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" value={contact.address} className="form-control" name="address" placeholder="Enter Address" />
                    <div className="d-grid gap-2 mt-3">
                        {loading ? <Spinner /> : <button type="submit" className="btn btn-primary">Save</button>}
                    </div>
                    <Link to="/">or get back to contacts</Link>
                </div>
            </form>
        </div>
    )
}