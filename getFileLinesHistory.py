'''
This file shows you how to check the lines modified for every code history event for a given file
'''
from diff_helper import get_diff, get_modified_lineNums, load_df_from_db, get_file_entries, print_modified_lines_by_row
import pandas as pd


if __name__ == '__main__':
    database = "wordle_polished.db"
    df = load_df_from_db(database)
    print("df: ", df)
    
    script_df = get_file_entries(df, "script.js")
    print("script_df", script_df)
    
    print_modified_lines_by_row(script_df)


                

