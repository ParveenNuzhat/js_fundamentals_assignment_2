"use strict";

// Functions

/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
  console.log(country, population, capitalCity);
  const defineCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return defineCountry;
}

const descBD = describeCountry("Bangladesh", 169.4, "Dhaka");
const descCanada = describeCountry("Canada", 38.25, "Ottawa");
const descPakistan = describeCountry("Pakistan", 231.4, "Islamabad");

console.log(descBD, descCanada, descPakistan);

// Function Declarations vs. Expressions

/*
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population

2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console

4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)

*/

// function declarations
function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  return (population / 7900) * 100;
}

const percentageBangladesh = percentageOfWorld1(169.4);
console.log(percentageBangladesh);

// function expressions
const percentageOfWorld2 = function (population) {
  const worldPopulation = 7900;
  return `percentage of the world population ${(population / 7900) * 100} `;
};

console.log(percentageOfWorld2(169.4));

// Arrow Functions

/*
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'

*/

const percentageOfWorld3 = (population) => {
  return `percentage of the world population ${(population / 7900) * 100}`;
};

console.log(percentageOfWorld3(169.4));

// Functions Calling Other Functions

/*

1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice

*/

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} % of the world`;
}

console.log(describePopulation("Bangladesh", 169.4));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Canada", 38.25));
