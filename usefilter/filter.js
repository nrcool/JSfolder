var tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    } 
  ];

  let new_task=[];
/* -"-------------------FOR LOOP--------------------" */
  for(let i=0;i<tasks.length;i++){
      new_task.push(tasks[i].name);
  }
  console.log(new_task);


  /* -"-------------------foreach--------------------" */

  let new_task1=[];
  tasks.forEach((task)=>{
      new_task1.push(task.name);
  });

  console.log(new_task1);

    /* -"-------------------MAP --------------------" */

    var task_names = tasks.map(function (task) {
 
        return task.name; 
     
    });

   /*  shorterWay ....using ES6 
    var task_names = tasks.map((task)=>task.name;    
   */
    console.log(task_names);


  /*   "------------------FILTER-------------------" */


  /* -"-------------------foreach--------------------" */
    var difficult_tasks = [];
 
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});
console.log(difficult_tasks);


/* -"-------------------use Filter--------------------" */
var difficult_tasks1 = tasks.filter(function(task){
    return task.duration >= 120;
});
/*  shorterWay ....using ES6 
    var difficult_tasks1= filter.map((task)=>task.duration>=120;    
   */

"------------------------REDUCE--------------------"

 /* -"-------------------foreach--------------------" */
 var numbers = [1, 2, 3, 4, 5];
 total = 0;
  
numbers.forEach(function (number) {
 total += number;
});
console.log(total);

 /* -"-------------------reduce--------------------" */

 var reducednumber=numbers.reduce(function(previous,current){
    val= previous + current;
    return val;
 },0);

 console.log(reducednumber);

 /*  shorterWay ....using ES6 
    var reducednum= numbers.reduce((previous,current)=>{value=privious+current;
        return value;    
   */