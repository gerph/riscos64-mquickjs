// Very simple smoke test... just to show we're working.

console.log("MQuickJS running...")

// Simple Primes calculation...
// Based on https://rosettacode.org/wiki/Sieve_of_Eratosthenes#JavaScript

function eratosthenes(limit) {
    var primes = [];
    if (limit >= 2) {
        var sqrtlmt = Math.sqrt(limit) - 2;
        var nums = new Array(); // start with an empty Array...
        for (var i = 2; i <= limit; i++) // and
            nums.push(i); // only initialize the Array once...
        for (var i = 0; i <= sqrtlmt; i++) {
            var p = nums[i]
            if (p)
                for (var j = p * p - 2; j < nums.length; j += p)
                    nums[j] = 0;
        }
        for (var i = 0; i < nums.length; i++) {
            var p = nums[i];
            if (p) {
                primes.push(p);
                console.log("Found prime " + p)
            }
        }
    }
    return primes;
}

var limit = 100;
console.log("Looking for primes < " + limit)

var primes = eratosthenes(limit);

console.log("We found " + primes.length + " primes")

