
//结构  ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
//总结一下，解构左右变量不对称时，匹配前面
/*解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象*/
// let [h1,[h2],h3] = [0,1,2];  //报错
// console.log(h1,h2,h3) ;
//es5  赋值
/*/ es6 解构赋值  数组*/
var a = 1 ;
var b = 2 ;
var c = 3 ;
let [a1,b1,c1] = [1,2,3] ;

//解构本质上来说，本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值 ；

let [boo,[[bar],foo]] = [1,[[2],[3]]] ; //boo == 1 , bar ==2 , foo= 3;
let [,,kk] = [,,6];
//特殊
let [hh,...dd] = [1,2,3,4,5];

//解构不成功时就是undefined  左多右少
let [x,y,k] = ['a'];
console.log(x,y,k) ; // x =='a' y ,k == undefined

let [uu,oo] = [1,2,3] ;
console.log(uu,oo); //uu==1 oo = 2

// 函数中的使用
var fun = ((x,y) => {
   return [x,y];

}) ;
const  fun1 = fun(x,y) ;
console.log( fun1) ; // ['a',undefined]

const [x1,y1] = fun(x,y) ;
console.log(x1,y1);// ['a',undefined] ；

//报错
// let [jj] = 123 ;
// let [tt] = 56 ;
/*console.log(jj,tt); //报错*/

//事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。

let [nn,mm,ee] = new Set(['a','b','c']) ;
console.log(nn,mm,ee);  //nn=='a' mm=='b' ee == 'c'

/*//解构赋值允许指定默认值 当变量的赋值为undefined时 取默认值  ES6内部使用严格相等运算符（===），判断一个位置是否有值。
   所以，如果一个数组成员不严格等于 ，默认值是不会生效的。 需要注意的是null 不严格等于undefined*/
let [joo = true] = [] ;  //joo 的默认值为true
console.log(joo) ; //true

let [hoo=true ] =[1]
console.log(hoo)  // hoo == 1

let [koo='kk'] =[null] ;
console.log(koo) ; //null
let loo = fun() ;
let [ioo = loo] = [] ;
console.log(fun()) ;

function fun(){

    return 'aaa';
} ;

/*=================================*/
//对象也可以解构 其规则如下;
/*对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属
 性没有次序，变量必须与属性同名，才能取到正确的值。*/
let {tar , car } ={tar:'55',car:'kk'} ;
console.log(tar,car) ; //tar == '55' car == 'kk'

//属性名不一样时，解构不成功
let {baz} = {hoo:'kk',pp:'oo'};
console.log(baz) ; //undefined

//如果变量名与属性名不一致时，必须写成下面这个样

let {huu:juu} = {huu:'pp',ben:'kl' } ;
console.log(juu); // juu ==pp huu is not defined

let obj = {frist:'hello',last:'world'} ;
let {frist:f,last:g} = obj ;
console.log(f,g) ; //f==hello g == world

/*合实际，对象的解构赋值简写形式 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，
而不是前者*/
let {qoo:qoo,eoo :eoo} ={qoo:'99',eoo:'eoo'} ;
console.log(qoo,eoo); //99 eoo

//解构同样可以适合嵌套结构
var objet = {
      p:[
          "hello",
          {
             kok:'00'
             }
      ]
} ;
var {p:[poo,{kok}]} = objet ; /*这时 p是模式，不是变量，因此不会被赋值。*/
console.log(poo,kok);  // hello 00

//对象解构可以制定默认值 用’=‘ 默认值生效的条件是，对象的属性值严格等于 undefined
var {de='ll',fe} ={fe:'pp'} ;
console.log(de,fe) ; // ll pp
var {he=8} ={he:undefined};
console.log(he);

//将一个已经声明的变量用于解构，必须小心
//错误写法
/*
*  var yoo ;
*  {yoo} = {yoo:'pp'} ; //报错
*  JavaScript引擎会将Ƈƈ 理解成一个代码块，从而发生语法错误。只有不将大括
 号写在行首，避免JavaScript将其解释为代码块，才能解决这个问题
* */
//正确写法
var roo ;
({roo}= {roo : 'pp'}) ;
console.log(roo); //pp

/*解构赋值允许，等号左边的模式之中，不放置任何变量名*/
({} ={poo:'ll'}) ; //无意义但合法/

/*==============================*/
/*字符串的解构赋值 此时 字符串被转换成一个类似数组的对象*/
const [j1,k1,n1,m1,q1,] = 'hello' ;
console.log(j1,k1,n1,m1,q1)// h e l l o

/*类似数组的对象都有一个length 属性，因此还可以对这个属性解构赋值*/
let {length :len } ='hello';
console.log(len); // 5

/*================================*/
/*数值结合布尔值的结构赋值*/
/*解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。*/
let {toString :_s} = 123 ;
console.log(_s); // function toString

/*解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象*/
/*=============================================*/
/*函数的参数也可以使用解构赋值*/
function add([x,y]) {
    return x + y ;
} ;
console.log(add([3,8])); //11

//函数参数的解构使用默认值

function move({soo = 5 ,doo = 9} = {}) {
      return [soo,doo] ;
}

var ddd = move({soo:456, doo:900}) ;
console.log(ddd); //456 900

var ddd= move({}) ;
console.log(ddd); // 5,9

var ddd= move() ;
console.log(ddd); //5 9

var ddd = move({d2:2}) ;
console.log(ddd);  // 5 9

var ddd = move({soo:2}) ;
console.log(ddd); //2 9

//undefined 就会触发函数参数的默认值
const aray =  [1,undefined,3] ;
var hary = aray.map((x='2')=> x) ;  //数组map函数相当于循环
console.log(hary) ;  //[1,'2',3] ;

/*解构中圆括号不能使用的三种情况
*变量声明语句中，模式不能带有圆括号
*函数参数中，模式不能带有圆括号
*不能将整个模式，或嵌套模式中的一层，放在圆括号之中
*
*解构能使用圆括号的情况 仅此一种
* 赋值语句的非模式部分，可以使用圆括号
*
* */

/*==============================================*/
/*解构用途*/
//1 交换变量的值
    var kii = 1 ;
    var kgg = 2 ;
    [kii,kgg] = [kgg,kii ];
    console.log(kii,kgg)  //2 1

//2 从函数返回多个值
function ect() {
    return [2,3,4] ;
};
    var [yii,...jii] = ect() ;
    console.log(yii,jii) ; //2 ,[3,4] ;

//3 函数参数的定义   解构赋值可以方便地将一组参数和变量名对应起来
   function h([x,y,z]) {  //参数是有序的值
        return  ;
   } ;

   function d({x,y,z})  {  //参数是无序的值
       return ;
   } ;

// 4 提取JSON 数据
var json_data = {
      id : 90 ,
    status:true,
    data:[78,90]
} ;
let { id, status,data:num} =  json_data ;

// 5 函数参数的默认值  避免在函数内写 var x3 = x3 || 7 ;
 function m({x3=7,y4 =9}) {
      return x3 + y4;
 } ;

 //6 遍历Map 结构

// 7 输入模块的指定方法  加载模块时 往往需要指定输入的那些方法 ；
// const {sour , come} = require("source_map") ;

