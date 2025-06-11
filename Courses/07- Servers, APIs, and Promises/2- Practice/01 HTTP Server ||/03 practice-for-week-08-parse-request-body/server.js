const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server = http.createServer((req,res) => {

    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    });
    req.on('end',() => {
        if(reqBody){
            let parsed = parseBody(reqBody);
            req.body = parsed;
        }
        sendFormPage(req, res)
    })
  
})
const port = 5000;

server.listen(port, () => console.log('Successfully started the server on port 5000', port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };