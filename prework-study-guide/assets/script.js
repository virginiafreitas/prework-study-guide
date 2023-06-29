/*
var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

for (var x = 0; x < shapes.length; x++) {
console.log(shapes[x]);
}
*/


/* 
function helloWorld() {
    console.log("Hello, world, I am a function!")
}
helloWorld();
*/

var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
    for (var x = 0; x < topics.length; x=x+1) {
    console.log(topics[x]);
}
}

/* var topic = "HTML"; */

function selectTopic() {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
