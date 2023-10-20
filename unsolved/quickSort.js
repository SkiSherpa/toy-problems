/*
Today we will review the quicksort algorithm. Before we look at the Python implementation of quicksort we are going to look at "just the comments" from the Python code. Give this a read and try to get a picture of how the algorithm works.

def partition(values):
    - get the pivot value (the last item)
    - move items that are less than pivot to the beginning of the list
    - move the pivot value into the "middle" of the list
    - return the position of the pivot value


def quicksort(values):
    - if there is nothing to sort (len(values) <= 1), return .
    - partition values and get the position (index) of the pivot item
    - recursively sort the left half (left of the pivot)
    - recursively sort the right half (right of the pivot)

Do the two steps above make sense at a high level? Could you explain it to a friend? Discuss this with your partner.

1
Quick-sort in JavaScript
1 PT
*/
function partition(values, left, right) {

}

function quicksort(values, left=null, right=null) {

}




/*
Python SOL:
Here is the Python implementation of quicksort from the exploration on sorting:
def partition(values, left, right):
    # get the pivot value (the last item)
    pivot = values[right]

    # star keeps track of the end of the "smaller than the pivot" list
    star = left - 1

    # move all of  the items that are less than pivot to the beginning of the list
    for i in range(left, right):
        if values[i] <= pivot:
            star += 1
            values[star], values[i] = values[i], values[star]

    # move the pivot value into the "middle" of the list
    star += 1
    values[star], values[right] = values[right], values[star]

    # return the position of the pivot value
    return star

def quicksort(values, left=None, right=None):
    # handle the default calling case where only values is provided
    if left is None and right is None:
        left = 0
        right = len(values) - 1

    # if there is nothing left to sort return
    if left >= right or left < 0:
        return

    # partition values and get the position (index) of the pivot item
    p = partition(values, left, right)

    # recursively sort the left half
    quicksort(values, left, p - 1)

    # recursively sort the right half
    quicksort(values, p + 1, right)
    */
