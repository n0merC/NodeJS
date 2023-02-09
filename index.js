const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const cors = require("cors");
const port = 3080;

const {sum,login,dif} = require("./sumCalculate");  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin:"*"}));
app.set("port",port);

app.get('/get-hello', (req,res)=>{
    res.send('Hello baucha...');
    // let a = req.query.a;
    // let b = req.query.b;

    // console.log(a+b)

})

function apple(a,b){
    const ss = parseInt(a)+parseInt(b);
    console.log(ss)
    return ss
}
app.post('/get-hillo',async (req,res)=>{
    
    // let c = parseInt(req.query.a)+parseInt(req.query.b);
    // res.status(200).send('sum = '+c)


    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let username = req.body.username;

    // let s = apple(a,b);
    // res.status(200).send('sum ='+s);

    const response =await login(username);
    
    res.status(200).send(response);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
