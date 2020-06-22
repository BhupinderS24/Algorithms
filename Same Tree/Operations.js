function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    lowest=i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[lowest]){
        lowest=j;
      }
    }
    if(i!=lowest){                                   //avoid swapping the same elements
      [arr[lowest],arr[i]]=[arr[i],arr[lowest]];
    }
   
  }
  return arr;
}


console.log(selectionSort([2,4,1,7,8,4,3,2,1,45,21,34,78]));

