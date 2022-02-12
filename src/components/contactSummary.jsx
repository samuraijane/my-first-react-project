import Contact from "./contact";

const ContactSummary = ({fields}) => {

  const contacts = fields.map((contact, index) => {
    return <li key={index}>{contact.name}</li>;
   });

  return (
    <ul>{contacts}</ul>
  );
};

export default ContactSummary;