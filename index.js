var express = require('express');
var exphbs = require('express-handlebars')
var bodyparser = require('body-parser')
var medsApp = require('./meds-app')
const pg = require("pg");
const Pool = pg.Pool;


let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local){
    useSSL = true;
}
// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://lumanyano:sanelisiwe@localhost:5432/prescription';

const pool = new Pool({
    connectionString,
    ssl : useSSL
  });


// let useSSL = false;
// let local = process.env.LOCAL || false;
// if (process.env.DATABASE_URL && !local){
//     useSSL = true;
// }

// const connectionString = process.env.DATABASE_URL || 'postgresql://lumanyano:sanelisiwe@localhost:3008/prescription';

// const pool = new Pool({
//     connectionString,
//     ssl : useSSL
//   });

var app = express()

const medApp = medsApp()

app.use(express.static('public'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyparser.urlencoded({ extended: false }))
app.set(bodyparser.json())

app.get('/', function (req, res) {

    res.render('index')
})

app.post("/deliveryschedule", async function (req, res) {
   try {
    var code = req.body.code;
    const med = medApp.diffCode(code)
    // console.log(code);
    const data = await pool.query('select * from prescriptions where code = $1', [code])
    console.log(data);

    if (data.rows.length > 0) {

        const prescription = data.rows[0];

        prescription.items = prescription.medicine.split(",");

        console.log(prescription)

        res.render('deliveryschedule', {
            prescription,
            code
        });

    } else {
        res.render("summary")
    }
   } catch (error) {
       console.log(error);
       
   }

})

app.get("/inconvinience", function (req, res) {
  
    res.render('inconvinience')
   
})

app.get("/summary/:code", async function (req, res) {

       
    var code = req.params.code;
    const med = medApp.diffCode(code)
    // console.log(code);
    const data = await pool.query('select * from prescriptions where code = $1', [code])
    console.log(data);
    if (data.rows.length > 0) {

        const prescription = data.rows[0];

        prescription.items = prescription.medicine.split(",");

        console.log(prescription)

        
        res.render('summary', {
            items: prescription.items,
            code
        });
    } 
    res.render('summary');
   

})

app.get('/thanks', function(req, res){
    

    res.render("thankyou", 
    )
})


var PORT = process.env.PORT || 3008;

app.listen(PORT, function () {

})