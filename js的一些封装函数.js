/*1、封装绑定页面加载函数,在需要绑定一个事件时只需运行一次这个函数*/
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

/*2、通过id获取元素DOM*/
var $=function(id){
				return document.getElementById(id);
			}
			
/*3、新增事件*/
var addEvent=function(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListenr(event,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+event,fn);
	}
}

/*4、通过类名查找DOM对象（单个类名）*/
function getElementsByClassName(node,classname){
	if(node.getElementsByClassName){
		//如果浏览器支持getElementsByClassName方法，则使用浏览器提供的方法
		return node.getElementsByClassName(classname);
	}else{
		var results=new Array();
		var elems=node.getElementsByTagName("*");
		for(var i=0;i<elems.length;i++){
			if(elems[i].className.indexOf(classname)!=-1){
				results[results.length]=elems[i];
			}
		}
		return results;
	}
}

/*5、js跨浏览器事件处理函数封装*/
var eventUtil = {
    // 添加句柄
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    // 删除句柄
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    //获取事件
    getEvent: function(event) {
        return event ? event : window.event;
    },
    //获取事件类型
    getType: function(event) {
        return event.type;
    },
    //获取事件源
    getElement: function(event) {
        return event.target || event.srcElement;
    },
    //阻止默认事件比如a链接跳转
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //阻止事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}

/*6、在现有元素后插入一个元素*/
function  insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.appendChild(newElement,targetElement.nextSibling);
	}
}

/*7、获得XMLHttpRequest对象*/
function getHTTPObject(){
	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();//IE7+,Firefox,Chrome,Opera,Safari...
	}else{
		request = new ActiveXObject('Microslft.XMLHTTP');//IE6,IE5
	}
	return request;
}

