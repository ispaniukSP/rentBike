const jsonServer = require("json-server");
const path = require("path");
const stripe = require("stripe")(
  "sk_test_51Jcol7DphoWPHqYkVbxfuR1g5KqwW5Sq65QJrwkFB0mu9gZvx3MHa3JOGDc68FOeHjVue5AircGpNVQH8HGS7rrJ000b2Vyn72"
);
const fs = require("fs");
const bodyParser = require('body-parser')
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const jwt = require('jsonwebtoken');
const uploadToStorage = require("./multer");
const SECRET_KEY = '123456789'
const expiresIn = '1h';

function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

server.use(middlewares);

server.use(bodyParser.json({ limit: "50mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

server.post("/center/:id/image", uploadToStorage.single("file"), (req, res) => {
  console.log(req);
  res
    .status(200)
    .send({ path: path.join(__dirname, "..", "temp", req.fileName) });
});

server.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  if (!email || !password)
    return res
      .status(400)
      .send({ error: " You need to send email AND password" });
  let db = fs.readFileSync(path.join(__dirname, "db.json"));
  if (db) {
    db = JSON.parse(db);
  }
  const isUserExist = db.users.find(
    (el) => el.email === email && el.password === password
  );
  if(!isUserExist) {
    return res
      .status(400)
      .send({ error: "User was not found" });
  } 

  const access_token = createToken({email, password})
  
  const {password: user_pass, ...user_data} = isUserExist;
  // const token = jwt.sign({ foo: 'bar' }, "adadadada", { algorithm: 'RS256'});;
  return res.send({...user_data, token: access_token});
});

server.post("/history", async (req, res) => {
  try {
    let intent;
    if (req.body.payment_method_id) {
      intent = await stripe.transfers.create({
        payment_method: id,
        amount: req.body.amount,
        currency: "usd",
        confirmation_method: "manual",
        confirm: true,
      });
    } else {
      res.send(console.log("Error get data"));
    }
    res.send({ status: res.status });
  } catch (e) {
    return res.send({ error: e.message });
  }
});
server.use(router);

server.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
