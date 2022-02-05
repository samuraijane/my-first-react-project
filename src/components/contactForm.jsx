import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState('Bob');

  const handleChange = e => {
    const target = e.target.value;
    setName(target);
  }

  return (
    <form>
      <label>
        <span>Full name</span>
        <input onChange={handleChange} value={name} />
      </label>
    </form>
  );
};

export default ContactForm;