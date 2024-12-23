function greet(name) {
    return `hi, ${name}!`;
}

function add(a, b) {
    return a + b;
}

module.exports = {
    greet,
    add
};
console.log(myModule.greet('John'));  
console.log(myModule.add(5, 3));      