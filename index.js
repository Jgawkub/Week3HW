//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

console.log("QUESTION 1")
var ages = [3,9,23,64,2,8,28,93]
function difference(){
console.log(ages[ages.length-1]-ages[0])
ages.push(18);
console.log(ages[ages.length-1]-ages[0])
}
difference()


let sum = 0 
for(let i=0; i<ages.length;i++){
    sum +=ages[i];
}
average=sum/ages.length;
console.log(average)

//.2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
//b. 	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.


console.log("QUESTION 2")
var names = ['Sam','Tommy','Tim', 'Sally', 'Buck', 'Bob']
let  characters=0 
for(j=0; j<names.length; j++){
    characters += names[j].length};
    
    //console.log(names[j].length)
    console.log(characters/names.length)
    
    for(let x=0;x<names.length;x++){
    names.join
}console.log(names.join(" "))


console.log("QUESTION 3")
console.log('You access the last element of an arra by defining a variable as the total length of an arrary - 1. Ex. last=(array.length-1)')
//3. You access the last element of an arra by defining a variable as the total length of an arrary - 1. Ex. last=(array.length-1)
console.log("QUESTION 4")
console.log('//4. You access the first element by console logging array[0]. This indexes to the first element.')
//4. You access the first element by console logging array[0]. This indexes to the first element. 


//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log("QUESTION 5")
nameLengths = [] 
for(x=0; x<names.length; x++){nameLengths.push(names[x].length)}
console.log(nameLengths)

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
console.log("QUESTION 6")
let sum1=0
for(let b = 0; b<nameLengths.length; b++){
sum1 += nameLengths[b]
}
console.log(sum1)

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log("QUESTION 7")
function print(word, n){
    return word.repeat(n)}
    
console.log(print("Hello",3))


//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
console.log("QUESTION 8")
function fullName(firstName, lastName){
    return firstName + " "+ lastName
}
console.log(fullName("Jakub","Gaweda"))

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log("QUESTION 9")
function addition(array1)
{let sum=0 
    for(let i=0; i < array1.length; i++)
sum += array1[i]}
if(sum>100){console.log("true")}

addition([15,25,78,36])


//the below function was an attempt at using.reduce to get the same result as above
/* function biggerThan(array2){
    let initial = 0 
    let summary = array2.reduce((previousValue, currentValue)=> previousValue+currentValue,initial);
return summary > 100}
//put a for loop down here. 

console.log(biggerThan([30,70,80]))
 */


//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("QUESTION 10")
function averaging(array3)
{ let sum=0
    for(let z=0; z < array3.length; z++){
    sum+=array3[z]}
    average=sum/array3.length
    console.log(average)
}
averaging([10,20,30,45])


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log("QUESTION 11")

array4=[12,15,6,7,8]
array5=[2,3,4]

function avgMachine(array4,array5){{
    let sum=0
    for(let z=0; z < array4.length; z++){
    sum+=array4[z]}
    average1=sum/array4.length
    console.log(average1)
}

{ let sum=0
    for(let z=0; z < array5.length; z++){
    sum+=array5[z]}
    average2=sum/array5.length
    console.log(average2)
   }
   if(average1>average2)
   {
    console.log(true)
}
}
avgMachine(array4,array5)


//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("QUESTION 12")
function willBuyDrink(isHotOutside, moneyInPocket)
{
    if(isHotOutside=true && moneyInPocket>10.50){
        return true
    } else {return false
    }
}
    console.log(willBuyDrink(true,14))




//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


//The below function, calculateTip will calculate the tip and gicve you your bill total, based on service from ok to amazing. I created it because I'm terrible at calculating tips. If I were to improve this, rather than taking a string as one of my arguments ("amazing" etc.) you could rate the service from 1-10. I imagine in such a case a switch conditional would be most appropriate. I threw an alert in there but I don't think as I have it now it doesn't actually work because if I don't input either of the arguments I just get not a number. 
console.log("QUESTION 13")
function calculateTip(service,bill){
    let amazing = bill*.30
    let great = bill*.20
    let fine = bill*.15
    let ok = bill*.10
    if(service="amazing"){
        console.log( 'The tip is $' + amazing + " The total is $" + (amazing + bill).toFixed(2))
    }
    else if(service="great"){
        console.log('The tip is $'+ great + 'The total is $'+ (great+bill).toFixed(2))
    }
    else if(service="fine"){
        console.log('The tip is $'+ fine + 'he total is $'+(fine+bill).toFixed(2))
    }
    else if (servive = ok){
        console.log('The tip is $'+ (ok)+ 'The total is $'+ (ok+bill).toFixed(2))
    }else(aler('ERROR'))
}
    
calculateTip("amazing", 38.26)


