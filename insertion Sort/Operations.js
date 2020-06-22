function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
     currentValue=arr[i];
    for(var j=i-1;j>=0;j--){
        if(arr[j]<currentValue){    
         break;
        }
        else{
         [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        }
    }
    console.log(arr);
  }
  console.log(arr);
}



insertionSort([56,65,89,90,12,11]);