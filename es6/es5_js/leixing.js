'use strict';

/*es6 数据类型扩充*/

/*字符串 ======*/

// 1 字符的Unicode表示方法   javascript 允许采用“\uxxxx" 的形式表示一个字符，其中’xxxx‘表示字符的码点
// \u0061表示 ’a’ ; es5 这种方法值只限于‘\u000 - \uffff ' 之间的字符 超出的话必须用双字节表示
// es6  只要将码点放入大括号里，就能正确解读该字符

var ji = '\uD842\uDFB7';
console.log(ji); // 吉

var abc = 'ABC';
console.log(abc); //ABC

var hello = 123;
///  hell'\u{6f}' ;  //123

/* JavaScript内部，字符以UTF­16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符
（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符
   当字符的uniocde 大于0ffff时 ,需要4个字节来存储 ，否则是两个字符
*/
/*=========================================================================*/
/* 2 codePointAt()
   es5  charAt charCodeAt 处理不了4个字节的字符
   es6 提供codePointAt() 方法能正确处理4个字节存储的字符，返回一个字符的码点
 */
var str = 'q';
console.log(str.charAt(0)); //q
console.log(str.charCodeAt()); // 113 ASCA码

var _se6Str = 'q';
console.log(_se6Str.codePointAt()); // 113 ASCA码

var _se6Str1 = '池a'; // 6个字节
console.log(_se6Str1.codePointAt(0)); // 27744  ASCA码
console.log(_se6Str1.codePointAt(1)); //  97  ASCA码
/*codePointAt()方法会正确返回32位的UTF­16字符的码点。对于那些两个字节储存的常规字符，它的返
 回结果与charCodeAt()方法相同。
 codePointAt() 方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
 */

/*==============================================================*/
/* 3 String.fromCodePoint(str)  str 为字符串  16进制就0x开头
 *  es5 提供String.fromCharcode() 用于从码点返回对应的字符 但这个方法不能识别32位的UT-16 字符 （uniocde编号大于0xffff); 大于时会发生溢出
 *  es6 提供String.fromCodePoint() ，可以识别32位的字符，弥补String.fromCharcode()的不足 在作用上，正好与codePoint 方法相反
 *  注意，String.fromCodePoint(str) 方法定义在String 对象上，而codePointAt()方法定义在字符串的实例对象上
 * */

console.log(_se6Str3);
var num_16 = _se6Str1.codePointAt(0).toString(16);
console.log(num_16);
var _se6Str3 = String.fromCodePoint('0x' + num_16);
console.log(_se6Str3); //池
/*==============================================*/
/*4 字符串的遍历
 for(let ; ; ) 无法遍历Unicode 大于0xffff的字符串
 *  for... of
 *
 * */
var _string = "chiMinke";
var _stairngChinese = '地球您好';
console.log(_string.toUpperCase()); //  CHIMINKE    toUpperCase() 将字符(串） 转换成大写
for (var i = 0; i < _string.length; i++) {
  console.log(_string[i].toUpperCase()); //toUpperCase() 将字符(串） 转换成大写
};
for (var _i = 0; _i < _stairngChinese.length; _i++) {
  console.log(_stairngChinese[_i]); // 地 球 您 好
};
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _i2 = _step.value;
    //能够遍历 unicode大于 0xffff转换过来的字符
    console.log(_i2); // c h i ...
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

;
var _text = String.fromCodePoint(0x20bb7); // 吉
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = _text[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _i3 = _step2.value;

    console.log(_i3); // 吉
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

;
/*==========================================*/
/* 6 at(n) 与charAt(n)等价 能识别unicode摆好大于0xffff 的字符*/
var _strAt = 'str';
//console.log(_strAt.at(1)) ;  //t

/* 6 at(n) 与charAt(n)等价 能识别unicode摆好大于0xffff 的字符*/
var _strAt = 'str';
//console.log(_strAt.at(1)) ;  //t
/*======================================================*/
/*7 includes() starsWith() endsWith()
 *  传统上 JS只有indexOf()方法盘都拿一个字符串是否包含在另一个字符串中，返回下标  ； es6 提供了三种方法
 *   includes(n) 返回布尔值 表示是否找到参数字符串
 *   starsWith(n) 返回布尔值，表示参数字符串是否在源字符串的头部  n必须匹配源字符串的头字符串
 *   endsWith(n) 返回布尔值，表示参数字符串是否存在源字符串的尾部  n必须匹配源字符串的尾字符串
 *
 * */
var _strTest = 'hello world';
console.log(_strTest.indexOf('w')); //6
console.log(_strTest.includes("wor")); //true

console.log(_strTest.startsWith('ell')); //false
console.log(_strTest.startsWith('hell')); //true

console.log(_strTest.endsWith('wor')); //false
console.log(_strTest.endsWith('ld')); //true

/*repeat() 返回一个新的字符串，表示将字符串重复n次 n是小数会被取整，负数会报错 n可以是字符串数字*/
console.log('x'.repeat(3)); //xxx
console.log('hello'.repeat(2.9)); //hellohello

/*padStart() padEnd()
* es7 推出了字符串补全长度的功能，即某个字符串不够指定长度，会在头部或尾部补全，padStart()用于头部，padEnd()用于尾部补全
* str.padStart(length,str) ; length 为指定长度， str 为补全字符串
 str.padEnd(length,str) ; length 为指定长度， str 为补全字符串
 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
 忽略第二个参数，则会用空格补全
* */

console.log('c'.padEnd(3, 'mk')); // cmk 尾部补全
console.log('k'.padStart(3, 'cm')); //cmk  头部补全
console.log('chiminke'.padEnd(4, 'jj')); //chiminke 源字符串输出
var _kk = 'chi'.padEnd(8); //  忽略第二个参数，则会用空格补全
console.log(_kk.length); // 8

/*==================================================================*/
/* 8  模板字符串 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
* 可用于拼接html语句  ”<div class='box'>"+name +"</div>"  => `<div class="box">${name}</div>`
*可以用来定义多行字符串
* 在字符串中嵌入变量  ${name}
* 模板字符串中嵌入变量，需要将变量名写在${}之中  大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性 ;调用函数。
*
* */
var _list1 = 'li1';
var _obj = {
  name: "cmk",
  age: '18'
};
var _div = document.getElementById('box');
var _templateText = '<li class="boli">' + _list1 + '</li>';;
console.log(_templateText); // <li class="boli">li1</li>

var _templateText = '<li class="boli">' + _obj.name + '</li>';
console.log(_templateText); //<li class="boli">cmk</li>

var _templateText = '<li class="boli">' + (8 + 9) + '</li>';
console.log(_templateText); //<li class="boli">17</li>

var _templateText = '<li class="boli">' + fun1() + '</li>';
console.log(_templateText); //<li class="boli">6</li>

function fun1() {
  return 3 + 3;
};

/*========*********************************************************++++++++++++++++++++++++========*/

/* 正则表达式的扩展 */

/* new RegExp(str,'gi') /str/gi
*  字符串有4个方法，可以使用正则表达式
*  match(reg)   在字符串内检索指定的值，或找到一个或多个正则表达式的匹配 返回匹配表达式
*  replace(regexp/substr,replacement)  返回一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
*  search(str) 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。 返回下标
*  split(separator,howmany) 方法用于把一个字符串分割成字符串数组。 separator	必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
*   howmany 可选  分割后数组长度
* */

//match(reg)
var _reg = /\d+/g;
var _regText = '1 cmk 2 love 3 gan';
console.log(_regText.match(_reg)); //["1", "2", "3"]  ；

//replace(reg ,repalecement)

/*2 U修饰符*/

/*====================================================================================*/
/*数值
*  二进制 0b/ 0B
*  八进制 0o/0O
*  十六机制 0x /0X
* */
/*
*   Number.isFinite(num)  判断一个数值是否非无穷 (Infinite) 无穷返回false 非无穷返回true
*   Number.isNaN() 用来检查一个值是否为NaN  是返回true 否返回false
* */
console.log(Number.isFinite(45)); // true
console.log(Number.isFinite(Infinity)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(45)); //  false


/*/Number.isInteger()  用来判断一个值是否为整数  注意的是  JS 整数和浮点数是同样的存储方法 ，所以3和3.0视为同一值*/
console.log(Number.isInteger(3.5)); //false
console.log(Number.isInteger(3)); //true
console.log(Number.isInteger(3.0)); //true

/*ES6在Number对象上面，新增一个极小的常量 Number.EPSILON   引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围
* 如果这个误差能够小于Number.EPSILON，我们就可以认为得到了正确结果
* 实质是一个可以接受的误差范围
* */
/* Number.isSafeInteger(num) 则是用来判断一个整数是否落在这个范围之内
*JavaScript能够准确表示的整数范围在2^53(Number.MAX_SAFE_INTEGER)  到-2^53(Number.MIN_SAFE_INTEGER) 之间（不含两个端点），超过这个范围，无法精确表示这
  个值。*
  num 是否在此范围返回true
* */

/*
* 扩展函数  Math
* Math.trunc(num)  方法用于去除一个数的小数部分，返回整数部分 num 数字 或数字字符  对于空值和无法截取整数的值，返回NaN
* Math.sign(num)  方法用来判断一个数到底是正数、负数、还是零
* 它会返回五种值。
 参数为正数，返回+1；
 参数为负数，返回­1；
 参数为0，返回0；
 参数为­0，返回­0;
 其他值，返回NaN
* */

console.log(Math.trunc('7.009')); // 7 返回整数部分

console.log(Math.sign(8)); //  正数 返回1
console.log(Math.sign(-8)); // 负数 返回-1
console.log(Math.sign(0)); //  0 返回0
console.log(Math.sign('dd')); //  非数字  返回NaN
console.log(Math.sign(NaN)); //   返回0Na 返回NaN

/*
*  Math.cbrt(num) 计算立方根
*
*  Math.fround(num)  方法返回一个数的单精度浮点数形式。
*
*  Math.hypot(num1,num2,.. ) 方法返回所有参数的平方和的平方根
*
*    Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
     Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
     Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
     Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
     Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
     Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
* */

/*指数运算符 ’**‘  */

var _num2 = 8 ** 8;
console.log(_num2); //  8^8
console.log(2 ** 4); //2^4  16

var b = 2;
console.log(b **= 5); //32 2^5