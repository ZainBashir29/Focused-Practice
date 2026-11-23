import pandas as pd

data = [100, 102, 104, 200, 205]

series = pd.Series(data, index=["a", "b", "c", "d", "e"])

print(series[series < 200])
