const express = require('express')
const app = express()
const hbs = require('hbs');

//Importacion archivo de helpers
require('./hbs/helpers');

//HEROKU: acceso a variables de entorno globales
// el operador || es 'O'

const port = process.env.PORT || 3000;

// Middlewere es un callback que se ejecuta SIEMPRE no importa lo que llames/hagas
//Esto es para que la carpeta sea publica de libre acceso
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'agustina'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});