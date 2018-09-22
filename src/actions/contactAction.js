import { GET_CONTACT ,DELETE_CONTACT,ADD_CONTACT} from "./type";

export const getContacts=()=>{
return {
    type:GET_CONTACT
}
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload:id
    }
}
export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact

    }
}


