myArray = [1, 5, 12, 4, 3];
myArraySecond = [2, 3, 4, 5, 6, 7, 8, 9, 10];
myArrayThird = [3, 10, 17];
let myFunction = function(array){
let sum = 0;
for (let i = 0; i < array.length; i++) { 
sum += array[i]}
let average = sum / array.length; 
return console.log('Среднеарифметическое значение: ' + average);
}
myFunction(myArray)
myFunction(myArraySecond)
myFunction(myArrayThird)