const express = require('express');
const app = express();
//const request = require('request');
const path = require('path');
const port = 9000;
var cors = require('cors');
app.use(cors());

var decade_router = require('./routes/decade_poblation');
var fertilityRateRouter = require('./routes/fertitlity_rate_country_decade');

const MySqlConsultor = require('./db_connection/mysql');
const mysqlcons = new MySqlConsultor();
/*
app.set('view engine', 'ejs');
//utilizar .ejs para las views en el folder de views
app.set('views', path.join(__dirname, 'views'));
app.use("/views", express.static('./views/'));
*/
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/decade_poblation', decade_router);
app.use('/fertilityRate', fertilityRateRouter);


/*
app.get('/', (req, res) => {
  res.render('index');
});*/

/*app.get('/decade_poblation', (req, res) => {
  res.send([{}]);
});*/


app.listen(port, () => {
  console.log(`Conexion establecida`);
});
