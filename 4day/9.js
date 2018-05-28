//发布订阅模式
/**
 * emit 发布
 * on 订阅
 * 
 */

 function Girl(){
    this._event={}
 }
 Girl.prototype.on=function(eventName,callback){
    if(this._event[eventName]){
        this._event[eventName].push(callback);
    }else{
        this._event[eventName]=[callback]
    }
 }
 Girl.prototype.emit=function(eventName,...arg){//...arg 在这里是剩余运算符
       //arg 在这里得到的是数组
      if(this._event[eventName]){
        this._event[eventName].forEach((item)=>item(...arg))//展开运算符
      }
 }
 let girl=new Girl;
 let cry=(who)=>{
     console.log(who+"哭")
 }
 let goShooping=(who)=>{
     console.log(who+"购物")
 }
 let eat=(who)=>{
     console.log(who+"eat")
 }
 girl.on("失恋",cry);
 girl.on("失恋",goShooping);
 girl.on("失恋",eat);
 girl.emit("失恋","你")