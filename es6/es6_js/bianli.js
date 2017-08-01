
/*
*  ES6 遍历方法
* */

/*
* 1. Iterator（遍历器）的概念
* JavaScript原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6又添加了Map和
 Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，
 Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数
 据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员
 能够按某种次序排列；三是ES6创造了一种新的遍历命令for of 循环，Iterator接口主要供for of消费。

 Iterator的遍历过程是这样的。
 （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 （4）不断调用指针对象的 方法，直到它指向数据结构的结束位置。
 每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两
 个属性的对象。其中value属性是当前成员的值,done属性是一个布尔值，表示遍历是否结束

 ES6规定，默认的Iterator接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator
 属性，就可以认为是“可遍历的”（iterable）。调用Symbol.iterator方法，就会得到当
 前数据结构默认的遍历器生成函数。Symbol.iterator本身是一个表达式，返回Symbol对象的iterator属性，
 这是一个预定义好的、类型为Symbol的特殊值，所以要放在方括号内（请参考Symbol一章）。

 在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构。
* */
/*
* 调用Iterator接口的场合
* 1）解构赋值 对数组和Set结构进行解构赋值时，会默认调用Symbol.iterator方法。
* 2) 扩展运算符(...) 调用默认的iterator接口。 只要某个数据结构部署了Iterator接口，就可以对它使用扩展运算符，将其转为数组
* 3）yield*  yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口
* 4）其他场合 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。例如
* for...of
 Array.from()
 Map(), Set(), WeakMap(), WeakSet()
 Promise.all()
 Promise.race()
* */

//1）解构赋值
let set = new Set().add('d').add('p').add('kk').add('jj');
let [x,y] = set ;
console.log(x,y); //d p
let [h,...k] =  set;
//yield* 
// var fun = function* (){
//     yield 1;
//     yield *[1,23,4,5,];
//     yield 6;
// }
// var gun = fun();
//console.log(gun.next());

/*  2  字符串的Iterator接口
*
* */

/* 3）
*  遍历器对象的return()，throw()
*  遍历器对象除了具有next方法，还可以具有retrun方法和throw方法。如果你自己写遍历器对象生成函数，
 那么next方法是必须部署的retrun方法和throw方法是否部署是可选的。
 retrin方法的使用场合是，如果for of 循环提前退出（通常是因为出错，或者有break语句或continue语
 句），就会调用retrun方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署retrun方法。
* */

/*
*   for of 循环  数组 字符串 类似数组的对象(Array.from()转为数组) set map
*   对象 对于普通的对象，for of结构不能直接使用，会报错，必须部署了iterator接口后才能使用。但是，这样情
 况下，for of循环依然可以用来遍历键名 ；
 一种解决方法是，使用Object.keys()方法将对象的键名生成一个数组，然后遍历这个数组。
* */
for(let key of 'hello'){
    console.log(key);
}
var srr =[1,3,4,5,6,7];
for(let key of srr){
    console.log(key);
}
//对象
var object = {
    'name':'cmk',
    'age':24,
    sex:'men',
    k:'pp',
    l:'ll',
};
for(let key of Object.keys(object)){
    console.log(key);
    console.log(object[key]);
}

/*
* 与其他遍历语法的比较
* 数组提供内置的forEach方法   forEach循环，break命令或return命令都不能奏效。
* for in循环主要是为遍历对象而设计的
* for of 优点
* 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
  不同用于forEach方法，它可以与break、continue和return配合使用。
  提供了遍历所有数据结构的统一操作接口
*
* */