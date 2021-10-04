const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const uploadToStorage = require('./multer');

server.use(middlewares);

server.post("/center/:id/image", uploadToStorage.single('file'), (req, res) => {
  res.status(200).send("Ok");
});

server.use(router);

server.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
