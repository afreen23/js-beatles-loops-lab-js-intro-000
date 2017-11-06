function theBeatlesPlay(musicians_array,instruments_array) {
  var array=[];
  for(var i=0;i<musicians_array.length;i++) {
    var s=`${musicians_array[i]} plays ${instruments_array[i]}`;
    array.push(s);
    
  }
  return array;
}
