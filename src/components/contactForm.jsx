import { useState } from "react";

const ContactForm = ({ action }) => {

  const [contact, setContact] = useState({});

  const handleChange = e => {
    const key = e.target.dataset.keyname;
    const value = e.target.value;
    const updatedContact = {...contact};
    updatedContact[key] = value;
    setContact(updatedContact);
  };

  return (
    <form onSubmit={e => action(e, contact)} >
      <label>
        <span>Full name</span>
        <input onChange={handleChange} data-keyname="name" value={contact.name || ''} />
      </label>
      <label>
        <span>Address</span>
        <input onChange={handleChange} data-keyname="address" value={contact.address || ''} />
      </label>
      <label>
        <span>City</span>
        <input onChange={handleChange} data-keyname="city" value={contact.city || ''} />
      </label>
      <label>
        <span>State</span>
        <input onChange={handleChange} data-keyname="state" value={contact.state || ''} />
      </label>
      <label>
        <span>Zip Code</span>
        <input onChange={handleChange} data-keyname="zipcode" value={contact.zipcode || ''} />
      </label>
      <label>
        <span>Telephone</span>
        <input onChange={handleChange} data-keyname="phone" value={contact.phone || ''} />
      </label>
      <label>
        <span>Email</span>
        <input onChange={handleChange} data-keyname="email" value={contact.email || ''} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;