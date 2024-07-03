// Find if n is a power of three. n <= 0 is false.
function isPowerOfThree(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  function takeCubeRoot(num: number): boolean {
    console.log(num);
    if (num === 1) {
      return true;
    }
    if (num % 3 !== 0) {
      return false;
    }
    return takeCubeRoot(num / 3);
  }
  let res = takeCubeRoot(n);
  return res;
}

// t = O(log_3 (n)) ~ O(lon(n))
// m = O(log(n))
// t = 302ms 5.31% | m = 60.79Mb 6.18%

// super slow. I wonder if a regular loop is faster

function isPowerOf3(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 3 !== 0) {
      return false;
    }
    n /= 3;
  }
  return n === 1;
}

// if the if (n == 1) statement ii sin the while loop.
// I get a red line under boolean
// Typescript considers all out puts,
// with out a return statement at the bottom it gave an error
// The return n === 3 is the same as the if (n === 1)

// t = 153ms | 77.88% | m = 59.45 Mb 60.18%
