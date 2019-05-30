foreach will not create new array,while map create new array and store results in new array.
map will return items, filter will return items based on condition we use.

reduce will return single value as a result, need atleast 2 parameters , accumulator and current value.if you willnot initial accumulator ,first iteration will be skipped and accumulator will initialise by first value of array.


in sort callback function if (a-b)result is -1 it will give lower index to a than b, if result 0 is will keep indexes same and if result is 1 it will give higher index to a than b. 