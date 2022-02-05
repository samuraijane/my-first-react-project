import Contact from "../components/contact"
import faker from "@faker-js/faker";




const Main = () => {

    const cheating = [1,1,1,1,1,1,1,1,1,1]

    const names = cheating.map(name => {
        const person = faker.name.findName();
        const address = faker.address.streetAddress();
        const city = faker.address.city();
        const state = faker.address.state();
        const zipcode = faker.address.zipCode();
        const phone = faker.phone.phoneNumber();
        const email = faker.internet.email();
        const job = faker.name.jobType();
        return <Contact name={person} address={address} city={city}
             state={state} zipcode={zipcode} phone={phone} email={email} job={job} />   
    });
        

    return(
        <>  
            <ul>{names}</ul>
        </>
        

    )
}

export default Main;