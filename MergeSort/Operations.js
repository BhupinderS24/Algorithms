function mergeArrays(arr1,arr2){
  let l1=arr1.length;
  let l2=arr2.length;
  let i=0;
  let j=0;
  let newArr=[];
  let p=0;
  while(i<l1&&j<l2){
     if(arr2[j]<arr1[i])  {
      newArr.push(arr2[j]);
      j++;
      p++;
     }
     else if(arr1[i]===arr2[j]){
      newArr.push(arr2[j]);
        p++;
        j++;
        newArr.push(arr1[i]);
        p++;
        i++;
     }
     else{
      newArr.push(arr1[i]);
       i++;
       p++;
     }
  }
 if(i<l1){
  return newArr.concat(arr1.slice(i));
 }
 if(j<l2){
  return newArr.concat(arr2.slice(j));
 }
}

// console.log(mergeArrays([73],[72]));

function mergeSort(arr){
  if(arr.length<=1) return arr;
  let mid=Math.floor(arr.length/2);
  let left=mergeSort(arr.slice(0,mid));
  let right=mergeSort(arr.slice(mid));
  return mergeArrays(left,right);
}  

console.log(mergeSort([6,9,1,2,56,78,12,11,34,43,90]));