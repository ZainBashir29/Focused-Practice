import pandas as pd

dfs = []

df1 = pd.read_csv("Sheikhupura.csv")
df2 = pd.read_csv("Lahore.csv")
df3 = pd.read_csv("Gujranwala.csv")

df1.rename(columns={df1.columns[1]: "cnic"}, inplace=True)
df2.rename(columns={df2.columns[1]: "cnic"}, inplace=True)
df3.rename(columns={df3.columns[1]: "cnic"}, inplace=True)

dfs.append(df1)
dfs.append(df2)
dfs.append(df3)

combined_df = pd.concat(dfs, ignore_index=True)

combined_df["district"] = ["Sheikhupura", "Sheikhupura", "Sheikhupura", "Sheikhupura","Shiekhupura", "Lahore", "Lahore", "Lahore", "Lahore", "Lahore", "Gujranwala", "Gujranwala", "Gujranwala", "Gujranwala", "Gujranwala"]

print(combined_df)

