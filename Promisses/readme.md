# Promisses
promises in JavaScript represent a modern pattern for handling asynchronous operations in a more readable and organized manner. A Promise can exist in three distinct states: pending, fulfilled, or rejected.

When creating a Promise, you use the structure new Promise((resolve, reject) => {...}), where resolve is called when the asynchronous operation is successful, and reject is used when something goes wrong.

In the usage of Promises, the then method is employed to handle successful cases, while the catch method deals with failures. This approach allows for chaining Promises, creating clear sequences of asynchronous operations.

Additionally, the finally method can be utilized to specify a callback that will be executed regardless of whether the Promise is fulfilled or rejected. This is beneficial for performing cleanup operations or finalizing tasks, providing a consistent way to handle cleanup logic.

A practical example involves file reading, where the readFile function returns a Promise to read the content of a file. The then method is then used to handle the success of the operation, catch deals with potential failures, and finally is employed for cleanup tasks.

Promises, with the inclusion of finally, are essential for handling asynchronous code in a structured way, improving readability, and facilitating the handling of results, whether positive or negative, in time-consuming operations.






