import { addEvent } from "../helpers/dom/addEvent.js";
import { qs } from "../helpers/dom/querySelectors.js";
import { liElementContact } from "./components/widgets/liElemContact.js";
import { submitForm } from "./events/submitForm.js";


const renderUi = (contacts) => {
    addEvent(qs('form'), 'submit', submitForm)
    const ulElemnt = qs('ul')
    contacts.forEach((contact,idx) => {
        ulElemnt.append(liElementContact(contact,idx))
    });
}

export {renderUi}