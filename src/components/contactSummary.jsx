import { Link, Outlet } from "react-router-dom";
import { createUUID } from "../utils";

const ContactSummary = ({ action, fields }) => {

  const contacts = fields.map((fields, index) => {
    const id = createUUID();
    return (
      <li key={index}>
        <Link id={id} to={id}>{fields.name}</Link>
      </li>
    );
  });

  return (
    <>
      <ul onClick={action}>{contacts}</ul>
      <Outlet />
    </>
  );
}

export default ContactSummary;