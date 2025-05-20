const URL = 'https://playground.4geeks.com/contact/agendas/otazzu/contacts'

export const getContactList = async () => {
    try {

        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        return data.contacts;

    } catch (error) {

        console.log("Error:", error)

    }
}

export const deleteContactById = async (id) => {
    try {

        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        })
        console.log(response)
        if (response.status === 204) {
            return true;
        }

    } catch (error) {
        console.log("Error: ", error)
    }
}

export const addContact = async (contact) => {
    try {
        const response = await fetch(`${URL}}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(contact),
        });

        return 'Create contact'

    } catch (error) {
        console.log('ERROR IN CREATE CONCTACT', error)
    }
}

export const putContact = async (contact) =>{

    try {
        const response = await fetch(`${URL}/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(contact),
        });

        if(response.status === 200){
            return 'Edit contact'
        }
        

    } catch (error) {
        console.log('ERROR IN EDIT CONCTACT', error)
    }
}