import http from 'http';
const PORT = 39000;
import app from './app.js';

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`the server is listening on port: ${PORT}`);
})
