!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("SpriteAnimator",[],factory):"object"==typeof exports?exports.SpriteAnimator=factory():root.SpriteAnimator=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _SpriteAnimator=__webpack_require__(1),_SpriteAnimator2=_interopRequireDefault(_SpriteAnimator),VueSpriteAnimator={install:function(Vue,options){Vue.component(_SpriteAnimator2.default.name,_SpriteAnimator2.default)}};exports.default=VueSpriteAnimator},/* 1 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(2);var Component=__webpack_require__(7)(/* script */
__webpack_require__(8),/* template */
__webpack_require__(27),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 2 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(3);"string"==typeof content&&(content=[[module.id,content,""]]),content.locals&&(module.exports=content.locals);
// add the styles to the DOM
__webpack_require__(5)("8fc28fce",content,!0)},/* 3 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(4)(),
// imports
// module
exports.push([module.id,"",""])},/* 4 */
/***/
function(module,exports){/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
// css base code, injected by the css-loader
module.exports=function(){var list=[];
// return the list of modules as css string
// import a list of modules into the list
return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 5 */
/***/
function(module,exports,__webpack_require__){function addStylesToDom(styles){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j]));domStyle.parts.length>item.parts.length&&(domStyle.parts.length=item.parts.length)}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j]));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function createStyleElement(){var styleElement=document.createElement("style");return styleElement.type="text/css",head.appendChild(styleElement),styleElement}function addStyle(obj){var update,remove,styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction)
// has SSR styles and in production mode.
// simply do nothing.
return noop;
// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement)}if(isOldIE){
// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement()),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else
// use multi-style-tag mode in all other cases
styleElement=createStyleElement(),update=applyToTag.bind(null,styleElement),remove=function(){styleElement.parentNode.removeChild(styleElement)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",
// http://stackoverflow.com/a/26603875
css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
var hasDocument="undefined"!=typeof document,listToStyles=__webpack_require__(6),stylesInDom={},head=hasDocument&&(document.head||document.getElementsByTagName("head")[0]),singletonElement=null,singletonCounter=0,isProduction=!1,noop=function(){},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);return addStylesToDom(styles),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}newList?(styles=listToStyles(parentId,newList),addStylesToDom(styles)):styles=[];for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 6 */
/***/
function(module,exports){/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
module.exports=function(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={id:parentId+":"+i,css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}},/* 7 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 8 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _isNan=__webpack_require__(9),_isNan2=_interopRequireDefault(_isNan);exports.default={name:"v-sprite",props:{spritesheet:{required:!0,type:String,default:""},json:{required:!0,type:Object,default:{}},fps:{type:Number,default:30},autoplay:{type:Boolean,default:!0},yoyo:{type:Boolean,default:!1},id:{type:String,default:"sprite"}},data:function(){return{frames:[],visible:!0,length:0,frameIndex:0,currentIndex:0,animationFrameID:null,yoyodirection:0,sprite:null,ctx:null,height:0,width:0,now:0,then:0}},mounted:function(){var _this=this;this.json.frames.forEach(function(frame){_this.frames.push({name:frame.filename,x:frame.frame.x,y:frame.frame.y,w:frame.frame.w,h:frame.frame.h})}),this.frames.sort(function(a,b){return a.filename<b.filename}),this.width=this.frames[0].w,this.height=this.frames[0].h,this.length=this.frames.length-1},created:function(){var _this2=this;this.$nextTick(function(){_this2.sprite=new Image,_this2.sprite.src=_this2.spritesheet,_this2.sprite.onload=function(_ref){var target=_ref.target;_this2.init(target)}})},methods:{init:function(img){this.ctx=this.$refs["vue-sprite-canvas"].getContext("2d"),this.autoplay&&this.loop()},render:function(){this.ctx&&this.ctx.clearRect(0,0,this.width,this.height),this.yoyo&&this.currentIndex%this.length===0&&this.currentIndex&&(this.yoyodirection=Number(!this.yoyodirection));var index=Math.abs(this.currentIndex%this.length-this.length*this.yoyodirection),x=this.frames[index].x,y=this.frames[index].y;this.ctx&&this.ctx.drawImage(this.sprite,x,y,this.width,this.height,0,0,this.width,this.height)},loop:function(){this.now=Date.now();var delta=this.now-this.then;delta>1e3/this.fps&&(this.then=this.now-delta%(1e3/this.fps),this.render(),this.currentIndex++),this.animationFrameID=window.requestAnimationFrame(this.loop)},stop:function(){window.cancelAnimationFrame(this.animationFrameID),this.currentIndex=0},play:function(from){this.currentIndex=(0,_isNan2.default)(Number(from))?this.currentIndex:from,this.loop()}}}},/* 9 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(10),__esModule:!0}},/* 10 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(11),module.exports=__webpack_require__(14).Number.isNaN},/* 11 */
/***/
function(module,exports,__webpack_require__){
// 20.1.2.4 Number.isNaN(number)
var $export=__webpack_require__(12);$export($export.S,"Number",{isNaN:function(number){
// eslint-disable-next-line no-self-compare
return number!=number}})},/* 12 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(13),core=__webpack_require__(14),ctx=__webpack_require__(15),hide=__webpack_require__(17),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
// contains in native
own=!IS_FORCED&&target&&void 0!==target[key],own&&key in exports||(
// export native or passed
out=own?target[key]:source[key],
// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};
// type bitmap
$export.F=1,// forced
$export.G=2,// global
$export.S=4,// static
$export.P=8,// proto
$export.B=16,// bind
$export.W=32,// wrap
$export.U=64,// safe
$export.R=128,// real proto method for `library`
module.exports=$export},/* 13 */
/***/
function(module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},/* 14 */
/***/
function(module,exports){var core=module.exports={version:"2.5.3"};"number"==typeof __e&&(__e=core)},/* 15 */
/***/
function(module,exports,__webpack_require__){
// optional / simple context binding
var aFunction=__webpack_require__(16);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},/* 16 */
/***/
function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},/* 17 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(18),createDesc=__webpack_require__(26);module.exports=__webpack_require__(22)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},/* 18 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(19),IE8_DOM_DEFINE=__webpack_require__(21),toPrimitive=__webpack_require__(25),dP=Object.defineProperty;exports.f=__webpack_require__(22)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},/* 19 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(20);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},/* 20 */
/***/
function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},/* 21 */
/***/
function(module,exports,__webpack_require__){module.exports=!__webpack_require__(22)&&!__webpack_require__(23)(function(){return 7!=Object.defineProperty(__webpack_require__(24)("div"),"a",{get:function(){return 7}}).a})},/* 22 */
/***/
function(module,exports,__webpack_require__){
// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 23 */
/***/
function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},/* 24 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(20),document=__webpack_require__(13).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},/* 25 */
/***/
function(module,exports,__webpack_require__){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},/* 26 */
/***/
function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},/* 27 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"vue-sprite"},[_c("canvas",{ref:"vue-sprite-canvas",attrs:{id:_vm.id,width:_vm.width,height:_vm.height}})])},staticRenderFns:[]}}])});