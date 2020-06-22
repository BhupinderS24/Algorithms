function bubbleSort(arr){
  let n=arr.length;
  
  for(let i=n-1;i>=0;i--){
    let noSwap = true;                           //to optimize
    for(let j=0;j<i;j++){
      if(arr[j]>arr[j+1]){
        noSwap=false;
   [arr[j],arr[j+1]]=[arr[j+1],arr[j]];    //swap
      }
    }
    console.log("steps"+arr);
    if(noSwap) break;                             // if already sorted means no swap then break from loop no need to check further

  }
  console.log(arr);
}

bubbleSort([8,1,2,3,4,5,6]);