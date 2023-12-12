var output = []
var num = 1

while (output.length != 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        output.push('fizzbuzz');
    } else if ( num % 3 === 0) {
        output.push('fizz');
    } else if ( num % 5 === 0) {
        output.push('buzz');
    } else {
        output.push(num);
    }
    num += 1
}

console.log(output);
