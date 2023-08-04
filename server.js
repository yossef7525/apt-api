import http from 'http';
const PORT = 39000;
import app from './app.js';
import  dotenv from 'dotenv';
dotenv.config();


const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`the server is listening on port: ${PORT}`);
})
