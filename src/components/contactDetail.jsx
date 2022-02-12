const ContactDetail = ({ contact }) => {
  const {name, address, city, state, zipcode, phone, email, job} = contact;

  return (
    <li>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>{city}, {state}</p>
      <p>{zipcode}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{job}</p>
    </li>
  );
}

export default ContactDetail;