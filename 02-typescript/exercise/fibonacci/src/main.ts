function fibonacci(i: number): number {
    if(i == 0)
    {
        return 0;
    }
    if(i == 1)
    {
        return 1;
    }
    return fibonacci(i-1) + fibonacci(i-2);
}
let sum = 0;
let n= 20;
console.log("Dãy số fibonacci là : ");
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng dãy số fibonaci là : " +sum);
