const app = require('./app.js');

const PORT = 3001;

const server = require('http').createServer(app);
server.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});