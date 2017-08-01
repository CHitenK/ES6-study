/*
*  ES6 proxy概述
*  Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta
 programming），即对编程语言进行编程。
 Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提
 供了一种机制，可以对外界的访问进行过滤和改写。Proxy这个词的原意是代理，用在这里表示由它来“代
 理”某些操作，可以译为“代理器”。
* */

//ES6原生提供Proxy构造函数，用来生成Proxy实例
var proxy = new Proxy(targe,handlr);
/*roxy对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中new Proxy（）表示生成
 一个Proxy实例，target参数表示所要拦截的目标对象，handler)参数也是一个对象，用来定制拦截行为*/
var proty = new Proxy({},{
     get(target,){
          return 35;
     }
})
console.log(proty.name)//35
console.log(proty.age ); //35
/*上面代码中，作为构造函数，Proxy接受两个参数。第一个参数是所要代理的目标对象（上例是一个空对
 象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个
 被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。比如，上面代码中，配置对象有
 个get方法，用来拦截对目标对象属性的访问请求。get方法的两个参数分别是目标对象和所要访问的属性。
 可以看到，由于拦截函数总是返回35 ，所以访问任何属性都得到35 。
 注意，要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例
 是空对象）进行操作。如果handler有设置任何拦截，那就等同于直接通向原对象。*/

/*
 *  Reflect Reflect对象与proxy对象一样，也是ES6为了操作对象而提供的新API,Reflect对象的设计目的有这样几
 个。
 1)将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty()），放到Reflect对象
 上。现阶段，某些方法同时在Object和Reflaect对象上部署，未来的新方法将只部署在Reflect对象上
 2） 修改某些Object方法的返回结果，让其变得更合理。比如Object.defineProperty(obj,name,desc)在无法定义属性时，会抛出一个错误，
 而Reflect.defineProperty(obj,name,desc)则会返回flase

 3)让object操作都变成函数行为。某些object操作是命令式，比如name in object 和delete obj[name[]，
 而Reflect.hans(obj,name)和Rreflect.deleteproperty(obj,name)让它们变成了函数行为。

 4)Reflect对象的方法与proxy对象的方法一一对应，只要是proxy对象的方法，就能在Reflact对象上找
 到对应的方法。这就让proxy对象可以方便地调用对应的Reflact方法，完成默认行为，作为修改行为的基
 础。也就是说，不管proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
  。
 * */