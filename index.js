const express = require('express')
const app = express();
const port = 3080;  
app.get('/get-hello', (req,res)=>{
    res.send('Hello baucha...');
})

function apple(a,b){
    const ss = parseInt(a+b);
    console.log(ss)
    return ss
}
app.post('/get-hillo', (req,res)=>{
    
    // let c = parseInt(req.query.a)+parseInt(req.query.b);
    // res.status(200).send('sum = '+c)
    let a = req.body.a;
    let b = req.body.b;
    let s = apple(a,b);
    res.status(200).send('sum ='+s);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
