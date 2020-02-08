const app = require('./app.js');

//port on which server runs
const PORT = require('./config').PORT;

const server = require('http').createServer(app);
server.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});