const faker = require('faker');

module.exports = {
    groups: {
      users: {
        count: 0,
        schema: (id) => ({
          id,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          age: faker.datatype.number(70),
          password: faker.internet.password()
        }),
      },
    }
  };