/*
*   ES6 二进制数组
*   二进制数组并不是真正的数组，而是类似数组的对象
* */
/*
*  ES6 二进制数组有三类对象组成
*  1）ArrayBuffer对象 :代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接
     口，这意味着，可以用数组的方法操作内存

   2）TypedArray视图：共包括9种类型的视图，比如Uint8Array（无符号8位整数）数组视图,
     Int16Array（16位整数）数组视图, Float32Array（32位浮点数）数组视图等等 ；

   3）DataView视图：可以自定义复合格式的视图，比如第一个字节是Uint8（无符号8位整数）、第二、三
     个字节是Int16（16位整数）、第四个字节开始是Float32（32位浮点数）等等，此外还可以自定义字节序
*
* ArrayBuffer对象代表原始的二进制数据，TypedArray视图用来读写简单类型的二进制数据，
 DataView视图用来读写复杂类型的二进制数据
* */

/* 1 ArrayBufter对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray 视图和
 DataView视图)来读写，视图的作用是以指定格式解读二进制数据。*/