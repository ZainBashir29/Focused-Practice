import pandas as pd

calories = { "Day 1": 2000, "Day 2": 2350, "Day 3": 1800 }

series = pd.Series(calories)

series.loc["Day 2"] += 250

print(series)