'use strict';

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
*   es6 function 扩展
* */

/*  1 es6允许函数参数设置默认值  即直接写在参数定义在后面
* */

function fun(y) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'worlx';

  console.log(y, x);
};

fun('hello'); // hello worlx

// 结合解构
function fun1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 2 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 3 : _ref$y;

  console.log(x + y);
};
fun1({ x: 9 }); //12

function fun2() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 2, y: 3 },
      x = _ref2.x,
      y = _ref2.y;

  console.log([x, y]); //[ 9, undefined ]
};

fun2({ x: 9 });

/*  2 函数的length 属性  函数指定了默认值后 length 属性的参数将失真
    length 函数的属性的定义是该函数预期传入的参数的个数
* */

console.log(fun2.length); //0
function fun4(x, y) {
  return [x, y];
};
console.log(fun4.length); //2

function fun3() {
  var x = 3;
  return function () {
    console.log(x + 3);
  }();
};

fun3(); //6

/*  3 rest参数
*   rest参数 形式 ...变量名  用于获取函数的多余参数 ，这样就不需要使用argument是对象
*   rest 参数搭配的变量是一个数组，该数组将多余的参数放入数组中
*   rest参数之后不能有其他参数，即其只能是最后一个参数，否则报错
*   函数的length属性不包括rest参数
* */

function fun5() {
  var sum = 0;

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var index = _step.value;

      sum = sum + index;
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
  return sum;
};

var _sum = fun5(1, 2, 3, 5, 45); //56
console.log(_sum);

/*
*   扩展运算符  ...
*   扩展运算符是3个点  ...  它好比rest参数的逆运算 ，将一个数组转为用逗号分隔的参数序列
*   该运算符主要用于函数调用
*   扩展运算符与正常函数可以结合使用，非常灵活
*   代替数组的apply 方法  扩展运算符可以展开数组，所以不需要apply 方法，将数组转为函数的参数
* */

var _arr = [1, 2, 3, 4, 5];
(_console = console).log.apply(_console, _arr.concat([9])); //1 2 3 4 5 9

//用于函数的调用
var _arr1 = fun5.apply(undefined, _arr);
console.log(_arr1); //15

//代替数组的apply 方法
var _max = Math.max([1, 4, 33, 55]);
console.log(_max); //NaN
var _max2 = Math.max.apply(Math, [1, 4, 33, 55]);
console.log(_max2); //55

//合并数组
var _arrPush = [1, 2, 3, 4, 99, 78];
var _arrPull = [10, 9, 8, 7];
//es5
var array = Array.prototype.push.apply(_arrPull, _arrPush);
//es6
_arrPull.push.apply(_arrPull, _arrPush);
console.log(_arrPull); // [ 10, 9, 8, 7, 1, 2, 3, 4, 99, 78 ]

//数组合并
//es5
var arryy = _arrPush.concat(_arrPush);
console.log(arryy); //[ 1, 2, 3, 4, 99, 78, 1, 2, 3, 4, 等 2 项… ]
// es6
var arry = [].concat(_arrPush, _arrPull);

//与解构赋值结合  用于生成数组   扩展运算符用于数组赋值，稚嫩那个放在参数最后一位，否则报错
var first = 1,
    res = [2, 3, 4, 56, 4];

console.log(first, res); // 1, [2,3,4,56,4] ;

//函数的返回值
/* 函数如需要返回多只时，除数组，对象外，还可以用扩展符解决
* */

//将字符串转为数组
var str = [].concat(_toConsumableArray('hello'));
console.log(str); //["h", "e", "l", "l", "o"]
//类似数组的对象 任何类似数组的对象都可以用扩展运算符转为真正的数组
/*  var dom = $('div');
 var dom = [...dom] //真数组
 * */

// Map ,Set 解结构
var map = new Map([[1, 'h'], [2, 'p'], [3, 'o']]);
var map1 = [].concat(_toConsumableArray(map.keys()));
console.log(map1); //[1, 2, 3]
console.log([].concat(_toConsumableArray(map.values()))); //["h", "p", "o"]

/*5 箭头函数 =>*/
var f = function f(v) {
  return v;
};
//dengyu
var f = function f(v) {
  return v;
};
// 如果箭头函数 不需要或需要多个参数，就是用一个（）代表参数布部分
var funer = function funer() {
  return 5;
};
//===
function funer() {
  return 5;
};
var sum = function sum(num1, num2) {
  return num1 + num2;
};
//===
function sum(num1, num2) {
  return num1 + num2;
};

//如果箭头函数的代码块布冯多余一条语句就是用大括号将它们包起来，并且使用return  语句返回
var yy = function yy(num) {
  num = num + num;
  return num;
};

//如果函数返回对象，则对象外面加上括号
var obj = function obj() {
  return { 'name': 'cmk' };
};
console.log(obj()); // {'name':'cmk'}

//与解构结合使用
var full = function full(_ref3) {
  var fisy = _ref3.fisy,
      two = _ref3.two;

  return fisy + ' ' + two;
};
//=====
function full(resd) {
  return resd.fity + ' ' + resd.name;
};

// 叫你同意函数使得表达式更加简洁
var add = function add(n) {
  return n = n + n;
};
//数组排序
var numArray = [3, 5, 7, 4, 8];
var sortArray = numArray.sort(function (x, y) {
  return x - y;
});
console.log(sortArray); //[3, 4, 5, 7, 8]

// rest参数与箭头函数结合
var ner = function ner() {
  for (var _len2 = arguments.length, sortArray = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    sortArray[_key2] = arguments[_key2];
  }

  return sortArray;
};
console.log(ner(1, 2, 3, 4, 5)); //sortArray

/*
*  箭头函数注意点
*  1 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对像
*  2 不可当作构造函数 ，既不能用New 命令
*  3 不可使用argument是对象，改对象不存在，如果要用，可以用rest参数代替
*  4 不可以使用yied 命令，不能当作=Generator 函数
* */
// this 指向问题  箭头函数的指向总是指向函数的所在对象
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log(_this.id);
  }, 1000);
}
foo.call({ 'id': "cmk" }); //cmk this 指向foo 并不是windows
/*  函数绑定
 函数绑定运算符是并排的两个双冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左
 边的对象，作为上下文环境（即this对象），绑定到右边的函数上面
*   foo::bar  === bar.bind(foo)  foo 为对象 bar为函数
*   foo::bar(...arguments) === bar.call(foo,aruemnts);
*
*   如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面
*   var tt =  ::obj.fun  === obj::obj.fun
*   ===
*   var tt = obj.fun.call(obj)
*  由于双冒号运算符返回的还是原对象，因此可以采用链式写法
*
* */

/*  7 尾调用的优化  函数最后一步调用一个函数
 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
 尾调用不一定出现在函数尾部，只要是最后一步操作即可
*
* */
// 简单实示例
function g(x) {
  console.log(x);
}
function f1(x) {
  return g(x); //尾调用 return 后直接调用函数 不参杂其他参数
}
f1(1); //1
// 一下三种情况不属于为调用
function p(x) {
  g(x);
}

function t(x) {
  var g = g(x);
  return g;
}

function r(x) {
  return g(x) + 1;
}