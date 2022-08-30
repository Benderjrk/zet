/*
 * Complete the 'minimumWindowSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING fullString
 *  2. STRING chars
 * 
 * Recursion: O(2^n) - false
 * Memoization: O(n2) - false
 * 
 * 
 * 
 * 
 * 
 *  0,1,2,3,4,5,6,7,8,9,10,11,12
 * Input: "ADOBECODEBANC", "ABC"
 *                  L             results: [0, infinity]; -> [9,12]
L                      R            counts 1 1 1
R                                      set A B C

Hunting Phase (R)- seek to fufill conditions                      Catchup Phase (L) - minimize on window
- while R less than input length
missing chars = 3
- if missing chars > 0
    If R char in counts
      decrement counts[Rchar]
      if counts[R char] > 0
      decrement missing chars
    R++

  catchup phase {
    - while missing chars === 0
      - if current LR range < result range
        - update result
      -if L char in counts
        - increment counts[lCar]
        - if counts[lChar] > 0
          - increment missing chars
  }
  
  r++

 */

function minimumWindowSubstring(word, target) {
    let left = 0;
    let right = 0;
    let result = [0,Infinity];
    const counts = {};
    let missingChars = target.length;
    for (let i = 0; i < target.length; i++) {
      let char = target[i];
      if (char in counts) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }
     while (right < word.length) {
       if (missingChars > 0) {
         let rChar = word[right];
         if (rChar in counts) {
           if (counts[rChar] > 0) {
             missingChars--;
           }
           counts[rChar]--;
         }
       }
       
       while (missingChars === 0) {
         if ((right - left) < (result[1] - result[0])) {
           result = [left, right];
         }
         
         let lChar = word[left];
         if (lChar in counts) {
           counts[lChar]++;
           if (counts[lChar] > 0) {
             missingChars++;
           }
         }
         left++;
       }
       right ++;
     }
     if (result[1] === Infinity) {
       return '';
     } else {
       return word.slice(result[0], result[1] + 1);
     }
}
