// function addWithLoop(num){
//     var total=0;
//     for ( i=1;i<=num;i++){
//        total+=i;
//     }
//     return total;
// }

// function addWithFormula(num){
//     return num*(num+1)/2;
// }
// var t1=performance.now();
// // addWithLoop(1000000000);
// addWithFormula(1000000000);
// var t2=performance.now();
// console.log('TimeElapse'+((t2-t1)/1000)+'seconds');

var arr=[1,2,4,5,6,8,9,12];
var n=arr.length;
var temp;

console.log(arr);
for(i=0;i<=n;i+=2){
  temp=arr[i];
  arr[i]=arr[i+1];
  arr[i+1]=temp;
}
console.log(arr);




