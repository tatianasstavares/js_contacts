import { qs } from "../../helpers/dom/querySelectors.js"
import { liElementContact } from "../components/widgets/liElemContact.js"

const addLi = (contact) =>qs('ul').append(liElementContact(contact))

export {addLi}