//如果是第三方模块的话,不用加"./",如果是文件模块,自己写的模块,需要加"./"
//import 具有声明功能
//在这个文件中将内容解构出来

//两种方式可以赋值,一种以 对象的解构的方式  一种以* as names
import {str1, str2} from "./a.js" ;
console.log(str1,str2)

// import * as vs from "./a.js" ;
console.log(vs.str1)