import { createEl } from "../../../helpers/dom/createEl.js";
import { delContact } from "../../events/delContacts.js";
import { editContact } from "../../events/editContact.js";
import { textLi } from "../textLi.js";
import { button } from "./button.js";

const liElementContact = (contact) => {

    const liElement = createEl("li",textLi(contact)) 
    liElement.append(button('Editar', 'click', editContact))
    liElement.append(button('Apagar', 'click', delContact ))
    return liElement
 }

 export {liElementContact}