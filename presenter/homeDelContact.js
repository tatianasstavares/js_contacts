import { delContact } from "../store/ContactList.js"


const homeDelContact = (id) => {
    delContact(id)
}

export {homeDelContact}