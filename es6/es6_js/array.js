

/*es6 数组扩展*/

/*1 Array.from(arr) 将类似数组的对象 和可遍历的对象转为真正的数组
 可以将类似数组的dom数组转为数组操作
  如果arr为真的数组就会返回一模一样的新数组

  所谓类似数组的对象，本质的特征只有一点，即必须要有length 属性
  任何具有length属性的对象，都可以通过Array.from()转为数组
  可以将字符串转为数组
* */

let  arrayLike = {
    '0' : '123',
    '1': '45',
    '2' : 'ii' ,
    length : 3
}

//转为数组
// es5 写法
  var arr1 = [].slice.call(arrayLike) ;
  console.log(arr1) ;  //["123", "45", "ii"]
// es6 写法
 var arr2 = Array.from(arrayLike) ;
 console.log(arr2);  //["123", "45", "ii"] ；

//  可以将字符串转为数组
var string  ='cmkchi' ;
let arr3= Array.from(string) ;
console.log(Array.from(string) ); //["c", "m", "k", "c", "h", "i"]
console.log(arr3[2])  // k


// 将有length属性的对象转为数组 只要key 不是按顺序的都是 [undefined, undefined, undefined]
var obj = {
      'name' :'cmk',
      'age':23,
      'hh': 22,
      length: 3
 }  ;
console.log(Array.from(obj)) ;  //[undefined, undefined, undefined]
var obj = {
    '1' :'cmk',
    '2':23,
    '3': 22,
    length: 3
}  ;
console.log(Array.from(obj)) ; // [undefined, "cmk", 23]  ；

// Array.from(arr，function） 第二参数，作用类似数组的map 方法 用来对每个元素进行处理 ，将处理好的结果放入返回的数组
var arr4 = Array.from(obj,function (x,index) {  // x = > value  index => 下标
      console.log(index)
       if (!x){

            return x= 3; ;
       }else{
            return x ;
       }
}) ;
// console.log(arr4) ;  /[3, "cmk", 23]

/* 2  Array.of(s,s1,s2..)  将一组值转为数组  返回数组
*   可以代替Array() 或 new Array() 方法 并且不存在由于参数的不同导致的重载，他的行为非常统一
*   总返回数值组成的数组 ，没有参数返回一个空数组
*
* */
 let arrayOf = Array.of(1,2,3) ;
 console.log(arrayOf) ; // [1, 2, 3]
//新建数组
var arr5 = Array.of('f','f','g','t');
console.log(arr5) ;  //["f", "f", "g", "t"]  ；

/*   3 数组示例的copyWithin(target,star,end)  在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后
 返回当前数组。也就是说，使用这个方法，会修改当前数组 ;
 target（必需）：从该位置开始替换数据。
 start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
 end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数.
 * */
var arr6 = [1,2,3,4,5].copyWithin(0,3) ;//  将从3号位直到数组结束的成员（4和5），复制到从0号位开始的位置，结果覆盖了原来的1和2。
  // console.log(arr6);  /[4, 5, 3, 4, 5];

var arr7 = [1,2,3,4,5].copyWithin(0,2,4) ; //将下标为2 到4的值复制到下标为0上 ；
console.log(arr7);  //[3, 4, 3, 4, 5]

/*  4  数组示例的find(fun)和findIndex()
   find(fun) 用于招收出第一符合条件的数组成员，它的参数是一个回调函数，所有成员依次执行 ，知道找到第一个返回值为true 的成员，然后返回该成员
             否则返回undefined ;

 findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成
     员都不符合条件，则返回-1

 indexOf() 返回下标，否则返回-1
*
* */
var arr7 = Array.of(7,8,9,10) ;
console.log(arr7);
var findIndex = arr7.find((n) =>{return n>8 ;}) ;
console.log(findIndex);  //9 返回一个值

console.log(arr7.indexOf(9)) ; //2
// find(fun) 回调函数可以接受三个参数 依次为当前的值，当前的位置 和 与原数组
var arr8 = [4,5,6,7] ;
arr8.find((x,inde,arr) => {
      console.log(x,inde,arr) ;  //4 0 Array [ 4, 5, 6, 7 ]
      return x >8 ;
}) ;


/*  5 数组实例的fill（）  使用给定值，填充一个数组 ，返回新数组
    常用于空数组的初始化
    fill 方法接受第二参数和第三参数 用于指定填充的起初位置 和 结束位置 fill(str,start,end ) ; 不包括 end  可以用于数组成员的替换
* */
 var arr9 = [1,3,4,5] ;
 console.log(arr9.fill('gg')) ; // [ "gg", "gg", "gg", "gg" ]

const _arr =  new Array(2).fill('cmk') ;
console.log(_arr) ; //[ "cmk", "cmk" ] ;

const _arr1 = [3,4,5,6] ;
console.log(_arr1.fill('cc',2,4)) ; //[ 3, 4, "cc", "cc" ]

/*   6 数组实例的 entities()  keys()  values()  用于遍历 数组
    结合for.. of .. 用于数组的遍历
*
* */
//entities()  键值对的遍历
  /*const _arr3 = ['c','m','k','g','o','o','d'];*/
   const _arr3 =['c','d'];
   for(let [index,value] of _arr3.entries()){
         console.log(index) ;  //下标值
         console.log(value);  // 数组值
   } ;

//keys()  键的遍历
  for (let index of _arr3.keys()) {
        console.log(index) ;  // key
        console.log(_arr3[index] +''  ) ; //value
  } ;

  //values()  //值的遍历
  /*for (let val of [2,3].values()){
       console.log(val) ; //value
  }  ;*/

  // next()  具有itarater 的数组都具有的函数 一步步执行返回数值值
 var _entries = _arr3.entries() ;
 console.log(_entries.next().value) ;  //[0,'c']
 //console.log({'cc':'dd','naem' : 'cmk'}.next())  报错

/*
*  7  数组示实例的includes()方法  判断数组是否具有给定的值  与字符串的includes方法相似  返回true 或 false
*     接受第二个参数  表示搜索的起始位置 负数则从倒数位置
*     indexOf() 与其相似 但 indexOf() 不能判断NaN
* */
  const _arr4 = [3,4,5,7,8] ;
  console.log(_arr4.includes('4'))  //false
  console.log(_arr4.includes(4))  //true
// NaN
 console.log([2,NaN].indexOf(NaN))  //-1
console.log([2,NaN].includes(NaN))  //true

/*
  includes() 区分
*  Map解构的has()  是用来查找键名
*  Set结构 的has() 是用来查找值的
*
* */

/*  8  数组的空位问题 数组的空位指，数组的某一位置没有任何值
*  空位不是undefinede ,一个位置的值等于undefined 依然有值
*
* es5 对数组空的处理 已经很不一致  ，大多数情况会忽略 如
*   forEach() filter() ,every() ,some() 跳过空位
*    map() 跳过但会保留这个值
*    for .. of .. 不会忽略
 * */
// Array 构造函数返回的数组都是空位

    const  _arr5 = new Array(4) ;
    console.log(_arr5); //[,,,,]

   const _arr6 = [2,3,4,5] ;
   _arr6.forEach(function(val,index,arr){
        console.log(val+','+ index +','+arr)  // val => value  index => key  arr =>原数组
   });

   /*   9  数组的推到

   * */