import pandas as pd

df = pd.read_csv("trainees.csv")
# new_df = df[df["marks"] > 75]

# print(new_df[["name", "marks"]])
# print(new_df["marks"].mean())

# new_df = df.groupby("district")
# print(new_df["name"].count(), new_df["marks"].mean())

summary = df.groupby("district").agg(
    total_trainees=("name", "count"),
    average_marks=("marks", "mean")
).round({ "average_marks": 2 })

print(summary)