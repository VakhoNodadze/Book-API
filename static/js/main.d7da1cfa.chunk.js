(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={header:"header_header__1iqfc",h1:"header_h1__kz_V9",nav:"header_nav__2UZUS",ul:"header_ul__8gYSQ",li:"header_li__I4Zpq"}},20:function(e,t,n){},23:function(e,t,n){e.exports={main:"Details_main__1FiYO",description:"Details_description__11z8f",details:"Details_details__2Zx12"}},26:function(e,t,n){e.exports={article:"Book_article__3105j",readmore:"Book_readmore__dipnK"}},32:function(e,t,n){e.exports={footer:"Footer_footer__3fGRD"}},34:function(e,t,n){e.exports=n(50)},39:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),l=n.n(r),c=(n(39),n(17)),i=n(18),u=n(21),s=n(19),m=n(22),f=n(8),E=n(9),h=n(7),p="FETCH_SUCCESS",v="TOGGLE_FAVOURITE",d=function(e){return{type:"FETCH_REQUEST",query:e}},k=function(e){return{type:p,payload:e}},b=function(e){return{type:"FETCH_FAILURE",payload:{error:e}}},g=function(e){return{type:v,id:e}};var _=n(20),I=n.n(_),O=n(26),w=n.n(O),F=function(e){var t="";return e.isFavourite||(t="far"),e.isFavourite&&(t="fas"),o.a.createElement("div",null,o.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:"".concat(t," fa-heart")}))},y=function(e){var t=e.book,n=e.onLike;return o.a.createElement("article",{className:w.a.article},o.a.createElement("img",{src:t.volumeInfo.imageLinks.thumbnail,alt:"Book Cover"}),o.a.createElement("div",null,o.a.createElement("h2",null,o.a.createElement("span",null,"Title: "),t.volumeInfo.title),o.a.createElement("h3",null,o.a.createElement("span",null,"Author:"),t.volumeInfo.authors),o.a.createElement("h3",null,o.a.createElement("span",null,"Book Genre: "),t.volumeInfo.categories)),o.a.createElement("section",null,o.a.createElement("p",null,t.searchInfo.textSnippet)),o.a.createElement(F,{isFavourite:t.isFavourite,onClick:function(){return n(t.id)}}),o.a.createElement("p",{className:w.a.readmore},o.a.createElement(f.b,{to:"/Book-API/details/".concat(t.id)},"Read More >>")))};n(49);function j(){return o.a.createElement("div",{className:"lds-facebook"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}var N=Object(h.b)(function(e){return{bookState:e}},{toggleFavourite:g})(function(e){var t=e.bookState.books;return 0===t.length?o.a.createElement(j,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("main",{className:I.a.main},t.map(function(t){return o.a.createElement(y,{key:t.id,book:t,onLike:function(t){return n=t,void e.toggleFavourite(n);var n}})})))}),B=n(23),A=n.n(B),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={book:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/books/v1/volumes/".concat(this.props.match.params.id)).then(function(e){return e.json()}).then(function(t){return e.setState({book:t}),t}).catch(function(e){return console.log("Fetching Faled!")})}},{key:"render",value:function(){var e=this.state.book;return e?e&&o.a.createElement("main",{className:A.a.main},console.log("State main: ",e),o.a.createElement("img",{src:e.volumeInfo.imageLinks.small||e.volumeInfo.imageLinks.thumbnail,alt:"Book Cover"}),o.a.createElement("div",{className:A.a.description},o.a.createElement("h2",null,o.a.createElement("span",null,"Title: "),e.volumeInfo.title),o.a.createElement("h3",null,o.a.createElement("span",null,"Author:"),e.volumeInfo.authors),o.a.createElement("p",null,o.a.createElement("strong",null,"Book Description: "),e.volumeInfo.description)),o.a.createElement("div",{className:A.a.details},o.a.createElement("p",null,o.a.createElement("strong",null,"Publisher: ")," ",e.volumeInfo.publisher),o.a.createElement("p",null,o.a.createElement("strong",null,"Publication Date: ")," ",e.volumeInfo.publishedDate),o.a.createElement("p",null,o.a.createElement("strong",null,"Pages: ")," ",e.volumeInfo.printedPageCount),o.a.createElement("p",null,o.a.createElement("strong",null,"Digital Version: ")," ",o.a.createElement("a",{rel:"noopener noreferrer",href:"".concat(e.accessInfo.webReaderLink,")"),target:"_blank"},"Click here to view the book online"),console.log("page",e.accessInfo.webReaderLink)))):o.a.createElement(j,null)}}]),t}(a.Component),S=Object(h.b)(function(e){return{bookState:e}},{toggleFavourite:g})(function(e){var t=e.bookState.books;return 0===t.length?o.a.createElement(j,null):o.a.createElement("main",{className:I.a.main},t.filter(function(e){return e.isFavourite}).map(function(t){return o.a.createElement(y,{key:t.id,book:t,onLike:function(t){return n=t,e.toggleFavourite(n),void console.log(n);var n}})}))}),D=n(10),P=n.n(D),L=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:P.a.header},o.a.createElement("h1",{className:P.a.h1},"Vakhtang Nodadze Book API"),o.a.createElement("nav",{className:P.a.nav},o.a.createElement("ul",{className:P.a.ul},o.a.createElement("li",{className:P.a.li},o.a.createElement(f.c,{to:"/Book-API"},"Home")),o.a.createElement("li",{className:P.a.li},o.a.createElement(f.c,{to:"/Book-API/favourites"},"Favourites"))))))},x=n(32),T=n.n(x),R=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{className:T.a.footer},o.a.createElement("h2",null,"Copyright Vakhtang Nodadze \xa9")))},U=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooksActions()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,null,o.a.createElement(L,null),o.a.createElement(E.c,null,o.a.createElement(E.a,{exact:!0,path:"/Book-API",component:N}),o.a.createElement(E.a,{exact:!0,path:"/Book-API/details/:id",component:C}),o.a.createElement(E.a,{exact:!0,path:"/Book-API/favourites",component:S})),o.a.createElement(R,null)))}}]),t}(a.Component),V=Object(h.b)(null,function(e){return{booksActions:function(t){return e(k(t))},fetchBooksActions:function(t){return e(function(e){return e(d()),fetch("https://www.googleapis.com/books/v1/volumes?q=a+very+short+introduction").then(function(e){return e.json()}).then(function(t){return e(k(t.items)),t.items}).catch(function(t){return e(b(t))})})}}})(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(33),z=n(11),G=n(14),H={books:[]};var M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c,Z=[q.a],J=Object(z.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(G.a)({},e,{books:t.payload.map(function(e){return Object(G.a)({},e,{isFavourite:!1})})});case v:return Object(G.a)({},e,{books:e.books.map(function(e){return e.id===t.id?Object(G.a)({},e,{isFavourite:!e.isFavourite}):e})});default:return e}},M(z.a.apply(void 0,Z)));l.a.render(o.a.createElement(h.a,{store:J},o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.d7da1cfa.chunk.js.map