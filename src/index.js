// "Create React App" tooling expects to find the WWW root here,
// so we simply use this file to import the ./www directory.
//
// For the backend, we set the container's entrypoint to src/api/index.js

// module.exports = require('./www')

const jsonServer = require("json-server")
const path = require("path")

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname + "/db.json"))
const middlewares = jsonServer.defaults({
    static: path.resolve(__dirname + "/../build/")
})

const port = process.env.PORT || 3001

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use(router)
server.listen(port, () => {
    console.log("JSON Server is running")
})
