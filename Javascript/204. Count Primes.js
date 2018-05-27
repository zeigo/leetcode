/**
 * @param {number} n
 * @return {number}
 */
// TLE o(n1.5)
var countPrimes = function (n) {
  function isPrime(x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i === 0) return false
    }
    return true
  }
  var count = 0
  for (var i = 2; i < n; i++) {
    if (isPrime(i)) count++
  }
  return count
};
// Sieve of Eratosthenes
var countPrimes = function (n) {
  var primes = new Array(n).fill(true),
    count = 0, i, j
  for (i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (j = i; i * j < n; j++) {
        primes[i * j] = false
      }
    }
  }
  for (i = 2; i < n; i++) {
    if (primes[i]) count++
  }
  return count
}