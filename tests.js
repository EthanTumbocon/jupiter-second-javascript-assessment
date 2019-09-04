"use strict";

/** 
 * Tests for the following functions. See README.md for more detail.
 * square
 * add
 * multiply
 * sumOfSquares
 * increment
 * decrement
 * isPalindrome
 * upperCase
 * getHighestNumber(a, b, c)
 * containsVowel(input)
 */

const randomBoolean = Boolean(Math.round(Math.random()));
const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";
const randomIndex = Math.floor(Math.random() * exampleArray.length);
const randomString = exampleArray[randomIndex];

describe('increment', function() {
    it('should be a defined function', function() {
        expect(typeof increment).toBe('function');
    });
    it('should return a number when passed a number', function() {
        expect(typeof increment(2)).toBe('number');
    });
    it('should return 2 when passed 1', function() {
        expect(increment(1)).toBe(2);
    });
    it('should return 1 when passed 0', function() {
        expect(increment(0)).toBe(1);
    });
    it('should return ' + (1 + randomPositiveNumber) + ' when passed ' + randomPositiveNumber, function() {
        expect(increment(randomPositiveNumber)).toBe(randomPositiveNumber + 1);
    });
    it('should return ' + (1 + randomNegativeNumber) + ' when passed ' + randomNegativeNumber, function() {
        expect(increment(randomNegativeNumber)).toBe(randomNegativeNumber + 1);
    });
    it('should return false when passed null', function() {
        expect(increment(null)).toBe(false);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(increment(exampleString)).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(increment(randomBoolean)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(increment(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(increment(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(increment()).toBe(false);
    });
});

describe('decrement', function() {
    it('should be a defined function', function() {
        expect(typeof decrement).toBe('function');
    });
    it('should return a number when passed a number', function() {
        expect(typeof decrement(3)).toBe('number');
    });
    it('should return 3 when passed 4', function() {
        expect(decrement(4)).toBe(3);
    });
    it('should return 0 when passed 1', function() {
        expect(decrement(1)).toBe(0);
    });
    it('should return ' + (randomPositiveNumber - 1) + ' when passed ' + randomPositiveNumber, function() {
        expect(decrement(randomPositiveNumber)).toBe(randomPositiveNumber - 1);
    });
    it('should return false when passed null', function() {
        expect(decrement(null)).toBe(false);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(decrement(exampleString)).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(decrement(randomBoolean)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(decrement(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(decrement(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(decrement()).toBe(false);
    });
});

describe('square', function() {
    it('should be a defined function', function() {
       expect(typeof square).toBe('function');
    });
    it('should return a number when passed a number', function() {
        expect(typeof square(2)).toBe('number');
    });
    it('should return 4 when passed 2', function() {
        expect(square(2)).toBe(4);
    });
    it('should return .25 when passed .5', function() {
        expect(square(.5)).toBe(.25);
    });
    it('should return ' + (randomPositiveNumber * randomPositiveNumber) + ' when passed ' + randomPositiveNumber, function() {
        expect(square(randomPositiveNumber)).toBe(randomPositiveNumber * randomPositiveNumber);
    });
    it('should return 1 when passed 1', function() {
        expect(square(1)).toBe(1);
    });
    it('should return 1 when passed -1', function() {
        expect(square(-1)).toBe(1);
    });
    it('should return 0 when passed 0', function() {
        expect(square(0)).toBe(0);
    });
    it('should return false when passed null', function() {
        expect(square(null)).toBe(false);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(square("Bob")).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(square(true)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(square(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(square(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(square()).toBe(false);
    });
});

describe('upperCase', function() {
    it('should be a defined function', function() {
       expect(typeof upperCase).toBe('function');
    });
    it("should return 'CODEUP' when passed the string 'Codeup'.", function() {
        expect(upperCase('Codeup')).toBe('CODEUP');
    });
    it("should return 'JAVASCRIPT' when passed the string 'JavaScript'.", function() {
        expect(upperCase('JavaScript')).toBe("JAVASCRIPT");
    });
    it("should return '' when passed the empty string ''.", function() {
        expect(upperCase("")).toBe("");
    });
    it("should return 'BOB' when passed the string 'BOB'.", function() {
       expect(upperCase("BOB")).toBe("BOB");
    });
    it("should return false when passed '45'.", function() {
        expect(upperCase('45')).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(upperCase(null)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(upperCase()).toBe(false);
    });
    it('should return false when passed the array [1, 2, 3]', function() {
        expect(upperCase([1, 2, 3])).toBe(false);
    });
});

describe('isPalindrome', function() {
    it('should be a defined function', function() {
        expect(typeof isPalindrome).toBe('function');
    });
    it('should return true when passed the input "Bob".', function() {
        expect(isPalindrome("Bob")).toBe(true);
    });
    it('should return true when passed the input "radar".', function() {
        expect(isPalindrome('radar')).toBe(true);
    });
    it('should return true when passed the input "ufotofu"', function() {
        expect(isPalindrome('ufotofu')).toBe(true);
    });
    it('should return true when passed an empty string "" as the input.', function() {
        expect(isPalindrome("")).toBe(true);
    });
    it('should return false when passed the input "Monday"', function() {
        expect(isPalindrome("Monday")).toBe(false);
    });
    it('should return false when passed the input ' + randomPositiveNumber, function() {
        expect(isPalindrome(randomPositiveNumber)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(isPalindrome()).toBe(false);
    });
    it('should return false when passed the array [1, 2, 3]', function() {
        expect(isPalindrome([1, 2, 3])).toBe(false);
    });
});

describe('getHighestNumber', function() {
    it('should be a defined function', function() {
       expect(typeof getHighestNumber).toBe('function');
    });
    it('should return a number when called with 3 numbers like getHighestNumber(1, 2, 3)', function() {
       expect(typeof getHighestNumber(1, 2, 3)).toBe('number');
    });
    it('should return 2 when passed the 3 arguments (0, 1, 2)', function() {
        expect(getHighestNumber(0, 1, 2)).toBe(2);
    });
    it('should return 5 when passed the arguments (-10, 0, 5).', function() {
        expect(getHighestNumber(0, -10, 5)).toBe(5);
    });
    it('should return 2 when passed the arguments (2, 2, 2).', function() {
        expect(getHighestNumber(2, 2, 2)).toBe(2);
    });
    it('should return 5 when passed the arguments (3, 5, 5).', function() {
        expect(getHighestNumber(3, 5, 5)).toBe(5);
    });
    it(`should return ${randomPositiveNumber} when passed ${randomPositiveNumber}, 0, and ${randomNegativeNumber}`, function() {
        expect(getHighestNumber(randomNegativeNumber, 0, randomPositiveNumber)).toBe(randomPositiveNumber);
    });
    it('should return false when passed the arguments (1, 2, "x") because not all arguments are numbers.', function() {
        expect(getHighestNumber(1, 2, "x")).toBe(false);
    });
    it('should return false when passed the non-numeric arguments ("a", "b", "c")', function() {
        expect(getHighestNumber("a", "b", "c")).toBe(false);
    });
    it('should return false when called with no provided arguments', function() {
        expect(getHighestNumber()).toBe(false);
    });
    it('should return false when passed a single input made of an array', function() {
        expect(getHighestNumber(exampleArray)).toBe(false);
    });
    it('should return false when passed the boolean ' + randomBoolean, function() {
       expect(getHighestNumber(randomBoolean)).toBe(false);
    });
});

describe('containsVowel', function() {
    it('should be a defined function', function() {
       expect(typeof containsVowel).toBe('function');
    });
    it('should return a boolean value no matter what inputs are passed.', function() {
       expect(typeof containsVowel("Bob")).toBe('boolean');
       expect(typeof containsVowel(45)).toBe('boolean');
    });
    it('should return true when passed the input "Bob"', function() {
        expect(containsVowel("Bob")).toBe(true);
    });
    it('should return true when passed the input "Jane"', function() {
        expect(containsVowel("Jane")).toBe(true);
    });
    it('should return true when the input provided is "Codeup"', function() {
        expect(containsVowel("Codeup")).toBe(true);
    });
    it('should return true when passed ' + randomString, function() {
        expect(containsVowel(randomString)).toBe(true);
    });
    it('should return false when the provided input is the empty string ""', function() {
        expect(containsVowel("")).toBe(false);
    });
    it('should return false when the input provided is "brb"', function() {
        expect(containsVowel("brb")).toBe(false);
    });
    it('should return false when the provided input is a number like ' + randomPositiveNumber, function() {
        expect(containsVowel(randomPositiveNumber)).toBe(false);
    });
    it('should return false when the input is an array', function() {
        expect(containsVowel(exampleArray)).toBe(false);
    });
    it('should return false when called with no input', function() {
        expect(containsVowel()).toBe(false);
    });
});


describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return a number when passed two numbers', function() {
        expect(typeof (add(1, 2))).toBe('number');
    });
    it('should return 4 when passed 1 and 3', function() {
        expect(add(1, 3)).toBe(4);
    });
    it('should return ' + (randomPositiveNumber + 2) + ' when passed ' + randomPositiveNumber + ' and 2', function() {
        expect(add(randomPositiveNumber, 2)).toBe(randomPositiveNumber + 2);
    });
    it('should return ' + (randomNegativeNumber + randomPositiveNumber) + ' when passed ' + randomPositiveNumber + ' and ' + randomNegativeNumber, function(){
        expect(add(randomPositiveNumber, randomNegativeNumber)).toBe(randomPositiveNumber + randomNegativeNumber);
    });
    it('should return 5 when passed the numeric strings "2" and "3".', function() {
        expect(add("2", "3")).toBe(5);
    });
    it('should return false when passed one numeric input and one non-number input', function() {
        expect(add("Bob", 2)).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(add(null)).toBe(false);
    });
    it('should return false when passed non-numeric strings', function() {
        expect(add("Bob", "Jane")).toBe(false);
    });
    it('should return false when passed two true boolean arguments', function() {
        expect(add(true, true)).toBe(false);
    });
    it('should return false when passed two false boolean arguments', function() {
        expect(add(false, false)).toBe(false);
    });
    it('should return false when passed a true and a false argument', function() {
       expect(add(true, false)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(add(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(add(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(add()).toBe(false);
    });
});

describe('multiply', function() {
    it('should be a defined function', function() {
        expect(typeof multiply).toBe('function');
    });
    it('should return a number when passed two numbers', function() {
        expect(typeof (multiply(1, 2))).toBe('number');
    });
    it('should return 15 when passed 5 and 3', function() {
        expect(multiply(5, 3)).toBe(15);
    });
    it('should return ' + (randomPositiveNumber * 99) + ' when passed ' + randomPositiveNumber + ' and 99', function() {
        expect(multiply(randomPositiveNumber, 99)).toBe(randomPositiveNumber * 99);
    });
    it('should return ' + (randomPositiveNumber * 2) + ' when passed ' + randomPositiveNumber + ' and 2', function() {
        expect(multiply(randomPositiveNumber, 2)).toBe(randomPositiveNumber * 2);
    });
    it('should return ' + (randomPositiveNumber * randomNegativeNumber) + ' when passed ' + randomPositiveNumber + ' and ' + randomNegativeNumber, function() {
        expect(multiply(randomPositiveNumber, randomNegativeNumber)).toBe(randomPositiveNumber * randomNegativeNumber);
    });
    it('should return 6 when passed the numeric strings "2" and "3".', function() {
        expect(multiply("2", "3")).toBe(6);
    });
    it('should return false when passed one numeric input and one non-number input', function() {
        expect(multiply("Bob", 2)).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(multiply(null)).toBe(false);
    });
    it('should return false when passed non-numeric strings', function() {
        expect(multiply("Bob", "Jane")).toBe(false);
    });
    it('should return false when passed two true boolean arguments', function() {
        expect(multiply(true, true)).toBe(false);
    });
    it('should return false when passed two false boolean arguments', function() {
        expect(multiply(false, false)).toBe(false);
    });
    it('should return false when passed a true and a false argument', function() {
    expect(multiply(true, false)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(multiply(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(multiply(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(multiply()).toBe(false);
    });
});

describe('sumOfSquares', function() {
    it('should return false when passed null', function() {
        expect(typeof sumOfSquares).toBe('function');
    });
    it('should return a number when passed two numbers', function() {
        expect(typeof (sumOfSquares(1, 2))).toBe('number');
    });
    it('should return 8 when passed 2 and 2', function() {
        expect(sumOfSquares(2, 2)).toBe(8);
    });
    it('should return 2 when passed 1 and 1', function() {
        expect(sumOfSquares(1, 1)).toBe(2);
    });
    it('should return 0 when passed 0 and 0', function() {
        expect(sumOfSquares(0,0)).toBe(0);
    });
    it('should return 13 when passed 2 and 3', function() {
        expect(sumOfSquares(2, 3)).toBe(13);
    });
    it('should return ' + (randomPositiveNumber * randomPositiveNumber + randomNegativeNumber * randomNegativeNumber) + ' when passed ' + randomNegativeNumber + ' and ' + randomNegativeNumber, function() {
       expect(sumOfSquares(randomPositiveNumber, randomNegativeNumber)).toBe(randomPositiveNumber*randomPositiveNumber + randomNegativeNumber * randomNegativeNumber);
    });
    it('should return false when passed a non-numeric string', function() {
        expect(sumOfSquares("Bob")).toBe(false);
    });
    it('should return false when passed two true arguments', function() {
        expect(sumOfSquares(true, true)).toBe(false);
    });
    it('should return false when passed two false arguments', function() {
        expect(sumOfSquares(false, false)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(sumOfSquares(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(sumOfSquares(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(sumOfSquares()).toBe(false);
    });
});