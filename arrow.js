function doubleIt (num){
    return num*2;
}

var money  = doubleIt(5);

console.log(money);

const value = function myFunc(num){
    return num*2;
}
const myMoney = value(100);
console.log(myMoney);
 

const salary = integer => integer * 2;

console.log(salary(500));

const number = (x, y) => x+y;

console.log(number(15,25));

const numberAgain = () => 39;

console.log(numberAgain());

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result  = doMath(20,15);

console.log(result);

