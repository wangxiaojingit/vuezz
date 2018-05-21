/*
* reduce 遍历数组中的每一项
*  参数说明：pre 上一项，next 下一项，index：遍历到的索引，item 代表遍历的原数组
* */

let ary=[1,2,3,4,5,6]

ary.reduce(function(pre,next,index,item){
  console.log(arguments)
})
//结果
/*

{ '0': 1, '1': 2, '2': 1, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': undefined, '1': 3, '2': 2, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': undefined, '1': 4, '2': 3, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': undefined, '1': 5, '2': 4, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': undefined, '1': 6, '2': 5, '3': [ 1, 2, 3, 4, 5, 6 ] }

pre：1，next：2 index：1，item：【1,2,3,4,5,6】

到第二次的时候pre 是undefined 是因为没有返回值，每次pre都会把上次的返回值做为下次的pre



* */


let a=ary.reduce(function(pre,next){
  console.log(arguments)
  return pre+next;
})

/*
{ '0': 1, '1': 2, '2': 1, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': 3, '1': 3, '2': 2, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': 6, '1': 4, '2': 3, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': 10, '1': 5, '2': 4, '3': [ 1, 2, 3, 4, 5, 6 ] }
{ '0': 15, '1': 6, '2': 5, '3': [ 1, 2, 3, 4, 5, 6 ] }
*/
console.log(a)

//求总价
let list=[{"price":1,"num":2},{"price":1.5,"num":2},{"price":2.5,"num":2}]

let sum=list.reduce(function(pre,next){
  return pre+next.price*next.num;
},0)
console.log(sum)

//对于对象，这里的参数0 代表默认第一次的prev 的值为0

//把二维数组变成一维数组
let ary2=[[1,2],[3,4]];

let newAry=ary2.reduce(function(pre,next){
  return pre.concat(next)
})

console.log(newAry)

