//callback function
const orders = [
    {fruits:"mango",qty:10},
    {fruits:"orange",qty:40}
]

function order(){
    setTimeout(()=>{
        console.log(orders)
    },3000);
}

function getOrderItem(orders){
    console.log("getOrderITems ===", orders)
}

function addNewItem(){
    
    return new Promise((resolve,reject)=>{
        const err = false
        setTimeout(()=>{
            orders.push({fruits:"apple",qty:4})
            if(err)
            resolve()
            reject();
        },6000);
    })
}


addNewItem().then(response =>{
    console.log("response success ===")
    getOrderItem(orders)
}).catch((err)=>{
    console.log("err ===")
});
// getOrderItem(orders);