var express = require('express');
var exphbs = require('express-handlebars')
var bodyparser = require('body-parser')
var medsApp = require('./meds-app')

var app = express()

const medApp = medsApp()

app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyparser.urlencoded({extended: false}))
app.set(bodyparser.json())

app.get('/', function (req,res){
    
    res.render('index')
})

app.post("/deliveryschedule", function(req,res){
   
    const med =  medApp.diffCode(req.body.code)
    console.log(med);
    
    if (med) {
        res.render('deliveryschedule', {})
    } else {
        res.render("summary")
    }
   
})

app.get("/inconvinience", function(req,res){
//     var mesg = medApp.message(req.body.msg)
//     if (mesg){
     res.render('inconvinience')
//     }else{
//         res.render("summary")
//     }
})


var PORT = process.env.PORT || 3008;

app.listen(PORT, function(){

})