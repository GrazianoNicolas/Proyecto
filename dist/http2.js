"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http2_1 = __importDefault(require("http2"));
const fs_1 = __importDefault(require("fs"));
const server = http2_1.default.createSecureServer({
    key: fs_1.default.readFileSync("./keys/server.key"),
    cert: fs_1.default.readFileSync("./keys/server.crt"),
}, (req, res) => {
    // console.log(req.url);
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.write('<h1> hola mundo </h1>');
    // res.end();
    // const data={name:'jonh doe', age: 30, city:'buenos aires' };
    // res.writeHead(200,{'Content-Type':'application/json'})
    // res.end(JSON.stringify(data));
    if (req.url === "/") {
        const htmlFile = fs_1.default.readFileSync("src/public/index.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlFile);
    }
    else {
        // res.writeHead(404, {'Content-Type':'text/html'});
        // res.end();
    }
});
server.listen(8780, () => {
    console.log("server running on port 8780");
});
