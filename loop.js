// ! for loop 
// for (let i = 0; i <=10; i++) {
   
//     for (let j = 0; j<=10; j++) {
//        console.log(i + '*' + j + '=' + i*j);
        
//     }
// }

// !break 

// for(let i =0; i <= 20; i++){
//     if (i == 5){
//         console.log("Detected 5");
//         break;
//     }
// }


// ! Continue 
// for (let i =0; i<= 15 ; i++){
//     if( i == 7){
//         console.log("Thala for a resone")
//         continue;
//     }
//     console.log(i);
// }


// !switch case 

// const myNum = 7;

// switch (myNum) {
//     case 1:
//         console.log("Detected 1");
//         break;

//         case 2 :
//             console.log("Detected 2");
//             break;
         
//         case 7 : 
//             console.log("Thala for a resone");
//             break    

//     default:
//         break;
// }

// !while loop
// let i =0;
// while ( i <= 10){
//     console.log(` value of 1 ${i}`);
//     i++;

// }

// let avngers = ['ironMan', 'captaion', 'thor', 'hulk', 'blackwidow', 'hawkeye'];

// let index = 0;
// while (index < avngers.length){
//     console.log(`value is ${avngers[index]}`); 
//     index++;
// }

// ! do while loop
// let score =1 
// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score <= 10);

//! for of loop with map

// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings  = "greetings champ";

// for ( const grret of greetings){
//     console.log(`value is ${grret}`);
// }


// const map = new Map();

// map.set('captain', 'Dhoni');
// map.set('vice','virat' );
// map.set('agee', 42);
// map.set('age', 32);

// console.log(map);

// for (const [key, value] of map){
//     console.log(key, ':-', value);
// }


// ! for in loop 
// const myobject = {
//     name: 'Dhoni',
//     age: 42,
//     role: 'Captain',
//     country: 'India'
// }

// for (const key in myobject) {
//     console.log( `${key} my crickter ${myobject[key]}` );
// }

// checking for in array 

// const myarray = [1,22,33,4,5,6,7,8]
// for (const key in myarray) {
//     console.log(myarray[key]);
// }