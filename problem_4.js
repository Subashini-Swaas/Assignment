//Problem-4: To-do List

/* Logic Implementation Function */
function addTask(task) {
    /* Your Logic here*/
    todo.push(task);
}
var todo=[];
function displayTasks() {
    console.log("Today Activities List:");
    /* Write your logic here --- Start */
    for(let i=0;i<todo.length;i++){
        console.log((i+1)+"."+todo[i])
    }
    /* Write your logic here --- End */
}
/* Logic Implementation Function */


/* Function Call */
/* Inputs */
addTask("Buy groceries");
addTask("Clean the house");
addTask("Finish today homework");
addTask("Study for Annual Exam");
addTask("Go to Sleep");
/* Inputs */

displayTasks();
/* Function Call */


/* Expected Output */
// Today Activities List:
// 1. Buy groceries
// 2. Clean the house
// 3. Finish today's homework
// 4. Study for Annual Exam
// 5. Go to Sleep
/* Expected Output */
