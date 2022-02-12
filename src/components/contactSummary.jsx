import { NavLink } from "react-router-dom";

const ContactSummary = ({fields}) => {

  const handleClick = e => {
    const target = e.target.id;
    console.log(target);
  };

  const contacts = fields.map(contact => {
    return (
      <li id={contact.id} key={contact.id}>
        <NavLink to={contact.id}>{contact.name}</NavLink>
      </li>
    );
   });

  return (
    <ul className="contacts" onClick={handleClick}>{contacts}</ul>
  );
};

export default ContactSummary;