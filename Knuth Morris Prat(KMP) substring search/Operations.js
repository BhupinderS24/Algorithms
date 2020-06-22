var patArr=[];

function patArray(substr){
  
  patArr[0]=0;
  let i=1;
  let j=0;
  while(i<substr.length){
    charAtj=substr.charAt(j);
    charAti=substr.charAt(i);
    if(charAtj===charAti){
      patArr[i]=j+1;
      i++;
      j++;
    }
    else{
      if(j==0){
        patArr[i]=patArr[j];
        i++;
      }
      else{
         j=patArr[j-1];
      }
    }
  }

}
patArray("AWE");
console.log(patArr);



function searchSubStr(text,patArr,substr){
  let i=0;
  let j=0;
  let count=0;
  while(i<text.length){

    charPat=substr.charAt(j);
    charText=text.charAt(i);
    if(charPat===charText){
       if(j==substr.length-1){
         return 1;
       }
       else{
        i++;
        j++;
       }    
    }
    else{
      if(j==0){
        i++;
      }
      else{
        j=patArr[j-1]
      }
     
    }
  }
  return 0;
}

console.log(searchSubStr("AWE",patArr,"AWE"));
