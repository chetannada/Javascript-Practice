// https://www.hackerrank.com/domains/algorithms

// dynamic array hackerrank solution in javascript
function dynamicArray(n, queries) {
    //Enter your code here
    const emptySeq = [];
    let lastAnswer = 0;
    let arr = [];
    for (let i = 0; i < n; i++) {
      emptySeq[i] = [];
    }
    queries.forEach((el) => {
      const [qe, x, y] = el;
      const idx = (x ^ lastAnswer) % n;
      switch (qe) {
        case 1:
          emptySeq[idx].push(y);
          break;
        case 2:
          const size = emptySeq[idx].length;
          const index = y % size;
          lastAnswer = emptySeq[idx][index];
          arr.push(lastAnswer);
          break;
      }
    });
    return arr;
  }