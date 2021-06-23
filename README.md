# Password-Generator 🔐
## Creating a password generator using JavaScript
Our goal this week was to create a password generator using the criteria given:

To begin with, we needed to give the function "generate Password" some attributes based on the criteria given:

The first criteria to be met was that the password had to be at least 8 characters long but no longer than 128 characters. 
* First I created a variable called "Password length". 
* To do this I used the "prompt" method. This meant that the user had to type the number they wanted. 
* Since the password had to be greater than 8 but less than 128, I created an if statement to make sure whatever input the user wrote on the prompt fit the criteria. 
    * In this if statement the input was less than 8, more than 128 and the input was non-existent. I used the "||" (or) statement to satisfy that if any of those are true and error message will appear.
    * If none of those held true, then the generatePassword function would run

The next criteria was for password to have uppercase, lowercase, numbers, and/or special characters. 
* I started off by creating variables for each of the criteria. 
    * For these I used the "confirm" method because then it would assign the variable a boolean value which would make the conditional statements easier. 
* I made the conditional "if" statements for each character description - this was so if the user chose "yes" in the confirm box, it would push the true boolean value to the newly created "chars" variable.
* For each array created, I used the <u>push</u> method to push them to the variable "chars".
* Lastly, to randomize what character from the chosen criteria that will be pushed to the password I used a foor loop. 
    * In this for loop, I used the "randomchars index". I set the length equal to the password length in order to connect the first criteria of number of characters chosen. 

After creating a new variable with the random characters (which included the random criteria that the user chose) I created I new variable, "password outcome" that would ultimately be added to this random characters variable and create the new password! 

I used the <u>**return**</u> statement to end the function: "generate password" and give it a value.

 ## **Here is the outcome when choosing all character criteria!**
 ### Access the file here: https://karlagoo.github.io/Password-Generator/

![Password Generat](https://user-images.githubusercontent.com/84356242/123033645-b8503800-d3ad-11eb-94c5-440d873963d1.png)

