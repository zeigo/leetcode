var quickSort = function(list){
  function swap(a, b){ // 交换a,b索引处值
    let tmp = list[a];
    list[a] = list[b];
    list[b] = tmp;
  }
  function helper(left, right){ // 以list[left]值为基准，分割小大两部分
    if(left >= right) return ;
    let val = list[left],
        i = left,
        j = right;
    while(i < j){
      // 保持list[i] <= val <= list[j]
      while(i < j && val < list[j]) j--;
      swap(i, j);
      while(i < j && val > list[i]) i++;
      swap(i, j);
    }
    list[i] = val;
    helper(left, i - 1);
    helper(i + 1, right);
  }
  helper(0, list.length - 1);
  return list;
};