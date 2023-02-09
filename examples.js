(async () => {
    //callback function
    const orders = [
        { fruits: "mango", qty: 10 },
        { fruits: "orange", qty: 40 }
    ]

    function order() {
        setTimeout(() => {
            console.log(orders)
        }, 3000);
    }

    async function getOrderItem(orders) {
        console.log("getOrderITems ===", orders)
    }

    async function addNewItem() {

        // return new Promise((resolve,reject)=>{
        //     const err = false
        //     setTimeout(()=>{
        //         orders.push({fruits:"apple",qty:4})
        //         if(err)
        //         resolve()
        //         reject();
        //     },6000);
        // })

        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                orders.push({ fruits: "Apple", qty: 5 })
                resolve(true)
            }, 6000)
        })
    }

    const updatedOrder = await addNewItem()
    console.log(updatedOrder)
    if(updatedOrder){
        const orderList = await getOrderItem(orders);
    }



    //Promise function
    // addNewItem().then(response =>{
    //     console.log("response success ===")
    //     getOrderItem(orders)
    // }).catch((err)=>{
    //     console.log("err ===")

})()