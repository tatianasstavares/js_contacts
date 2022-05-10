import { qs } from "../helpers/dom/querySelectors.js"

const editContact = (contact,index) => {
    const form = qs('form');
    form._editing = index;
    const inputArray = [...form.children].filter(el => el.type == 'text')
    const [inputName, inputPhone, inputEmail] = inputArray
    inputName.value = contact.fullname
    inputEmail.value = contact.phoneNumber
    inputPhone.value = contact.email
    console.log(form);

}

export  {editContact}