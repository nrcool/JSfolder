 arr = { "name":"John", "age":30, "car":null };
for(let key in arr){
  console.log(key);
}

Object.entries(arr).forEach(function(key,value) {
    console.log(key,value);
}); 

const string = 'hello world';
for (let character in string) {  
    console.log(string[character])
}
