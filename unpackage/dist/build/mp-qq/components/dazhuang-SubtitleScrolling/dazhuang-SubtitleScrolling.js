(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/dazhuang-SubtitleScrolling/dazhuang-SubtitleScrolling"],{6839:function(t,e,n){"use strict";var i=n("a1d2"),l=n.n(i);l.a},a1d2:function(t,e,n){},a34c:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var l=function(){var t=this,e=t.$createElement;t._self._c},r=[]},aae1:function(t,e,n){"use strict";n.r(e);var i=n("a34c"),l=n("b955");for(var r in l)"default"!==r&&function(t){n.d(e,t,(function(){return l[t]}))}(r);n("6839");var a,c=n("f0c5"),u=Object(c["a"])(l["default"],i["b"],i["c"],!1,null,"62a7c672",null,!1,i["a"],a);e["default"]=u.exports},b955:function(t,e,n){"use strict";n.r(e);var i=n("e966"),l=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=l.a},e966:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["lists","width","height","speed","background","color"],data:function(){return{scrollLeft:0,interval:null,fillWidth:2*parseFloat(this.width)+"px",boxHeight:parseFloat(this.height)-16+"px"}},mounted:function(){0!==this.lists.length&&this.hd()},methods:{hd:function(){var t=this,e=wx.createSelectorQuery().in(this);e.select(".scroll-view_H").boundingClientRect(),e.select(".list").boundingClientRect(),e.exec((function(e){var n=e[0].width,i=e[1].width;clearInterval(t.interval),t.interval=setInterval((function(){t.scrollLeft<i-n?t.scrollLeft=t.scrollLeft+1:t.scrollLeft=0}),t.speed)}))}}};e.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/dazhuang-SubtitleScrolling/dazhuang-SubtitleScrolling-create-component',
    {
        'components/dazhuang-SubtitleScrolling/dazhuang-SubtitleScrolling-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a821')['createComponent'](__webpack_require__("aae1"))
        })
    },
    [['components/dazhuang-SubtitleScrolling/dazhuang-SubtitleScrolling-create-component']]
]);