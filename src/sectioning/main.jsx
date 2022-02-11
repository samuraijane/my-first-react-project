import { useState } from 'react';
import Contact from "../components/contact";
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utils/mockResponse";
import { Route, Routes } from 'react-router-dom';


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
      <Routes>
        <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
        <Route path="add" element={<ContactForm action={handleSubmit} />} />
        <Route path="list" element={<ul>{contacts}</ul>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}

export default Main;