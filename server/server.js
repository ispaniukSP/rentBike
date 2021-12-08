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

function verifyToken(req, res, next){
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mySecretKey", (err, user) => {
      if(err){
        return res
              .status(400)
              .send({ error: "Token is not valid!" });
      }else{
        req.user = user;
        next();
      }
    });
  }else{
    return res
      .status(400)
      .send({ error: "You are not authenticated!" });
  }
}

server.use(middlewares);

server.use(bodyParser.json({ limit: "50mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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
    //Generate access token
    const {password: user_pass, email: user_email, ...user_data} = isUserExist;
    const accessToken = jwt.sign({email: user_email, password: user_pass}, "mySecretKey", {expiresIn: "15m",});
    return res.send({...user_data, token: accessToken});
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
