import pandas as pd

df = pd.read_csv("naruto_characters.csv", index_col="Name")

# print(df.to_string())

# Selection By Column/s
# print(df["Name"])
# print(df["Village"])
# print(df["Power_Level"])
# print(df[["Name", "Village", "Power_Level"]].to_string())

# Selection By Row/s
# print(df.loc["Naruto Uzumaki", ["Village", "Rank"]])
# print(df.iloc[0:11:2, 0:3])
# print(df.loc["Naruto Uzumaki":"Itachi Uchiha", ["Village","Rank"]])

character = input("Enter a naruto character name: ")

try:
    print(df.loc[character])
except KeyError:
    print(f"{character} not found")