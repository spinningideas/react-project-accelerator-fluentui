(this["webpackJsonpreact-project-accelerator-fluentui"]=this["webpackJsonpreact-project-accelerator-fluentui"]||[]).push([[2],{108:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a.n(n),c=a(43),i=a(35),o=a(0),s=a.n(o),l=a(10),u=a(102),m=a(172),f=a(182),p=a(88),d=a(77),h=a(89),E=function(){var e=function(e){return e.ok?e.json().then((function(t){return Promise.resolve({data:t,code:e.status,response:e})})).catch((function(t){return Promise.resolve({data:e,code:e.status,response:e})})):e.json().catch((function(t){return Promise.resolve({data:e.statusText,code:e.status,response:e})})).then((function(t){return Promise.resolve({data:t.error.message,code:e.status,response:e})}))},t=function(){var t=Object(c.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+n}}).then((function(t){return e(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return{getData:function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a,{method:"GET",headers:{Accept:"application/json"}}).then((function(t){return e(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getDataAuthenticated:t,postData:function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,i,o=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},c=o.length>2?o[2]:void 0,i={Accept:"application/json","Content-Type":"application/json"},c&&c.length&&(i.Authorization="Bearer "+c),t.next=6,fetch(a,{method:"POST",headers:i,body:JSON.stringify(n)}).then((function(t){return e(t)}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},v=function(){return{getCurrentIPAddress:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E(),"https://freegeoip.app/json/",e.next=4,t.getData("https://freegeoip.app/json/").then((function(e){return{ip:e.data.ip,message:"Your ip is ".concat(e.data.ip," and your location: ").concat(e.data.city,", ").concat(e.data.region_name," ")}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},g=a(197),b=a(198);var x=function(e){if(!1===e.isOpen)return null;var t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"9999",background:"#ffffff",padding:"10px"};if(e.width&&e.height&&(t.width=e.width+"px",t.height=e.height+"px",t.marginLeft="-"+e.width/2+"px",t.marginTop="-"+e.height/2+"px",t.transform=null),e.style)for(var a in e.style)t[a]=e.style[a];var n={position:"absolute",width:"100%",height:"100%",top:"0px",left:"0px",zIndex:"9998",background:"rgba(0, 0, 0, 0.3)"};if(e.backdropStyle)for(var r in e.backdropStyle)n[r]=e.backdropStyle[r];return s.a.createElement("div",{className:e.containerClassName},s.a.createElement("div",{className:e.className,style:t},e.children),!e.noBackdrop&&s.a.createElement("div",{className:e.backdropClassName,style:n,onClick:function(t){!function(t){t.preventDefault(),e.onClose&&e.onClose()}(t)}}))},N=a(202),j=a(85);var y=function(e){return!1===e.displayGetStarted?s.a.createElement(s.a.Fragment,null):s.a.createElement("p",{className:"whitetext"},e.locData.getstartedmessage)};t.default=Object(l.g)((function(e){var t=Object(o.useState)(!1),a=Object(i.a)(t,2),n=a[0],l=a[1],E=Object(o.useState)({}),O=Object(i.a)(E,2),w=O[0],k=O[1],C=Object(o.useState)(!1),S=Object(i.a)(C,2),I=S[0],A=S[1],D=Object(o.useState)(""),T=Object(i.a)(D,2),P=T[0],z=T[1],G=Object(o.useState)(!1),B=Object(i.a)(G,2),J=B[0],K=B[1],L=Object(p.a)(),Y=Object(d.a)(),F=Object(h.a)(),H=v(),R=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=L.userHasSignedIn();l(e)}),[]),Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Y.getUserLocale(),e.next=3,Y.getLocalizedTextSet(["welcome","homepagewelcome","getstartedmessage","notifications","notificationsdescription","modals","modalsdescription","error","success","view","close","authenticatedcontent","authenticatedcontentdescription","serviceexampletitle","serviceexampledescription","formsexample","formsexampledescription"],t);case 3:a=e.sent,k(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(e,t){R.current.show(e,t)},_=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(""),K(!0),e.next=4,H.getCurrentIPAddress().then((function(e){e?(z(e.message),K(!1)):(z("Error occurred"),K(!1))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){return!J&&P.length>0?s.a.createElement("p",{className:"mt-2"},P):s.a.createElement(j.a,{display:J,size:20})};return s.a.createElement(f.a,{spacing:0},s.a.createElement(f.a.Item,{xs:12,className:"contentpanel-site"},s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement("h2",null,w.homepagewelcome),s.a.createElement(y,{locData:w,displayGetStarted:!0}))),s.a.createElement(f.a,{spacing:0},s.a.createElement(f.a.Item,{xs:12,className:"pt-1"},n&&s.a.createElement(f.a,null,s.a.createElement(f.a.Item,{xs:12,className:"pt-1"},s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement("h4",{className:"card-title"},w.authenticatedcontent),s.a.createElement("p",null,w.authenticatedcontentdescription))))),s.a.createElement(f.a,null,s.a.createElement(f.a.Item,{xs:12,md:4,lg:4,xl:4,className:"pt-1"},s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement("h4",{className:"card-title"},w.notifications),s.a.createElement("p",null,w.notificationsdescription)),s.a.createElement(b.a,null,s.a.createElement(u.a,{className:"ml-2",color:"secondary",onClick:function(){return U(w.success,"success")}},w.success),s.a.createElement(u.a,{className:"ml-2",color:"secondary",onClick:function(){return U(w.error,"error")}},w.error))))),s.a.createElement(f.a,null,s.a.createElement(f.a.Item,{xs:12,md:4,lg:4,xl:4,className:"pt-1"},s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement("h4",{className:"card-title"},w.modals),s.a.createElement("p",null,w.modalsdescription)),s.a.createElement(b.a,null,s.a.createElement(m.a,{className:"ml-2",color:"secondary",onClick:function(){return A(!0)}},w.view))),s.a.createElement(x,{isOpen:I,onClose:function(){return A(!1)}},s.a.createElement("h1",null,w.welcome),s.a.createElement("p",null,w.homepagewelcome),s.a.createElement(m.a,{color:"secondary",onClick:function(){return A(!1)}},w.close)))),s.a.createElement(f.a,null,s.a.createElement(f.a.Item,{xs:12,className:"pt-1"},s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement("h4",{className:"card-title"},w.formsexampledescription),s.a.createElement(m.a,{className:"mt-3",onClick:function(){F.navigate(e,"/contact/testrouteparam")}},w.formsexample))))),s.a.createElement(f.a,null,s.a.createElement(f.a.Item,{xs:12,className:"pt-1"},s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement("h4",{className:"card-title"},w.serviceexampledescription),s.a.createElement(m.a,{className:"mt-3",color:"secondary",onClick:_},w.serviceexampletitle),s.a.createElement(q,null)))))))),s.a.createElement(N.a,{ref:R}))}))},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{style:{border:"1px solid #eeeeee",background:"#ffffff",padding:"10px"}},e.children)}},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{style:{background:"#ffffff",padding:"10px"}},e.children)}},202:function(e,t,a){"use strict";var n=a(79),r=a(80),c=a(82),i=a(81),o=a(0),s=a.n(o);function l(e){return s.a.createElement("div",{className:"notification-item "+e.theme,onClick:function(){e.hideNotification(e.id)}},s.a.createElement("p",{className:"notification-title"},e.title),s.a.createElement("p",{className:"notification-body"},e.msg))}var u=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).show=function(e,t){r.addNotification("",e,5e3,t)},r.success=function(e,t,a){r.addNotification(e,t,a,"success")},r.error=function(e,t,a){r.addNotification(e,t,a,"error")},r.info=function(e,t,a){r.addNotification(e,t,a,"info")},r.addNotification=function(e,t,a,n){var c=r.state.notifications,i=r.state.currentNotificationKey;c[i=i++]={title:e,msg:t,duration:a,theme:n},r.setState({currentNotificationKey:i,notifications:c}),r.hideAfterDurationElapses(a,i)},r.hideAfterDurationElapses=function(e,t){setTimeout((function(){r.hideNotification(t)}),e)},r.hideNotification=function(e){var t=r.state.notifications;delete t[e],r.setState({notifications:t})},r.state={currentNotificationKey:0,notifications:[]},r}return Object(r.a)(a,[{key:"render",value:function(){var e=window.pageYOffset+"px",t=this.hideNotification,a=this.state.notifications.map((function(e,a){return s.a.createElement(l,{id:a,key:a,theme:e.theme,hideNotification:t,title:e.title,msg:e.msg})}));return s.a.createElement("div",{style:{top:e},className:"notification-container"},a)}}]),a}(s.a.Component);t.a=u}}]);
//# sourceMappingURL=2.43129c9a.chunk.js.map