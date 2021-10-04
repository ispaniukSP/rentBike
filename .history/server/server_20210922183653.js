const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.post("/center/:id/image", (req, res) => {
  console.log(1);
});

server.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
