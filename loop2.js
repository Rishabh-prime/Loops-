// ! forEach loop 
const coding = [ "js", "ruby", "java", "javascript", 'python' ];


// with arrow function
coding.forEach((item) => {
    console.log(item)
})


// with normal function
const wrestler = [ "undertaker", "stone cold", "the rock", "triple h", "kane" ];
wrestler.forEach( function (item){
    console.log(item)
})

// Paasing the function
function printme(item){
    console.log(item)
}

wrestler.forEach(printme);

// Checking which data you can access through for each 
const cricket = [ "sachin", "dhoni", "virat", "rohit", "rahul" ];

cricket.forEach( (item, index, arr) =>{
    console.log(item, index, arr);
})
 
// using object inside array 

const people = [
    {name: "Dhoni", age: 42},
    {name: "Rohit", age: 35},
    {name: "Virat", age: 32}
];

people.forEach( (item)=> {
    console.log(item.name, item.age)
})




