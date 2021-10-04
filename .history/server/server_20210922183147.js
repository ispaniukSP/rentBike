const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3002, () => {
    console.log('Server is listening on port 3002')
})