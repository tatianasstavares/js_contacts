import { homeEditContact } from "../../presenter/homeEditContact.js"

const editContact = (e) => {
    const ulElem = e.target.closest('ul')
    const liElem = e.target.closest('li')
    const elements = [...ulElem.children]
    const index = elements.findIndex(li=>li == liElem)

    console.log({index, elements, liElem, ulElem});
    homeEditContact(index)

}

export {editContact}