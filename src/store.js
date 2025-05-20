export const initialStore=()=>{
  return{
    contacts: [],
    contact: []
  }  
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'addContact':

      const contacts = action.payload

      return {
        ...store,
        contacts: contacts
      };

    case 'edit':
      const contact = action.payload

      return{
        ...store,
        contact: contact
      }

    default:
      throw Error('Unknown action.');
  }    
}
