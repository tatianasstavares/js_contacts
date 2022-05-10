import { createEl } from "../../../helpers/dom/createEl.js";
import { addEvent } from "../../../helpers/dom/addEvent.js";

const button = (text,event,funct, values) => {
    const buttonElem = createEl('button', text)
    addEvent(buttonElem,event, funct, values)
    return buttonElem

}

export {button}