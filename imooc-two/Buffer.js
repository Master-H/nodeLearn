// //buffer全局对象，不需要require
// var buf = new Buffer('hello 慕课网');
// console.log(buf)
// var buf = new Buffer('12345678');
// console.log(buf)
// //指定buffer长度为7,超出部分不会缓存
// var buf = new Buffer(7);
// buf.write('123456789')
// console.log(buf)//只有七个

// var buf = new Buffer('hello 慕课网')
// // console.log(buf.length)
// // buf.write('HI 慕课网')
// console.log(buf)
 
// console.log(buf.toString)
var buf = new Buffer('HELLO IMOOC')
var buf2 = new Buffer(5);
buf.copy(buf2,2,6,12)
// console.log(buf.length)
console.log(buf2.toString('ascii'))
