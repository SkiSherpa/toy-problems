def erick(numRows):
  if numRows == 1:
    return [[1]]
  if numRows == 2:
    return [[1], [1,1]]
  results = [[1], [1,1]]
  for i in range(2, numRows):
    innerList = []
    prevList = results[-1] # [1,1]
    for j in range(0, i): # (0,2)
      print(prevList)
      print(i, j, len(prevList))
      if j == 0 or j == i:
        innerList.append(1)
      else:
        print("made it")
        currMiddle = prevList[i] + prevList[j-1]
        innerList.append(currMiddle)
    results.append(innerList)
  return results


print(erick(5))
