# favorite_animal = 'dog'

# student = {
#     'name': 'Maria',
#     'favorite_integer': 5,
#     favorite_animal: 'llama' # notice the lack of quotes around favorite_animal
# }

# print(student)
# # prints: {'name': 'Maria', 'favorite_integer': 5, 'dog': 'llama'}
# # note the 'dog' key - the value of the favorite_animal variable is used

# name = student['name']
# print(name)
# # prints: Maria

# # get method can be used to avoid the below key error
# # favorite_food = student['favorite_food']
# # error: KeyError: 'favorite_food'

# print(student.get('favorite_food'))
# # prints: None

# # in operator can also be used to avoid key error to check if dictionary includes a key
# if 'course' in student:
#     print(f"{student['name']} is enrolled in {student['course']}")
# else:
#     print(f"{student['name']} is not enrolled in a course")
#     # prints: Maria is not enrolled in a course

# # We not only use square brackets to get an item’s value - we also use it to set an item’s value
# student['name'] = 'Mariana'
# print(student['name'])
# # prints: Mariana

# # Assigning to a key that does not exist will create a new item in the dictionary.
# # Let’s add an item to the student dictionary:
# student['age'] = 25

# # The del statement is used to delete an item from a dictionary:
# del student['dog']
# # verify that the item was deleted
# print('dog' in student)
# # prints: False

# # Use the built-in len function to retrieve the number of items in a dictionary:
# print(student)
# # prints: {'name': 'Maria', 'favorite_integer': 5, 'age': 25}
# print(len(student))
# # prints: 3
# print(len({}))
# # prints: 0

# # The preferred approach is to use the items() method to obtain a dictionary view object.
# #Use it in a for in loop to iterate over the view object:
# for key, val in student.items():
#     print(f"{key} is {val}")
#     # prints:
#     # name is Maria
#     # favorite_integer is 5
#     # age is 25

# colors = ['red', 'green', 'blue']
# print(colors[0])
# #red
# print(colors[-1])
# #blue

# colors[-1] = 'brown'
# print(colors)

# # colors[10] = 'yellow'
# #error index error list assignment index out of range

# # The equivalent to JavaScript’s push() method is append()
# colors.append('purple')
# print(colors)
# # prints: ['red', 'green', 'brown', 'purple']
# # purple was added to the end of the list
# # For adding multiple items, use the extend():
# colors.extend(['orange', 'black'])
# print(colors)
# # prints: ['red', 'green', 'brown', 'purple', 'orange', 'black']
# # orange and black were added to the end of the list

# # To add an item anywhere within a list, use the insert() method:
# colors.insert(1, 'yellow')
# print(colors)
# # prints: ['red', 'yellow', 'green', 'brown', 'purple', 'orange', 'black']
# # yellow was added at the 1 index; no elements were replaced

# # Python lists have a pop() method, but it’s more flexible in Python because you can specify the index of the item to remove and return:
# green = colors.pop(2)
# print(colors)
# # prints: ['red', 'yellow', 'brown', 'purple', 'orange', 'black']
# # green was removed at the 2 index and is in the green variable

# #There’s also a remove() method that removes the first item that matches what you pass in:
# colors.remove('orange')
# print(colors)
# # prints: ['red', 'yellow', 'brown', 'purple', 'black']

# #The clear() method empties a list:
# colors.clear()
# print(colors)
# # prints: []

# # The for in loop is used to iterate over the items in a list:
# colors = ['red', 'green', 'blue']
# for color in colors:
#     print(color)
#     # prints:
#     # red
#     # green
#     # blue

# # If we need to access the index of the item while iterating over a list, we use the built-in enumerate() function to provide the index and the value to a for loop:
# for idx, color in enumerate(colors):
#     print(idx, color)
#     # prints:
#     # 0 red
#     # 1 green
#     # 2 blue

'''
Tuples in Python are very similar to Python lists. They can be pronounced as either tuh-pull or two-pull. No matter how you pronounce it, someone will be mad at you, so pick one and ignore the haters. Even the creator of Python doesn’t hold a strong opinion either way.

A tuple can hold zero or more items. Tuples can contain any data type and have a class (type) of tuple.

Tuples are commonly classified based on the number of items they contain. For example, a 2-tuple would likely contain two items, such as (key, value).
'''
# usualy defined as below
# colors = ('red', 'green', 'blue')

'''
1. The name of the tuple. This should be plural because it holds a collection of elements.
2. Opening and closing parenthesis indicate a tuple. These are actually optional (except when creating an empty tuple). However, using parenthesis is popular convention.
3. The tuple’s items are placed inside the parenthesis, separated by a comma. When initializing a tuple, you don’t have to include elements; use a set of empty parenthesis - ().

'''

# If you need to create a 1-tuple (a tuple with one item), note that a comma is necessary:
hello_tuple = ('Hello')
# this will not create a tuple
print(type(hello_tuple))
# prints: <class 'str'>

hello_tuple = ('Hello',)
# or just the following (remember parenthesis are not required)
hello_tuple = 'Hello',
print(type(hello_tuple))
# prints: <class 'tuple'>

#Although tuples can’t be modified like lists, we can retrieve their items in the same way using square brackets:
colors = ('red', 'green', 'blue')
print(colors[1])
# prints: green

# Sequences (lists, tuples, and strings) also have an index() method that returns the index of the first match:
colors = ('red', 'green', 'blue')
blue_idx = colors.index('blue')
print(blue_idx)
# prints: 2

# The items in tuples are iterated over by using for loops, as we saw previously with lists:
for idx, color in enumerate(colors):
    print(idx, color)
    # prints:
    # 0 red
    # 1 green
    # 2 blue

# Tuples (and other sequences) have a convenient feature called unpacking. This performs multiple variable assignments in a single line of code:
colors = ('red', 'green', 'blue')
r, g, b = colors
print(r, g, b)
# prints: red green blue

'''
It requires comma-separated variables on the left side of the assignment operator and a sequence of values on the right. Functions and methods often return tuples in Python, which is often the preferred method of accessing them.

You’ve already seen this in action within the for in loops while working with dictionaries. Recall this example:
'''
# for key, val in student.items():
#     print( f"{key} is {val}" )
# this demostrates unpacking!

