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

function addNewItem(getOrderItem){
    setTimeout(()=>{
        orders.push({fruits:"apple",qty:4})
        getOrderItem(orders)
    },6000);
    // return getOrderItem()
}


addNewItem(getOrderItem);
// getOrderItem(orders);