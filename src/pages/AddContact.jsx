import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { addContact, putContact} from '../service/contact'

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    address: ''
}

export const AddContact = ({type}) => {
    const {store} = useGlobalReducer();
    console.log(type)

    const isEdit = type === 'edit';

    const navigate = useNavigate();

    const [contact, setContact] = useState(INITIAL_STATE);

    useEffect(()=>{
        console.log(store)
        const contactState = isEdit ? store.contact : INITIAL_STATE;
        setContact(contactState)
    },[])

    const onChange = (event) => {

        const name = event.target.name
        const value = event.target.value
        setContact({ ...contact, [name]: value })//Obtengo una copia del objeto y seteo el valor del input al valor del campo de cada input

    }

    const onSubmit = async (event) => {
        event.preventDefault();
        
        if(isEdit){
            await editContact()
            navigate('/')
            return;
        }

        await createContact()
        navigate('/')
        return

        
    }

    const createContact = async () => {
        await addContact(contact)
    }

    const editContact = async () =>{
        await putContact(contact)
    }

    return (
        <div>
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
                        <button type="submit" className="btn btn-primary mb-3">Save</button>
                    </div>
                </div>
            </form>
            <Link to="/">Back to home</Link>
        </div>
    )
}