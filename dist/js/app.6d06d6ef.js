(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"01e8":function(t,e,r){},"0224":function(t,e,r){"use strict";var s=r("148d"),n=r.n(s);n.a},"10f6":function(t,e,r){},"148d":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=r("8c4f"),a=r("2f62"),o=r("43f9"),i=r.n(o),c=r("0a63"),u=r.n(c),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Toolbar"),r("md-app",[r("md-app-content",[r("router-view")],1)],1)],1)},d=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-toolbar",{staticClass:"md-primary movie-finder-toolbar"},[r("div",{staticClass:"md-toolbar-row"},[r("div",{staticClass:"md-toolbar-section-start"},[r("span",{staticClass:"md-title"},[t._v("MovieFinder")])]),r("div",{staticClass:"md-toolbar-section-end"},[r("md-button",{attrs:{to:"/"}},[t._v("Home")]),r("md-button",{attrs:{to:"/results"}},[t._v("Results")])],1)])])},f=[],p={name:"Toolbar"},v=p,h=(r("b751"),r("2877")),g=Object(h["a"])(v,m,f,!1,null,null,null),b=g.exports,y={name:"App",components:{Toolbar:b},computed:{results:function(){return this.$store.getters.getMovies}}},_=y,w=(r("5c0b"),Object(h["a"])(_,l,d,!1,null,null,null)),R=w.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"movie-finder"},[r("md-field",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchMovies(e)}}},[r("input",{staticClass:"md-input",attrs:{placeholder:"Type to search movie"},domProps:{value:t.searchTerm},on:{input:t.updateSearchTerm}}),r("span",{staticClass:"md-helper-text"},[t._v(t._s(t.searchHelperText))]),r("md-button",{staticClass:"md-primary movie-finder__search-button",attrs:{type:"submit",disabled:t.isLoading},on:{click:t.searchMovies}},[t._v("SEARCH")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"movie-finder__spinner"},[r("md-progress-spinner",{attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.getResultsHistory.length&&!t.isLoading,expression:"getResultsHistory.length && !isLoading"}],staticClass:"movie-finder__search-history"},[r("md-table",{attrs:{"md-card":""}},[r("md-table-toolbar",[r("h1",{staticClass:"md-title"},[t._v("Search history")])]),r("md-table-row",[r("md-table-head",[t._v("Search Term")]),r("md-table-head",[t._v("Results")]),r("md-table-head",[t._v("Action")])],1),t._l(t.getResultsHistory,(function(e,s){return r("md-table-row",{key:e.term+"_"+s},[r("md-table-cell",[t._v(t._s(e.term))]),r("md-table-cell",[t._v(t._s(e.results.length))]),r("md-table-cell",[r("md-button",{staticClass:"md-primary movie-finder__search-history__button",attrs:{type:"submit"},on:{click:function(r){return t.showResults(e.term)}}},[t._v("SHOW")])],1)],1)}))],2)],1)],1)},O=[],C=(r("7db0"),r("96cf"),r("1da1")),x=r("5530"),M={name:"Home",data:function(){return{searchHelperText:""}},computed:Object(x["a"])(Object(x["a"])({},Object(a["b"])(["form"])),{},{searchTerm:{set:function(t){this.$store.commit("addForm",{searchTerm:t})},get:function(){return this.form.searchTerm}},isLoading:function(){return this.$store.getters.getLoading},getResultsHistory:function(){return this.$store.getters.getResultsHistory},getMovies:function(){return this.$store.getters.getMovies}}),methods:{updateSearchTerm:function(t){this.$store.commit("setForm",{searchTerm:t.target.value})},searchMovies:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.form.searchTerm,!t.getResultsHistory.length||!t.getResultsHistory.find((function(t){return t.term===r}))){e.next=5;break}t.searchHelperText="Already found",e.next=13;break;case 5:return t.$store.dispatch("addLoading",!0),t.$store.dispatch("addForm",r),e.next=9,t.$store.dispatch("searchMovies",r);case 9:e.sent,t.$store.dispatch("addResultsHistory",t.getMovies),t.$store.dispatch("addLoading",!1),t.$router.push({path:"results"});case 13:case"end":return e.stop()}}),e)})))()},showResults:function(t){var e=this.getResultsHistory.find((function(e){return e.term===t}));this.$store.dispatch("addMoveis",e.results),this.$router.push({path:"results"})}},created:function(){this.$store.dispatch("addForm")}},T=M,L=(r("6c84"),Object(h["a"])(T,H,O,!1,null,"688c8479",null)),S=L.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.moviesList.length?[r("carousel",{attrs:{scrollPerPage:!0,perPageCustom:[[480,1],[768,2],[1160,3],[1433,4],[1920,5]]}},t._l(t.moviesList,(function(t){return r("slide",{key:t.id},[r("MovieCard",{attrs:{item:t}})],1)})),1),r("div",{staticClass:"back-home"},[r("md-button",{staticClass:"md-dense md-primary",attrs:{to:"/"}},[t._v("Back to Home")])],1)]:[r("md-empty-state",{attrs:{"md-icon":"tv","md-label":"No movies found"}},[r("md-button",{staticClass:"md-primary md-raised",attrs:{to:"/"}},[t._v("Return to Home")])],1)]],2)},j=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-card",[r("md-card-media-cover",{attrs:{"md-solid":""}},[r("md-card-media",{attrs:{"md-ratio":"4:3"}},[r("img",{attrs:{src:t.item.Poster,alt:t.item.Title}})]),r("md-card-area",[r("md-card-header",[r("span",{staticClass:"md-title"},[t._v(t._s(t.item.Title))]),r("span",{staticClass:"md-subhead"},[t._v("Year: "+t._s(t.item.Year))])])],1)],1)],1)},P=[],E={name:"MovieCard",props:["item"]},A=E,F=(r("8c77"),Object(h["a"])(A,k,P,!1,null,"fc3f187e",null)),I=F.exports,N={name:"Results",components:{Carousel:c["Carousel"],Slide:c["Slide"],MovieCard:I},computed:{moviesList:function(){return this.$store.getters.getMovies}}},J=N,Y=(r("0224"),Object(h["a"])(J,$,j,!1,null,"3f480ef6",null)),U=Y.exports,K=[{path:"/",component:S},{path:"/results",component:U}],B=K,W=r("bc3a"),q=r.n(W),z={API_URL:"http://www.omdbapi.com/",API_KEY:"e656bd4b"},D=q.a.create({baseURL:z.API_URL,params:{apikey:z.API_KEY,type:"movie"}}),G=D;s["default"].use(a["a"]);var Q=function(t,e){var r=V("searchResultsHistory")?V("searchResultsHistory"):[];r.push(e),localStorage.setItem(t,JSON.stringify(r))},V=function(t){var e=!!localStorage.getItem(t)&&JSON.parse(localStorage.getItem(t));return e},X=function(){return{isLoading:!1,form:{},movies:[],resultsHistory:[]}},Z={getLoading:function(t){return t.isLoading},getSearchTerm:function(t){return t.form.searchTerm},getMovies:function(t){return t.movies},getResultsHistory:function(t){return t.resultsHistory.lenght?t.resultsHistory:V("searchResultsHistory")}},tt={addLoading:function(t,e){var r=t.commit;r("setLoading",e)},addForm:function(t,e){var r=t.commit;r("setForm",e)},searchMovies:function(t,e){return Object(C["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,r.next=3,G.get("?s=".concat(e));case 3:n=r.sent,s("setMovies",n.data.Search);case 5:case"end":return r.stop()}}),r)})))()},addResultsHistory:function(t,e){var r=t.commit,s=t.getters;r("setResultsHistory",{term:s.getSearchTerm,results:e})},addMoveis:function(t,e){var r=t.commit;r("setMovies",e)}},et={setLoading:function(t,e){t.isLoading=e},setForm:function(t,e){t.form=Object.assign({},t.form,e)},setMovies:function(t,e){t.movies=e},setResultsHistory:function(t,e){var r={term:e.term,results:e.results};t.resultsHistory.push(r),Q("searchResultsHistory",r)}},rt=new a["a"].Store({state:X,getters:Z,actions:tt,mutations:et});r("51de"),r("e094");s["default"].config.productionTip=!1,s["default"].use(u.a),s["default"].use(i.a),s["default"].use(n["a"]),s["default"].use(a["a"]);var st=new n["a"]({routes:B,mode:"history"});new s["default"]({render:function(t){return t(R)},router:st,store:rt}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var s=r("9c0c"),n=r.n(s);n.a},"6c84":function(t,e,r){"use strict";var s=r("01e8"),n=r.n(s);n.a},"8c77":function(t,e,r){"use strict";var s=r("ae66"),n=r.n(s);n.a},"9c0c":function(t,e,r){},ae66:function(t,e,r){},b751:function(t,e,r){"use strict";var s=r("10f6"),n=r.n(s);n.a}});
//# sourceMappingURL=app.6d06d6ef.js.map