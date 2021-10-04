const faker = require('faker');
const multer = require('multer');
const stripe = require('stripe')('sk_test_51Jcol7DphoWPHqYkVbxfuR1g5KqwW5Sq65QJrwkFB0mu9gZvx3MHa3JOGDc68FOeHjVue5AircGpNVQH8HGS7rrJ000b2Vyn72');


const DIR = '../src/uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage})

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

module.exports.send = (req, res, next) => {
  return upload.single('uploads')(req, res, () => {
    console.log(req)
    console.log(res)

    if (!req.file) return res.json({ error: "Error" })
    next();
  })
}

module.exports.send = (req, res, next) => {
  const { id, amount } = req.body;
  try{
    const payment = await stripe.paymentIntents.create({
        payment_method: id,
        amount,
        currency: 'USD',
        description:'Test',
        confirm: true
    })

    res.status(200).json({ status: payment.status })
  }catch(e){
    res.status(400).send(e.message)
  }
  next();
}