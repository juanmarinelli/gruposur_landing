(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,r){"use strict";var n=r(198),o=r.n(n);r(295);e.a=function(t){t.app.AOS=new o.a.init({disable:!1,startEvent:"load",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:500,easing:"ease-in-out-quad",once:!1,mirror:!1,anchorPlacement:"top-bottom"})}},141:function(t,e,r){"use strict";var n=r(199);e.a=function(t){var e=t.store;new n.a({key:"vuex",storage:window.localStorage}).plugin(e)}},186:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return f}));var n=function(){return{users:[],user:null}},o={user:function(t){return t.user},getUsers:function(t){return t.users},getUserLogged:function(t){return t.user}},c={setUsers:function(t,e){t.users=e},SET_USER:function(t,e){e?(delete e.password,t.user=e,localStorage.setItem("user",JSON.stringify(e))):(t.user=null,localStorage.removeItem("user"))}},f={toSetUsers:function(t){var e=t.commit;apiServices.getUsers().then((function(t){return e("setUsers",t)})).catch((function(t){return console.log(t)}))},toSetUserStorage:function(t,e){(0,t.commit)("SET_USER",e)}}},187:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return f})),r.d(e,"getters",(function(){return l})),r.d(e,"mutations",(function(){return d})),r.d(e,"actions",(function(){return m}));var n=r(24);r(15),r(276),r(40),r(28),r(39),r(66),r(32),r(67);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=function(){return{cart:[],showCart:!1}},l={cart:function(t){return t.cart},cartQty:function(t){return t.cart.reduce((function(t,e){return t+e.cantidad}),0)},showCart:function(t){return t.showCart},getCantProd:function(t){return function(e){var r=t.cart.find((function(t){return t.id==e}));return r?r.cantidad:1}}},d={ADD_TO_CART:function(t,e){var r=t.cart.find((function(t){return t.id==e.id}));r?(r.cantidad=e.cantidad,r.total=r.precio*e.cantidad):t.cart.push(c(c({},e),{},{total:e.precio*e.cantidad})),t.showCart=!0,localStorage.setItem("cart",JSON.stringify(t.cart))},EMPTY_CART:function(t){t.cart=[],localStorage.removeItem("cart")},SET_CART:function(t,e){e?(t.cart=e,localStorage.setItem("cart",JSON.stringify(e))):(t.cart=null,localStorage.removeItem("cart"))},SET_SHOWCART:function(t,e){t.showCart=e}},m={setCart:function(t,e){(0,t.commit)("SET_CART",e)},setEmptyCart:function(t){(0,t.commit)("EMPTY_CART")},toSetOpenCartStorage:function(t,e){(0,t.commit)("SET_SHOWCART",e)},toAddToCart:function(t,e){(0,t.commit)("ADD_TO_CART",e)}}},202:function(t,e,r){r(203),t.exports=r(204)},272:function(t,e,r){t.exports=r.p+"img/bg.b34f6a5.jpg"},273:function(t,e,r){t.exports=r.p+"img/bg2.9db837b.jpg"},274:function(t,e,r){var content=r(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("5135230c",content,!0,{sourceMap:!1})},275:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,'html{font-family:"Raleway"}.redes{padding:15px 8px;left:0;top:40%;border-top-right-radius:10px;border-bottom-right-radius:10px}.float,.redes{position:fixed}.float{width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#fff;border-radius:50px;text-align:center;font-size:30px;box-shadow:3px 3px 3px #fff;z-index:50}.my-float{margin-top:16px}.loader{background:50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom,#fff,transparent,transparent);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:10vw;font-family:"Montserrat",sans-serif;-webkit-animation:reveal 3s ease-in-out .2s forwards,glow 2.5s linear 2s infinite;animation:reveal 3s ease-in-out .2s forwards,glow 2.5s linear 2s infinite}@-webkit-keyframes reveal{80%{letter-spacing:8px}to{background-size:300% 300%}}@keyframes reveal{80%{letter-spacing:8px}to{background-size:300% 300%}}@-webkit-keyframes glow{40%{text-shadow:0 0 8px #fff}}@keyframes glow{40%{text-shadow:0 0 8px #fff}}@-webkit-keyframes showTopText{0%{transform:translate3d(0,100%,0)}40%,60%{transform:translate3d(0,50%,0)}to{transform:translateZ(0)}}@keyframes showTopText{0%{transform:translate3d(0,100%,0)}40%,60%{transform:translate3d(0,50%,0)}to{transform:translateZ(0)}}@-webkit-keyframes showBottomText{0%{transform:translate3d(0,-100%,0)}to{transform:translateZ(0)}}@keyframes showBottomText{0%{transform:translate3d(0,-100%,0)}to{transform:translateZ(0)}}.font-title{color:#006ea9}.font-title,.font-variante{font-family:"Ubuntu",Arial,sans-serif}.font-variante{color:#fff}.font-optional{color:#002c54}.animated-title,.font-optional{font-family:"Ubuntu",Arial,sans-serif}.animated-title{color:#0071bc;height:90vmin;left:15%;position:absolute;top:40%;transform:translate(-50%,-50%);width:70vmin}.animated-title>div{height:50%;overflow:hidden;position:absolute;width:100%}.animated-title>div div{font-size:7vmin;position:absolute}.animated-title>div div span{display:block}.animated-title>div.text-top{top:0}.animated-title>div.text-top div{-webkit-animation:showTopText 1s;animation:showTopText 1s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;bottom:0;transform:translateY(100%)}.animated-title>div.text-top div span:first-child{color:#fff}.animated-title>div.text-bottom{bottom:0}.animated-title>div.text-bottom div{-webkit-animation:showBottomText .5s;animation:showBottomText .5s;-webkit-animation-delay:1.75s;animation-delay:1.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;top:0;transform:translateY(-100%)}.animated-title>div.text-loquiero{bottom:-65px}.animated-title>div.text-loquiero div{-webkit-animation:showBottomText .5s;animation:showBottomText .5s;-webkit-animation-delay:2.75s;animation-delay:2.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;top:0;transform:translateY(-100%)}@media (max-width:600px){.font-home{color:#0071bc;font-family:"Raleway",Arial,sans-serif;font-size:2rem;line-height:2rem}}.swiper-pagination-bullet{background:transparent!important;border:1px solid #fff}.swiper-pagination-bullet-active{background:#fff!important}',""]),n.locals={},t.exports=n},298:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return E})),r.d(e,"getters",(function(){return _})),r.d(e,"mutations",(function(){return A})),r.d(e,"actions",(function(){return U}));var n,o,c,f,l,d,m,v,w,h,x,y,k=r(1),O=r(52),T=(r(186),r(187),r(3)),R=(r(63),r(13)),S=r.n(R),C="http://127.0.0.1:8000/api",j={getProductos:(y=Object(T.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get(C+"/products");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(){return y.apply(this,arguments)}),getProducto:(x=Object(T.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(C,"/products/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return x.apply(this,arguments)}),getUsers:(h=Object(T.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get(C+"/usuarios");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(){return h.apply(this,arguments)}),deleteProducto:(w=Object(T.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.delete("".concat(C,"/productos/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return w.apply(this,arguments)}),createUser:(v=Object(T.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post(C+"/usuarios",e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return v.apply(this,arguments)}),saveProducto:(m=Object(T.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post(C+"/productos",e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return m.apply(this,arguments)}),updateProducto:(d=Object(T.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.put("".concat(C,"/productos/").concat(e),r);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t,e){return d.apply(this,arguments)}),getPedidos:(l=Object(T.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(C,"/usuarios/").concat(e,"/pedidos"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return l.apply(this,arguments)}),guardarCompra:(f=Object(T.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post("".concat(C,"/usuarios/").concat(e,"/pedidos"),r);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t,e){return f.apply(this,arguments)}),getCategories:(c=Object(T.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get(C+"/categories");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(){return c.apply(this,arguments)}),getProductsCategory:(o=Object(T.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(C,"/products_category/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return o.apply(this,arguments)}),getTratamientos:(n=Object(T.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(C,"/tratamientos_pablo"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t){return n.apply(this,arguments)})},P=j;k.a.use(O.a);var E=function(){return{productos:[],categories:[]}},_={productos:function(t){return t.productos},categories:function(t){return t.categories}},A={SET_PRODUCTOS:function(t,data){t.productos=data},SET_CATEGORIES:function(t,data){t.categories=data}},U={getProductos:function(t){var e=t.commit;P.getProductos().then((function(t){return e("SET_PRODUCTOS",t)})).catch((function(t){return console.log(t)}))},getCategories:function(t){var e=t.commit;P.getCategories().then((function(t){return e("SET_CATEGORIES",t)})).catch((function(t){return console.log(t)}))}}}},[[202,3,1,4]]]);