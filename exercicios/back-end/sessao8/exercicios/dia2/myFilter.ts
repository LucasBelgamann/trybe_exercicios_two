type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  array.forEach((item) => {
    if (callback(item)) newArray.push(item)
  });

  return newArray;
}

console.log(myFilter([1, 2, 3], (item) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item) => {
  return item !== "a"
}));