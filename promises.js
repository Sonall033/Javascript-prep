var addTwoPromises = async function(promise1, promise2) {
    const value1 = await promise1;
    const value2 = await promise2;
    return value1 + value2;
};


async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));

}
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4
 