# That function takes a Roman numeral  and converts it to the Hindu/Arabic numerals that we use.
def from_roman_to_arabic(n):
    numerals = {"I":1,"V":5,"X":10, "L":50, "C":100,"D":500,"M":1000}
    adjust_values = {"IV":2,"IX":2,"XL":20,"XC":20,"CD":200,"CM":200}
    sum = 0
    for i in n:
        sum += numerals[i]
    for j in adjust_values:
        if j in n:
            sum -= adjust_values[j]
    return sum
