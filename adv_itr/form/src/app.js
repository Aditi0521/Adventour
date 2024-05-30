const express = require('express');
const app = express();
let port = 3000;
const path = require('path');
const formCollection = require('./model/mode');

const template_path = path.join(__dirname, '../template/views');

app.set('view engine', 'hbs');
app.set('views', template_path);

app.use(express.urlencoded({extended : false}));

require('./db/db');

app.get('/',(req,res) =>{
    res.render('index');
})

app.post('/cont', async(req,res) =>{
    // console.log(req.body.name);
    // res.send(req.body.name);
    const cont = new formCollection(
        {
            name: req.body.name,
            email: req.body.email,
            phone : req.body.phone,
            message: req.body.message
        }
    );
    const postData = await cont.save();
    res.send(postData);
})

app.listen(port, ()=>{
    console.log(`listing to the port ${port}`);
})