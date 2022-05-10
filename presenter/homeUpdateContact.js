import { getContact, updContact } from "../store/ContactList"
import { updateContact } from "../view/updateContact";

const homeUpdateContact = (index, name, phone, email) => {

    updContact(index, name, phone, email)
     updateContact(index, getContact(index,true));

}

export {homeUpdateContact}