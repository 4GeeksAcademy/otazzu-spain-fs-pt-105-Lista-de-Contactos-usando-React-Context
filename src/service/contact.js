const URL = 'https://playground.4geeks.com/contact/agendas/otazzu'

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

export const deleteContactById = async (id) =>{
    try {

        const response = await fetch(`${URL}/contacts/${id}`,{
            method: 'DELETE'
        })
        console.log(response)
        if(response.status === 204){
            return true;
        }
        
    } catch (error) {
        console.log("Error: ",error)
    }
}