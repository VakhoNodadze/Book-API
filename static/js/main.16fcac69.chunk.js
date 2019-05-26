(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"App_wrapper__1eqij",container:"App_container__1K8oW",search:"App_search__3GOAJ"}},11:function(e,t,a){e.exports={header:"header_header__1iqfc",h1:"header_h1__kz_V9",nav:"header_nav__2UZUS",ul:"header_ul__8gYSQ",li:"header_li__I4Zpq"}},23:function(e,t,a){e.exports={main:"Details_main__1FiYO",description:"Details_description__11z8f",details:"Details_details__2Zx12"}},26:function(e,t,a){e.exports={article:"Book_article__3105j",readmore:"Book_readmore__dipnK"}},32:function(e,t,a){e.exports={footer:"Footer_footer__3fGRD"}},34:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),l=a.n(r),c=(a(39),a(12)),i=a(13),u=a(15),s=a(14),m=a(16),p=a(8),h=a(9),f=a(7),E="FETCH_SUCCESS",v="TOGGLE_FAVOURITE",d=function(e){return{type:"FETCH_REQUEST",query:e}},k=function(e){return{type:E,payload:e}},b=function(e){return{type:"FETCH_FAILURE",payload:{error:e}}},_=function(e){return{type:v,id:e}};function g(){return function(e){return e(d()),fetch("https://www.googleapis.com/books/v1/volumes?q=a+very+short+introduction").then(function(e){return e.json()}).then(function(t){return e(k(t.items)),t.items}).catch(function(t){return e(b(t))})}}var O=a(10),w=a.n(O),y=a(26),j=a.n(y),I=function(e){var t="";return e.isFavourite||(t="far"),e.isFavourite&&(t="fas"),o.a.createElement("div",null,o.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:"".concat(t," fa-heart")}))},F=function(e){var t=e.book,a=e.onLike;return o.a.createElement("article",{className:j.a.article},o.a.createElement("img",{src:t.volumeInfo.imageLinks.thumbnail,alt:"Book Cover"}),o.a.createElement("div",null,o.a.createElement("h2",null,o.a.createElement("span",null,"Title: "),t.volumeInfo.title),o.a.createElement("h3",null,o.a.createElement("span",null,"Author:"),t.volumeInfo.authors),o.a.createElement("h3",null,o.a.createElement("span",null,"Book Genre: "),t.volumeInfo.categories)),o.a.createElement("section",null,o.a.createElement("p",null,t.searchInfo.textSnippet)),o.a.createElement(I,{isFavourite:t.isFavourite,onClick:function(){return a(t.id)}}),o.a.createElement("p",{className:j.a.readmore},o.a.createElement(p.b,{to:"/Book-API/details/".concat(t.id)},"Read More >>")))};a(49);function N(){return o.a.createElement("div",{className:"lds-facebook"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}var A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={search:""},a.updateSearch=function(e){a.setState({search:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this,t=this.props.bookState.books,a=t.filter(function(t){return-1!=t.volumeInfo.title.toLowerCase().indexOf(e.state.search)});return 0===t.length?o.a.createElement(N,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:w.a.wrapper},o.a.createElement("div",{className:w.a.container},o.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.search,onChange:this.updateSearch}),o.a.createElement("div",{className:w.a.search})),o.a.createElement("main",{className:w.a.main},a.map(function(t){return o.a.createElement(F,{key:t.id,book:t,onLike:function(t){return a=t,void e.props.toggleFavourite(a);var a}})}),console.log(a))))}}]),t}(n.Component),C=Object(f.b)(function(e){return{bookState:e}},{toggleFavourite:_,fetchBooks:g})(A),S=a(23),B=a.n(S),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={book:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/books/v1/volumes/".concat(this.props.match.params.id)).then(function(e){return e.json()}).then(function(t){return e.setState({book:t}),t}).catch(function(e){return console.log("Fetching Faled!")})}},{key:"render",value:function(){var e=this.state.book;return e?e&&o.a.createElement("main",{className:B.a.main},o.a.createElement("img",{src:e.volumeInfo.imageLinks.small||e.volumeInfo.imageLinks.thumbnail,alt:"Book Cover"}),o.a.createElement("div",{className:B.a.description},o.a.createElement("h2",null,o.a.createElement("span",null,"Title: "),e.volumeInfo.title),o.a.createElement("h3",null,o.a.createElement("span",null,"Author:"),e.volumeInfo.authors),o.a.createElement("p",null,o.a.createElement("strong",null,"Book Description: "),e.volumeInfo.description)),o.a.createElement("div",{className:B.a.details},o.a.createElement("p",null,o.a.createElement("strong",null,"Publisher: ")," ",e.volumeInfo.publisher),o.a.createElement("p",null,o.a.createElement("strong",null,"Publication Date: ")," ",e.volumeInfo.publishedDate),o.a.createElement("p",null,o.a.createElement("strong",null,"Pages: ")," ",e.volumeInfo.printedPageCount),o.a.createElement("p",null,o.a.createElement("strong",null,"Digital Version: ")," ",o.a.createElement("a",{rel:"noopener noreferrer",href:"".concat(e.accessInfo.webReaderLink,")"),target:"_blank"},"Click here to view the book online")))):o.a.createElement(N,null)}}]),t}(n.Component),D=Object(f.b)(function(e){return{bookState:e}},{toggleFavourite:_})(function(e){var t=e.bookState.books;return 0===t.length?o.a.createElement(N,null):o.a.createElement("main",{className:w.a.main},t.filter(function(e){return e.isFavourite}).map(function(t){return o.a.createElement(F,{key:t.id,book:t,onLike:function(t){return a=t,void e.toggleFavourite(a);var a}})}))}),P=a(11),L=a.n(P),T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:L.a.header},o.a.createElement("h1",{className:L.a.h1},"Vakhtang Nodadze Book API"),o.a.createElement("nav",{className:L.a.nav},o.a.createElement("ul",{className:L.a.ul},o.a.createElement("li",{className:L.a.li},o.a.createElement(p.c,{to:"/Book-API"},"Home")),o.a.createElement("li",{className:L.a.li},o.a.createElement(p.c,{to:"/Book-API/favourites"},"Favourites"))))))},R=a(32),U=a.n(R),V=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{className:U.a.footer},o.a.createElement("h2",null,"Copyright Vakhtang Nodadze \xa9")))},q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooksActions()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,null,o.a.createElement(T,null),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/Book-API",component:C}),o.a.createElement(h.a,{exact:!0,path:"/Book-API/details/:id",component:x}),o.a.createElement(h.a,{exact:!0,path:"/Book-API/favourites",component:D})),o.a.createElement(V,null)))}}]),t}(n.Component),G=Object(f.b)(null,function(e){return{booksActions:function(t){return e(k(t))},fetchBooksActions:function(t){return e(g())}}})(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(33),z=a(17),H=a(20),J={books:[]};var W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c,Z=[M.a],K=Object(z.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(H.a)({},e,{books:t.payload.map(function(e){return Object(H.a)({},e,{isFavourite:!1})})});case v:return Object(H.a)({},e,{books:e.books.map(function(e){return e.id===t.id?Object(H.a)({},e,{isFavourite:!e.isFavourite}):e})});default:return e}},W(z.a.apply(void 0,Z)));l.a.render(o.a.createElement(f.a,{store:K},o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.16fcac69.chunk.js.map