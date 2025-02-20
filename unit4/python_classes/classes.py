class Dog():
    next_id = 1

    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        # assign the current value of 'next_id' to this instance
        self.id = Dog.next_id
        # increment the class attribute 'next_id' so the next dog gets a new ID
        Dog.next_id += 1
    
    def bark(self):
        print(f'{self.name} says woof!')

    def __str__(self):
        return f'Dog #{self.id} named {self.name} is {self.age} years old.'
    
    @classmethod
    def get_total_dogs(cls):
        # cls represents the Dog class
        return cls.next_id - 1

spot = Dog('Spot', 2)
diogee = Dog('Diogee')

harry = Dog('Harry', 2)

print(harry)

maggie = Dog('Maggie')

print(maggie)

ruby = Dog('Ruby', 3)

print(ruby)
# prints: something like <__main__.Dog object at 0x1031c0f90>

# print the 'name' and 'age' attributes of the ruby object
print(ruby.name, ruby.age)
# prints: Ruby 3

#invote the ruby object's bark instance method
ruby.bark()
#prints: ruby says woof!

#dont pass a second argument
liam = Dog('Liam')

# print(liam.name, liam.age)
# #prints: Liam 0

# #class methods are called on the class, not an instance
# print(Dog.get_total_dogs())
# # prints: an integer representing however many dogs you created!

# # Create a list
# nums = [1, 2, 3]
# # use the dir() function to list all attributes and methods of the list
# # print(dir(nums))

# # print(dir(ruby))

# class Vehicle():
#     def __init__(self, make, model):
#         self.make = make
#         self.model = model
#         self.running = False
    
#     def start(self):
#         self.running = True
#         print('Starting Up!')
    
#     def stop(self):
#         self.running = False
#         print('Turning off.')
    
#     def __str__(self):
#         return f'The vehicle is a {self.make} {self.model}.'

# car = Vehicle("Toyota", "RAV4")

# print(car)
# # prints: The vehicle is a Toyota RAV4

# print(car.running)
# # prints: False

# car.start()
# #prints: Starting up!

# print(car.running)
# # prints: True

# car.stop()

class ShowDog(Dog):
    # add additional parameters AFTER those in the superclass
    def __init__(self, name, age=0, total_earnings=0):
        # always call the superclass's __init__ first
        Dog.__init__(self, name, age)
        # then add any new attributes
        self.total_earnings = total_earnings
    
    # add additional methods
    def add_prize_money(self, amount):
        self.total_earnings += amount
        print(f'{self.name}\'s new total earnings are ${self.total_earnings}')
    
winky = ShowDog('Winky', 3, 1000)

print(winky)
#prints: Dog #7 named Winky is 3 years old.

winky.bark()
# this shows the 'ShowDog' class inherited the 'Dog' class methods

print(winky.total_earnings)
# prints: 1000

winky.add_prize_money(500)
# new method that the 'Dog' class doesnt have

print(winky.total_earnings)
