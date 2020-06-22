function getDigit(num,i){
  return Math.floor(Math.abs(num)/Math.pow(10,i)) %10;
}

function digitCount(num){
  if(num===0) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(nums){
  let maxDigits=0;
  for(let i=0;i<nums.length;i++){
    maxDigits=Math.max(maxDigits,digitCount(nums[i]));
  }
  return maxDigits
}

function radixSort(arr){
  let newObj={
    '0':[],
    '1':[],
    '2':[],
    '3':[],
    '4':[],
    '5':[],
    '6':[],
    '7':[],
    '8':[],
    '9':[]
  };
  let maxDigits=mostDigits(arr);
  for(let i=0;i<maxDigits;i++){
     for(let j=0;j<arr.length;j++){
      let digit=getDigit(arr[j],i);
      
      console.log(digit,newObj[digit]);
      newObj[digit].push(arr[j]);
     }
     arr=[];
     for(let item in newObj){
      
        for(let k=0;k<newObj[item].length;k++){
          
          arr.push(newObj[item][k]);
        }
     }
     
     newObj={ '0':[],
     '1':[],
     '2':[],
     '3':[],
     '4':[],
     '5':[],
     '6':[],
     '7':[],
     '8':[],
     '9':[]};
  }
  return arr;
}

console.log(radixSort([10,9680,577,9420,7,5622,4793,2030,3138,82,2599,743,4127]));