const fruits={
    apple:27,
    mango:40,
    bananas:30
};
const entries=Object.entries(fruits);

console.log(entries);

const keys=Object.keys(fruits);

console.log(keys);

const values=Object.values(fruits);

console.log(values);


for( const[fruits,count] of entries){
    console.log(`there are ${count} ${fruits}`);
}