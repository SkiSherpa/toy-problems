# Given the number of pipes num_pipes and a list of steps, complete the function pipe_outputs to return a list that contains the flow of each pipe in the order starting with the first pipe to the last pipe.

# At the beginning, each of the num_pipes has a flow of 8
# In the list of steps, each step is a list
# If the step has one value in it, then it joins that pipe with the one to its right
# If the step has two values in it, then the first value is the pipe to split, and the second value is the flow that goes into the pipe to the left, while the remainder of the flow goes into the pipe to the right
# The input from the example above would look like this:

num_pipes = 3
steps = [[2, 4], [1], [1], [1, 2]]
# How do you know that on the 3rd iteration, pipes 1 & 2 combine - IF you see a single num, then it joins to its right
# [8, 8, 8]
# [8, 4, 4, 8]
# [12, 4, 8]
# [16, 8]
# [2, 14, 8]
# modify num_pipes as we go
# IF the current step is 2 nums
  # perform split process
  # add 1 to num_pips
# otherwise
  # perfrom combine process
def pipe_outputs(num_pipes, steps):
    results = num_pipes*[8]
    print(results)
    for step in steps:
        if len(step) == 2:
            # slice results array at index = step[0] - 1 and save
            index = step[0] - 1
            rest_of_list = results[index:]
            print('rest of: ', rest_of_list, index)
            # get val at 1st num of step

    return results

print(pipe_outputs(num_pipes, steps))
