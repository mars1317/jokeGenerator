(this["webpackJsonpjoke-generator"]=this["webpackJsonpjoke-generator"]||[]).push([[0],{13:function(e,t,a){e.exports={FavouriteJokes:"FavouriteJokes_FavouriteJokes__2tvWh",Title:"FavouriteJokes_Title__1kP7r",JokeCardFav:"FavouriteJokes_JokeCardFav__3s79F",Header:"FavouriteJokes_Header__3THIS",Exception:"FavouriteJokes_Exception__26UoN"}},15:function(e,t,a){e.exports={App:"App_App__1vpZT"}},16:function(e,t,a){e.exports={Layout:"Layout_Layout__3T_Nh",JokeSection:"Layout_JokeSection__2535r"}},4:function(e,t,a){e.exports={JokeCard:"JokeCard_JokeCard__3_qHa",MessageIcon:"JokeCard_MessageIcon__jcpR8",Container:"JokeCard_Container__3-nro",Header:"JokeCard_Header__3_XTI",Id:"JokeCard_Id__1lYoH",IdNumber:"JokeCard_IdNumber__30okw",LikeButton:"JokeCard_LikeButton__3e_Tz",Liked:"JokeCard_Liked__314rK",Content:"JokeCard_Content__1S8SR",Footer:"JokeCard_Footer__25P2Q",Time:"JokeCard_Time__PyTj3",CategoryType:"JokeCard_CategoryType__2924J",JokeList:"JokeCard_JokeList__79usD",FavJoke:"JokeCard_FavJoke__jFZP2"}},53:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a.n(o),n=a(26),s=a.n(n),c=a(8),i=Object(o.createContext)(),u=i,j=a(6),l=a.n(j),d=a(0);var p=function(){console.log("jokeCOntext",i);var e=Object(o.useContext)(i),t=e.jokeCategories,a=e.categoriesList,r=(e.favouriteJokes,e.inputValue,e.setCategory),n=e.getJokeCategories,s=e.getJoke,u=(e.getRandomJoke,e.setInputValue),j=e.setJokeType,p=(e.jokeList,e.jokeType,e.categoryErrorMessage),k=e.searchErrorMessage,O=(e.getFavJokesFromLS,Object(o.useState)(!1)),g=Object(c.a)(O,2),b=g[0],_=g[1];Object(o.useEffect)((function(){n()}),[]);var h=function(e){"CategoryOption"===e.target.value||e.target.value,j(e.target.value),_(e.target.value)},v=function(e){var t=e.target.getAttribute("data-value");if(a.includes(t)){var o=a.indexOf(t);a.splice(o,1),r(a)}else a.push(e.target.getAttribute("data-value")),r(a)},f=Object(d.jsxs)("div",{className:l.a.categoriesList,children:[p.length>0?Object(d.jsx)("p",{className:l.a.Error,children:p}):null,t.map((function(e){var t=[l.a.Category];return a.includes(e)&&t.push(l.a.OutlineCategory),Object(d.jsx)("p",{className:t.join(" "),"data-value":e,onClick:v,children:e},e+Math.random())}))]}),y=Object(d.jsxs)(o.Fragment,{children:[k.length>0?Object(d.jsx)("p",{className:l.a.Error,children:k}):null,Object(d.jsx)("input",{type:"text",placeholder:"Free text search...",onFocus:function(e){return e.target.placeholder=""},onKeyDown:function(e){"Enter"===e.key&&s(e)},onChange:function(e){return u(e.target.value)}})]});return Object(d.jsxs)("div",{className:l.a.JokeGenerator,children:[Object(d.jsxs)("section",{className:l.a.Title,children:[Object(d.jsx)("h1",{children:"Hey!"}),Object(d.jsx)("h2",{children:"Let's try to find joke for you"})]}),Object(d.jsxs)("section",{className:l.a.Radio,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"radio",id:"RandomOption",name:"radio",value:"RandomOption",onChange:function(e){return h(e)},defaultChecked:!0}),Object(d.jsx)("label",{htmlFor:"RandomOption",children:"Random"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"radio",id:"CategoryOption",name:"radio",value:"CategoryOption",onChange:function(e){return h(e)}}),Object(d.jsx)("label",{htmlFor:"CategoryOption",children:"From Categories"}),Object(d.jsx)("br",{}),"CategoryOption"===b?f:null]}),Object(d.jsxs)("div",{className:l.a.SearchOption,children:[Object(d.jsx)("input",{type:"radio",id:"SearchOption",name:"radio",value:"SearchOption",onChange:function(e){return h(e)}}),Object(d.jsx)("label",{htmlFor:"SearchOption",children:"Search"}),Object(d.jsx)("br",{}),"SearchOption"===b?y:null]})]}),Object(d.jsx)("button",{className:l.a.JokeButton,onClick:function(e){return s(e)},children:"Get a joke"})]})};function k(e){var t;if(e){var a=Date.now(),o=new Date(e.split(" ")[0]).getTime(),r=Math.abs(a-o);t=Math.floor(r/1e3/60/60)}return t}function O(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var g=a(4),b=a.n(g);a(33);var _=function(e){var t=Object(o.useContext)(i),a=t.favouriteJokes,r=t.jokeList,n=t.setFavJoke,s=[b.a.LikeButton],c=[b.a.JokeCard,"animate__animated animate__zoomIn"];return e.joke.isLiked&&s.push(b.a.Liked),"favJoke"===e.JokeCardType?c.push(b.a.FavJoke):"jokeList"===e.JokeCardType&&c.push(b.a.JokeList),Object(d.jsxs)("div",{className:c.join(" "),children:[Object(d.jsx)("div",{className:b.a.MessageIcon}),Object(d.jsxs)("div",{className:b.a.Container,children:[Object(d.jsxs)("div",{className:b.a.Header,children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:b.a.Id,children:"Id: "}),Object(d.jsx)("span",{className:b.a.IdNumber,children:e.joke.id})]}),Object(d.jsx)("button",{className:s.join("  "),onClick:function(e){var t=e.target.getAttribute("data-id"),o=r.find((function(e){if(e.id===t)return e.isLiked=0==e.isLiked,e}));if(a.some((function(e){return e.id===t}))){var s=a.findIndex((function(e){return e.id===t}));a.splice(s,1)}else a.push(o);n(a)},"data-id":e.joke.id})]}),Object(d.jsxs)("p",{className:b.a.Content,children:[" ",e.joke?e.joke.value:Object(d.jsx)("span",{children:"error"})," "]}),Object(d.jsxs)("section",{className:b.a.Footer,children:[Object(d.jsxs)("span",{className:b.a.Time,children:["Last update: ",k(e.joke.updated_at)," hours ago"]}),e.joke.categories[0]?Object(d.jsxs)("p",{className:b.a.CategoryType,children:[" ",e.joke.categories[0]," "]}):""]})]})]})};var h=function(){var e=Object(o.useContext)(i).jokeList;return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{children:e.map((function(e){return Object(d.jsx)(_,{JokeCardType:"jokeList",joke:e},Math.random+e.id)}))})})},v=a(13),f=a.n(v);var y=function(){var e=Object(o.useContext)(i),t=e.favouriteJokes,a=e.getFavJokesFromLS;Object(o.useEffect)((function(){a()}),[]);var r=t.length>0?t.map((function(e){return Object(d.jsx)(_,{JokeCardType:"favJoke",joke:e},Math.random+e.id)})):Object(d.jsx)("span",{className:f.a.Exception,children:"You havent any fav jokes yet"});return Object(d.jsxs)("div",{className:f.a.FavouriteJokes,children:[Object(d.jsx)("p",{className:f.a.Title,children:"Favourite"}),r]})},J=a.p+"static/media/menu.db4aa6fc.svg",x=a.p+"static/media/cancel.615761ab.svg",m=a(7),C=a.n(m);var T=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],n=function(){window.innerWidth>1024&&r(!1)};Object(o.useEffect)((function(){window.addEventListener("resize",n)}));var s=[C.a.MenuToggle],i=[],u="";return a?(s.push(C.a.Opened),u=x,i.push(C.a.Blackout)):(s.push(C.a.Closed),i.push(C.a.BlackoutOff),u=J,i=[]),Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:i.join("  "),onClick:function(e){r(!1)}}),Object(d.jsxs)("div",{className:s.join("  "),children:[Object(d.jsxs)("div",{className:C.a.ToggleButton,onClick:function(){return r((function(e){return!e}))},children:[Object(d.jsx)("img",{alt:"menu icon",src:u,className:C.a.MenuIcon}),Object(d.jsx)("p",{children:"Favourite"})]}),Object(d.jsx)("div",{className:C.a.JokeContent,children:Object(d.jsx)(y,{})})]})]})},E=a(16),L=a.n(E);var F,S=function(){return Object(d.jsx)(o.Fragment,{children:Object(d.jsxs)("div",{className:L.a.Layout,children:[Object(d.jsxs)("div",{className:L.a.JokeSection,children:[Object(d.jsx)(p,{}),Object(d.jsx)(h,{})]}),Object(d.jsx)(T,{})]})})},N=a(10),M=a.n(N),I=a(17),R=a(3),A=a(11),G=a.n(A),w=a(27),B=a(2),V="GET_JOKE_CATEGORIES",H="SET_TEST_VALUE",P="SET_JOKE",Y="SET_JOKE_TYPE",K="INPUT_VALUE",D="SET_CATEGORY",U="SET_CATEGORY_ERROR_MESSAGE",z="SET_SEARCH_ERROR_MESSAGE",q="SET_FAV_JOKE",Q=(F={},Object(R.a)(F,V,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{jokeCategories:a})})),Object(R.a)(F,H,(function(e,t){return Object(B.a)(Object(B.a)({},e),{},{test_value:t})})),Object(R.a)(F,P,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{jokeList:[a].concat(Object(w.a)(e.jokeList))})})),Object(R.a)(F,Y,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{jokeType:a})})),Object(R.a)(F,K,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{inputValue:a})})),Object(R.a)(F,D,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{categoriesList:a})})),Object(R.a)(F,U,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{categoryErrorMessage:a})})),Object(R.a)(F,z,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{searchErrorMessage:a})})),Object(R.a)(F,q,(function(e,t){var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{favouriteJokes:a})})),Object(R.a)(F,"DEFAULT",(function(e){return e})),F),W=function(e,t){return(Q[t.type]||Q.DEFAULT)(e,t)},Z=function(e){var t,a=e.children,r=(t={jokeCategories:[],favouriteJokes:[],jokeType:"RandomOption",categoriesList:[],inputValue:"",jokeList:[]},Object(R.a)(t,"favouriteJokes",[]),Object(R.a)(t,"categoryErrorMessage",""),Object(R.a)(t,"searchErrorMessage",""),t),n="CategoryOption",s="SearchOption",i=Object(o.useReducer)(W,r),j=Object(c.a)(i,2),l=j[0],p=j[1],k=function(){var e=Object(I.a)(M.a.mark((function e(t){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.chucknorris.io/jokes/categories");case 2:a=e.sent,p({type:V,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(I.a)(M.a.mark((function e(){var t,a,o,r,c,i=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.length>0&&void 0!==i[0]&&i[0],t="",a=[],l.jokeType!=n){e.next=19;break}if(0!==l.categoriesList.length){e.next=8;break}p({type:U,payload:"You have to choose at least one category"}),e.next=17;break;case 8:return o=O(0,y.length),r=l.categoriesList[o],e.next=12,G.a.get("https://api.chucknorris.io/jokes/random?category=".concat(r));case 12:t=e.sent,a=t.data,p({type:U,payload:""}),a.isLiked=!1,p({type:P,payload:a});case 17:e.next=40;break;case 19:if(l.jokeType!=s){e.next=34;break}if(!f){e.next=31;break}return e.next=23,G.a.get("https://api.chucknorris.io/jokes/search?query=".concat(f));case 23:t=e.sent,c=O(0,t.data.result.length),a=t.data.result[c],0==c&&(a=[]),p({type:z,payload:""}),a.value?(a.isLiked=!1,p({type:P,payload:a})):p({type:z,payload:"Try another word..."}),e.next=32;break;case 31:p({type:z,payload:"You have to write something..."});case 32:e.next=40;break;case 34:return e.next=36,G.a.get("https://api.chucknorris.io/jokes/random");case 36:t=e.sent,(a=t.data).isLiked=!1,p({type:P,payload:a});case 40:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=l.jokeCategories,_=l.jokeList,h=l.favouriteJokes,v=l.jokeType,f=l.inputValue,y=l.categoriesList,J=l.categoryErrorMessage,x=l.searchErrorMessage;return Object(d.jsx)(u.Provider,{value:Object(R.a)({getJokeCategories:k,getJoke:g,setJokeType:function(e){p({type:Y,payload:e}),x.length>0&&p({type:z,payload:""}),J.length>0&&p({type:U,payload:""})},setInputValue:function(e){console.log(e),p({type:K,payload:e})},setCategory:function(e){p({type:D,payload:e})},setFavJoke:function(e){localStorage.setItem("favJokes",JSON.stringify(e)),p({type:q,payload:e})},getFavJokesFromLS:function(){var e=JSON.stringify([]),t=localStorage.getItem("favJokes");t?p({type:q,payload:JSON.parse(t)}):localStorage.setItem("favJokes",e)},jokeCategories:b,jokeList:_,favouriteJokes:h,jokeType:v,inputValue:f,categoriesList:y,categoryErrorMessage:J,searchErrorMessage:x},"favouriteJokes",h),children:a})},X=a(15),$=a.n(X);var ee=function(){return Object(d.jsx)("div",{className:$.a.App,children:Object(d.jsx)(Z,{children:Object(d.jsx)(S,{})})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ee,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={JokeGenerator:"JokeGenerator_JokeGenerator__1bAVP",Title:"JokeGenerator_Title__1BOsg",Error:"JokeGenerator_Error__2eqzQ",Category:"JokeGenerator_Category__1BIGJ",OutlineCategory:"JokeGenerator_OutlineCategory__2aju4",Radio:"JokeGenerator_Radio__2dZQe",categoriesList:"JokeGenerator_categoriesList__68Vgb",JokeButton:"JokeGenerator_JokeButton__1YEx-",SearchOption:"JokeGenerator_SearchOption__FgRR8"}},7:function(e,t,a){e.exports={MenuToggle:"MenuToggle_MenuToggle__3AgcK",ToggleButton:"MenuToggle_ToggleButton__2-J3P",Open:"MenuToggle_Open__1MfjT",JokeContent:"MenuToggle_JokeContent__3657h",Blackout:"MenuToggle_Blackout__1P7J7",Closed:"MenuToggle_Closed__3JvWk"}}},[[53,1,2]]]);
//# sourceMappingURL=main.a28a4270.chunk.js.map