const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname ));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

//Escuchar server
app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto: ', port)

});