var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Explicit type
function greeter(username) {
    console.log("Welcome to TypeScript, ".concat(username));
}
var user = "Ahmad Karim";
greeter(user);
// Implicit type
var y = 12;
console.log(y);
// Explicit array list
var colors = ['red', 'blue', 'white'];
console.log(colors);
// Implicit type
var numbers = [3, -9, 5];
console.log(numbers);
// The following line will cause an error because TypeScript infers 'numbers' as an array of numbers
// numbers = ['fish', 'dog', 'cat'];
// console.log(numbers);
console.log("\n------------Example 2: any type----------");
// Use the 'any' type to allow any type of data
var a;
a = 5;
console.log("a = 5", typeof (a));
a = "Peter Pan";
console.log("a = 'Peter Pan'", typeof (a));
a = false;
console.log("a = false", typeof (a));
console.log("\n------------Example 3: unknown type----------");
// 'unknown' is similar to 'any'
var b;
b = 10;
console.log("b = 10", typeof (b));
b = "Peter Pan";
console.log("b = 'Peter Pan'", typeof (b));
b = true;
console.log("b = true", typeof (b));
console.log("\n------------Example 4: enum type----------");
// 'enum' is a special class that represents a group of constant values that can't be changed
// Enums can use numerical or string constants
var Countries;
(function (Countries) {
    Countries[Countries["USA"] = 0] = "USA";
    Countries[Countries["CANADA"] = 1] = "CANADA";
    Countries[Countries["MEXICO"] = 2] = "MEXICO";
})(Countries || (Countries = {}));
var USA = Countries.USA;
var CANADA = Countries.CANADA;
var MEXICO = Countries.MEXICO;
console.log("Enum value of CANADA: ".concat(CANADA));
console.log("Enum value of MEXICO: ".concat(MEXICO));
console.log("Enum value of USA: ".concat(USA));
console.log("\n------------Example 5: data classes type----------");
var username = "Ann Smith";
var characters_name = username.length;
console.log("User ".concat(username, " has ").concat(characters_name, " characters"));
//if it is in implicate data type we must cast it to the specific data type before applying a mathod
var firstname = "Luisa";
//cast into string
firstname = firstname;
var character_firstname = firstname.length;
console.log("User ".concat(firstname, " has ").concat(character_firstname, " characters"));
console.log("\n------------Example 6: return type function----------");
function get_item() {
    return new Date().getHours();
}
console.log("The time is ".concat(get_item(), "h"));
console.log("\n------------Example 7: Void Function----------");
//void function does not return values
function greeting() {
    console.log('Welcome to Angular data  type');
}
//calling function 
greeting();
console.log("\n------------Example 8: Void Function----------");
function get_sum(num1, num2, name) {
    var result = name + ", the number is " + (num1 + num2);
    return result;
}
console.log(get_sum(2, 3, "Peter"));
console.log("\n------------Example 9: optional parameter----------");
// the ? operator marks parameter as optional
function sum_total(n1, n2) {
    if (n2 !== undefined) {
        return (n1 + n2);
    }
    else {
        return -1;
    }
}
console.log("The sum is ".concat(sum_total(5, 9)));
console.log("The sum is ".concat(sum_total(5)));
console.log("\n------------Example 10: spread syntax----------");
//spread syntax is used to deconstuct an array
function get_average() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var average = 0;
    for (var i = 0; i < n.length; i++) {
        total += n[i];
    }
    average = total / n.length;
    return average;
}
console.log("the Average is ".concat(get_average(10, 6, 2)));
console.log("\n------------Example 11: class----------");
var Car = /** @class */ (function () {
    function Car(brand, model, year_manufacture) {
        this.brand = brand;
        this.model = model;
        this.year_manufacture = year_manufacture;
    }
    Car.prototype.year = function () {
        console.log("The car was manufactured at ".concat(this.year_manufacture));
    };
    return Car;
}());
//create a modal for class car
var usercar = new Car('Tesla', 'S', 2023);
//access data of the modal of the car through usercar
console.log("Car brand = ".concat(usercar.brand));
usercar.year();
console.log("\n------------Example 12:  inherent class----------");
//Inheritance is a name of transfer genetic characteristics by extending from one class to another using thew keword extends
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log('Registration Successful');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log('x items was sold');
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('Salary paid');
    };
    return Employee;
}(Customer));
//create a model for person
var person1 = new Person;
//calling the method of the modal person 1
person1.save();
//create a modal for customer
var customer1 = new Customer;
//calling the method sale of the modal customer 1 
customer1.sale();
//calling the inherint method 'salary' through the modal customer
customer1.save();
//create a modal for Employee
var employee1 = new Employee;
//calling the inherint method save() through modal employee1
employee1.save();
