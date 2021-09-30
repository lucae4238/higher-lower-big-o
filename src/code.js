export const code = [
  {
    //checked
    answer: "O(n)",
    func: `function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
      }`,
  },
  {
    //checked
    answer: "O(n^2)",
    func: `function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i+1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }`,
  },
  {
    //checked
    answer: "O(n)",
    func: `function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
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
    return result;
  }`,
  },
  {
    //checked
    answer: "O(log n)",
    func: `function efficientSearch(array, item) {
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
  }`,
  },
  {
    //checked
    answer: "O(1)",
    func: `function getLast(items){
      return  items[items.length-1];
    }
    `,
  },
  {
    //checked
    answer: "O(1)",
    func: `function findRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }`,
  },
  {
    //checked
    answer: "O(n^2)",
    func: `function areYouHere(arr1, arr2) {
        for (let i=0; i<arr1.length; i++) {
            const el1 = arr1[i];
            for (let j=0; j<arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }`,
  },
  {
    answer: "O(log n)",
    func: `function quickSort(list){
      if (list.length < 2) 
        return list;
      let pivot = list[0];
      let left  = []; 
      let right = [];
      for (let i = 1, total = list.length; i < total; i++){
        if (list[i] < pivot)
          left.push(list[i]);
        else
          right.push(list[i]);
      }
      return [
        ...quickSort(left), 
        pivot, 
        ...quickSort(right)
      ];
    };`,
  },
  {
    //checked
    answer: "O(n!)",
    func: `function sequence(n) {
      let num = n
      if (n === 0) return 1
      for (let i = 0; i < n; i++) {
        num = n * sequence(n - 1)
      }
      return num
    }`,
  },
  {
    answer: "O(2^n)",
    func: `function fibonacci(num) {
      if (num === 0) return 0
      else if (num === 1) return 1
      return fibonacci(num - 1) + fibonacci(num - 2)
    }`,
  },
];
