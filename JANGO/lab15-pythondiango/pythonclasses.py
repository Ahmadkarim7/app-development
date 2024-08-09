"""
Ahmad Adil Karim
Aug 8, Python classes
"""
print("-----Example 1: class definition------")

class MyClass: 
    x = 5

# Instantiating the class
myclass1 = MyClass()

# Printing the output
print("The complete class:", myclass1)
print("Property of MyClass:", myclass1.x)


print("-----Example 2: initialized a class------")

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        # set a class property
        self.luckynumber = 88

    # return string
    def __str__(self):
        return f"user {self.name} is {self.age} years old"

    # method
    def mymethod(self):
        print(f"{self.name}'s lucky number is {self.luckynumber}")

# create an object of class Person 
user1 = Person("Ann", 23)

print(f"Result --> {user1}")
user1.mymethod()
print(f"Class property --> {user1.luckynumber}")


#create class property value
user1.age = 31
print(f"Result --> {user1}")

#empty class
class Schedual:
    pass

    print(f"\n--------Example 3: class with adjustable methods----")
    class Number :
        def __init__(self, num):
            self.num = num

    #accesible property
    num_symbol = '$'

    #define a mthod to print the number
    def doublenumber(self):
        self.num = self.num*2
    
    #return string of the class 
    def __str__(self):
        return f"The final number is {self.num_symbol}{self.num}"

    #create an object of class number
    n1 = Number(12)
    # print the object of the class
    print(f"Object of class number--. {n1}")
    # class  mehtod doublenumber()
    n1.doublenumber()
    #print the object of the class number
    print(f"Object of the class number --> {n1}" )
    # call the method doublenumber
    n1.doublenumber()
    #print the object of the class Number
    print(f"Object of class number")

    print(f"\n--------Example 4: class with private property----")

class Chair:
    def __init__(self, height, width, length):
        self.height = height
        self.width = width
        self.length = length
        self.shippingcostfee = 0.2
        self.totalshippingcost = 0

        # Accessible property
        self.chair_color = 'brown'

    # Method to calculate the dimension
    def total_dimension(self):
        return self.height * self.length * self.width

    # Method to calculate the total shipping cost
    def total_shipping(self):
        self.totalshippingcost = self.shippingcostfee * self.total_dimension()
        return self.totalshippingcost

    # Return string representation of the class
    def __str__(self):
        return f"The total shipping cost for the {self.chair_color} chair is ${self.total_shipping()}"

# Create an object of the class
chair1 = Chair(3, 4, 5)

# Print the object
print(f"Total shipping cost of the {chair1.chair_color} chair is ${chair1.total_shipping()}")

