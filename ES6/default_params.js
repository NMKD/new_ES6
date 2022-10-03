const funcDefault = c => c * 2;

function compute (a = 10, b = funcDefault(10)) {
    return a + b;
}

console.log(compute());