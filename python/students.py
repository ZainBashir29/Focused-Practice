# with open("students.csv") as file:
#     for line in file:
#         row = line.rstrip().split(",")
#         print(f"{row[0]} is in {row[1]}")

# =====================================================

# students = []
# with open("students.csv") as file:
#     for line in file:
#         name, house = line.rstrip().split(",")
#         students.append({ "name": name, "house": house })

# def get_name(student):
#     return student["name"]

# for student in sorted(students, key=lambda student: student["name"]):
#     print(f"{student["name"]} is in {student["house"]}")

# ======================================================

import csv

students = []

with open("students.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        students.append({ "name": row["name"], "home": row["home"] })

for student in sorted(students, key=lambda student: student["name"]):
    print(f"{student["name"]} is from {student["home"]}")