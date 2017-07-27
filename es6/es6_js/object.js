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

/*
* */