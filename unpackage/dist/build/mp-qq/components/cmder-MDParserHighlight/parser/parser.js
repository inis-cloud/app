(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cmder-MDParserHighlight/parser/parser"],{2507:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},s=[]},"44e1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=function(){n.e("components/cmder-MDParserHighlight/parser/libs/trees").then(function(){return resolve(n("c2a2"))}.bind(null,n)).catch(n.oe)},s={},r=n("221a");function a(t){for(var e=t.length,n=5381;e--;)n+=(n<<5)+t.charCodeAt(e);return n}var c={name:"parser",data:function(){return{showAm:"",nodes:[]}},components:{trees:o},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},compress:Number,loadingImg:String,useCache:Boolean,domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i=e.split("://")[0],o=i.length;n=e[o];o++){if("/"==n&&"/"!=e[o-1]&&"/"!=e[o+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(o),this[t]=i}if(this[t]=e,e.includes("data:image")){var s=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!s)return}}}},mounted:function(){i&&(this.document=new i(this)),this.html&&this.setContent(this.html)},beforeDestroy:function(){this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(e,n){var i,o=this;if(!e)return this.nodes=[];var c,l=new r(e,this);if(this.useCache){var h=a(e);s[h]?i=s[h]:(i=l.parse(),s[h]=i)}else i=l.parse();this.$emit("parse",i),this.nodes=n?this.nodes.concat(i):i,i.length&&i.title&&this.autosetTitle&&t.setNavigationBarTitle({title:i.title}),this.imgList&&(this.imgList.length=0),this.videoContexts=[],this.$nextTick((function(){(function t(e){for(var n=e.length;n--;)e[n].top&&(e[n].controls=[],e[n].init(),t(e[n].$children))})(o.$children),o.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){t.createSelectorQuery().in(o).select("#_top").boundingClientRect().exec((function(t){t&&(o.rect=t[0],o.rect.height==c&&(o.$emit("ready",o.rect),clearInterval(o._timer)),c=o.rect.height)}))}),350),this.showWithAnimation&&!n&&(this.showAm="animation:_show .5s")},getText:function(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.nodes,n="",i=0;t=e[i++];)if("text"==t.type)n+=t.text.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");else if("br"==t.type)n+="\n";else{var o="p"==t.name||"div"==t.name||"tr"==t.name||"li"==t.name||"h"==t.name[0]&&t.name[1]>"0"&&t.name[1]<"7";o&&n&&"\n"!=n[n.length-1]&&(n+="\n"),t.children&&(n+=this.getText(t.children)),o&&"\n"!=n[n.length-1]?n+="\n":"td"!=t.name&&"th"!=t.name||(n+="\t")}return n},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(e){var n=this;if(!this.useAnchor)return e.fail&&e.fail("Anchor is disabled");var i=" ";i=">>>";var o=t.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(e.id?"".concat(i,"#").concat(e.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(e.id):"")).boundingClientRect();this._in?o.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():o.selectViewport().scrollOffset(),o.exec((function(i){if(!i[0])return e.fail&&e.fail("Label not found");var o=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(e.offset||0);n._in?n._in.page[n._in.scrollTop]=o:t.pageScrollTo({scrollTop:o,duration:300}),e.success&&e.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]}}};e.default=c}).call(this,n("a821")["default"])},6335:function(t,e,n){},"70f8":function(t,e,n){"use strict";n.r(e);var i=n("44e1"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},7768:function(t,e,n){"use strict";n.r(e);var i=n("2507"),o=n("70f8");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("e663");var r,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},e663:function(t,e,n){"use strict";var i=n("6335"),o=n.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cmder-MDParserHighlight/parser/parser-create-component',
    {
        'components/cmder-MDParserHighlight/parser/parser-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a821')['createComponent'](__webpack_require__("7768"))
        })
    },
    [['components/cmder-MDParserHighlight/parser/parser-create-component']]
]);