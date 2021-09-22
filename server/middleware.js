const faker = require('faker');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.userName === 'Admin' && req.body.password === 'admin!') {
      res.status(200).json({
        firstName: 'Test',
        lastName: 'Testovich',
        token: faker.random.uuid(),
      });
    }
    res.status(400).json({ message: 'Wrong credentials' });
  }
  next();
};