/*
*  es6 对象的扩展
* */

/* 1）对象的简洁白表示方法
*  允许直接写入变量和函数
* */
 var foo = 'cmk';
 var obj = {foo};
 //console.log(obj);  // {foo: "cmk"}
// ===
var obj = {foo:foo};

// es6允许对象只写属性名，不写属性值，这时，属性值等于属性所代表的变量eg
function f(x,y) {
    return {x,y};
}

console.log(f(1,2));  //{x: 1, y: 2}
//===
function j(x,y) {
    return {x:x,y:y}
}
//除了属性简写，方法也可以简写
var lobj = {
     fun(){
         return 'hell';
     },
};
//===
var po= {
    fun:function () {
         return 'hell';
    },
};
console.log(lobj.fun());
//CommonJS 模块输出变量，就非常适合使用简洁的写法
function getItem(key) {
    return key;
}
function setT(x) {
    return x;
}
//module.exports = {getItem,setT};

/* 2) 属性名表达式
*   es 允许[n] 命属性名 如
* */

var ff = 'name' ;
var kk = {
     [ff] :'cmk',
}
console.log(kk[ff]); //cmk
console.log(kk['name']) //cmk

//也可以用于方法命名
var uu = {
    ['he' + ff](){
         console.log(123);
    },
};
uu['hename'](); //123

/*3) Object.is()
* Object.is 用来比较两个值是否严格相等，它与 === 基本一致
* */
  console.log(Object.is('foo','foo')); //true

/* 3) Object.assign(obj1,obj2) 将源(obj2)对象说所有枚举的属性，复制到目标对象(obj1）。它至少需要两个参数。第一个参数为目标对象
     后面的参数为源对象。参数必须为对象，否则报错
     如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
     属性名为Symbol值的属性，也会被拷贝；
     可以用来处理数组，但会把数组视作对象
* */
var target = {a:1};
var sorce = {b:2};
var sorce1 = {c:3,a:4};
console.log(Object.assign(target,sorce1)); //{a:4,c:3}

//处理数组
console.log(Object.assign([1,2,3],[2,3,4,5]));//[2, 3, 4, 5]
// 作用1 为对象增加新属性 或新方法
 class Poist{
      col(x,y){
           Object.assign(this,{x,y});
      }
 }
//合并多个对象
//为属性指定默认值
/* 7 属性的遍历 6种 方法
    for in (不含Symbol属性）
    Object.hkeys() 返回一个数组  (不含Symbol属性）
    Obejct.getOwnpropertyNames(obj) 返回一个数组  (不含Symbol属性）
    Object.getOwnpropertySymbols(obj) 包含对象自身的Symbol属性
    Reflect.ownKeys(obj) 返回一个数组 包含所有属性
    Reflect.enumer（obj) 返回一个Iterator属性
* */
/* 8 _proto_ 属性 读取或设置当前对象的prototype对象 */

/* 9） Object.setPrototypeOf() 作用与_proto_相同 用来设置对象的prototype对象 es6推荐使用设置原型对象的方法
*   Object.setPrototypeOf(obj,prototype)
*    Object.getPrototypeOf(obj)
* */

/*10) 对象的扩展运算符
*   rest参数  用于从一个对象取值，相当于将所有可遍历的，但尚未被读取的属性，分配到指定的对象上。
* */
 //let {x,y, ...z } = {x:1,y:2,a:3,b:4};
 //console.log(z);
/*
*  扩展运算符
*  用于去除参数对象的所有遍历的属性，拷贝到当前的对象中
* 可以用于合并对对象
* */
// let j = {a:4,g:9} ;
// let n ={...z};
// console.log(n);