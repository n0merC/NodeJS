const express = require('express')
const app = express();
const port = 3080;  
app.get('/get-hello', (req,res)=>{
    res.send('Hello baucha...');
})

app.post('/get-hillo', (req,res)=>{
    let c = parseInt(req.query.a)+parseInt(req.query.b);

    res.status(200).send('sum = '+c)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
