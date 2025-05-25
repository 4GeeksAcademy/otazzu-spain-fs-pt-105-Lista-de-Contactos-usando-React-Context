const URL = 'https://playground.4geeks.com/contact/agendas/otazzu'

const createSlug = async () => { // Funcion de crear el slug si no existe

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": "otazzu",
                "id": 0
            })
        });

        if (response.status === 201) {
            getContactList();
        }

    } catch (error) {
        console.log(error)
    }

}

export const getContactList = async () => {
    try {

        const response = await fetch(URL)

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.contacts;
        }
        else if (response.status === 404) {//Si no existe el slug
            createSlug();//Se crea
        }

    } catch (error) {

        console.log("Error:", error)

    }
}

export const deleteContactById = async (id) => {
    try {

        const response = await fetch(`${URL}/contacts/${id}`, {
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
        const response = await fetch(`${URL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(contact),
        });

        return 'Created contact'

    } catch (error) {
        console.log('ERROR IN CREATE CONCTACT', error)
    }
}

export const putContact = async (contact) => {

    try {
        const response = await fetch(`${URL}/contacts/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(contact),
        });

        if (response.status === 200) {
            return 'Edit contact'
        }

    } catch (error) {
        console.log('ERROR IN EDIT CONCTACT', error)
    }
}