const express = require('express');
const app = express();
const port = 3000;




app.get('/', (req, res) => {
    res.send('Home Server');
});



app.listen(port, () => {
    console.log('App attiva su port: ' + port);

});