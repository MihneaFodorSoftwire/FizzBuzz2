import {fizzbuzz} from "./index";

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(3, [3])).toBe('Fizz');
});

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(5, [5])).toBe('Buzz');
});

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(21)).toBe('FizzBang');
});

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(97)).toBe('');
});

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(33)).toBe('Bong');
});

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(195)).toBe('FizzFezzBuzz');
});

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(255)).toBe('BuzzFizz');
});

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(15, [7])).toBe('');
});
