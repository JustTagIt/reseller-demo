(window.webpackJsonpresellerdemov2=window.webpackJsonpresellerdemov2||[]).push([[0],{163:function(e,t,a){e.exports=a(397)},192:function(e,t){},213:function(e,t){},215:function(e,t){},278:function(e,t){},325:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=325},395:function(e,t,a){},396:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(158),l=a.n(c),s=a(19),m=a(24),i=a(11),o=Object(i.a)({basename:"/",forceRefresh:!1,keyLength:6}),d=a(162),u=a(22),E=a(6),f=a(29),p=function(e){var t=e.title,a=e.secondLine;return r.a.createElement("div",{className:"card-header main-bg"},r.a.createElement("h5",{className:"card-title"},t),a?a():null)},b=function(){return r.a.createElement("div",{className:"card-footer d-flex justify-content-around",id:"FooterIcons"},r.a.createElement(f.e,null),r.a.createElement(f.d,null),r.a.createElement(f.b,null),r.a.createElement(f.c,null))},v={default:f.a};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var y=function(e){var t=e.walletInfo,a=t.name,n=t.price,c=t.diff,l=t.icon;return r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",{className:"card-title"},r.a.createElement(l,null),a),r.a.createElement("h6",{className:"card-subtitle"},a)),r.a.createElement("div",{className:"col d-flex flex-column align-items-end"},r.a.createElement("span",{className:"card-title"},"$ ",n),r.a.createElement("span",{className:"card-subtitle"},c)))))},h=function(e){var t=window.localStorage.getItem("wallets")||JSON.stringify([{name:"Zilliqa",shortcut:"ZIL",address:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf",price:"24.32",diff:"+5.90%"}]),a=Object(n.useState)(JSON.parse(t).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{icon:v.default})})),c=Object(E.a)(a,2),l=c[0],m=c[1],i=Object(n.useState)(!1),o=Object(E.a)(i,2),f=o[0],h=o[1],g=Object(n.useState)(""),w=Object(E.a)(g,2),j=w[0],O=w[1],x=Object(n.useState)(""),k=Object(E.a)(x,2),S=k[0],D=k[1],M=Object(n.useState)("0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"),I=Object(E.a)(M,2),P=I[0],L=I[1],z=function(){return r.a.createElement("div",{className:"row justify-content-end",id:"buttons"},r.a.createElement("button",{type:"button",className:"btn btn-dark btn-md",onClick:function(e){return h(!0)}},"Add new wallet"),r.a.createElement("button",{type:"button",className:"btn btn-dark btn-md",onClick:function(e){return C()}},"Reset"))},C=function(){window.localStorage.clear(),window.location.reload()},A=function(e){e.preventDefault();var t=[].concat(Object(d.a)(l),[{name:j,shortcut:S,address:P,diff:"-",icon:v.default,price:5}]);m(t),window.localStorage.setItem("wallets",JSON.stringify(t)),h(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Wallets",secondLine:z}),r.a.createElement("div",{className:"card-body"},f?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:A},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Wallet Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Wallet Name",value:j,onChange:function(e){return O(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Shortcut"),r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Shortcut",value:S,onChange:function(e){return D(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Address",value:P,onChange:function(e){return L(e.target.value)}}))))):r.a.createElement("div",{className:"card"},l.map(function(e,t){return r.a.createElement(y,{walletInfo:e,key:t})})),f?r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",id:"margin-top",onClick:A},"Create Wallet"),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-md",id:"margin-top",onClick:function(e){return h(!1)}},"Cancel")):r.a.createElement(s.b,{to:{pathname:"/"}},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",id:"margin-top"},"Buy .ZIL domains"))),r.a.createElement(b,null)))))))},g=a(23),w=a.n(g),j=a(61),O={reseller:"udtesting",token:"1txobsttv63p5wrfvnpjp0wfuava5cov",stripeKey:"pk_test_bERlHfGH5lT9rTIhKPg74H0o"},x=a(87),k=a.n(x),S=a(161),D=a.n(S);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function P(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}var L=function(e){var t=Object(n.useState)("reseller-test-".concat(O.reseller,"-").concat(Math.floor(502562*Math.random()),".zil")),a=Object(E.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(null),i=Object(E.a)(m,2),o=i[0],d=i[1],u=Object(n.useState)(!1),f=Object(E.a)(u,2),v=f[0],N=f[1],y=new D.a,h=function(){var e=Object(j.a)(w.a.mark(function e(t){var a,n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d(null),a=/[reseller-test-udtesting-]+\d+[.zil]+/,n=/[.]\w{3}$/.test(c)?c:"".concat(c,".zil"),N(!0),!a.test(c)){e.next=12;break}return e.next=9,l="".concat("https://unstoppabledomains.com/api/v1/resellers","/").concat(O.reseller,"/domains/").concat(n),fetch(l,{headers:{Authentication:"Bearer ".concat(O.token)}}).then(function(e){return e.json()});case 9:e.t0=e.sent,e.next=15;break;case 12:return e.next=14,y.resolve(n).then(function(e){return{domain:{auction:null,name:n,reselling:null,resolve:P(e.addresses)?null:{addresses:e.addresses}}}});case 14:e.t0=e.sent;case 15:r=e.t0,d(I({},r)),N(!1);case 18:case"end":return e.stop()}var l},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(){if(null!=o.errors)return r.a.createElement("div",{className:"card",id:"big"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Error")),r.a.createElement("div",{className:"card-body"},o.errors.map(function(e,t){return r.a.createElement("p",{className:"card-text",key:t},e.message)})));var t,a=o.domain;return console.log(a),a&&a.resolve?r.a.createElement("div",{className:"card",id:"big"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},a.name," s already taken ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-subtitle"},"It resolves to:"),(t=a.resolve.addresses,Object.keys(t).map(function(e,a){return r.a.createElement("p",{className:"card-text",key:a},e," => ",t[e])})))):a&&!a.reselling?r.a.createElement("div",{className:"card",id:"big"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},a.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-subtitle"},"Domain is not available"))):r.a.createElement("div",{className:"card",id:"big"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement("h6",{className:"card-subtitle"},"Domain is available")),r.a.createElement("div",{className:"col-3 d-flex justify-content-end"},r.a.createElement("h5",{className:"card-title"},"$ ",a.reselling&&a.reselling.price)))),r.a.createElement("div",{className:"card-body d-flex justify-content-md-center"},r.a.createElement(s.b,{to:{pathname:"/email",state:I({},e.location.state,{},o,{owner:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"})},style:{width:"50%"}},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",style:{width:"100%"}},"BUY"))))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Buy .ZIL domain"}),r.a.createElement("div",{className:"card-body d-flex flex-column justify-content-between"},r.a.createElement("div",{className:"card-fluid"},r.a.createElement("form",{className:"form-inline ",onSubmit:h},r.a.createElement("div",{className:"form-group col-sm-12",id:"my-form"},r.a.createElement("div",{className:"container-fluid d-flex justify-content-md-center"},r.a.createElement("input",{type:"text",placeholder:"Choose your domain name, wisely",className:"form-control-lg col-11",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg m-0 ml-1"},"Search")),r.a.createElement("small",{id:"passwordHelpBlock",className:"form-text text-muted"},"*For the purpose of this demo use this domain namespace ",r.a.createElement("code",null,"reseller-testing-udtesting-[random number]"))))),v?r.a.createElement("div",{className:"loader"},"Searching..."):null,o?g():null,r.a.createElement("div",{className:"row justify-content-md-center align-items-end"},r.a.createElement("h4",{className:"card-subtitle"},"Learn more about .ZIL domain"))),r.a.createElement(b,null)))))),r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5 mb-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"arrow-bounce bigger"},r.a.createElement("img",{width:"40",height:"40",alt:"",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="})))),r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"40rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Left Hints"),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Base URL")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"https://unstoppabledomains.com/api/v1"))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"API Calls")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-text"},"/resellers",r.a.createElement("code",null,"reseller-id"),"/domains",r.a.createElement("code",null,"/domain-name.zil"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",null,r.a.createElement("li",null,"Method: GET"),r.a.createElement("li",null,"Response:",r.a.createElement(k.a,{src:{domain:{name:"bogdantest.zil",owner:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf",reselling:null,auction:null}},collapsed:!0,displayDataTypes:!1,indentWidth:1,collapseStringsAfterLength:10,displayObjectSize:!1})),r.a.createElement("li",null,"Errors:",r.a.createElement(k.a,{src:{errors:[{code:"DOMAIN_NAME_INVALID",message:"Domain name is invalid"}]},collapsed:!0,displayDataTypes:!1,indentWidth:1,collapseStringsAfterLength:20,displayObjectSize:!1})))))))))))),r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"40rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Right Hints"),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-text"},"You need to have a ZIL or ETH wallet in your list to  buy a domain")),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{style:{paddingLeft:"15px"}},r.a.createElement("li",null,"Click on the add new wallet button at the top"),r.a.createElement("li",null,"Fill the form"),r.a.createElement("li",null,"Don't change the address"),r.a.createElement("li",null,"Submit is on the left")))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Test domain name space")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"For testing purporses please use folowing name conventions"),r.a.createElement("code",null,"[reseller-test-][reseller-ID]-[any number].zil"),r.a.createElement("p",{className:"card-text"},"Example."),r.a.createElement("code",null,"reseller-test-",O.reseller,"-",Math.floor(502562*Math.random()).zil))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Reseller ID")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Get your id and API token from UD team"),r.a.createElement("p",{className:"card-text"},"You will need to use your API ID instead of hardcoded udtesting in examples above. You can the API ID and token from UD integration team"))))))))))};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var A=function(e){var t=Object(n.useState)("example@example.com"),a=Object(E.a)(t,2),c=a[0],l=a[1],s=function(e){return!/.+@.+\..+/.test(e)},i=Object(n.useState)(s("")),o=Object(E.a)(i,2),d=o[0],u=o[1],f=function(){if(d)return e.history.push({pathname:"/checkout",state:C({},e.location.state,{email:c})})};return e.location.state?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Enter email"}),r.a.createElement("div",{className:"card-body",id:"big"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-9"},r.a.createElement("h5",{className:"card-title"},e.location.state.domain.name)),r.a.createElement("div",{className:"col-3 d-flex justify-content-end"},r.a.createElement("h5",{className:"card-title"},"$ ",e.location.state.domain.reselling.price))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-inline justify-content-md-center",onSubmit:f},r.a.createElement("p",{className:"card-text"},"Please provide an email address"),r.a.createElement("input",{type:"text",placeholder:"Email",className:"form-control-lg col-11",value:c,onChange:function(e){l(e.target.value),u(!s(e.target.value))}})))),r.a.createElement("div",{className:"d-flex justify-content-md-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary col-6",onClick:f,disabled:!d,id:"margin-top"},"Next"))),r.a.createElement(b,null)))))),r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5 md-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container  md-5"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Hints"),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Add new wallet")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"For testing purporses you can create a mock wallet by pressing plus button on top"))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Clean the list")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"You can erase all wallets created earlier by pressing reset button")))))))))):r.a.createElement(m.a,{to:"/"})},T=a(35),H=Object(T.injectStripe)(function(e){var t=Object(n.useState)("Sam"),a=Object(E.a)(t,2),c=a[0],l=a[1],s=function(t){t.preventDefault(),e.stripe?e.stripe.createToken({name:c}).then(function(t){console.log("[token]",t),t.error||e.funcs._handleUDPayment(t)}):console.log("Stripe.js hasn't loaded yet.")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"card-title"},"Pay with credit card"),r.a.createElement("form",{onSubmit:s,className:"form-group mt-3 p3 d-flex flex-column align-items-center"},r.a.createElement("div",{className:"col-8 d-flex justify-content-md-center flex-column"},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",className:"input-group my-1 p-2 border border-dark shadow",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("label",null,"Card details",r.a.createElement(T.CardElement,{className:"p-2 border border-dark"})),r.a.createElement("button",{className:"btn btn-primary border border-dark shadow",onClick:s},"Pay"))))});function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var U=function(e){var t=e.location.state,a=Object(n.useState)(),c=Object(E.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(E.a)(i,2),d=o[0],u=o[1],f=Object(n.useState)(!1),v=Object(E.a)(f,2),N=v[0],y=v[1];if(!t)return r.a.createElement(m.a,{to:"/"});var h=function(e){s(e),e.errors?y(e.errors):u(!0)},g=function(e){console.log("stripeToken = ",e);var a=t.domain.name,n=t.email,r=t.owner;console.log(t.domain);var c,l="https://unstoppabledomains.com/api/v1/resellers/udtesting/users/".concat(n,"/orders"),s={order:{domains:[{name:a,owner:r,resolution:{crypto:{ZIL:{address:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"},ETH:{address:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"}}}}]}};console.log("body = ",s),c=s,fetch(l,{method:"POST",body:JSON.stringify(c),headers:{Authentication:"Bearer ".concat(O.token),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(h)};return d?(u(!1),e.history.push({pathname:"/finish",state:G({},e.location.state,{},l)})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Payment flow"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-title"},"Payment Flow Credit Card Mock")),r.a.createElement("div",{className:"card-body"},r.a.createElement(T.StripeProvider,{apiKey:O.stripeKey},r.a.createElement(T.Elements,null,r.a.createElement(H,{domain:t.domain,funcs:{_handleUDPayment:g}}))))),N?r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-title"},"Something went wrong")),r.a.createElement("div",{className:"card-body"},N.map(function(e){return r.a.createElement("p",{className:"card-text text-danger",key:e.code},e.message)}))):null),r.a.createElement(b,null)))))))},F=function(e){var t=e.location.state,a=Object(n.useState)(!1),c=Object(E.a)(a,2),l=c[0],i=c[1];Object(n.useEffect)(function(){if(t){var e=t.order.orderNumber,a=t.email,n=setInterval(function(){return r.apply(this,arguments)},5e3);return function(){return clearInterval(n)}}function r(){return(r=Object(j.a)(w.a.mark(function t(){var n,r,c;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==l){t.next=2;break}return t.abrupt("return");case 2:return n="https://unstoppabledomains.com/api/v1/resellers/udtesting/users/".concat(a,"/orders/").concat(e),t.next=5,fetch(n,{method:"GET",headers:{Authentication:"Bearer ".concat(O.token),"Content-Type":"application/json"}});case 5:return r=t.sent,t.next=8,r.json();case 8:c=t.sent,200===r.status&&i("MINED"===c.order.items[0].blockchain.status);case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}},[l,i,t]);var o=function(){return r.a.createElement("div",{className:"card d-flex align-items-md-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-title"},"Order status"),r.a.createElement("h5",{className:"card-subtitle"},"Unfortunately, transactions on blockchain are not completed instantly. Use this page as a reference to the status of your transactions")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"loader"},"Searching...")))};return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Status Check"}),r.a.createElement("div",{className:"card-body",id:"list-field"},l?r.a.createElement("div",{className:"card d-flex align-items-md-center"},r.a.createElement("img",{src:"https://www.freeiconspng.com/uploads/youtube-like-png-14.png",className:"card-img-top col-6",alt:"Ok"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},"Congratulations!"),r.a.createElement("h5",{className:"card-subtitle text-center"},"You own"),t.order.items.map(function(e){return r.a.createElement("span",{key:e.name},e.name)}))):o()),r.a.createElement("div",{className:"row justify-content-md-center align-items-end"},r.a.createElement("button",{className:"btn btn-info btn-lg disabled"},"Post-configure your domain!"),r.a.createElement(s.b,{to:"/landing"},r.a.createElement("button",{className:"btn btn-success btn-lg"},"Homepage"))),r.a.createElement(b,null))))))):r.a.createElement(m.a,{to:"/"})},R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-fluid",id:"tall"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("h1",null,"Reseller buy demo")),r.a.createElement(s.a,{history:o,basename:"/"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:L}),r.a.createElement(m.b,{path:"/reseller-demo/",exact:!0,component:L}),r.a.createElement(m.b,{path:"/landing",exact:!0,component:h}),r.a.createElement(m.b,{path:"/email",exact:!0,component:A}),r.a.createElement(m.b,{path:"/checkout",exact:!0,component:U}),r.a.createElement(m.b,{path:"/finish",exact:!0,component:F})))))};a(395),a(396);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.37249a0a.chunk.js.map