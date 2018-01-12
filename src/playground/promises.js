const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 26
    });
    // reject('Something went wrong!')
  }, 1500);
});

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is my other promise');
    }, 5000);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
    console.log(error);
});