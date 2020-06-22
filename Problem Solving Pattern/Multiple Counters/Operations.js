
//Naive Solution   Time Complexity - o(n^2)

function sumZero(arr){
  for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==0){
        return ([arr[i],arr[j]]);
      }
    }
  }
  return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));


//Refractor

function sumZeroR(arr){
  let left=0;
  let right=arr.length-1;
  while(left<right){
    let sum=arr[left]+arr[right];
    if(sum===0){
      return ([arr[left],arr[right]]);
    }
    else if(sum>0){
      right--;
    }
    else{
      left++;
    }
  }
}
console.log(sumZeroR([-3,-2,-1,0,1,2,3]));
console.log(sumZeroR([-2,0,1,3]));
console.log(sumZeroR([1,2,3]));








