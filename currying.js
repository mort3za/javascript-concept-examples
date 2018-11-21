// Simple sum
function sum (x, y) {
  return x + y
}

// A sum function using currying
function sum_with_currying(x) {
  // Returns a function and gets next arg
  return y => {
    // Do the final action
    return x + y
  }
}

console.log(sum(1, 2)) // 3
console.log(sum_with_currying(1)(2)) // 3
