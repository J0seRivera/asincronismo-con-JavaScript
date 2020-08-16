const doSomethingAsync = () => {
  return new Promise((resolve, rejecct) => {
    (true)
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : rejecct(new Error('Test Error'))
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
  try {
    const sometime = await doSomethingAsync();
    console.log(sometime);
  } catch {
    console.error(error)
  }
}

console.log('Before 1');
doSomething();
console.log('After 2');