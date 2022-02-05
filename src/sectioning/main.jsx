import Contact from "../components/contact"
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utils/mockResponse";

const Main = () => {
  const response = mockResponse();
  const contacts = response.map((contact, index) => {
   return (
     <>
      <Contact contact={contact} key={index} />
    </>
   )
  });
        

  return(
    <>
      <ContactForm />
      <ul>{contacts}</ul>
    </>
    
  )
}

export default Main;