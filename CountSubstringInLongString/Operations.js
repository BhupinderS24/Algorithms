var count=0;
var check;
function countSubStr(substr,longStr){
  var p=0;
for(i=0;i<longStr.length;i++){
  for(j=i;j<i+substr.length;j++){
     if(longStr.charAt(j)===substr.charAt(p)){
       p++;
       check=true;
     }
     else{
       check=false;
       p=0;
       break;
     }
  }
  if(check==true){
     count++;
  }
}
return count;
}

console.log(countSubStr("l","lorie loled"));