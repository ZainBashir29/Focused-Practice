import pandas as pd

df = pd.read_csv("naruto_characters.csv")

# print(df[df["Rank"] == "Jonin"])
# print(df[df["Rank"] == "Hokage"])
# print(df[df["Power_Level"] > 90])
print(df[
    (df["Rank"] == "Hokage") 
    &
    (df["Chakra_Nature"] == "Wind")
    ])