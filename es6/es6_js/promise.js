/*
*  ES6 Promise
* */
/*
* 所谓Promise，就是一个对象，用来传递异步操作的消息。它代表了某个未来才会知道结果的事件（通常是一
 个异步操作），并且这个事件提供统一的API，可供进一步处理。

 Promise 对象有以下两个特点
 1） Promise对象的状态不受外界影响，Promise 对象代表一个异步操作，有三种状态Pending（进行中）、
 Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是
 哪一种状态，任何其他操作都无法改变这个状态。这也是Promis这个名字的由来，它的英语意思就是“承
 诺”，表示其他手段无法改变

 2)一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：
 从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，
 会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这
 与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的

 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此
 外，Promise对象提供统一的接口，使得控制异步操作更加容易

 Promsie 也有一些缺点。首先，无法取消Promsie，一旦新建它就会立即执行，无法中途取消。其次，如果不
 设置回调函数，Promsie 内部抛出的错误，不会反应到外部。第三，当处于Pending状态时，无法得知目前进
 展到哪一个阶段（刚刚开始还是即将完成）
 * */

/*基本用法
 Promise对象是一个构造函数，用来生成Promise实例。
* */

var promise = new Promise((resolve,reject)=>{
         consle.log('cmk');
         var num = true;
         if(/*异步操作成功*/ num){
             resolve(value);
         }else{
             reject(error);
         }
    })
/*Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve 和reject。它们是两个函数，由
* resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异
 步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态
 从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，
 作为参数传递出去。

 Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数
* */
promise.then(function (value) {
      //success
},function (value) {
     //fail
})
/*then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为Resolved时调用，第
 二个回调函数是Promise对象的状态变为Reject时调用。其中，第二个函数是可选的，不一定要提供。这两个
 函数都接受Promise对象传出的值作为参数。
* */