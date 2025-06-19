# fruits = ("apple", "banana", "cherry", "kiwi", "mango")

# (green, yellow, *others) = fruits
# print(green)   # apple
# print(yellow)  # banana
# print(others)  # ['cherry', 'kiwi', 'mango']
# print(type(others))
# print(fruits)

# print((fruits*2).index("banana"))
# print((fruits*2).index("banana",5))


# # newlist = [expression for item in iterable if condition == True]


# original_list = [1, 2, 3]
# copied_list = list(original_list)
# print(copied_list)
# copied_list = original_list
# copied_list = original_list[:]
# copied_list = original_list.copy()

# original_list[0] = 444
# print(copied_list)


# thisdict = {
# 1: "Ford",
# "model": "Mustang",
# "year": 1964
# }


# x = thisdict.values()
# print(x)
# print(type(x))
# x = thisdict.items()
# print(x)
# print(type(x))
# lambda arguments : expression
# x = lambda a : a + 10
# print(x(5))
# def my_function(child3, child2, child1):
#     print("The youngest child is " + child3)


# my_function(child1 = "Habiba", child3 = "Malak",child2 = "Mohamed")

lst = []
nums = [15,6,0,0]
lst.append(nums)

nums = [10,20,30]
lst.append(nums)
lst.sort()
print(lst)

# thisTuple = (1,2,3,3,4,5)
# x = thisTuple.index(3)
# print(x)
