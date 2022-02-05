const Contact = ({name, address, city, state, zipcode, phone, job}) => {
  return (
      
          <li>
              <h2>{name}</h2>
              <p>{address}</p>
              <p>{city},</p>
              <p>{state}</p>
              <p>{zipcode}</p>
              <p>{phone}</p>
              <p>{job}</p>
          </li>
      
      
  );
}

export default Contact;