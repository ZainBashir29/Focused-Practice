import pandas as pd

files = {
    "Sheikhupura": "Sheikhupura.csv",
    "Lahore": "Lahore.csv",
    "Gujranwala": "Gujranwala.csv",
    "Faisalabad": "Faisalabad.csv",
    "Multan": "Multan.csv"
}

dfs = []

column_mapping = {
    "cnic_no": "cnic",
    "trainee_cnic": "cnic"
}

for district, filename in files.items():
    df = pd.read_csv(filename)

    df.rename(columns=column_mapping, inplace=True)

    df["district"] = district

    dfs.append(df)

master_df = pd.concat(dfs, ignore_index=True)

summar_df = master_df.drop_duplicates()

print("Missing values:")
print(master_df.isna().sum())

summary_df = master_df.copy()

summary = summary_df.groupby("district").agg(
    total_trainees=("name", "count"),
    average_marks=("marks", "mean")
).round({ "average_marks": 2 }).reset_index()

with pd.ExcelWriter("Trainee_Report.xlsx", engine="openpyxl") as writer:
    master_df.to_excel(writer, sheet_name="Master_Data", index=False)
    summary.to_excel(writer, sheet_name="District_Summary", index=False)