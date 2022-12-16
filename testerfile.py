import difflib
line_following = 'there'
line_init = 'There'
seq=difflib.SequenceMatcher(a = line_init.lower(), b = line_following.lower())
curr_seq = seq.ratio()
print(curr_seq)

# sequence matcher is not case sensitive