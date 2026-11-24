import pandas as pd

df = pd.read_csv("naruto_characters.csv")

group = df.groupby("Rank")

# print(group["Power_Level"].mean())
# print(group["Power_Level"].sum())
# print(group["Power_Level"].count())
# print(group["Power_Level"].max())
# print(group["Power_Level"].min())
# print(group.count())
