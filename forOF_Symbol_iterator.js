for (const item of items) {
    if (item === 'skip') {
      continue; // Skip this item
    }
    if (item === 'stop') {
      break; // Exit the loop
    }
    console.log(item);
  }
  

  for (const item of items) {
    if (item === 'stop') {
      break; // Exit the loop as soon as 'stop' is found
    }
    console.log(item);
  }
  

  const text = 'Hello';
for (const char of text) {
  console.log(char);
}


const myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
  ]);
  
  for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
  }


  const myIterable = {
    [Symbol.iterator]: function* () {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  
  for (const item of myIterable) {
    console.log(item);
  }
  



  Symbol.iterator is a built-in symbol in JavaScript that represents the default iterator method for an object. It is used to define how an object should be iterated, and it's a fundamental part of the Iterable protocol in JavaScript.

  Here's how Symbol.iterator is typically used:
  
  Iterable Objects: Objects that have a [Symbol.iterator] method are considered iterable. An iterable object is one that can be iterated over in a predictable way.
  
  Iteration Protocol: An iterable object defines the iteration protocol for that object, which specifies how to obtain an iterator for the object.
  
  Iterators: An iterator is an object that provides a way to traverse the elements of an iterable object. It should have a next method that returns an object with properties like value and done.
  
  Here's an example of how Symbol.iterator can be used to make an object iterable:
  
  javascript
  Copy code
  const myIterable = {
    [Symbol.iterator]: function () {
      let index = 0;
      const elements = [1, 2, 3];
  
      return {
        next: function () {
          if (index < elements.length) {
            return { value: elements[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // Using the iterable object
  for (const item of myIterable) {
    console.log(item);
  }
  In this example, myIterable is an iterable object. It defines the [Symbol.iterator] method that returns an iterator object. The iterator has a next method that controls the iteration process.
  
  When you use the for...of loop to iterate over myIterable, it utilizes the Symbol.iterator protocol to obtain an iterator and traverse the elements.
  
  Symbol.iterator is a powerful feature in JavaScript, allowing you to make custom objects iterable, and it's widely used in JavaScript for working with iterables, including arrays, maps, sets, and other iterable data structures.

  
