console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray([3,4,5]))



let tasks = [
    "Clean the floor",
    "Clean the windows",
    "Clear the dining table",
    "Clean the kitchen platform",
    [
        "Prepare breakfast",
        "Cook lunch",
        "Cook dinner"
    ],
    "Clean the dishes",
    "Clean the dining table"
 ]
 for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (Array.isArray(task)) { // check if task has subtasks
        for (let j = 0; j < task.length; j++) {
            let subtask = task[j];
            console.log("I am working on subtask : ", subtask)
        }
    } else {
        console.log("I am working on task: ", task)
    }
 }
 