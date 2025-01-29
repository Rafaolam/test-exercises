console.log('Welcome to my chalenge');
let myName = 'Rafael Amorim';
console.log('Hello ' + myName);
alert('Hello ' + myName);
let question = prompt('Which programming languague do you like most?');
console.log('You like ' + question + ' the most');
let value1 = parseInt(Math.random() *100 + 1);
let value2 = parseInt(Math.random() *100 + 1);
let resultValue = value1 + value2;
console.log('The sum of ' + value1 + ' and ' + value2 + ' is ' + resultValue);
let resultValue2 = value1 - value2;
console.log('The subtraction of ' + value1 + ' and ' + value2 + ' is ' + resultValue2);
let age = prompt('How old are you?');  
if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}
let number = prompt('Enter a number');
if (number >0) {
    console.log('The number is positive');
}else if (number < 0) {
    console.log('The number is negative');
} else {
    console.log('The number is zero');
}   
let myGrade = prompt('Enter your grade');
if (myGrade <= 7){
    console.log('You are aproved')
} else {
    console.log('You are reproved');
}
console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 1000 + 1));    