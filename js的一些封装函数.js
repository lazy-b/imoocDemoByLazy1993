/*ͨ��id��ȡԪ��DOM*/
var $=function(id){
				return document.getElementById(id);
			}
/*�����¼�*/
var addEvent=function(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListenr(event,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+event,fn);
	}
}