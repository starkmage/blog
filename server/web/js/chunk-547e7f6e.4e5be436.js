(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-547e7f6e"],{1396:function(t,a,n){t.exports=n.p+"img/icon4.6ea3842f.jpg"},"2f3e":function(t,a,n){t.exports=n.p+"img/icon1.739eaa75.jpg"},"3a8c":function(t,a,n){t.exports=n.p+"img/icon5.6afc672c.jpg"},4673:function(t,a,n){t.exports=n.p+"img/icon2.a06a0065.jpg"},"593d":function(t,a,n){t.exports=n.p+"img/icon3.5ab46e2a.jpg"},6241:function(t,a,n){},"9bcc":function(t,a,n){t.exports=n.p+"img/icon6.1e0d1c75.jpg"},bb2c:function(t,a,n){"use strict";var e=n("6241");n.n(e).a},bb51:function(t,a,n){"use strict";n.r(a);var e=(n("96cf"),n("1da1")),i=n("1157"),s=n.n(i),c={name:"Home",data:function(){return{articles:[],pagination:{totalPage:1,currentPage:1}}},methods:{fetchData:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$http.get("/articles/".concat(t.pagination.currentPage));case 2:n=a.sent,t.articles=n.data.list,t.pagination.totalPage=n.data.totalPage,t.pagination.currentPage=n.data.currentPage;case 6:case"end":return a.stop()}}),a)})))()},gotoPage:function(t){var a=this;return Object(e.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a.pagination.currentPage=t,a.fetchData(),a.downPage();case 3:case"end":return n.stop()}}),n)})))()},prev:function(){1!==this.pagination.currentPage&&(this.pagination.currentPage--,this.fetchData(),this.downPage())},next:function(){this.pagination.currentPage!==this.pagination.totalPage&&(this.pagination.currentPage++,this.fetchData(),this.downPage())},downPage:function(){s()("html, body").animate({scrollTop:s()("#header").outerHeight()-56},500)}},mounted:function(){this.fetchData()}},r=(n("bb2c"),n("2877")),o=Object(r.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-9"},[e("div",{staticClass:"mb-7"},[e("div",{staticClass:"bgImg d-flex jc-center",attrs:{id:"header"}},[t._m(0),e("div",{staticClass:"arrow-down"},[e("i",{staticClass:"iconfont icon-down",on:{click:t.downPage}})])])]),e("div",{staticClass:"post-container d-flex flex-wrap jc-center ai-center"},t._l(t.articles,(function(a,i){return e("div",{key:i},[e("div",{staticClass:"show home-art"},[e("router-link",{staticClass:"top mt-10 mx-8 mb-0 hand article-icon",attrs:{tag:"div",to:"/article/"+a._id}},[e("img",{attrs:{src:n("c371")("./icon"+(a.title.length%6+1)+".jpg"),height:"260px",width:"280px",alt:""}})]),e("div",{staticClass:"bg-postcolor pt-8 mx-8 title article-info"},[e("router-link",{staticClass:"fs-xxl jc-center d-flex flex-wrap hand text-grey-1 px-4",attrs:{tag:"span",to:"/article/"+a._id}},[t._v(t._s(a.title))]),e("div",{staticClass:"d-flex mt-4 p-7 text-grey-1 jc-center"},[e("i",{staticClass:"iconfont icon-riqi2 pr-2"}),e("span",{staticClass:"fs-sm not-text"},[t._v(t._s(t._f("date")(a.createdAt,"YYYY-MM-DD")))]),e("i",{staticClass:"iconfont icon-sort pl-9"}),e("router-link",{staticClass:"fs-sm pl-2 hand",attrs:{tag:"span",to:"/tags"}},[t._v(t._s(a.categories[0].title))])],1)],1)],1)])})),0),t.articles.length>0?e("div",{staticClass:"my-10"},[e("div",{staticClass:"page-navigator d-flex jc-center"},[e("div",{staticClass:"mx-4 hand fs-md",class:{current:1==t.pagination.currentPage}},[e("a",{attrs:{"data-hover":"首页"},on:{click:function(a){return t.gotoPage(1)}}},[e("span",{staticClass:"text-grey-1"},[t._v("首页")])])]),e("div",{staticClass:"mx-4 hand fs-md"},[e("a",{on:{click:function(a){return t.prev()}}},[e("span",{staticClass:"text-grey-1"},[t._v("«")])])]),t._l(t.pagination.totalPage,(function(a){return e("div",{key:a,staticClass:"mx-4 hand fs-md",class:{current:a==t.pagination.currentPage}},[e("a",{staticClass:"text-grey-1",attrs:{"data-hover":a},on:{click:function(n){return t.gotoPage(a)}}},[t._v(t._s(a))])])})),e("div",{staticClass:"mx-4 hand fs-md"},[e("a",{on:{click:function(a){return t.next()}}},[e("span",{staticClass:"text-grey-1"},[t._v("»")])])]),e("div",{staticClass:"mx-4 hand fs-md",class:{current:t.pagination.totalPage==t.pagination.currentPage}},[e("a",{attrs:{"data-hover":"末页"},on:{click:function(a){return t.gotoPage(t.pagination.totalPage)}}},[e("span",{staticClass:"text-grey-1"},[t._v("末页")])])]),e("div",{staticClass:"current mx-4 fs-md"},[e("span",{staticClass:"text-grey-1"},[t._v("第"+t._s(t.pagination.currentPage)+"页 / 共"+t._s(t.pagination.totalPage)+"页")])])],2)]):t._e()])}),[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"text-white d-flex jc-center ai-center"},[n("span",{staticClass:"shouye-text"},[t._v("多喝热水")])])}],!1,null,"49812f51",null);a.default=o.exports},c371:function(t,a,n){var e={"./icon1.jpg":"2f3e","./icon2.jpg":"4673","./icon3.jpg":"593d","./icon4.jpg":"1396","./icon5.jpg":"3a8c","./icon6.jpg":"9bcc"};function i(t){var a=s(t);return n(a)}function s(t){if(!n.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}i.keys=function(){return Object.keys(e)},i.resolve=s,t.exports=i,i.id="c371"}}]);