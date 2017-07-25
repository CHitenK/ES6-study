'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

//结构  ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
//总结一下，解构左右变量不对称时，匹配前面
/*解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象*/
// let [h1,[h2],h3] = [0,1,2];  //报错
// console.log(h1,h2,h3) ;
//es5  赋值
/*/ es6 解构赋值  数组*/
var a = 1;
var b = 2;
var c = 3;
var a1 = 1,
    b1 = 2,
    c1 = 3;

//解构本质上来说，本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值 ；

var boo = 1,
    bar = 2,
    foo = [3]; //boo == 1 , bar ==2 , foo= 3;

var _ref = [,, 6],
    kk = _ref[2];
//特殊

var hh = 1,
    dd = [2, 3, 4, 5];

//解构不成功时就是undefined  左多右少

var _ref2 = ['a'],
    x = _ref2[0],
    y = _ref2[1],
    k = _ref2[2];

console.log(x, y, k); // x =='a' y ,k == undefined

var _ref3 = [1, 2, 3],
    uu = _ref3[0],
    oo = _ref3[1];

console.log(uu, oo); //uu==1 oo = 2

// 函数中的使用
var fun = function fun(x, y) {
    return [x, y];
};
var fun1 = fun(x, y);
console.log(fun1); // ['a',undefined]

var _fun = fun(x, y),
    _fun2 = _slicedToArray(_fun, 2),
    x1 = _fun2[0],
    y1 = _fun2[1];

console.log(x1, y1); // ['a',undefined] ；

//报错
// let [jj] = 123 ;
// let [tt] = 56 ;
/*console.log(jj,tt); //报错*/

//事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。

var _ref4 = new Set(['a', 'b', 'c']),
    _ref5 = _slicedToArray(_ref4, 3),
    nn = _ref5[0],
    mm = _ref5[1],
    ee = _ref5[2];

console.log(nn, mm, ee); //nn=='a' mm=='b' ee == 'c'

/*//解构赋值允许指定默认值 当变量的赋值为undefined时 取默认值  ES6内部使用严格相等运算符（===），判断一个位置是否有值。
   所以，如果一个数组成员不严格等于 ，默认值是不会生效的。 需要注意的是null 不严格等于undefined*/
var _ref6 = [],
    _ref6$ = _ref6[0],
    joo = _ref6$ === undefined ? true : _ref6$; //joo 的默认值为true

console.log(joo); //true

var _ = 1,
    hoo = _ === undefined ? true : _;

console.log(hoo); // hoo == 1

var _ref7 = null,
    koo = _ref7 === undefined ? 'kk' : _ref7;

console.log(koo); //null
var loo = fun();
var _ref8 = [],
    _ref8$ = _ref8[0],
    ioo = _ref8$ === undefined ? loo : _ref8$;

console.log(fun());

function fun() {

    return 'aaa';
};

/*=================================*/
//对象也可以解构 其规则如下;
/*对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属
 性没有次序，变量必须与属性同名，才能取到正确的值。*/
var _tar$car = { tar: '55', car: 'kk' },
    tar = _tar$car.tar,
    car = _tar$car.car;

console.log(tar, car); //tar == '55' car == 'kk'

//属性名不一样时，解构不成功
var _hoo$pp = { hoo: 'kk', pp: 'oo' },
    baz = _hoo$pp.baz;

console.log(baz); //undefined

//如果变量名与属性名不一致时，必须写成下面这个样

var _huu$ben = { huu: 'pp', ben: 'kl' },
    juu = _huu$ben.huu;

console.log(juu); // juu ==pp huu is not defined

var obj = { frist: 'hello', last: 'world' };
var f = obj.frist,
    g = obj.last;

console.log(f, g); //f==hello g == world

/*合实际，对象的解构赋值简写形式 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，
而不是前者*/
var _qoo$eoo = { qoo: '99', eoo: 'eoo' },
    qoo = _qoo$eoo.qoo,
    eoo = _qoo$eoo.eoo;

console.log(qoo, eoo); //99 eoo

//解构同样可以适合嵌套结构
var objet = {
    p: ["hello", {
        kok: '00'
    }]
};

var _objet$p = _slicedToArray(objet.p, 2),
    poo = _objet$p[0],
    kok = _objet$p[1].kok; /*这时 p是模式，不是变量，因此不会被赋值。*/


console.log(poo, kok); // hello 00

//对象解构可以制定默认值 用’=‘ 默认值生效的条件是，对象的属性值严格等于 undefined
var _fe = { fe: 'pp' },
    _fe$de = _fe.de,
    de = _fe$de === undefined ? 'll' : _fe$de,
    fe = _fe.fe;

console.log(de, fe); // ll pp
var _he = { he: undefined },
    _he$he = _he.he,
    he = _he$he === undefined ? 8 : _he$he;

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
var roo;
var _roo = { roo: 'pp' };
roo = _roo.roo;

console.log(roo); //pp

/*解构赋值允许，等号左边的模式之中，不放置任何变量名*/
//无意义但合法/

/*==============================*/
/*字符串的解构赋值 此时 字符串被转换成一个类似数组的对象*/
var _poo = { poo: 'll' };

_objectDestructuringEmpty(_poo);

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    j1 = _hello2[0],
    k1 = _hello2[1],
    n1 = _hello2[2],
    m1 = _hello2[3],
    q1 = _hello2[4];

console.log(j1, k1, n1, m1, q1); // h e l l o

/*类似数组的对象都有一个length 属性，因此还可以对这个属性解构赋值*/
var _hello3 = 'hello',
    len = _hello3.length;

console.log(len); // 5

/*================================*/
/*数值结合布尔值的结构赋值*/
/*解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。*/
var _2 = 123,
    _s = _2.toString;

console.log(_s); // function toString

/*解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象*/
/*=============================================*/
/*函数的参数也可以使用解构赋值*/
function add(_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        x = _ref10[0],
        y = _ref10[1];

    return x + y;
};
console.log(add([3, 8])); //11

//函数参数的解构使用默认值

function move() {
    var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref11$soo = _ref11.soo,
        soo = _ref11$soo === undefined ? 5 : _ref11$soo,
        _ref11$doo = _ref11.doo,
        doo = _ref11$doo === undefined ? 9 : _ref11$doo;

    return [soo, doo];
}

var ddd = move({ soo: 456, doo: 900 });
console.log(ddd); //456 900

var ddd = move({});
console.log(ddd); // 5,9

var ddd = move();
console.log(ddd); //5 9

var ddd = move({ d2: 2 });
console.log(ddd); // 5 9

var ddd = move({ soo: 2 });
console.log(ddd); //2 9

//undefined 就会触发函数参数的默认值
var aray = [1, undefined, 3];
var hary = aray.map(function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2';
    return x;
}); //数组map函数相当于循环
console.log(hary); //[1,'2',3] ;

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
var kii = 1;
var kgg = 2;
var _ref12 = [kgg, kii];
kii = _ref12[0];
kgg = _ref12[1];

console.log(kii, kgg); //2 1

//2 从函数返回多个值
function ect() {
    return [2, 3, 4];
};

var _ect = ect(),
    _ect2 = _toArray(_ect),
    yii = _ect2[0],
    jii = _ect2.slice(1);

console.log(yii, jii); //2 ,[3,4] ;

//3 函数参数的定义   解构赋值可以方便地将一组参数和变量名对应起来
function h(_ref13) {
    var _ref14 = _slicedToArray(_ref13, 3),
        x = _ref14[0],
        y = _ref14[1],
        z = _ref14[2];

    //参数是有序的值
    return;
};

function d(_ref15) {
    var x = _ref15.x,
        y = _ref15.y,
        z = _ref15.z;
    //参数是无序的值
    return;
};

// 4 提取JSON 数据
var json_data = {
    id: 90,
    status: true,
    data: [78, 90]
};
var id = json_data.id,
    status = json_data.status,
    num = json_data.data;

// 5 函数参数的默认值  避免在函数内写 var x3 = x3 || 7 ;

function m(_ref16) {
    var _ref16$x = _ref16.x3,
        x3 = _ref16$x === undefined ? 7 : _ref16$x,
        _ref16$y = _ref16.y4,
        y4 = _ref16$y === undefined ? 9 : _ref16$y;

    return x3 + y4;
};

//6 遍历Map 结构

// 7 输入模块的指定方法  加载模块时 往往需要指定输入的那些方法 ；
// const {sour , come} = require("source_map") ;