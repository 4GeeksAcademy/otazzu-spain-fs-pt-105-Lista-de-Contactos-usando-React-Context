export const ContactCard = ({contact, deleteContact, editContact}) => {

    const {name, email, phone, address, id} = contact

    return (
        <div className="card mb-3" style={{width:'85%'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="src/assets/img/rigo-baby.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{address}</p>
                    </div>
                    <div>
                        <button onClick={()=>deleteContact(id)}>Delete</button>
                        <button onClick={()=>editContact(contact)}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}