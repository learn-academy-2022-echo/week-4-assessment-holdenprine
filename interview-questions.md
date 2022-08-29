# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming stems from the idea that containing data in the form of objects for organized performance of operations and manipulations is the premier means of structuring a program/ application. Inversely, functional programming has a focus on functions as a means of operating logic and handling data. These styles are generally applicable to any given framework or programming language yet OOP has taken hold as the industry favorite in structuring programs since objects became the standard for managing data. The concept of organizing meaningful information in objects goes hand in hand with the idea of seperation of concerns. As applications scale, the management of data and logic can become increasingly difficult. The organizational benefits to creating classes and objects makes the code base easier to interpret and maintain as all data can be traced back to a container and handler. 

Researched answer: After more research I found my explaination of OOP suffices, yet theres some important considerations for why it's used so universally in software development. Firstly is its modularity that allows for easy debugging. With classes and objects being encapsulated, chasing bugs becomes much easier. Second is reusability. The modularity of objects makes refactoring and development easier as there are very tracable aspects to any code base that uses OOP. This in turn improves productivity as new developers to a code base using OOP can easily track the seperation of concerns which in turn provides crutial information on what does what. The last aspect I figure I should cover is its flexibility through a concept called polymorphism. Polymorphism allows an object the ability to change in a few different time lines in a programs runtime and optimally makes use of objects instantiation.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: There are all kinds of numbers that we have access to as programmers. In JavaScript these all fall under the umbrella of the data type number. In certain languages its important to distinguish what kind of number you are using. In languages like Java or C# you have a great deal of number related data types from long (massive decimal numbers) all the way down to bytes (exactly what it sounds like). In Ruby we have access to two; float and integer. The simplest difference between an integer and float is that integers are whole numbers and floats are any form of decimal number. Its incredibly useful to have access to decimal numbers because we can express massive values doing so. In Java you would use a long for a number that might need to be expressed in scientific notation, but in ruby that can all be delegated to float. Floats can sometimes run into issues when doing mathematical operations on them. For example you might expect 0.1+0.2 to equal 0.3 and you wouldn't be wrong, but if you were to execute this in ruby you would get something like this:
```ruby
> 0.1 + 0.2
> 0.30000000000000000000004
```
this is obviously incorrect and whats actually happening comes down to a binary level. In the analog world we use base ten in our counting system which comes in handy when expressing huge numbers, ie. scientific notation. Computers on the other hand use base 2 as then have to rely on binary. When expressing decimals in binary things can get complicated fast. For example take the number 0.1, in binary this is expressed as 0.000110011. For 0.2 it is expressed as 0.00110011001100. As you do the math you come to see the issue which has been mitigated by rounding methods and built in handlers for languages like JavaScript and many more. In all thats the basic difference.

Researched answer: Some extra important aspects to floats and integers is in their application. We use basic integers for their application in defining initialized values, etc. When it comes to floats their primary use is in their precision. While as stated above their can be issues in their mathematical accuracy but many languages (including JavaScript) have handlers built in behind the scenes to deal with these issues, mostly in their inaccuracy in rounding that occurs due to how these numbers are stored (in base 2 due to binary). 

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return refers to a a methods output value being implied. The idea is that Ruby interprets the final statement in your block as what you wish to return. This is highly simplified from other languages where you can have an implicit return but only while a simplified, single operation is being executed. In general this isn't scalably useful. In ruby on the other hand, this applies to all methods and makes organizing outputs and expected outputs fairly simple. 

Researched answer: While implicit return in ruby isn't normally prone to errors, it can still sometimes occur. Namely there is an error that can be thrown called the LocalJumpException. This occurs when using Procs; a method that stores data in a local variable that can be shared amongst other methods. This makes sense in that there must be some level of distinction in whats being shared vs whats immediately being implicitly returned.

4. What is a block in Ruby?

Your answer: At their core ruby blocks are anonymous methods that are encapsulated in do/end statements that defines their scope. These blocks implement an implicit return as well, making the method calls return simple.

Researched answer: After some deeper research on blocks, its important to note that other methods can be called within blocks. For example the call method, when implemented inside a block at the final piece of returnable code, will execute that code from within the method call immediately. There are many more examples of complexities but the important distinction between a ruby block and a chunk of ruby code is simply in its form. 

5. What is an instance variable in Ruby?

Your answer: The concept of an instance variable stems from the general concept of an instance in programming. When you create an instance of either a variable, object, or class, you are creating a copy of a blue print that is then filled with unique information. In the case of the instance variable, this is a name you give to that instantiated object. To utilize the information within the new variable instantiated, the variable can be called with dot notation to access one of its methods and or data.

Researched answer: Its important to note that these instantiated variables are created as brand new objects. This means any mutations to data in other objects of the same parent object or class will not be carried over. These are new instances and therefore are clean slates to work with.

## Looking Ahead: Terms for Next Week

1. PostgreSQL: An off-shoot of the Ingres database management system, PostgreSQL is a database management system built to be SQL compliant and extensibility.

2. Ruby on Rails: A MVC (model view control) that provides basic default structures for databases as well as websites.

3. ORM: Object Relational Mapping, is a group of techniques that let you query and manipulate data.

4. Active Record: The initial model for a system that is responsible for  representing data and logic. Better know as the M in ORM.

5. Migrations: Data control versioning that allows modifications of database schema.
