const ContactDetail = ({ action, selectedContact }) => {
  const {id, name, address, city, state, zipcode, phone, email, job} = selectedContact;

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
    </li>
  );
}

export default ContactDetail;