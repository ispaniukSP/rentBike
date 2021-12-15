const faker = require('faker');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const DIR = '../src/uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});


// module.exports = (req, res, next) => {
//   if(req.headers['x-header']){
//     const 
//   }
//   next()
// }

module.exports = (req, res, next) => {
  if(req.headers.authorization){
    const token = req.headers.authorization;
    jwt.verify(token, "mySecretKey", (err, decoded) => {
      if (err) {
        const refreshToken = req.headers["x-header"];
        jwt.verify(refreshToken, 'mySecretKey', (err, decoded) => {
          if(err){
            console.log(err)
            console.log("remove")
            return res
            .status(401)
            .send({ error: "Refresh token expired" });
          }else{
            console.log("add")
            const accessToken = jwt.sign({email: decoded.email}, "mySecretKey", {expiresIn: 60});
            const refreshToken = jwt.sign({email: decoded.email}, "mySecretKey", {expiresIn: 65});
            res.setHeader('Access-Control-Allow-Auth',accessToken);
            res.setHeader('Access-Control-Allow-Headers',refreshToken);
            next()
          }
        })
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }else{
    next();
  }
} 

const upload = multer({storage: storage})

module.exports.send = (req, res, next) => {
  return upload.single('uploads')(req, res, () => {
    console.log(req)
    console.log(res)

    if (!req.file) return res.json({ error: "Error" })
    next();
  })
}
