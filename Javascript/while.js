// let num = 0;
// while(num<100){
//     console.log(num);
//     num++;
// }

// // while(true){
// //     let name = prompt("What is your name?")
// //     if(name === "Ben"){
// //         break;
// //     }
// //     console.log("Wrong name. Try again")
// }

const random = Math.floor(Math.random()*10)
console.log(random)
while(true){
     let number = prompt("Guess a number between 1 and 10");
     number = Number(number)
     if(number === random){
         break;
         console.log("Great");
        }else{
        console.log("Try again");
        }
}