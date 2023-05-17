const arr = [1,-4,7,12];
function positiveSum(arr) {
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i];
    }
  }console.log(sum);
}
positiveSum(arr);