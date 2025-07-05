# Calculator

print("===== Simple Calculator =====")
print("Choose operation:")
print("1. Add (+)")
print("2. Subtract (-)")
print("3. Multiply (*)")
print("4. Divide (/)")

# User se operation choose karne ke liye
choice = input("Enter your choice (1/2/3/4): ")

# Do numbers input lega
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Calculation 
if choice == '1':
    result = num1 + num2
    print("Result = " + str(result))
elif choice == '2':
    result = num1 - num2
    print("Result = " + str(result))
elif choice == '3':
    result = num1 * num2
    print("Result = " + str(result))
elif choice == '4':
    if num2 != 0:
        result = num1 / num2
        print("Result = " + str(result))
    else:
        print("Error: Cannot divide by zero!")
else:
    print("Invalid choice!")