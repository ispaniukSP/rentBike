const jsonServer = require("json-server");
const path = require("path");
const stripe = require("stripe")(
  "sk_test_51Jcol7DphoWPHqYkVbxfuR1g5KqwW5Sq65QJrwkFB0mu9gZvx3MHa3JOGDc68FOeHjVue5AircGpNVQH8HGS7rrJ000b2Vyn72"
);
const fs = require("fs");
const bodyParser = require('body-parser');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const defaultMiddleware = jsonServer.defaults();
const cors = require('cors');

const corsOptions = {
  exposedHeaders: 'Authorization',
};

const customMiddleware = require(path.join(__dirname, 'middleware.js'));
const jwt = require('jsonwebtoken');
const uploadToStorage = require("./multer");

server.use(bodyParser.json({ limit: "50mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
server.use(cors(corsOptions));
server.use(defaultMiddleware);
server.use(customMiddleware);
require('dotenv').config(); 

server.post("/center/:id/image", uploadToStorage.single("file"), (req, res) => {
  res
    .status(200)
    .send({ path: path.join(__dirname, "..", "temp", req.fileName) });
});

server.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let db = fs.readFileSync(path.join(__dirname, "db.json"));
  if (db) {
    db = JSON.parse(db);
  }
  const isUserExist = db.users.find((el) => el.email === email && el.password === password);
  if(!isUserExist){
    return res
      .status(400)
      .send({ error: "Wrong password or email" });
  }else{
    const {password: user_pass, email: user_email, ...user_data} = isUserExist;
    const accessToken = jwt.sign({email: user_email}, "mySecretKey", {expiresIn: 10,});
    const refreshToken = jwt.sign({email: user_email}, "mySecretKey", {expiresIn: 20,});
    return res.send({...user_data, accessToken: accessToken, refreshToken: refreshToken });
  }
});

server.post("/register", async (req, res) => {
  const {password: user_pass, email: user_email, ...user_data} = req.body;
  let db = fs.readFileSync(path.join(__dirname, "db.json"));
  if (db) {
    db = JSON.parse(db);
  }
  const isUserExist = db.users.find((el) => el.email === user_email);
  if(isUserExist){
    return res
      .status(400)
      .send({ error: "User has already register" });
  }else{
    const accessToken = jwt.sign({email: user_email, password: user_pass}, "mySecretKey", {expiresIn: "15m",});
    return res.send({...user_data ,token: accessToken});
  }
});

server.post('/pay', async (req, res) => {
  const { id, amount, email, phone } = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: "USD",
      description: `Order from ${email} - ${phone}`,
      confirm: true,
    })
    return res.status(200).json({ status: payment.status })
  } catch (e) {
    return res.status(400).send(e.message)
  }
});

server.use(router);

server.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
