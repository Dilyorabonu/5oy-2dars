//95

function element(massiv) {
    return massiv.reduce((a, b) => a + b, 0);
}

console.log(element([2, 7, 4]));
console.log(element([45, 3, 0]));
console.log(element([-2, 84, 23]));

//97

function uygaQaytishMasofasi(masofalar) {
    let bosibOtilganMasofa = masofalar.reduce((a, b) => a + b, 0);
    return Math.max(0, bosibOtilganMasofa);
}

console.log(uygaQaytishMasofasi([2, 4, 2, 5])); 
console.log(uygaQaytishMasofasi([-1, -4, -3, -2]));
console.log(uygaQaytishMasofasi([3, 4, -5, -2]));


//98

function massiv(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    } else {
        return false;
    }
}

console.log(massiv(2, 3, 4));
console.log(massiv(3, 4, 5));
console.log(massiv(4, 3, 8));

//99

function massiv(a, b) {
    let result = [];
    for (let i = a + 1; i < b; i++) {
        result.push(i);
    }
    return result;
}

console.log(massiv(2, 4));
console.log(massiv(5, 9));  
console.log(massiv(2, 11));

//100

function massiv(input) {
    var parts = input.split("*");
    var element = parts[0];
    var count = parseInt(parts[1]);
    var result = "";
    for (var i = 0; i < count; i++) {
        result += "<" + element + "></" + element + ">";
    }
    return result;
}

console.log(massiv("div*2"));
console.log(massiv("p*1"));
console.log(massiv("li*3"));


//101

function massiv(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(massiv(3));
console.log(massiv(10));
console.log(massiv(7));

//102

function massiv(number, obj) {
    return (number >= obj.min && number <= obj.max);
}

console.log(massiv(4, { min: 0, max: 5 }));
console.log(massiv(4, { min: 4, max: 5 }));
console.log(massiv(4, { min: 6, max: 10 }));
console.log(massiv(5, { min: 5, max: 5 }));


//103

function massiv(n) {
    let squared = n * n;
    if (squared.toString().endsWith(n.toString())) {
        return true;
    } else {
        return false;
    }
}

console.log(massiv(1));
console.log(massiv(3));  
console.log(massiv(6));  
console.log(massiv(95));

//104

function massiv(arr) {
    return arr.map((value, index) => value + index);
}

console.log(massiv([0, 0, 0, 0, 0])); 
console.log(massiv([1, 2, 3, 4, 5])); 
console.log(massiv([5, 4, 3, 2, 1]));

//105

function massiv(arr) {
    return arr.filter(item => item !== "cola" && item !== "fanta");
}

console.log(massiv(["fanta", "cola", "water"])); 
console.log(massiv(["fanta", "cola"]));
console.log(massiv(["lemonade", "beer", "water"]));

//106

function massiv(num) {
    return String(num).length;
}

console.log(massiv(123));
console.log(massiv(56));       
console.log(massiv(7154)); 
console.log(massiv(61217311514));
console.log(massiv(0)); 

//107

function massiv(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(massiv(123));  
console.log(massiv("001")); 
console.log(massiv(999));  
console.log(massiv(784));

//108

function massiv(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(massiv(5, 9));
console.log(massiv(5, 9)); 
console.log(massiv(5, 9)); 

//109

function massiv(num) {
    const strNum = String(num);
    const length = strNum.length;
    let sum = 0;

    for (let digit of strNum) {
        sum += Math.pow(parseInt(digit), length);
    }

    return sum === num;
}

console.log(massiv(153));
console.log(massiv(370));   
console.log(massiv(1652)); 

//110

function massiv(str) {
    let count = 0;

    for (let harf of str) {
        if (harf >= 'A' && harf <= 'Z') {
            count++;
        }
    }

    return count;
}

console.log(massiv("fvLzpxmgXSDrobbgMVrc")); 
console.log(massiv("JMZWCneOTFLWYwBWxyFw")); 
console.log(massiv("mqeytbbjwqemcdrdsyvq")); 

//111

function massiv(arr) {
    let nonZero = arr.filter(item => item !== 0);
    let zeroCount = arr.length - nonZero.length;
    return nonZero.concat(Array(zeroCount).fill(0));
}

console.log(massiv([1, 0, 1, 2, 0, 1, 3]));
console.log(massiv([0, 1, null, 2, false, 1, 0]));
console.log(massiv(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])); 

//112

function engkatta(arr) {
    return Math.max(...arr);
}

console.log(engkatta([4, 5, 1, 3]));
console.log(engkatta([300, 200, 600, 150]));
console.log(engkatta([1000, 1001, 857, 1]));