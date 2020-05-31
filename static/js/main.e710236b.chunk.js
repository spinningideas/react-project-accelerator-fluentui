(this["webpackJsonpreact-project-accelerator-fluentui"]=this["webpackJsonpreact-project-accelerator-fluentui"]||[]).push([[0],{104:function(e,t,n){e.exports=n(115)},109:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),o=n.n(c),i=n(42),l=n(18),u=n(150),s=n(3),m=n(155),d=(n(109),n(33)),f=n(9),g=n(156),h=n(60),p=n.n(h),b=n(161),v=n(24);function y(e){return void 0===e.display||!1===e.display?r.a.createElement(r.a.Fragment,null):r.a.createElement(b.a,{size:v.a.large})}var E=r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,component:p()({loader:function(){return n.e(5).then(n.bind(null,174))},loading:y})}),r.a.createElement(f.b,{path:"/about",component:p()({loader:function(){return n.e(3).then(n.bind(null,171))},loading:y})}),r.a.createElement(f.b,{path:"/contact",component:p()({loader:function(){return Promise.all([n.e(6),n.e(4)]).then(n.bind(null,172))},loading:y})}),r.a.createElement(f.a,{to:"/"})),w=n(79),j=n(28),O=n.n(j),S=n(44),k=n(165),x=n(164),C=n(90),I=n(163),L=n(151),D=n(95),N=n(162),P=n(11),A=n(73),U=n(80);var T=function(e){return r.a.createElement("div",{className:"ms-Grid",dir:"ltr"},e.children)};var H=function(e){return r.a.createElement("div",{className:"ms-Grid-row",style:e.styles},e.children)};var z=function(e){var t="ms-sm"+(e.sm?e.sm:"12"),n="ms-md"+(e.md?e.md:"12"),a="ms-lg"+(e.lg?e.lg:"12"),c=e.padding?e.padding+"px":"0",o=e.margin?e.margin+"px":"0",i=e.classes?"ms-Grid-col "+e.classes:"ms-Grid-col "+t+" "+n+" "+a,l={padding:c,margin:o};return r.a.createElement("div",{className:i,style:l},e.children)},B=n(35),F=n(152),G=n(94),R=n(148);var J=function(e){var t={type:B.a.largeHeader,closeButtonAriaLabel:e.locData.cancel,title:e.locData.signin,subText:e.locData.signindescription},n=function(){e.handleSignInCancel(!1)};return r.a.createElement(F.a,{hidden:!e.open,onDismiss:function(){return n()},dialogContentProps:t},r.a.createElement(G.a,null,r.a.createElement(D.a,{onClick:function(){return n()}},e.locData.cancel),r.a.createElement(R.a,{onClick:function(){e.handleSignIn()},color:"secondary",autoFocus:!0},e.locData.signin)))},Q={dropdown:{width:100}};var W=Object(f.g)((function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)({}),l=Object(d.a)(i,2),u=l[0],s=l[1],m=Object(a.useState)(""),f=Object(d.a)(m,2),h=f[0],p=f[1],b=Object(a.useState)(!1),v=Object(d.a)(b,2),y=v[0],E=v[1],w=Object(A.a)(),j=Object(U.a)();Object(a.useEffect)((function(){function e(){return(e=Object(S.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.getUserLocale(),p(t),e.next=4,w.getLocalizedTextSet(["apptitle","signin","signindescription","signout","home","contact","about","cancel"],t);case 4:n=e.sent,s(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var B=[{key:"home",text:u.home,iconProps:{iconName:"Home"},onClick:function(){return F("/")}},{key:"contact",text:u.contact,iconProps:{iconName:"ArrangeByFrom"},onClick:function(){return F("/contact")}},{key:"about",text:u.about,iconProps:{iconName:"Help"},onClick:function(){return F("/about")}}],F=function(t){o(!1),j.navigate(e,t,null)},G=function(){return B.map((function(e){return r.a.createElement(g.a.Item,{key:e.key},r.a.createElement(k.a,{className:"p-3 full-width text-left",iconProps:e.iconProps,text:e.text,onClick:e.onClick}))}))};return r.a.createElement(T,null,r.a.createElement(H,{styles:{borderBottom:"1px solid #eeeeee",padding:"5px",height:"45px"}},r.a.createElement(z,{sm:2,md:2,lg:2},r.a.createElement(x.a,{onClick:function(){o(!c)},color:"inherit","aria-label":"menu"},r.a.createElement(C.a,{iconName:"GlobalNavButton"}))),r.a.createElement(z,{sm:5,md:7,lg:4},r.a.createElement(I.a,{variant:"xLarge"},r.a.createElement(r.a.Fragment,null,"RPA"))),r.a.createElement(z,{sm:3,md:3,lg:3},r.a.createElement(L.a,{id:"language-menu",styles:Q,selectedKey:h||void 0,options:[{key:"enUS",text:"English"},{key:"zhCN",text:"Chinese"},{key:"esES",text:"Spanish"}],onChange:function(e,t){w.setUserLocale(t.key),window.location.reload()}})),r.a.createElement(z,{sm:2,md:3,lg:3},e.userSignedIn&&r.a.createElement(D.a,{onClick:function(){return E(!1),void e.handleSignOut()}},u.signout),!e.userSignedIn&&r.a.createElement(D.a,{onClick:function(){E(!0)}},u.signin))),r.a.createElement(N.a,{isLightDismiss:!0,type:P.a.customNear,customWidth:"245px",isOpen:c,onDismiss:function(){o(!1)}},r.a.createElement(g.a,null,r.a.createElement(G,null))),r.a.createElement(J,{locData:u,open:y,handleSignIn:function(){E(!1),e.handleSignIn()},handleSignInCancel:function(){return E(!1)}}))}));var K=Object(f.g)((function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],o=n[1],i=Object(w.a)(),l=Object(a.useRef)(e.location);return Object(a.useEffect)((function(){var e=i.userHasSignedIn();o(e)}),[c]),Object(a.useEffect)((function(){l&&l.current&&e.location&&e.location.pathname&&l.current!==e.location.pathname&&(l.current=e.location.pathname,window.scrollTo(0,0))}),[e.location.key]),r.a.createElement(g.a,null,r.a.createElement(g.a.Item,null,r.a.createElement(W,{userSignedIn:c,handleSignIn:function(){i.signIn(),window&&window.location&&window.location.reload(!0)},handleSignOut:function(){i.signOut(),window&&window.location&&window.location.reload(!0)}})),r.a.createElement(g.a.Item,null,E))})),q=n(81),M=n(82),V=n(84),X=n(83),Y=function(e){Object(V.a)(n,e);var t=Object(X.a)(n);function n(e){var a;return Object(q.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(M.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h3",null,"Something went wrong. Please reload the page to continue"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),n}(r.a.Component);Object(u.a)(),Object(s.C)({palette:{themePrimary:"#0078d4",themeLighterAlt:"#eff6fc",themeLighter:"#deecf9",themeLight:"#c7e0f4",themeTertiary:"#71afe5",themeSecondary:"#2b88d8",themeDarkAlt:"#106ebe",themeDark:"#005a9e",themeDarker:"#004578",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#c2c2c2",neutralSecondary:"#858585",neutralPrimaryAlt:"#4b4b4b",neutralPrimary:"#333333",neutralDark:"#272727",black:"#1d1d1d",white:"#ffffff"}});var Z=Object(l.a)(),$=function(){return r.a.createElement(Y,null,r.a.createElement(i.a,{history:Z,basename:"react-project-accelerator-fluentui"},r.a.createElement(m.a,null,r.a.createElement(K,null))))};o.a.render(r.a.createElement($,null),document.getElementById("appshell"))},73:function(e,t,n){"use strict";var a=n(28),r=n.n(a),c=n(69),o=n(44),i={enUS:"English",zhCN:"Chinese",esES:"Spanish"};t.a=function(){var e=function(){var e=window.localStorage.getItem("locale");return e||"enUS"},t=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var o,i,l,u,s,m,d,f,g,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},e.next=3,n(a);case 3:if(i=e.sent){l=i,u=Object.keys(l),s=Object(c.a)(t);try{for(s.s();!(m=s.n()).done;){d=m.value,f=Object(c.a)(u);try{for(f.s();!(g=f.n()).done;)h=g.value,d===h&&(o[h]=l[h])}catch(r){f.e(r)}finally{f.f()}}}catch(r){s.e(r)}finally{s.f()}}return e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://spinningideas.github.io/react-project-accelerator-fluentui"+"/i18n/".concat(t,".json"),e.abrupt("return",fetch(n).then((function(e){return e.json()})).catch((function(e){var t="Error Reading data "+e;console.log(t)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{setUserLocale:function(e){window.localStorage.setItem("locale",e)},getUserLocale:e,getLocales:function(){return i},getCurrentLocale:function(){var t=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return 0===t.length?e():t[0]},getLocalizedTextSet:t}}},79:function(e,t,n){"use strict";t.a=function(){var e=function(e){window.localStorage.setItem("usersignedin",Boolean(e))};return{userHasSignedIn:function(){var e=window.localStorage.getItem("usersignedin");return!!e&&"true"===e},setUserHasSignedIn:e,signIn:function(){e(!0)},signOut:function(){e(!1)}}}},80:function(e,t,n){"use strict";t.a=function(){return{navigate:function(e,t,n){e&&e.history&&e.history.replace&&e.history.replace({pathname:t,state:n})},navigateToUrl:function(e){var t=document.body.clientWidth-30,n=document.body.clientHeight-30;return window.open(e,"contentwin","width="+t+",height="+n+",menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes").focus(),!1}}}}},[[104,1,2]]]);
//# sourceMappingURL=main.e710236b.chunk.js.map