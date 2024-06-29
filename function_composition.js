var compose = function(functions) {
    return function(x) {
    let result = x
        for(let i=functions.length-1 ;i>=0;i--)
        {
            result=functions[i](result)
        // return(functions(x,x))
    }
    return result
}
};


const fn = compose([x => x + 1, x => 2 * x])
// 9
//  console.log( fn(4) )

 //
 var once = function(fn) {
    let count =false ,result = 0
    
    return function(...args){
        console.log("args--",args)
        if(!count)
            {
                count = true
                result = fn(...args);
            return result
    }
    else{
        return undefined
    }
}
  
};


  let fns = (a,b,c) => (a + b + c)
  let onceFn = once(fns)
 
  // 6
 console.log (onceFn(1,2,3));

  console.log(onceFn(2,3,6)); // returns undefined without calling fn
 
