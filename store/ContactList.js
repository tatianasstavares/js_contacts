import Contact from "../model/Contact.js"

const contacts = [
    new Contact('Bruno', 1, 'tatianasstavares@gmail.com'),
    new Contact('Bruno', 2, 'tatianasstavares@gmail.com'),
    new Contact('Bruno', 3, 'tatianasstavares@gmail.com'),
    new Contact('Bruno', 4, 'tatianasstavares@gmail.com')
]

   const getContact = () => contacts;

   const getContacts = (id, stop = false ) => (stop ) ? contacts.slice(id, id+1): contacts.slice(id)

   const delContact = id => contacts.splice(id,1)

   const addContact = (name, phone, email) => contacts.push(new Contact(name.value, phone.value, email.value))

   const updContact = (index,name, phone, email)  => {
       const contact = contacts.at(index);
       contact.fullname = name;
       contact.phoneNumber = phone;
       contact.email = email;
   }
   
   export {getContact,delContact, addContact, getContacts, updContact}