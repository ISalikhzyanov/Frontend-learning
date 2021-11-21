// // // // console.log(notDefined)
// // // var notilnitialized
// // // console.log(notilnitialized)
// // // var normal = 10
// // // console.log(normal)
// // // let value = 10
// // {
// //
// //
// //
// //
// //     let value = 20
// //
// //
// //
// //
// //
// //
// //
// //
// // }
// // console.log(value)
// let variable = "outher"
// {
// let variable = 'inner'
//     console.log(variable);//TDZ
//
// }
// if(10 > 50){
//    console.log(true)
// } else{
//     console.log(false)
// }
// const names =['kap','lat','esp']
// console.log(names)
// for(let name of names){
//     console.log(item)
// }
// const hour = 150
// const total = 100
//
// function salary(hourPayment,hours){
//
//     const result = hourPayment*hours
//     return result
// }
//
// const sum = salary(hour,total)
// console.log(sum)

let pharmacy = 2000
let product = 1500
let gasoline = 3000

function cback(ph, pr, gas) {
    let money = (ph * 0.01) + (pr * 0.1) + (gas * 0.3)

    if (money > 3000) {
        money = 3000
    }
    return money
}

let profit = cback(pharmacy, product, gasoline)
console.log(profit)

