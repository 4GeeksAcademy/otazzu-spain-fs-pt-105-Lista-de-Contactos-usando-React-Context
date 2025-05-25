export const ContactCard = ({ contact, deleteContact, editContact }) => {

    const { name, email, phone, address, id } = contact

    return (
        <div className="card mb-3" style={{ width: '85%' }}>
            <div className="row g-0">
                <div className="col-12 col-sm-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src="src/assets/img/rigo-baby.jpg" className="img-fluid w-75 rounded-circle" alt="Contact image" />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{address}</p>
                    </div>
                </div>
                <div className="col-12 col-sm-2">
                    <div className="justify-content-center">
                        <i onClick={() => editContact(contact)} className="m-3 fa-solid fa-pen"></i>
                        <i onClick={() => deleteContact(id)} className="m-3 fa-solid fa-trash"></i>
                        {console.log(id)}
                    </div>
                </div>
            </div>
        </div>
    )
}