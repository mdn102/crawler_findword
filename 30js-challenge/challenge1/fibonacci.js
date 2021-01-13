// Using recursive function//
var fibonacci = function (n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

for (let i = 0; i <= 10; i++) {
  console.log(`${(i)} : ${fibonacci(i)}`)
}
