// Callback

function someFunction() {
  // smth
}

function fnWithCallback(callbackFunction) {
  callbackFunction();
}

fnWithCallback(someFunction);

// example

function printMyName() {
  console.log("Dzmirty");
}

console.log("Here we go...");

setTimeout(printMyName, 2000);
