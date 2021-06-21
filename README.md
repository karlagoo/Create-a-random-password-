# Password-Generator
## Creating a password generator using JavaScript
Our goal this week was to create a password generator using the criteria given:

To begin with, we needed to give the function "generate Password" some attributes based on the criteria given:

The first criteria to be met was that the password had to be at least 8 characters long but no longer than 128 characters. 
* First I created a variable called "Password length". 
* To do this I used the "prompt" method. This meant that the user had to type the number they wanted. 
* Since the password had to be greater than 8 but less than 128, I created an if statement to make sure whatever input the user wrote on the prompt fit the criteria. 
    * In this if statement the input was less than 8, more than 128 and the input was non-existent. I used the "||" (or) statement to satisfy that if any of those are true and error message will appear.



