import { useState } from 'react';
import Contact from "../components/contact";
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utils/mockResponse";

const Main = () => {
  const response = mockResponse();

  const [fields, setFields] = useState();

  const handleSubmit = (e, contactFields) => {
    e.preventDefault();
    setFields(contactFields);
  };

  const contacts = response.map((contact, index) => {
   return (
     <>
      <Contact contact={contact} key={index} />
    </>
   )
  });
        

  return(
    <>
      <ul>
        {fields && <Contact contact={fields} />}
      </ul>
      <ContactForm action={handleSubmit} />
      <ul>{contacts}</ul>
    </>
    
  )
}

export default Main;