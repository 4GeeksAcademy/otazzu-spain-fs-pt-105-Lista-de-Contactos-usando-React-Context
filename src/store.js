export const initialStore=()=>{
  return{
    contacts: []
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
    default:
      throw Error('Unknown action.');
  }    
}
