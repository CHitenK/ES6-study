/*
*  ES6 Set与Map结构
* */
/*
*  ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
*  它是一个构造函数
*  add(x) set结构增加成员
* */
var set = new Set();
[1,55,3,4,5,6].map(x=>set.add(x));
console.log(set); //Set [ 1, 2, 3, 4, 5, 6 ]；
//Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。
var array = ['j','m','k','f','h','c','m'];
var set1 = new Set(array);
console.log(set1);//Set [ "c", "m", "k", "f", "h" ]
for(var index of set1){  // for of 循环
   console.log(index)
}
console.log(set1.length)  //undefined

/* Set的属性和方法
*add(value)：添加某个值，返回Set结构本身。
 delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 has(value)：返回一个布尔值，表示该值是否为Set的成员。
 clear()：清除所有成员，没有返回值。
 size 属性，成员个数
* */

//add(x) 返回本身 可以链式调用
set1.add('cmk').add('love').add('zhang');
console.log(set1);  //Set [ "j", "m", "k", "f", "h", "c", "cmk", "love", "zhang" ]
//delete(x) 删除
set1.delete('j');
console.log(set1);//Set [ "m", "k", "f", "h", "c", "cmk", "love", "zhang" ]
//has(x)判断是否有某值
var jj = set1.has('cmk');
console.log(jj);//true
//Array.from方法可以将Set结构转为数组。
var arr = Array.from(set1);
//数组去重
var arr1= [1,2,3,1,2,3,3,4,5,6,7];
var setA = new Set(arr1);
var arr2 = Array.from(setA);
console.log(arr2);//[ 1, 2, 3, 4, 5, 6, 7 ]

/* Set结构的实例有四个遍历方法，可以用于遍历成员。
 keys()：返回一个键名的遍历器
 values()：返回一个键值的遍历器
 entries()：返回一个键值对的遍历器
 forEach()：使用回调函数遍历每个成员
 由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以 方法和 方法的行为完全一致。
 */
var setB = new Set(arr2);
console.log(setB.size) //7
setB.forEach(x=>console.log(x));
/*
* 2. WeakSet
*    WeakSet结构与Set类似，也是不重复的值的集合。但是，它与Set有两个区别。
*    1)首先，WeakSet的成员只能是对象，而不能是其他类型的值。
*    2)其次，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其
       他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于
       WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。
*   WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
   WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
   WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在WeakSet实例之中
 WeakSet的一个用处，是储存DOM节点，而不用担心这些节点从文档移除时，会引
 发内存泄漏。
* */
/*  Map结构
*  JavaScript的对象（Object），本质上是键值对的集合（Hash结构），但是只能用字符串当作键。这给它的使用带来了很大的限制。
*  ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字
 符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，Map结
 构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更
 合适。
  构造函数
  方法
  set(key,val) map结构赋值
  get(可以）  取值
  has(key) 判断是否有某值 返回Boolean值
  delete（key) 删除某值  返回Boolean值
  size 属性 返回成员数量
  clear 方法清除所有成员，没有返回值。
* */
var map = new Map();
var obj = {'cmk':123};
map.set(obj,'bbb');
console.log(map.get(obj)); //bbb
//作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
// var array = ['c','cmk']; /
var map1 = new Map ([array]);
console.log(map1);// {"c" => "cmk"}
//如果对同一个键多次赋值，后面的值将覆盖前面的值。
map.set('d','cmk');
map.set('d',"chi");
console.log(map.get('d')); //chi
//如果读取一个未知的键，则返回undefined
console.log(map.get('cc')); //undefined

/*
*  注意，只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。
* */
map.set(['a'],'pp');
console.log(map.get(['a']))//undefined
/*上面代码的set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此 方
 法无法读取该键，返回undefined
 同理，同样的值的两个实例，在Map结构中被视为两个键
 */
var k1 = ['a'];
var k2 = ['a'];
map.set(k1,'data');
map.set(k2,'fata');
console.log(map.get(k1)); //data
console.log(map.get(k2));//fata
/*变量k1和k2的值是一样的，但是它们在Map结构中被视为两个键。
* 由上可知，Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性
 碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的
 属性同名。
 如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个
 键，包括0和­0。另外，虽然NaN不严格相等于自身，但Map将其视为同一个键。
* */

/* map 结构遍历方法
* keys()：返回键名的遍历器。
 values()：返回键值的遍历器。
 entries()：返回所有成员的遍历器。
 forEach(fun)：遍历Map的所有成员。 fun可以接受三参数，val,key,map ，val为value值，key为key，map可以用来绑定当前this
 */
for(let key of map.keys()){
    console.log(key);
}
for(let key of map.values()){
    console.log(key);
}
for(let [key,val] of map.entries()){
    console.log(key);
    console.log(val);
}
map.forEach((x,y)=>console.log(x,y)); // y为key, x为val

//Map结构转为数组结构，比较快速的方法是结合使用扩展运算符（...）;
var array1 = [...map.values()];
console.log(array1);// ["bbb", "chi", "pp", "data", "fata"]


/*
*  WeakMap结构
* WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名(null除外），不接受其他类型的值
 作为键名，而且键名所指向的对象，不计入垃圾回收机制。
* */
var wemap = new WeakMap();

/*
* WeakMap的设计目的在于，键名是对象的弱引用（垃圾回收机制不将该引用考虑在内），所以其所对应的对象
 可能会被自动回收。当对象被回收后，WeakMap自动移除对应的键值对。典型应用是，一个对应DOM元素的
 WeakMap结构，当某个DOM元素被清除，其所对应的WeakMap记录就会自动被移除。基本上，WeakMap的专用
 场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。
 WeakMap与Map在API上的区别主要是两个，一是没有遍历操作,也没有size属性；二是无法清空，即不支持clear方法。这与WeakMap的键不被计入引用、被垃圾回收
 机制忽略有关。因此，WeakMap只有四个方法可用:set(),get(),delete(),has()
 WeakMap应用的典型场合就是DOM节点作为键名;
* */