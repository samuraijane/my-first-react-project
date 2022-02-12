import { useEffect, useState } from 'react';
import Contact from "../components/contact";
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utils/mockResponse";
import Modal from '../components/modal';
import { Route, Routes } from 'react-router-dom';
import ContactSummary from '../components/contactSummary';


const Main = () => {
  const [fields, setFields] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setFields(mockResponse());
  }, []);

  const handleSubmit = contactFields => {
    const updatedContacts = [...fields, contactFields];
    setFields(updatedContacts);
    setIsShowModal(true);
  };

  const handleIsShowModal = () => {
    setIsShowModal(!isShowModal);
  }

  return(
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
        <Route path="add" element={<ContactForm action={handleSubmit} />} />
        <Route path="list" element={<ContactSummary fields={fields} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      {isShowModal && <Modal action={handleIsShowModal} message="Contact added" />}
    </>
  )
}

export default Main;