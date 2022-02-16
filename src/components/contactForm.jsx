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

  const handleSubmit = e => {
    e.preventDefault();
    action(contact);
    setContact({});
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="contact-field">
        <label>
          <span>Full name</span>
          <input onChange={handleChange} data-keyname="name" value={contact.name || ''} />
        </label>
      </div>
      <div className="contact-field">
        <label>
          <span>Address</span>
          <input onChange={handleChange} data-keyname="address" value={contact.address || ''} />
        </label>
      </div>
      <div className="contact-field">
        <label>
          <span>City</span>
          <input onChange={handleChange} data-keyname="city" value={contact.city || ''} />
        </label>
      </div>
      <div className="contact-field">
        <label>
          <span>State</span>
          <input onChange={handleChange} data-keyname="state" value={contact.state || ''} />
        </label>
      </div>
      <div className="contact-field">
        <label>
          <span>Zip Code</span>
          <input onChange={handleChange} data-keyname="zipcode" value={contact.zipcode || ''} />
        </label>
      </div>
      <div className="contact-field">
        <label>
          <span>Telephone</span>
          <input onChange={handleChange} data-keyname="phone" value={contact.phone || ''} />
        </label>
      </div>
      <div className="contact-field">
        <label>
          <span>Email</span>
          <input onChange={handleChange} data-keyname="email" value={contact.email || ''} />
        </label>
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;