import Contact from "./contact";

const ContactSummary = ({fields}) => {

  const handleClick = e => {
    const target = e.target;
    console.log(target);
  }

  const contacts = fields.map((contact, index) => {
    return <li key={index}>{contact.name}</li>;
   });

  return (
    <ul onClick={handleClick}>{contacts}</ul>
  );
};

export default ContactSummary;