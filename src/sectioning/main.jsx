import { useEffect, useState } from 'react';
import ContactDetail from "../components/contactDetail";
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utils/mockResponse";
import Modal from '../components/modal';
import { Route, Routes } from 'react-router-dom';
import ContactSummary from '../components/contactSummary';
import { useHistory } from 'react-router-dom';


const Main = () => {
  const history = useHistory();
  const [fields, setFields] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    setFields(mockResponse());
  }, []);

  const handleSubmit = contactFields => {
    const updatedContacts = [...fields, contactFields];
    setFields(updatedContacts);
    setIsShowModal(true);
  };

  const handleClick = e => {
    const targetId = e.target.id;
    const selectedContact = fields.filter(field => {
      return field.id === targetId;
    });
    setSelectedContact(selectedContact[0]);
  };

  const handleIsShowModal = () => {
    setIsShowModal(!isShowModal);
  }

  const handleDelete = id => {
    const updatedContacts = fields.filter(field => field.id !== id);
    setFields(updatedContacts);
    setSelectedContact(null);
    history.push('/list')
  };

  return(
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
        <Route path="add" element={<ContactForm action={handleSubmit} />} />
        <Route path="list" element={<ContactSummary action={handleClick} fields={fields} />}>
          {/* this change below removes the error we get if we refresh the page with an ID in the URL - because when we do that, that ID no longer exists */}
          {selectedContact && <Route path=":id" element={<ContactDetail action={handleDelete} selectedContact={selectedContact} />} />} 
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      {isShowModal && <Modal action={handleIsShowModal} message="Contact added" />}
    </>
  )
}

export default Main;