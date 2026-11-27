import openpyxl

workbook = openpyxl.load_workbook("Trainee_Report.xlsx")

sheet = workbook["Master_Data"]

bold_font = openpyxl.styles.Font(bold=True)

header_fill = openpyxl.styles.PatternFill(start_color="D9E1F3",
                                          end_color="D9E1F3", fill_type="solid")

header_alignment = openpyxl.styles.Alignment(horizontal="center", vertical="center")

for cell in sheet[1]:
    cell.font = bold_font
    cell.fill = header_fill
    cell.alignment = header_alignment

for col in sheet.columns:
    max_length = 0
    get_col_letter = openpyxl.utils.get_column_letter(col[0].column)
    for cell in col:
        if cell.value is not None:
            lines = str(cell.value).split("\n")
            max_length = max(max_length, *(len(line) for line in lines))
    sheet.column_dimensions[get_col_letter].width = max_length + 4

sheet.freeze_panes = "A2"

sheet.auto_filter.ref = sheet.dimensions

workbook.save("Trainee_Report.xlsx")