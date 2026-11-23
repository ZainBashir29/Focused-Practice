import pandas as pd

df = pd.read_json("naruto_characters.json")

print(df.to_string())