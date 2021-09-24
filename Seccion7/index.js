const express = require("express");
const server = express();
const fs = require("fs");
const { PORT } = require("./src/config");
const { HomeRoutes, QuotesRoutes } = require('./src/routes')
const { NotFoundMiddleware } = require('./src/middlewares')

server.use(express.static('./src/public'));
server.use(express.json());
server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleware);

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.listen(8080, () => {
    console.log(`Server is runnig on port: ${PORT}`);
});