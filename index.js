var ages = [3,9,23,64,2,8,28,93]
last = ages[ages.length-1]
console.log(last)
difference = last-ages[0]
console.log(difference)


ages.push(18)
console.log(ages)
last = ages[ages.length-1]
difference = last-ages[0]
console.log(difference)

let sum = 0 
for(let i=0; i<ages.length;i++){
    sum +=ages[i];
}
average=sum/ages.length;
console.log(average)

//5.2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
//b. b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
var names = ['Sam','Tommy','Tim', 'Sally', 'Buck', 'Bob']
let  characters=0 
for(j=0; j<names.length; j++);
    {characters += names[j];
    }
    console.log(characters/names.length)

//I am confused on how to be able to count the numbers of characters in a string array. 

    for(x=0;x<names.length;x++){
    names.join
}console.log(names.join(" "))


//3. You access the lat element of an arra by defining a variable as the total length of an arrary - 1. Ex. last=(array.length-1)

//4. You access the first element by console logging arrayName[0]. This indexes to the first element. 


//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

nameLengths = [5, 3, 4] //create this new array

//Again I don't know how to count all the characters in an array 

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.


//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function print(word, n){
    return word.repeat(n)}
    
console.log(print("Hello",3))


//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName){
    return firstName + " "+ lastName
}
console.log(fullName("Jakub","Gaweda"))

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function addition(array1)
{let sum=0 
    for(let i=0; i<array1.length; i++)
sum += array1[i];}
if(sum>100){console.log("true")}

console.log(addition([10,56,89]))

let array2 = [10,56,89]
let initial = 0 
summation = array2.reduce((previousValue, currentValue)=> previousValue+currentValue,initial);
console.log(summation>100)



//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.


//11/Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside=true && moneyInPocket>10.50){
        return true
    }
    }
    console.log(willBuyDrink(true,11))




//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function triangleArea(base, height){
    return (base*height/2)
}
console.log(triangleArea(10,5))

// The funcrtion calculates the area of a triangle. Base and height are the parameters I use and the arguments to be fed in. It's a simple function but I want to wrap my head around how they work with something fairly simple. 


//Below is an example of a closure I made for a hw assignment 


function outer(){
    var num1=6;

    function inner(){
         console.log(num1+1)
    }
   inner() 
}
outer()