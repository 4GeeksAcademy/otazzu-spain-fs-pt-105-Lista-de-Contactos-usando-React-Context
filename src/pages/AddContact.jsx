import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const AddContact = () => {

    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const onChange = (event) => {

        const name = event.target.name
        const value = event.target.value
        setContact({ ...contact, [name]: value })//Obtengo una copia del objeto y seteo el valor del input al valor del campo de cada input

    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await createContact()
        navigate('/')
    }

    const createContact = async () =>{
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/otazzu/contacts',{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json',
                
                },
                body: JSON.stringify(contact),
            });

            console.log(response)
            
        } catch (error) {
            console.log('ERROR IN CREATE CONCTACT', error)
        }
    }

    return (
        <div>
            <div className='text-center m-3'>
                <h1>Add a new Contact</h1>
            </div>
            <form onChange={onChange} onSubmit={onSubmit} className='m-5'>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Full name" />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" />

                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="number" className="form-control" name="phone" placeholder="Enter phone" />

                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" placeholder="Enter Address" />
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary mb-3">Save</button>
                    </div>
                </div>
            </form>
            <Link to="/">Back to home</Link>
        </div>
    )
}