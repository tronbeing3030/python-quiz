print('Welcome to Ask Python Quiz')
answer=input('Are you ready to play the Quiz ? (yes/no) :')
score=0
total_questions=10
 
if answer.lower()=='yes':
    answer=input('Question 1: Is python a high level language?')
    if answer.lower()=='yes':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : YES ')
 
 
    answer=input('Question 2: Which year was python first released? ')
    if answer.lower()=='1991':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : 1991 ')
 
    answer=input('Question 3: Which is the latest version of python?')
    if answer.lower()=='3.12':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : 3.12.2 ')

    answer=input('Question 4: What is python named after?')
    if answer.lower()=='monty python':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : monty python ')

    answer=input('Question 5: Which function is used to take the user input in python ?')
    if answer.lower()=='input()':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : input() ')    

    answer=input('Question 6: What is the extension used to save a python file ?')
    if answer.lower()=='.py':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : .py ') 

    answer=input('Question 7: Which symbol is commonly used for comments in python?')
    if answer.lower()=='#':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : # ') 

    answer=input('Question 8: What does the len() function return in python ?')
    if answer.lower()=='length':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : length') 

    answer=input('Question 9: Who was the founder of python?')
    if answer.lower()=='guido van rossum':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : Guido Van Rossum')

    answer=input('Question 10: Which built-in function is used to find the maximum value in a list in python?')
    if answer.lower()=='max()':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
        print('Correct answer is : max()')  

print('Thankyou for Playing this small quiz game, you attempted',score,"questions correctly!")
mark=(score/total_questions)*100
print('Marks obtained:',mark)
print('BYE!')