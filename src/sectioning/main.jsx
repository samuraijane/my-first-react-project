import { useEffect, useState } from 'react';
import ContactDetail from '../components/contactDetail';
import ContactSummary from "../components/contactSummary";
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utils";
import Modal from '../components/modal';
import { Outlet, Route, Routes } from 'react-router-dom';


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

  const handleModal = () => {
    setIsShowModal(!isShowModal);
  };
  
  const handleSelectedContact = e => {
    const id = e.target.id;
    // const selectedContact = fields.filter(x => x.)
  };

  return(
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
        <Route path="add" element={<ContactForm action={handleSubmit} />} />
        <Route path="list" element={<ContactSummary action={handleSelectedContact} fields={fields} />}>
          <Route path=":id" element={<ContactDetail selectedContact='{}' />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      {isShowModal && <Modal action={handleModal} message="Contact added" />}
    </>
  )
}

export default Main;