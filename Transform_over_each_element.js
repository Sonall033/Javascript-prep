//filtering elements as well
var map = function(arr, fn) {
    console.log("hi")
    const result = [];
    console.log(fn(78))
    for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) ? result.push(arr[i]) : null ;

    }
    return result;
  };
  
  // Example 1
  let arr1 = [8, 92, 34];
  function plusone(n) {
    return n + 1;
  }
  map(arr1, plusone); // Output: [2, 3, 4]
  // Example 2
  let arr2 = [1, 2, 3];
  function plusI(n, i) {
    return n + i;
  }
  // console.log(map(arr2, plusI)); // Output: [1, 3, 5]
  
  // Example 3
  let arr3 = [10, 20, 30];
  function constant() {
    return 42;
  }
  // console.log(map(arr3, constant)); // Output: [42, 42, 42]
  

  let arr4= [0,10,20,30]

function greaterThan10(n)
{
    return n>10
}
// console.log(map(arr4, greaterThan10)); 


function firstIndex(n, i) { return i === 0; }

console.log(map(arr2, firstIndex)); 
