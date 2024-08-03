// Explicit type
function greeter(username: string) {
    console.log(`Welcome to TypeScript, ${username}`);
}
let user = "Ahmad Karim";
greeter(user);

// Implicit type
var y = 12;
console.log(y);

// Explicit array list
let colors: string[] = ['red', 'blue', 'white'];
console.log(colors);

// Implicit type
let numbers = [3, -9, 5];
console.log(numbers);

// The following line will cause an error because TypeScript infers 'numbers' as an array of numbers
// numbers = ['fish', 'dog', 'cat'];
// console.log(numbers);

console.log("\n------------Example 2: any type----------");
// Use the 'any' type to allow any type of data
let a: any;
a = 5;
console.log("a = 5", typeof(a));
a = "Peter Pan";
console.log("a = 'Peter Pan'", typeof(a));
a = false;
console.log("a = false", typeof(a));

console.log("\n------------Example 3: unknown type----------");
// 'unknown' is similar to 'any'
let b: unknown;
b = 10;
console.log("b = 10", typeof(b));
b = "Peter Pan";
console.log("b = 'Peter Pan'", typeof(b));
b = true;
console.log("b = true", typeof(b));

console.log("\n------------Example 4: enum type----------");
// 'enum' is a special class that represents a group of constant values that can't be changed
// Enums can use numerical or string constants

enum Countries {USA, CANADA, MEXICO}
let USA = Countries.USA;
let CANADA = Countries.CANADA;
let MEXICO = Countries.MEXICO;

console.log(`Enum value of CANADA: ${CANADA}`);
console.log(`Enum value of MEXICO: ${MEXICO}`);
console.log(`Enum value of USA: ${USA}`);

console.log("\n------------Example 5: data classes type----------");
let username:string = "Ann Smith"
let characters_name = username.length
console.log(`User ${username} has ${characters_name} characters`)

//if it is in implicate data type we must cast it to the specific data type before applying a mathod
let firstname = "Luisa"
//cast into string
firstname = <string>firstname
let character_firstname = firstname.length;
console.log(`User ${firstname} has ${character_firstname} characters`)

console.log("\n------------Example 6: return type function----------");
function get_item():number{
    return new Date().getHours()
}
console.log(`The time is ${get_item()}h`)

console.log("\n------------Example 7: Void Function----------");
//void function does not return values
function greeting():void{
    console.log('Welcome to Angular data  type')
}
//calling function 
greeting()

console.log("\n------------Example 8: Void Function----------");

function get_sum(num1: number, num2: number, name: string): string {
    let result = name + ", the number is " + (num1 + num2);
    return result;
}

console.log(get_sum(2, 3, "Peter"));



console.log("\n------------Example 9: optional parameter----------");
// the ? operator marks parameter as optional
function sum_total(n1:number, n2?:number):number{
   if(n2 !== undefined){
    return (n1+n2)
   }
   else {
    return -1
   }
}

console.log(`The sum is ${sum_total(5,9)}`)
console.log(`The sum is ${sum_total(5)}`)

console.log("\n------------Example 10: spread syntax----------");
//spread syntax is used to deconstuct an array
function get_average(...n:number[]) : number{
    let total = 0 
    let average = 0 
    for(let i = 0; i<n.length; i++){
        total += n[i]
    }
    average = total / n.length
    return average
}
console.log(`the Average is ${get_average(10, 6, 2)}`)

console.log("\n------------Example 11: class----------");
class Car{
    brand:string
    model:string
    year_manufacture:number

    constructor(brand:string, model:string, year_manufacture:number){
        this.brand = brand
        this.model = model
        this.year_manufacture = year_manufacture
    }

    year(){
        console.log(`The car was manufactured at ${this.year_manufacture}`)
        
    }
}

//create a modal for class car
let usercar = new Car('Tesla', 'S', 2023)
//access data of the modal of the car through usercar
console.log(`Car brand = ${usercar.brand}`)
usercar.year()

console.log("\n------------Example 12:  inherent class----------");
//Inheritance is a name of transfer genetic characteristics by extending from one class to another using thew keword extends
class Person {
    save(){
        console.log('Registration Successful')
    }   
}
class Customer extends Person{
    sale(){
        console.log('x items was sold')
    }
}
class Employee extends Customer{
    salary(){
        console.log('Salary paid')
    }
}

//create a model for person
let person1 = new Person
//calling the method of the modal person 1
person1.save()

//create a modal for customer
let customer1 = new Customer
//calling the method sale of the modal customer 1 
customer1.sale()
//calling the inherint method 'salary' through the modal customer
customer1.save()

//create a modal for Employee
let employee1 = new Employee
//calling the inherint method save() through modal employee1
employee1.save()
