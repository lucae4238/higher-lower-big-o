export const code = [
  {
    value: 10,
    answer: "O(n)",
    func: `function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
      }`,
  },
  {
    value: 20,
    answer: "O(n^2)",
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
    value: 10,
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
  {
    value: 5,
    answer: "O(log n)",
    func:`function efficientSearch(array, item) {
      let minIndex = 0;
      let maxIndex = array.length - 1;
      let currentIndex;
      let currentElement;
  
      while (minIndex <= maxIndex) {
          currentIndex = Math.floor((minIndex + maxIndex) / 2);
          currentElement = array[currentIndex];
  
          if (currentElement < item) {
              minIndex = currentIndex + 1;
          }
          else if (currentElement > item) {
              maxIndex = currentIndex - 1;
          }
          else {
              return currentIndex;
          }
      }
      return -1;
  }`
  },
  {
    value: 1,
    answer:"O(1)",
    func: `function findRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }`
  },
  {
    value: 20,
    answer: "O(n^2)",
    func:`function areYouHere(arr1, arr2) {
      //let ticks1, ticks2 = 0;
        for (let i=0; i<arr1.length; i++) {
            const el1 = arr1[i];
            //ticks1++;
            for (let j=0; j<arr2.length; j++) {
                const el2 = arr2[j];
                //ticks2++;
                if (el1 === el2) return true;
            }
          //console.log(ticks1);
          //console.log(ticks2);
        }
        return false;
    }`
  }
];
