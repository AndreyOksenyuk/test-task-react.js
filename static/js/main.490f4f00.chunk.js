(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{147:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(20),u=t.n(c),o=(t(80),t(81),t(56)),s=t.n(o),l=function(){return a.a.createElement("footer",{className:s.a.footer},a.a.createElement("span",null,"\xa9 abz.agency specially for the test task"))},i=a.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(12),t.e(9)]).then(t.bind(null,343))})),p=a.a.lazy((function(){return t.e(11).then(t.bind(null,338))})),f=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,339))})),d=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8)]).then(t.bind(null,341))})),_=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,340))}));var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},a.a.createElement(i,null)),a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},a.a.createElement(p,null)),a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},a.a.createElement(f,null)),a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},a.a.createElement(d,null)),a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},a.a.createElement(_,null)),a.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(39),O=t(13),m=t(58),h=t(149),S=t(41),j=t(43),T=Object(O.c)({app:S.a,user:j.a,form:h.a}),k=Object(O.d)(T,Object(O.a)(m.a)),y=t(48);u.a.render(a.a.createElement(y.a,null,a.a.createElement(E.a,{store:k},a.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return p}));var r=t(3),a=t(9),c="app-reducer/SET_TOKEN",u="app-reducer/SET_IMG_FILE",o={positions:null,imgFile:null,isValidPhotoInput:!1,token:null},s=function(e){return{type:u,img:e}},l=function(e){return{type:"app-reducer/SET_IS_VALID_PHOTO_INPUT",boolean:e}},i=function(e){return function(n){Object(a.a)(e).then((function(e){e.success&&n({type:"app-reducer/SET_POSITIONS_VALUE",value:e.positions})})).catch((function(e){return console.error(e)}))}},p=function(e){return function(n){Object(a.a)(e).then((function(e){var t;e.success&&n((t=e.token,{type:c,token:t}))})).catch((function(e){return console.error(e)}))}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"app-reducer/SET_POSITIONS_VALUE":return Object(r.a)(Object(r.a)({},e),{},{positions:n.value});case c:return Object(r.a)(Object(r.a)({},e),{},{token:n.token});case u:return Object(r.a)(Object(r.a)({},e),{},{imgFile:n.img});case"app-reducer/SET_IS_VALID_PHOTO_INPUT":return Object(r.a)(Object(r.a)({},e),{},{isValidPhotoInput:n.boolean});default:return e}}},43:function(e,n,t){"use strict";t.d(n,"e",(function(){return p})),t.d(n,"f",(function(){return _})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return h})),t.d(n,"d",(function(){return S}));var r=t(10),a=t.n(r),c=t(28),u=t(38),o=t(3),s=t(9),l="app-reducer/SET_USERS",i={users:[],page:1,countUsers:null,nextLink:null,disableBtn:!1,showModal:!1,showPreloader:!1,statusError:!1,messageError:""},p=function(e){return{type:"app-reducer/SET_NAMBER_COUNT_USERS",namber:e}},f=function(e,n){return{type:"app-reducer/SHOW_MORE_USERS",users:e,nextLink:n}},d=function(e){return{type:"app-reducer/SET_DISABLE_BTN",boolean:e}},_=function(e){return{type:"app-reducer/SHOW_MODAL_CONGRATULATION",boolean:e}},b=function(e){return{type:"app-reducer/SHOW_PRELOADER",boolean:e}},E=function(e){return{type:"app-reducer/SET_STATUS_ERROR",boolean:e}},O=function(e){return{type:"app-reducer/SET_MESSAGE_ERROR",message:e}},m=function(e,n){return function(){var t=Object(c.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(b(!0));case 2:return t.next=4,Object(s.b)(e,n).then((function(e){var n,t;e.success&&(r(E(!1)),r((n=e.users,t=e.links.next_url,{type:l,users:n,nextLink:t})))})).catch((function(e){console.error(e),r(E(!0))}));case 4:r(b(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var n=Object(c.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(d(!0));case 2:return n.next=4,Object(s.b)(null,null,e).then((function(e){e.success?t(f(e.users,e.links.next_url)):e.success||"Page not found"!==e.message||t(f(null,null))}));case 4:t(d(!1));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(e,n,t,r){return function(){var u=Object(c.a)(a.a.mark((function c(u){return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u(d(!0));case 2:return a.next=4,Object(s.c)(e,n).then((function(e){e.ok?(u(_(!0)),u(O("")),u(m(t,r))):e.ok||409!==e.status||u(O("User with this phone or email already exist"))}));case 4:return a.next=6,u(d(!1));case 6:case"end":return a.stop()}}),c)})));return function(e){return u.apply(this,arguments)}}()};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return Object(o.a)(Object(o.a)({},e),{},{users:n.users,nextLink:n.nextLink});case"app-reducer/SHOW_MORE_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:n.users?[].concat(Object(u.a)(e.users),Object(u.a)(n.users)):e.users,nextLink:n.nextLink?n.nextLink:null});case"app-reducer/SET_PAGE_USERS":return Object(o.a)(Object(o.a)({},e),{},{page:n.page});case"app-reducer/SET_NAMBER_COUNT_USERS":return Object(o.a)(Object(o.a)({},e),{},{countUsers:n.namber});case"app-reducer/SET_DISABLE_BTN":return Object(o.a)(Object(o.a)({},e),{},{disableBtn:n.boolean});case"app-reducer/SHOW_MODAL_CONGRATULATION":return Object(o.a)(Object(o.a)({},e),{},{showModal:n.boolean});case"app-reducer/SHOW_PRELOADER":return Object(o.a)(Object(o.a)({},e),{},{showPreloader:n.boolean});case"app-reducer/SET_STATUS_ERROR":return Object(o.a)(Object(o.a)({},e),{},{statusError:n.boolean});case"app-reducer/SET_MESSAGE_ERROR":return Object(o.a)(Object(o.a)({},e),{},{messageError:n.message});default:return e}}},56:function(e,n,t){e.exports={App:"Footer_App__2rxok",container:"Footer_container__2mTOT",aboutMy_title:"Footer_aboutMy_title__1xmrk",users_title:"Footer_users_title__sl_0w",form_title:"Footer_form_title__YJ76S","modal-Btn":"Footer_modal-Btn__25c9f","ant-modal-header":"Footer_ant-modal-header__1dPcE",footer:"Footer_footer__20FiZ"}},75:function(e,n,t){e.exports=t(147)},80:function(e,n,t){},81:function(e,n,t){},9:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return u}));var r="https://frontend-test-assignment-api.abz.agency/api/v1/",a=function(e){return fetch(r+e).then((function(e){return e.json()}))},c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return fetch(null===t?"".concat(r,"users?page=").concat(e,"&count=").concat(n):t).then((function(e){return e.json()}))},u=function(e,n){var t=new FormData;return t.append("position_id",e.position_id),t.append("name",e.name),t.append("email",e.email),t.append("phone",e.phone),t.append("photo",e.photo),fetch(r+"users",{method:"POST",body:t,headers:{Token:n}})}}},[[75,5,6]]]);
//# sourceMappingURL=main.490f4f00.chunk.js.map