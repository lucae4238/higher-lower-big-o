export const code = [
  {
    answer: "O(n)",
    func: `function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
      }`,
  },
  {
    answer: "O(n)",
    func: `function createPairs(arr) {
    //let ticks = 0;
      for (let i = 0; i < arr.length; i++) {
          for(let j = i+1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
              //ticks++;
          }
      }
    //console.log(ticks);
  }`,
  },
  {
    answer: "O(n)",
    func: `function generateFib(num) {
    let result = [];
    //let ticks = 0;
    for (let i = 1; i <= num; i++) {
      //ticks++;
      if (i === 1) {
        result.push(0);
      }
      else if (i == 2) {
        result.push(1);
      }
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    //console.log(ticks);
    return result;
  }`,
  },
];
