/* const name2 = process.argv[2];
console.log(process.env.USER); */

const server = require('./api/server');

const port = process.env.PORT || 9000;

server.listen(port, ()=>{
    console.log(`Server running on port ${port}...`);
})