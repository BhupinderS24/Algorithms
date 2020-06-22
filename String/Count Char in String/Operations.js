//Write a function which takes in a string and returns counts of each character in the string.

// function charCount(str){
//   ret={};
//   let length=str.length;
//   for(let i=0;i<length;i++){
//     let char=str.charAt(i)  ;                                                   //let char = str.substring(i,i+1);
//     if(ret.hasOwnProperty(char)){
//       ret[char]+=1;
//     }
//     else{
//       ret[char]=1;
//     }
//   }
//   return ret;
// }
// function newCharCount(str){
//   ret={};
// let length=str.length;
// for(let i=0;i<length;i++){
//   let char=str.charAt(i);
//     ret[char]=(ret[char]||0)+1;
// }
// return(ret);
// }
// console.log(newCharCount("hello"));


// function same(arr1, arr2){
//   if(arr1.length !== arr2.length){
//       return false;
//   }
//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}
//   for(let val of arr1){
//       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1    // (a||b) if a is true no need to evaluate b if a is false evaluate b
//       console.log(val);
//       console.log(frequencyCounter1[val]); 
//   }
//   for(let val of arr2){
//       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//       console.log(val);  
//       console.log(frequencyCounter2[val]);      
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   for(let key in frequencyCounter1){
//       if(!(key ** 2 in frequencyCounter2)){
//           return false
//       }
//       if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//           return false
//       }
//   }
//   return true
// }

// console.log(same([1,2,3,2,5], [9,1,4,4,11]));


function validAnagram(str1,str2){
  if(str1.length!=str2.length){
    return false;
  }
  frequencyCounter1={};
  frequencyCounter2={};
  for(i=0;i<str1.length;i++){
    let char1=str1.charAt(i);
    let char2=str2.charAt(i);
    frequencyCounter1[char1]=(frequencyCounter1[char1]||0)+1;
    frequencyCounter2[char2]=(frequencyCounter2[char2]||0)+1;
  }

  for(let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter1[key]!=frequencyCounter2[key]){
      return false;
    }
  }
  return true;
}

console.log(validAnagram('rat','car'));





