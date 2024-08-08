//July 25, JS object
//create an object for student with properties of name age and school
let student1 = {
    name: "Peter Pan",
    age: "23",
    school: "QCC"
}

//retrive information in an object using squared bracket
console.log(student1["name"])

//retrive information using the dot
console.log(student1.school)

//you can not use the dot notation if the key property name starts with a number

//update data in an object can be done using the dot or squared bracket notation

student1.age = 30
student1["school"] = "NYU"
console.log(`Update age ${student1.age}`)
console.log(`Update school ${student1.school}`)

console.log("\n--------Example 2 -----------------");

let user1 = {
    name: "Martha",
    age: "80",
    // an array as a property
    friends: ["Wendy", "Carl", "Peter"], // Corrected comma and added comma at the end
    // an object as a property
    favorite: {
        food: "cake",
        color: "green"
    }
};

//access key inside an object
let favorite_food = user1.favorite.food
console.log(`${user1.name} favorite food is ${favorite_food}`)

// access an item inside an array
let second_friend = user1.friends[1]
console.log(`${user1.name} second friend is ${second_friend}`)


//EXAMPLE 3; ARRAY LIST AS OBJECT
console.log("\n--------Example 3 -----------------");

// we can also create an array with object as list items 
let schedule = [
    {
        day: "Monday",
        plan: "GO to yoga class",
        time: "6:30pm"
    },
    {
        day: "Tuesday",
        plan: "Complete",
        time: "11pm"
    }
]

//access the plan for tuesday
console.log(`The plan for Tuesday is ${schedule[1].plan}`)


// EXAMPLE 4: OBJECT METHODS
console.log("\n--------Example 4-----------------");

let item = {
    id: 123,
    name: "pencil",
    quantity: 200,
    color: ['red', 'black', 'blue'],
    // methods
    sale: function() {
        return "SALE! 50% OFF";
    },
    quantity_cart: function(e) {
        this.quantity -= e;
        return this.quantity;
    }
};

// Access sale() method
console.log(`The sale message of ${item.name} is ${item.sale()}`);
console.log(`The remaining quantity of ${item.name} is ${item.quantity_cart(5)}`);

/*
JSON (JavaScript Object Notation) is a format used to store and exchange data.
JSON data is stored as a comma-separated list of key-value pairs within a JSON object.

We can convert a JavaScript object to a JSON string using the 'JSON.stringify()' method.
We can also convert from a JSON string to a JavaScript object using the 'JSON.parse()' method.
*/

// EXAMPLE 5: JSON
let fashionshow = {
    category: "fashion",
    models: [
        {
            name: "Alice",
            age: 21,
            city: "NYC"
        },
        {
            name: "Kelly",
            age: 23,
            city: "Paris"
        }
    ]
};

// Print the object fashionshow
console.log("\n------------EXAMPLE 5------------");
console.log(fashionshow);

//create a JSON version of the JAVASRIPT object
let json_fashionshow = JSON.stringify(fashionshow)
console.log("JSON version:")
console.log(json_fashionshow)

