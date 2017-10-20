var mergeSort1 = function(list){
  function merge(l1, l2){ // 合并有序数组
    let res = [];
    while(l1.length && l2.length){
      if(l1[0] < l2[0]){
        res.push(l1.shift());
      }
      else{
        res.push(l2.shift());
      }
    }
    let remain = l1.length ? l1 : l2;
    return res.concat(remain);
  }
  function helper(left, right){
    if(left === right) return [list[left]];
    let mid = parseInt((left + right) / 2);
    return merge(helper(left, mid), helper(mid + 1, right));
  }
  return helper(0, list.length - 1);
};

// recursive, call stack size exceeded
var mergeSort2 = function (list) {
  function merge(l1, l2){
    if(!l1.length) return l2;
    if(!l2.length) return l1;
    let head = (l1[0] < l2[0]) ? l1.shift() : l2.shift();
    return [head, ...merge(l1, l2)];
  }
  let left = 0,
      right = list.length - 1;
  if(right === 0) return list;
  let mid = parseInt((left + right) / 2);
  return merge(mergeSort2(list.slice(left, mid + 1)), mergeSort2(list.slice(mid + 1, right)));
};
