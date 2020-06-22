function pivot(arr,start=0,end=arr.length-1){
 
  var pIndex=start;
  var pivot=arr[start];
  

  for(let j=start+1;j<=end;j++){
    if(pivot>arr[j]){
      pIndex++;
      [arr[j],arr[pIndex]]=[arr[pIndex],arr[j]];
    }
  }
  [arr[pIndex],arr[start]]=[arr[start],arr[pIndex]];
  console.log(arr);
  return(pIndex);
}

// console.log(pivot([13,65,12,34,55,11,12,7,10,8,6] ,0,10));

function quickSort(arr,left=0,right=arr.length-1){
   if(left<right){
     let pivotIndex=pivot(arr,left,right);
    //left 
      quickSort(arr,left,pivotIndex-1);
    //right
    quickSort(arr,pivotIndex+1,right);

   }
   return arr;
}

console.log(quickSort([13,65,12,34,55,11,12,7,10,8,6]));