

/*
*   es6 function 扩展
* */

/*  1 es6允许函数参数设置默认值  即直接写在参数定义在后面
* */

 function fun(y,x='worlx'){
     console.log(y,x);
 } ;

 fun('hello') ; // hello worlx

 // 结合解构
  function fun1({x=2,y=3} = {}) {
       console.log(x+ y )
  } ;
  fun1({x:9}) ;  //12

 function fun2({x,y}={x:2,y:3}) {
   console.log([x,y]); //[ 9, undefined ]
 } ;

 fun2({x:9}) ;

 /*  2 函数的length 属性  函数指定了默认值后 length 属性的参数将失真
     length 函数的属性的定义是该函数预期传入的参数的个数
 * */

    console.log(fun2.length )  //0
    function fun4(x,y) {
         return [x,y] ;
    } ;
    console.log(fun4.length) //2

    function fun3() {
          let x = 3 ;
          return function(){
                console.log(x + 3);
          }() ;
    } ;

    fun3(); //6

/*  3 rest参数
*   rest参数 形式 ...变量名  用于获取函数的多余参数 ，这样就不需要使用argument是对象
*   rest 参数搭配的变量是一个数组，该数组将多余的参数放入数组中
*   rest参数之后不能有其他参数，即其只能是最后一个参数，否则报错
*   函数的length属性不包括rest参数
* */

  function fun5(...values) {
        let sum = 0 ;
        for(let index of values){
            sum = sum + index ;
        } ;
        return sum ;
  } ;

    const _sum = fun5(1,2,3,5,45); //56
    console.log(_sum);

 /*
 *   扩展运算符  ...
 *   扩展运算符是3个点  ...  它好比rest参数的逆运算 ，将一个数组转为用逗号分隔的参数序列
 *   该运算符主要用于函数调用
 *   扩展运算符与正常函数可以结合使用，非常灵活
 *   代替数组的apply 方法  扩展运算符可以展开数组，所以不需要apply 方法，将数组转为函数的参数
 * */

   const _arr = [1,2,3,4,5] ;
   console.log(..._arr,9) //1 2 3 4 5 9

   //用于函数的调用
   const  _arr1 = fun5(..._arr) ;
   console.log(_arr1);  //15

  //代替数组的apply 方法
  const  _max = Math.max([1,4,33,55]) ;
  console.log(_max);  //NaN
  const _max2 = Math.max(...[1,4,33,55]) ;
  console.log(_max2); //55

  //合并数组
  const _arrPush = [1,2,3,4,99,78] ;
  const _arrPull = [10,9,8,7] ;
  //es5
  var array = Array.prototype.push.apply(_arrPull,_arrPush) ;
  //es6
 _arrPull.push(..._arrPush) ;
  console.log(_arrPull);  // [ 10, 9, 8, 7, 1, 2, 3, 4, 99, 78 ]

   //数组合并
   //es5
   var arryy = _arrPush.concat(_arrPush) ;
   console.log(arryy) //[ 1, 2, 3, 4, 99, 78, 1, 2, 3, 4, 等 2 项… ]
   // es6
   var arry = [..._arrPush,..._arrPull];

   


