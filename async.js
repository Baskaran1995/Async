console.log('person 1: shows ticket');

console.log('person 2: shows ticket');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject) =>{

setTimeout(() => {

resolve('ticket');

}, 3000)

});

const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

const getButter = new Promise((resolve, reject) => resolve('Butter'));



let ticket = await promiseWifeBringingTicks;

console.log('wife: i have the ${tickets}');

console.log('husband: we should go in');

console.log('wife: no i am hungry');

let popcorn = await getPopcorn;

console.log('husband: i got some ${Popcorn}');

console.log('husband: we should go in');

console.log('I need a butter on my popcorn');

let butter= await.getButter;

console.log('husband: i got some ${Butter}');

console.log('husband: anything else darling?');

let getColdDrinks= await.getColddrinks;

console.log('husband: anything else darling?');

console.log('wife: I need a Colddrinks');

console.log('husband: i got some ${Colddrinks}');

console.log('wife: lets got we are getting late');

console.log('husband: thank you for the reminder *grins*');

return ticket;

}

function createPost(post){

return new Promise((resolve, reject) => {

setTimeout(() => {

post.push(post);

const error = true;

if(!error) {

resolve();

}else {

reject('Error: Something went wrong');

}

},2000)

});

function deletepost(){

return new Promise ((resolve, reject) => {

setTimeout( () => {

if(posts.length >0){

const lastelement = posts.pop()

resolve(lastelement);

} else {

reject('Array is empty now');

}

},1000);

});

preMovie().then((m) => console.log(m));

console.log('person 4: shows ticket');

console.log('person 5: shows ticket');

Question 1: Promises are ability to simplify asynchrnous code by moving it to a more direct style. rather than continuation passing style.

Question 2: Async wait is better than promises because there it waits.