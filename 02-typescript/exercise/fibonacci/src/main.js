function fibonacci(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    return fibonacci(i - 1) + fibonacci(i - 2);
}
var sum = 0;
var n = 20;
console.log("Dãy số fibonacci là : ");
for (var i = 0; i < n; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng dãy số fibonaci là : " + sum);
