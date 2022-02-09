import { useState } from 'react';
import Contact from "../components/contact";
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utils/mockResponse";

const Main = () => {
  const response = mockResponse();

  const [fields, setFields] = useState([]);

  const handleSubmit = (e, contactFields) => {
    e.preventDefault();
    const updatedContacts = [...fields, contactFields];
    setFields(updatedContacts);
  };

  const newContacts = fields.map((contact, index) => {
    return <Contact contact={contact} key={index} />;
  });

  const contacts = response.map((contact, index) => {
   return <Contact contact={contact} key={index} />;
  });
        

  return(
    <>
      <ContactForm action={handleSubmit} />
      <ul>{newContacts}</ul>
      <ul>{contacts}</ul>
    </>
    
  )
}

export default Main;