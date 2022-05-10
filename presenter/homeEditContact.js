
import { getContacts } from "../store/ContactList.js"
import { editContact } from "../view/editContactForm.js"


const homeEditContact = (index) => {
    const [contact] = getContacts(index,true)
    editContact(contact)
}

export {homeEditContact}