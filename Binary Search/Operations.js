function bSearch(elem,arr){
let start=0;
let end=arr.length-1;
let mid=Math.floor((start+end)/2);
while((arr[mid]!==elem)&&(start<=end)){
  if(elem>arr[mid]){
    start=mid+1;
  }
  else{
    end=mid-1;
  }
  mid=Math.floor((start+end)/2);
}
if(arr[mid]==elem){
  return mid;
}
else{
  return -1;
}

// return arr[mid]===elem?mid:-1;
}

console.log(bSearch(13,[1,2,5,7,8,9,10,11,12,13,14]));