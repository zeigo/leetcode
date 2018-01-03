var quickSort = function(list){
  function helper(left, right){ // 以list[left]值为基准，分割小大两部分
    if(left >= right) return ;
    let val = list[left],
        i = left,
        j = right;
    while(i < j){
      // 保持list[i] <= val <= list[j]
      while(i < j && list[j] >= val) j--;
      list[i] = list[j];
      while(i < j && list[i] <= val) i++;
      list[j] = list[i];
    }
    list[i] = val;
    helper(left, i - 1);
    helper(i + 1, right);
  }
  helper(0, list.length - 1);
  return list;
};