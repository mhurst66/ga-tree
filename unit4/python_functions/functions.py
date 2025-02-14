# # A function definition will have the following syntax:
# def function_name():
#     statements
#     return statement

'''
1. The def keyword.
2. The name of the function. It should be written in snake_case.
3. The parameter list, inside parentheses.
4. The body of the function is indicated by a colon.
    4a. The statements that make up the function itself. These must be indented.
    4b. Optionally, a return statement.
'''
# A basic function definition could look something like this:
def do_nothing():
    pass
'''
This function does nothing at all. You’ll recall in JavaScript, we can create empty functions by not including anything inside the body ({ }) of a function.

The pass statement doesn’t do anything. We’re using it here to ensure this function has at least one statement in its block. This is required in Python.

Here’s a function that does a little more:
'''
def print_banner():
    print("=======================")
    print("Insert banner text here")
    print("=======================")
# Just like in JavaScript, defining a function does not execute it. A function must be called for it to run.
print_banner()

'''
Just like in JavaScript, functions are reusable, and we can call the same function more than once.

Also, like in JavaScript, all functions return something, even when we don’t specify something to return. When we don’t return anything from a function in JavaScript, it returns undefined. In Python, functions that we don’t specify a return for return None:
'''

'''
Functions in Python are defined using the def keyword. However, unlike in JavaScript, you cannot define a function in Python by assigning it to a variable:
'''
# # this does not work
# my_function = def my_function():
#     pass

'''
Python has a different sort of anonymous/inline function

Like JavaScript, Python has the concept of anonymous and/or inline functions. These are called lambda functions in Python and have a special syntax.

Lambda functions are very much like arrow functions in JavaScript:

They implicitly return a single expression’s result.
They can be assigned to a variable.
However, they cannot have any code blocks - only a single expression with its result implicitly returned.

For example, in JavaScript, we might have something that looks like this:
'''

# const nums = [1, 3, 2, 6, 5];
# let odds = nums.filter(num => num % 2);

'''
This same behavior and functionality could be duplicated in Python:
'''
nums = [1, 3, 2, 6, 5]
odds = list(filter(lambda num: num % 2, nums))

'''
Lambda functions are useful when using Python functions such as map(), just like how arrow functions are when using JavaScript’s array iterator methods.
'''

# Just like in JavaScript, parameters are the placeholders for passing input to a function.

# text is a parameter
def print_banner(text):
    print("=======================")
    print(text)
    print("=======================")
# Also like JavaScript, the values/expressions passed in to a function when calling it are known as arguments:
# "hello, world" is an arugment
print_banner("hello, world")
'''
However, unlike JavaScript, Python requires that the correct number of arguments be provided when calling a function. For example if you try to call print_banner without any arguments now:

'''

# print_banner()

# # generates the following error:
# # TypeError: print_banner() missing 1 required positional arguments: 'text'

# # Accepting a varying number of arguments
# # In JavaScript, we accomplished this using rest parameters:
# const sum = (...nums) => {
#   total = 0;

#   nums.forEach((num) => {
#     total += num;
#   });

#   return total;
# };


# console.log(sum(1, 5, 10));
# // prints: 16

# Python’s * Parameter Specifier (args)
# Using the * (“star”) specifier in a parameter list allows us to pass in a varying number of positional arguments into a function:
def sum(*args):
    print(type(args))
    # prints: <class 'tuple'>
    total = 0
    
    for arg in args:
        total += arg

    return total

print(sum(1, 5, 10))
# prints: 16

'''
The identifier used with *, for example, args as we used above, can technically be anything. However the convention is to use args.

Always use the *args parameter after any required positional parameters. For example:

'''
def sum(greeting, *args):
    print(greeting)
    # prints: Hello, friend
    total = 0
    
    for arg in args:
        total += arg

    return total

print(sum("Hello, friend", 1, 5, 10))

# Keyword arguments - kwargs
'''
kwargs stands for keyword arguments. This is a different style of passing arguments that isn’t possible in JavaScript.

These are arguments that have a name. You can provide as many as you like to a function when you call it.

As we’ve seen, we can pass positional arguments to a function:
'''
def make_employee(role):
    print(role)
    # prints: CEO

    employee = {"role": role}
    return employee

print(make_employee("CEO"))
# prints: { 'role': 'CEO' }

# But we can pass keyword arguments to a function as well:
def make_employee(role):
    print(role)
    # prints: CEO

    employee = {"role": role}
    return employee

print(make_employee(role="CEO"))
# prints: { 'role': 'CEO' }

'''
Because role is the parameter’s name, we can assign "CEO" to role when we pass it into the make_employee function. That value will be matched to the role parameter because it has the same name.

This can make passing arguments to a function more readable, and is a common practice in many Python frameworks.

'''

# Python’s ** parameter specifier (**kwargs)
'''
If you’d like to access a varying number of keyword arguments, use **kwargs at the end of the parameter list. This is similar to how we passed an arbitrary number of positional arguments with *args.

Just like with args, kwargs could technically be anything but is named kwargs by convention - what matters is the **.

Let’s define and call a function that uses **kwargs:
'''
def make_employee(role, **kwargs):
    print(kwargs)
    # prints: {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
    print(type(kwargs))
    # prints: <class 'dict'>
    # kwargs is a dictionary - you can use it anywhere you'd use one:
    employee = {"role": role, "name": kwargs}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }

'''
kwargs arguments are not positional! You can provide them in any order, but they must come after any positional arguments.

As you can see above, in a function, kwargs can be accessed by its name - kwargs. kwargs is a dictionary, meaning you can treat it as such. For example, you could iterate through it using the values() method:
'''
def make_employee(role, **kwargs):
    username = ""
    for name in kwargs.values():
        username += name

    employee = {"role": role, "username": username}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))

# Combining kwargs and keyword arguments
# We can combine these ideas in the same function:
print(make_employee(role="CEO", first="Sam", middle="Harris", last="Altman"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }
# We can even provide the role out of order if we want:
print(make_employee(first="Sam", middle="Harris", last="Altman", role="CEO"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }
# Note when we do this, role is not added to the kwargs dictionary - it is matched directly with its positional parameter.

# Combining argument types
'''
Required positional, optional positional (*args), and keyword (**kwargs) arguments can all be used simultaneously.

But note that order is important! Check out this example:
'''
def arg_demo(pos1, pos2, *args, **kwargs):
    print(f'Positional params: {pos1}, {pos2}')
    print('*args:')
    for arg in args:
        print(' ', arg)
    print('**kwargs:')
    for keyword, value in kwargs.items():
        print(f'  {keyword}: {value}')

arg_demo('A', 'B', 1, 2, 3, color='purple', shape='circle')
# Which results in this output:
'''
Positional params: A, B
*args:
  1
  2
  3
**kwargs:
  color: purple
  shape: circle
  
'''