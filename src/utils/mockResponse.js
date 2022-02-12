import faker from "@faker-js/faker";

export const mockResponse = () => {
  let response = [];
  for (let i = 0; i < 10; i++) {
    const contact = {};
    contact.id = faker.datatype.uuid();
    contact.name = faker.name.findName();
    contact.address = faker.address.streetAddress();
    contact.city = faker.address.city();
    contact.state = faker.address.state();
    contact.zipcode = faker.address.zipCode();
    contact.phone = faker.phone.phoneNumber();
    contact.email = faker.internet.email();
    contact.job = faker.name.jobType();
    response.push(contact);
  }
  return response;
};