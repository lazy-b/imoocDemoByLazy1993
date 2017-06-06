/*通过id获取元素DOM*/
var $=function(id){
				return document.getElementById(id);
			}
/*新增事件*/
var addEvent=function(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListenr(event,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+event,fn);
	}
}