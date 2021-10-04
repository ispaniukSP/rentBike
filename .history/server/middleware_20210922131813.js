const faker = require('faker');
const multer = require('multer');

const DIR = '../uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(file.mimetype === 'image/png') {
      cb(null, true)
    } else{
      cb(null, false)
      return cb(new Error('Only Error'))
    }
  }
})

module.exports.send = (req, res, next) => {
  return upload.single('file')(req, res, () => {

    if (!req.file) return res.json({ error: "Error" })
    next()
  })
}

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