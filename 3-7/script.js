// console.log("start script")

// function walkInRes(cb){
//     setTimeout(() => {
//         console.log("i am walking inside the restaurant");
//     }, 5000);
//     setTimeout(cb,3000)
// }

// function checkMenu(cb){
//     console.log("i am checking menu")
//     setTimeout(cb,2000)
// }

// function orderFood(cb) {
//     console.log("i am ordering food")
//     setTimeout(cb,5000)
// }

// function havingLunch(cb) {
//     console.log("i am having lunch")
//     setTimeout(cb, 6000)
// }

// function payBill(cb) {
//     console.log("i am paying bill")
//     setTimeout(cb, 2000)
// }

// function walkOut(cb) {
//     console.log("i am walking out")
// }
// walkInRes(()=>{
//     checkMenu(()=>{
//         orderFood(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkOut();
//                 })
//             })
//         })
//     })
// })

// console.log("something")
// console.log("something")
// console.log("end script")


var cart = ["shoes", "watches", "T shirt", "jeans", "accesories"];

function createcart(cart, callback) {
    var noofitem = cart.length;
    var price = noofitem * 1000;
    callback({ price, noofitem });
}

function placeorder({ price, noofitem }, callback) {
    var orderid = Math.floor(Math.random() * 1000000);
    callback({ orderid, price, noofitem });
}

function orderpayment({ orderid, price, noofitem }, callback) {
    console.log(`Order placed with order no: ${orderid} and price to pay is ${price}`);
    callback();
}

function orderstatus() {
    console.log(`Order placed successfully`);
}

createcart(cart, function (cartDetails) {
    placeorder(cartDetails, function (orderDetails) {
        orderpayment(orderDetails, function () {
            orderstatus();
        });
    });
});
