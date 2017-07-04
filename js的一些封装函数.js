/*1、封装绑定页面加载函数,在需要绑定一个事件时只需运行一次这个函数*/
function addLoadEvent(func) {
	var oldonload=window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

/*2、通过id获取元素DOM*/
var $=function(id){
	if (!document.getElementById) return false;
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
function getElementsByClassName(classname, node) {
	var node = node || document;
	
	if (node.getElementsByClassName) {
		//如果浏览器支持getElementsByClassName方法，则使用浏览器提供的方法
		return node.getElementsByClassName(classname);
	} else {
		var results=[],
			reg = new RegExp("\\b"+classname+"\\b"),
			elems = null;
			
		if (!document.getElementsByTagName) return false;
		elems=node.getElementsByTagName("*");
		
		for (var i = 0; i < elems.length; i++) {
			if (reg.test(elems[i].className)) {
				results[results.length] = elems[i];
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
	}else{8
		parent.appendChild(newElement,targetElement.nextSibling);
	}
}

/*7、获得XMLHttpRequest对象*/

function getHTTPObject(){
	var request;
	
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();//IE7+,Firefox,Chrome,Opera,Safari...
	} else if (window.ActiveXObject) {
		request = new ActiveXObject('Microsoft.XMLHTTP');//IE6,IE5
	} else {
		return false;
	}
	
	return request;
}

function getHTTPObject(){
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0);
			} catch (e) {
				/*空语句*/
			}
			
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0);
			} catch (e) {
				/*空语句*/
			}
			
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.);
			} catch (e) {
				/*空语句*/
			}
			
			return false;
		}
	}
	return new XMLHttpRequest();
}
	
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();//IE7+,Firefox,Chrome,Opera,Safari...
	} else {
		request = new ActiveXObject('Microsoft.XMLHTTP');//IE6,IE5
	}
	
	return request;
}

/*8、判断是否为数字*/
function isNumber(value){
	return typeof value === 'number' && isFinite(value);
}

/*9、有条件地给函数原型增加一个方法*/
Function.prototype.method = function (name, func) {
	if (!this.prototype[name] {
		this.prototype[name] = func;
	}
};

/*10、检测一个值是否是数组*/
function isArray( value ){
	if (typeof Array.isArray === "function") {
		return Array.isArray(value);
	} else {
		return Object.prototype.toString.call(value) === "[object Array]";
	}
}

/*11、生成命名空间*/
var YourGlobal = {
	namespace: function(ns) {
		var parts = ns.split("."),
			object = this,
			i,len;
			
		for (i=0, len=parts.length; i < len; i++) {
			if (!object[parts[i]]) {
				object[parts[i]] = {};
			}
			object = object[parts[i]];
		}
		
		return object;
	}
};

/*12、返回传递参数的任意对象的类*/
function classof(o){
	if (o === null) return "null";//对null和undefined进行特殊处理，在ECMAScript 5中不需要进行处理
	if (o === undefined) return "undefined";
	return Object.prototype.toString.call(o).slice(8,-1);
}

/*13、ECMAScript中的数组检测函数*/
var isArray = Function.isArray || function(o) {
	return typeof o === "object" &&
	Object.prototype.toString.call(o) === "[object Array]";
}

/*14、判断是否是类数组对象*/
function isArrayLike(o) {
	if (o &&
		typeof o === "object" &&
		isFinite(o.length) &&
		o.length >= 0 &&
		o.length === Math.floor(o.length) &&
		o.length  < 4294967296 ) {
			return true;
		} else {
			return false;
		}
}

/*15、给DOM元素追加类*/
function addClass(element, value) {
	var reg =new RegExp("\\b"+value+"\\b");
	
	if (!element.className){
		element.className = value;
	} else if (!reg.test(element.className)) {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

/*16、给DOM元素删除类*/
function removeClass(element, value) {
	var reg = new RegExp("\\b"+value+"\\b","g");
	
	if (reg.test(element.className)){
		
		//简化版本，实际还应当对空格进行适当的删除，此处应用场景可以不做处理
		newClassName = element.className.replace(reg, "");
		element.className = newClassName;
	}
}
