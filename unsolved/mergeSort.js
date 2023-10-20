// Below is the Python implementation of merge-sort that you saw earlier in an exploration.

// You may recall that merge sort works by splitting a list in half, sorting the two halves, and then "merging" the two halves back into one sorted list.

// It is a recursive algorithm, so each time it sorts one of the halves, it actually splits that half in half and sorts and merges those halves back together. This continues until all of the sub-lists are of length 1 and trivial to merge back together.

// For your reading pleasure:
function mergeSort(values, left=null, right=null) {

}

function merge(values, left, middle, right) {

}



















// Sol in python:
/*
def merge_sort(values, left=None, right=None):
    if left is None and right is None:
        left = 0
        right = len(values) - 1

    # Base case
    if left >= right:
        return

    # Recursive cases
    # Find the middle to split
    middle = (right + left) // 2

    # Sort the left half
    merge_sort(values, left, middle)

    # Sort the right half
    merge_sort(values, middle + 1, right)

    # Merge them together
    merge(values, left, middle, right)


def merge(values, left, middle, right):
    right_start = middle + 1

    # Terminal case to make sure we don't loop
    # forever
    if values[middle] <= values[right_start]:
        return

    # Merge the sub-lists by looping and comparing
    # the values at the start of each list
    while left <= middle and right_start <= right:
        # The one on the left is less than the
        # one on the right, so just keep going
        if values[left] <= values[right_start]:
            left += 1
        else:
            # In this case, the one on the right half
            # is less than one in the left half, so
            # we need to swap the values
            value = values[right_start]
            index = right_start

            # Move the all of the values to the right
            # by one
            while index != left:
                values[index] = values[index - 1]
                index -= 1

            # Put the value into the new "empty" place
            values[left] = value

            # Increment all of the indexes
            left += 1
            middle += 1
            right_start += 1

*/
