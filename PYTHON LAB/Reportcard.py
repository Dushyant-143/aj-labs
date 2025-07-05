# Student Report Card

# Student info
name = input("Enter student name: ")
roll = input("Enter roll number: ")
class_name = input("Enter class: ")

# Subject marks (fixed 3 subjects)
subject1 = input("Enter first subject name: ")
marks1 = float(input("Enter marks in " + subject1 + ": "))

subject2 = input("Enter second subject name: ")
marks2 = float(input("Enter marks in " + subject2 + ": "))

subject3 = input("Enter third subject name: ")
marks3 = float(input("Enter marks in " + subject3 + ": "))

# Total and percentage
total = marks1 + marks2 + marks3
percentage = total / 3

# Grade
if percentage >= 90:
    grade = "A+"
elif percentage >= 80:
    grade = "A"
elif percentage >= 70:
    grade = "B"
elif percentage >= 60:
    grade = "C"
elif percentage >= 50:
    grade = "D"
else:
    grade = "F"

# Print Report Card
print("\n===========================")
print("       Report Card")
print("===========================")
print("Name       : " + name)
print("Roll No    : " + roll)
print("Class      : " + class_name)
print("---------------------------")
print(subject1 + ": " + str(marks1))
print(subject2 + ": " + str(marks2))
print(subject3 + ": " + str(marks3))
print("---------------------------")
print("Total Marks: " + str(total))
print("Percentage : " + str(percentage))
print("Grade      : " + grade)
print("===========================")