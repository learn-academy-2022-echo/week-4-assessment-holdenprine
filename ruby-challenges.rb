# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

#Psuedo Code:
#1. Create a method called is_even_or_odd that takes in an integer as an input
#2. use a conditional statement to check if the int is either even or odd
#3. use the method .even? to perform the check
#4. can use a simple else statement as a catchall
#5. print the output string -> "#{num1} is odd" or "#{num1} is even"

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def is_even_or_odd num
    if num.even?
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p is_even_or_odd num1
p is_even_or_odd num2
p is_even_or_odd num3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

#Psuedo Code
#1. create a method called vowel_removal that takes a string as input
#2. create a new variable to store the new string in for output
#3. use the built in method .delete to remove vowels from the given string by giving the argument of all vowels -> "aeiou"
#4. return the variable used to store the new string

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_removal string
    caps_check_string = string.delete('AEIOU')
    downcase_string_check = caps_check_string.delete('aeiou')
    new_string = downcase_string_check
   p new_string 
end
vowel_removal beatles_album1
vowel_removal beatles_album2
vowel_removal beatles_album3



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

#Psuedo Code:
#1. Create a method called palindrome_checker that takes a string
#2. set the input string to .downcase to make it easier to check
#3. Write a conditional statement to check if the input string is equal to a lowercase and reversed version of itself using .reverse and .downcase again
#4. if true print "#{string} is a palindrome" if false, "#{string} is not a palindrome"

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_checker string
    string_to_check = string.downcase
    if string_to_check == string.downcase.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end

palindrome_checker palindrome_tester1
palindrome_checker palindrome_tester2
palindrome_checker palindrome_tester3