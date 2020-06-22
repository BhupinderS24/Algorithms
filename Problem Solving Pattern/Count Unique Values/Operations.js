
//By While

function countUnique(arr){
 let l = arr.length;
 let x=0;
 let y=1;
 if(l>0){
 while(y<l){
   if(arr[x]==arr[y]){
     y++;
   }
   else{
     x++;
     arr[x]=arr[y];
     y++
   }
 }
 return x+1;
}
else{
  return x;
}
}

console.log(countUnique([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUnique([-2,-1,-1,0,1]));
console.log(countUnique([]));
console.log(countUnique([1,1,1,1,1,1,1,1,2]));


//For

function countUniqueFor(arr){
  if(arr.length===0){
    return 0;
  }
  let i=0;
  for(j=1;j<arr.length;j++){
    if(arr[i]!=arr[j]){
      i++;
      arr[i]=arr[j];
    }
  }

return i+1;
}

console.log(countUniqueFor([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueFor([-2,-1,-1,0,1]));
console.log(countUniqueFor([]));
console.log(countUniqueFor([1,1,1,1,1,1,1,1,2]));


//Set

const mySet=new Set([1,2,3,4,4,4,7,7,12,12,13]);
console.log(mySet);
console.log(mySet.size);