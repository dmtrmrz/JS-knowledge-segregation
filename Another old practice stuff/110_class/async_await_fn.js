const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = async () => {
  console.log("Timer starts");
  //   const startTime = performance.now();
  await timerPromise();
  //   const endTime = performance.now();
  console.log("Timer ended");
};

asyncFn();

const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const url = "https://jsonplaceholder.typicode.com/todos/1";

try {
  const data = await getData(url);
  console.log(data);
} catch (error) {
  console.log(error.message);
}
