

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

 //与解构赋值结合  用于生成数组   扩展运算符用于数组赋值，稚嫩那个放在参数最后一位，否则报错
 var [first,...res] = [1,2,3,4,56,4];
 console.log(first,res);// 1, [2,3,4,56,4] ;

//函数的返回值
/* 函数如需要返回多只时，除数组，对象外，还可以用扩展符解决
* */

//将字符串转为数组
var str = [...'hello'] ;
console.log(str);  //["h", "e", "l", "l", "o"]
//类似数组的对象 任何类似数组的对象都可以用扩展运算符转为真正的数组
/*  var dom = $('div');
 var dom = [...dom] //真数组
 * */

// Map ,Set 解结构
let map = new Map([
    [1,'h'],
    [2,'p'],
    [3,'o'],
]);
var map1 = [...map.keys()] ;
console.log(map1);  //[1, 2, 3]
console.log([...map.values()]); //["h", "p", "o"]

/*5 箭头函数 =>*/
var f = v => v ;
//dengyu
var f = function (v) {
    return v;
};
// 如果箭头函数 不需要或需要多个参数，就是用一个（）代表参数布部分
var  funer = () => 5;
 //===
function funer() {
    return 5 ;
};
var sum = (num1,num2) => num1 +num2 ;
//===
function sum(num1,num2) {
    return num1 + num2;
};

//如果箭头函数的代码块布冯多余一条语句就是用大括号将它们包起来，并且使用return  语句返回
var yy = (num) => {
     num = num + num;
     return num;
} ;

//如果函数返回对象，则对象外面加上括号
var obj = () => {
     return ({'name':'cmk'});
};
console.log(obj()); // {'name':'cmk'}

//与解构结合使用
var full = ({fisy , two}) =>{
      return fisy + ' '  + two;
};
//=====
function full(resd) {
    return resd.fity + ' ' + resd.name;
};

// 叫你同意函数使得表达式更加简洁
var add = n => n= n + n;
//数组排序
 var numArray = [3,5,7,4,8] ;
 var sortArray = numArray.sort((x,y) => x -y);
 console.log(sortArray); //[3, 4, 5, 7, 8]

// rest参数与箭头函数结合
var ner = (...sortArray) =>  sortArray;
console.log(ner(1,2,3,4,5)); //sortArray

/*
*  箭头函数注意点
*  1 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对像
*  2 不可当作构造函数 ，既不能用New 命令
*  3 不可使用argument是对象，改对象不存在，如果要用，可以用rest参数代替
*  4 不可以使用yied 命令，不能当作=Generator 函数
* */
