const express = require('express');
const app = express();
const port = 3000;




function main(){

    app.use(express.static("public"));

    app.get('/page1', (req, res) => {
        res.sendFile(__dirname + '/public/list.html');
      });
      
    
    app.listen(port , () => {
        console.log(`Example app listening on port   ${port}`);

    });

}
main();