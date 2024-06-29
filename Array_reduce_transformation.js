var reduce = function(nums, fn, init) {
    let result = init
    for(let i=0;i<nums.length;i++)
        {

             result = (fn(result,nums[i]))
        }
        // result = result === 0 ? init : result;
        return result
};

let nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
console.log(reduce(nums,fn,init))


let nums1 = []
function sum(accum, curr) { return 0; }
init1 = 25
console.log(reduce(nums1,fn,init1))


let nums3 = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init3 = 100

console.log(reduce(nums3,fn,init3))
