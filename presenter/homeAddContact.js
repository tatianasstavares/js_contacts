
import { addContact,  getContacts } from "../store/ContactList.js"
import { addLi } from "../view/events/addLi.js"

const homeAddContact = (name, phone, email) => {
    const contactIndex =  addContact(name,phone, email)
    const [contactInfo] = getContacts(contactIndex-1)
    addLi(contactInfo)
    console.log(contactInfo);
}


export {homeAddContact}