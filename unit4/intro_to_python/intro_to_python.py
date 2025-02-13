# This is a comment! Python will ignore it

"""
this is a 
multi-line comment
"""

'''
this is also
a multi-line comment
'''

# same with 
# this

print("Hello, world!") # prints: Hello, world!

num = 15
'''
This is a variable in python
Notice the lack of let or const keywords. In Python, we only need to decide on a variables name and the value we want to assign to it. There is no way to define a constant variable in Python, but there are conventions to help us communicate that a variable should be a constant, which well cover soon.
'''

# movie
# returns: NameError: name 'movie' is not defined
# this is illegal syntax that cannot be used
# This is because there is no undefined data type in Python.

# num and Num are two different variables

# in Python, we use snake_case
my_number = 10

my_number = 15
print(my_number)
# prints: 15
my_number = -4
print(my_number)
# prints: -4

'''
While Python doesn’t have a way to declare constants, the convention is to declare any variable you’d like to be known as a constant in SCREAMING_SNAKE_CASE.
'''

MY_FAVORITE_NUMBER = 5

print(type("hello"))
# prints: <class 'str'>

print(type(25))
# prints: <class 'int'>

print(type(3.14159))
# prints: <class 'float'>

print(type(25.))
# prints: <class 'float'>

print(type(True))
# prints: <class 'bool'>

# print(type(true))
# NameError: name 'true' is not defined. Did you mean: 'True'?

print(type(None))
# prints: `<class 'NoneType'>`

'''
In this example, numTacos is a number, but when we concatenate it with strings, JavaScript implicitly converts numTacos into a string to create a single string.

However, in Python we cannot do this - there is no type coercion. With few exceptions, variables must be the same type to perform an operation on them. 

num_tacos = 25
msg = "There are " + num_tacos + " tacos."
# TypeError: can only concatenate str (not "int") to str


When the time comes to convert one data type into another, Python provides us with several global functions or predefined classes to do so:
'''
# str(item)        # Converts `item` to a string
# int(item, base)  # Converts `item` to an integer with the provided `base`
# float(item)      # Converts `item` to a floating-point number
# hex(int)         # Converts `int` to a hexadecimal string
# oct(int)         # Converts `int` to an octal string
# tuple(item)      # Converts `item` to a tuple
# list(item)       # Converts `item` to a list
# dict(item)       # Converts `item` to a dictionary

result = 4 / 2
print(result)
# prints: 2.0
print(type(result))
# prints: <class 'float'>

result = 4 // 2
print(result)
# prints: 2 because the decimal ".0" is truncated

# this line of code:
num = num + 1
# can be written with this shortcut operator:
num += 1

# it also works for any of the other math operations:
num = num / 5
# can be rewritten like this:
num /= 5

# and this line:
num = num * 3
# can be written as this:
num *= 3
# and so on with the other operators

'''
A couple of our favorite operators in JavaScript, increment (++) and decrement (–), do not exist in Python. Use += 1 and -= 1 instead.
'''

my_string = "A double-quoted string"
your_string = 'A single quoted string'

multiline_string = '''This is my string that
                      goes on multiple lines
                      for whatever reason'''

little_string = "bad"
medium_string = "super"
long_string = medium_string + little_string
print(long_string)
# prints: superbad

state = "Hawaii"
year = 1959
message = f"{state} was the last state to join the U.S. in {year}."
print(message)
# prints: Hawaii was the last state to join the U.S. in 1959.

print("ace of spades".split(" "))
# prints: ['ace', 'of', 'spades']

# however, this won't work:
print("abcd".split(""))
# ValueError: empty separator

# instead, use the list() function like this:
print(list("abcd"))
# prints: ['a', 'b', 'c', 'd']

# get the index of a substring:
print("abcd".index("c"))    
# prints: 2
# this method raises an error if the substring is not found:
print("abcd".index("e"))
# ValueError: substring not found

# .find() is similar to .index() but returns -1 if the substring is not found
# this behavior may be preferable to raising an error:
print("abcd".find("e"))
# prints: -1

print("boo".upper())
# prints: 'BOO'

print("WHY???".lower())
# prints: 'why???'

print("Then I went to the store I like".replace("I", "you"))
# prints: 'Then you went to the store you like'

print("eggs" in "green eggs and ham")
# prints: True

print(len("Tacos"))
# prints: 5

