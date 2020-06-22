
var longestPalindrome = function(s) {
     
  var l=s.length;
  var obj={};
  var count=0;
  for(let i=0;i<l;i++){
      let p=0;
      let arr=[];
      let char=s.charAt(i);
      arr[p]=char;
      p++;
      for(j=i+1;j<l;j++){
          var check=false;
          let char2=s.charAt(j);
          arr[p] =char2;
          p++;
          let k=0;
          let end=arr.length-1;
          while(k<end){
              if(arr[k]===arr[end]){
                  k++;
                  end--;
                  check=true;
              }
              else{
                  check=false;
                  break;
              }
              }
          if(check===true){
                   count=arr.length;
                  obj[count]=arr;
                  console.log(obj);   
          }
            
      }
       
  }
};


longestPalindrome("babad");