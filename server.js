const http = require("http");
const getReq = require('./methods/getReq')
const postReq = require('./methods/postReq')
const putReq = require('./methods/putReq')
const deleteReq = require('./methods/deleteReq')
let movies = require("./data/dummy.json");
require("dotenv").config();

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {

    req.movies = movies;

    switch(req.method) {
        case "GET":
            getReq(req, res);
            break;

        case "POST":
            postReq(req, res);
            break;

        case "PUT":
            putReq(req, res);
            break;

        case "DELETE":
            deleteReq(req, res);
            break;

        default:
            res.statusCode=404;
            res.setHeader("Content-type", "application/json");
            res.write(JSON.stringify({title: "Not Found" , message : "Route not found"}));
            res.end();
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`)
})
