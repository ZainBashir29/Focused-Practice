import pandas as pd

df = pd.read_csv("trainees2.csv")
# new_df = df[df["marks"] > 75]

# print(new_df[["name", "marks"]])
# print(new_df["marks"].mean())

# new_df = df.groupby("district")
# print(new_df["name"].count(), new_df["marks"].mean())

# summary = df.groupby("district").agg(
#     total_trainees=("name", "count"),
#     average_marks=("marks", "mean")
# ).round({ "average_marks": 2 })
# print(summary)

new_df = df.copy()
print(new_df.isna().sum())
new_df = new_df.drop_duplicates()
new_df["marks"] = new_df["marks"].fillna(new_df["marks"].mean())
print(new_df)