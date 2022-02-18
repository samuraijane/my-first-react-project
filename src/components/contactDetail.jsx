import { useState } from 'react';

const ContactDetail = ({ action, selectedContact }) => {
  const {id, name, address, city, state, zipcode, phone, email, job} = selectedContact;

  const [image, setImage] = useState(null);

  const handleGetImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImage(data.message));
    };

  return (
    <li>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>{city}, {state}</p>
      <p>{zipcode}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{job}</p>
      <button onClick={() => action(id)}>Delete Contact</button>
      <button onClick={handleGetImage}>Show Dog</button>
      <div className="nimg">
        <img src={image} />
      </div>
    </li>
  );
}

export default ContactDetail;