 /*
 *  es6 Symbol数据类型
 *  ES5的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这
  个对象添加新的方法（mixin模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每
  个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是ES6引入Symbol的原因。

  ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前
  六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象
  （Object）

  Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，
  另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性
  名产生冲突。
 * */
 let s = Symbol();  // 不能能用New命令 否则报错
 console.log(typeof s); //symbol
 /*symbol 函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要为了在控制台显示，或者转为字符串时，比较容易区分*/
 var sy1 =Symbol('foo');
 var sy2 = Symbol('ff');
 console.log(sy1) //Symbol(foo) ;
 var sy3 = Symbol('ff');
 console.log(sy2 == sy3); //false

 // Smbol值不能与其他的类型值进行运算，否则报错  但是 Symbol 值可以转为字符串。
 var sym=Symbol('dd');
 console.log(String(sym)); //Symbol(dd)
 console.log(sym.toString());//Symbol(dd)
 // Symbol值可以转为布尔值，但不能转为数值
 console.log(Boolean(sym))//true
 if(sym){
      console.log('ssd');//ssd
 }

 /*2) 作为属性名的symbol
 * 由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会
  出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
 * */
 var mySymbol = Symbol();
 //第一种写法
 var a ={};
 a[mySymbol] = 'hello';
 console.log(a[mySymbol]); //hello
 //第二中写法
 var a = {
      [mySymbol] : 'hello',
 };
 console.log(a[mySymbol]); //hello
 //第三种写法
 var a ={};
 Object.defineProperty(a,mySymbol,{value:'heool'});
 console.log(a[mySymbol]); //hello
 //以上三种情况都得到同样的结果

 /*注意，Symbol值作为属性名时，不能进行点运算*/

 /*
 * 常量使用Symbol值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的switch语句会
  按设计的方式工作
 * */