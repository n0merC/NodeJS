const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const cors = require("cors");
const port = 3080;
require('dotenv').config()
const {sum,login,dif} = require("./sumCalculate");  
const myDBHelper = require("./myDBHelper")
const {validateNewUsers,inputNewUsers,isAvailable} = require("./signUp")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin:"*"}));
app.set("port",port);

app.get('/get-hello', (req,res)=>{
    res.send('Hello baucha...');
    
})

function apple(a,b){
    const ss = parseInt(a)+parseInt(b);
    console.log(ss)
    return ss
}
app.post('/get-hillo',async (req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let username = req.body.username;

    const response =await login(username);
    
    res.status(200).send(response);
})

app.post('/get-signup', (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    inputNewUsers(email,password);

})

app.post('/post-db',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    // const sql = `insert into login(email,password) values ('${email}','${password}');`
    const sql = "select * from login"
    const result = await myDBHelper.query(sql)
    console.log(result)
})

app.listen(port, () => {
    myDBHelper.connection();
    console.log(`Example app listening on port ${port}`)
})
