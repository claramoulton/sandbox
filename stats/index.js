function getLength(arr){
    return arr.length;
}

function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        console.log(i);
       // sum = sum + arr[i];
        sum =+ arr[i];
    }
    return sum;
}

function getMean(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function getMin(arr){
    let min;
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            min = arr[i];
        }
        else {
            if(arr[i] < min){
                min = arr[i];
            }
        }
    }
    return min;
}

function getMax(arr){
    let max;
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            max = arr[i];
        }
        else {
            if(arr[i] > max){
                max = arr[i];
            }
        }
    }
    return max;
}

function getRange(arr){
    return [getMin(arr), getMax(arr)];
}

function getEvens(arr){
    const evens = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i]);
        }
    }
    return evens;
}

function getOdds(arr){
    const odds = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            odds.push(arr[i]);
        }
    }
    return odds;
}

const numbers = [1, 2, 3, -4, 5];
const moreNumbers = [2, 4, 6];
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`You have given ${getLength(moreNumbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);