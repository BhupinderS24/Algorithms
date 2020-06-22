
function subStringWithoutRepeat(str){
  count=0;
  for(i=0;i<str.length;i++){
    let char=str.charAt(i);
    let mySet=new Set([char]);

    for(j=i+1;j<str.length;j++){
      let char=str.charAt(j);
      if(mySet.has(char)){
        break;
      }
      else{
        mySet.add(char);
      }
      count=Math.max(count,mySet.size);
    }

  }
  return count;
}
console.log(subStringWithoutRepeat("GEEKSFORGEEKS"));
function subString(str){
  i=0;
  j=0;
  l=str.length;
  count=0;
  let mySet=new Set();
  while(i<l&&j<l){
    let char=str.charAt(j);
   if(!mySet.has(char)){
       mySet.add(char);
       j++;
   }
   else{
     mySet.delete(str.charAt(i));
     i++;
   }
   count=Math.max(count,j-i);     //count=Math.max(count,mySet.size)
  }
  return count;
}

console.log(subString("GEEKSFORGEEKS"));