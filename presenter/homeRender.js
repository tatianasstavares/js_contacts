import { getContact } from "../store/ContactList.js";
import { renderUi } from "../view/renderUi.js";


const homeRender = function () {
    renderUi(getContact());
}

export {homeRender}
