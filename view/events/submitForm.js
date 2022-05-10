import { qs } from "../../helpers/dom/querySelectors.js"
import { homeAddContact } from "../../presenter/homeAddContact.js"
import { homeEditContact } from "../../presenter/homeEditContact.js"
import FieldRequire from "../../validators/view/form/fieldsRequire.js"


const submitForm = (e) => {
    e.preventDefault()
    const inputArray = [...e.target.children].filter(el => el.type == 'text')
    const [inputName, inputPhone, inputEmail] = inputArray
    try{
        const form = qs('form')
        inputArray.forEach(input => FieldRequire.exec(input))
        if(form.hasOwnProperty('editing')) 
        {
            homeEditContact(form._editing,inputName,inputPhone,inputEmail)
         } else {
            console.log('add');;
            homeAddContact(inputName,inputPhone,inputEmail)
         }

    } catch (e) {
        console.error(e);
    }
}

export {submitForm}