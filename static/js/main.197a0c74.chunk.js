(window.webpackJsonpresellerdemov2=window.webpackJsonpresellerdemov2||[]).push([[0],{24:function(e,a,t){e.exports=t(37)},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),s=t(6),m=t(8),i=t(3),o=Object(i.a)({basename:"/",forceRefresh:!1,keyLength:6}),d=t(23),u=t(7),E=t(1),f=t(9),p=function(e){var a=e.title,t=e.secondLine;return r.a.createElement("div",{className:"card-header main-bg"},r.a.createElement("h5",{className:"card-title"},a),t?t():null)},b=function(){return r.a.createElement("div",{className:"card-footer d-flex justify-content-around",id:"FooterIcons"},r.a.createElement(f.e,{onClick:function(){return o.push("/")}}),r.a.createElement(f.d,null),r.a.createElement(f.b,null),r.a.createElement(f.c,null))},N={default:f.a};function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var h=function(e){var a=e.walletInfo,t=a.name,n=(a.shortcut,a.price),c=a.diff,l=a.icon;return r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",{className:"card-title"},r.a.createElement(l,null),t),r.a.createElement("h6",{className:"card-subtitle"},t)),r.a.createElement("div",{className:"col d-flex flex-column align-items-end"},r.a.createElement("span",{className:"card-title"},"$ ",n),r.a.createElement("span",{className:"card-subtitle"},c)))))},y=function(e){var a=window.localStorage.getItem("wallets")||JSON.stringify([{name:"JohnnyCoin",shortcut:"JHC",address:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf",price:"24.32",diff:"+5.90%"}]),t=Object(n.useState)(JSON.parse(a).map(function(e){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(t,!0).forEach(function(a){Object(u.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,{icon:N.default})})),c=Object(E.a)(t,2),l=c[0],m=c[1],i=Object(n.useState)(!1),o=Object(E.a)(i,2),f=o[0],y=o[1],g=Object(n.useState)(""),w=Object(E.a)(g,2),O=w[0],j=w[1],x=Object(n.useState)(""),S=Object(E.a)(x,2),k=S[0],P=S[1],D=Object(n.useState)("0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"),I=Object(E.a)(D,2),C=I[0],H=I[1],L=function(){var e={};return l.forEach(function(a){"ZIL"!==a.shortcut&&"ETH"!==a.shortcut||(e[a.shortcut]={address:a.address})}),{resolution:{crypto:e}}};console.log(JSON.stringify(L()));var A=function(){return r.a.createElement("div",{className:"row justify-content-end",id:"buttons"},r.a.createElement("button",{type:"button",className:"btn btn-dark btn-md",onClick:function(e){return y(!0)}},"Add new wallet"),r.a.createElement("button",{type:"button",className:"btn btn-dark btn-md",onClick:function(e){return F()}},"Reset"))},F=function(){window.localStorage.clear(),window.location.reload()},T=function(e){console.log("add new wallet!",{name:O,shortcut:k,address:C}),e.preventDefault();var a=[].concat(Object(d.a)(l),[{name:O,shortcut:k,address:C,diff:"-",icon:N.default,price:5}]);m(a),window.localStorage.setItem("wallets",JSON.stringify(a)),y(!1)};return r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap"},r.a.createElement("div",{className:"col-md-fluid hidden-md-down"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"25rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Left Hints"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-text"},"You need to have a ZIL or ETH wallet in your list to  buy a domain")),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{style:{paddingLeft:"15px"}},r.a.createElement("li",null,"Click on the add new wallet button at the top"),r.a.createElement("li",null,"Fill the form"),r.a.createElement("li",null,"Don't change the address"),r.a.createElement("li",null,"Submit is on the left"))))))))),r.a.createElement("div",{className:"col-md-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"30rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Wallets",secondLine:A}),r.a.createElement("div",{className:"card-body"},f?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:T},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Wallet Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Wallet Name",value:O,onChange:function(e){return j(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Shortcut"),r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Shortcut",value:k,onChange:function(e){return P(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Address",value:C,onChange:function(e){return H(e.target.value)}}))))):r.a.createElement("div",{className:"card"},l.map(function(e,a){return r.a.createElement(h,{walletInfo:e,key:a})})),f?r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",id:"margin-top",onClick:T},"Create Wallet"),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-md",id:"margin-top",onClick:function(e){return y(!1)}},"Cancel")):r.a.createElement(s.b,{to:{pathname:"/search",state:{wallets:L()}}},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",id:"margin-top"},"Buy .ZIL domains"))),r.a.createElement(b,null))))),r.a.createElement("div",{className:"col-lg-fluid hidden-md-down"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"25rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Right Hints"),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Add new wallet")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"For testing purporses you can create a mock wallet by pressing plus button on top"))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Clean the list")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"You can erase all wallets created earlier by pressing reset button")))))))))},g=t(11),w=t.n(g),O=t(13),j={reseller:"udtesting",token:"1txobsttv63p5wrfvnpjp0wfuava5cov"},x=t(17),S=t.n(x);function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(t,!0).forEach(function(a){Object(u.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var D=function(e){var a=Object(n.useState)("reseller-test-".concat(j.reseller,"-").concat(Math.floor(502562*Math.random()),".zil")),t=Object(E.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(null),i=Object(E.a)(m,2),o=i[0],d=i[1],u=Object(n.useState)(!1),f=Object(E.a)(u,2),N=f[0],v=f[1],h=function(){var e=Object(O.a)(w.a.mark(function e(a){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),d(null),t=/[.]\w{3}$/.test(c)?c:"".concat(c,".zil"),v(!0),e.next=7,r="".concat("https://unstoppabledomains.com/api/v1/resellers","/").concat(j.reseller,"/domains/").concat(t),fetch(r,{headers:{Authentication:"Bearer ".concat(j.token)}}).then(function(e){return e.json()});case 7:n=e.sent,d(P({},n)),v(!1);case 10:case"end":return e.stop()}var r},e)}));return function(a){return e.apply(this,arguments)}}(),y=function(){if(null!=o.errors)return r.a.createElement("div",{className:"card",id:"big"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Error")),r.a.createElement("div",{className:"card-body"},o.errors.map(function(e,a){return r.a.createElement("p",{className:"card-text",key:a},e.message)})));var a=o.domain;return a&&!a.reselling?r.a.createElement("div",{className:"card",id:"big"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},a.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-subtitle"},"Domain is not available"))):r.a.createElement("div",{className:"card",id:"big"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement("h6",{className:"card-subtitle"},"Domain is available")),r.a.createElement("div",{className:"col-3 d-flex justify-content-end"},r.a.createElement("h5",{className:"card-title"},"$ ",a.reselling&&a.reselling.price)))),r.a.createElement("div",{className:"card-body"},r.a.createElement(s.b,{to:{pathname:"/email",state:P({},e.location.state,{},o,{owner:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"})}},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},"BUY"))))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Buy Zil domain"}),r.a.createElement("div",{className:"card-body d-flex flex-column justify-content-between"},r.a.createElement("div",{className:"card-fluid"},r.a.createElement("form",{className:"form-inline ",onSubmit:h},r.a.createElement("div",{className:"form-group col-sm-12",id:"my-form"},r.a.createElement("div",{className:"container-fluid d-flex justify-content-md-center"},r.a.createElement("input",{type:"text",placeholder:"Choose your domain name, wisely",className:"form-control-lg col-11",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg m-0 ml-1"},"Search")),r.a.createElement("small",{id:"passwordHelpBlock",className:"form-text text-muted"},"*For the purpose of this demo use this domain namespace ",r.a.createElement("code",null,"reseller-testing-udtesting-[random number]"))))),N?r.a.createElement("div",{className:"loader"},"Searching..."):null,o?y():null,r.a.createElement("div",{className:"row justify-content-md-center align-items-end"},r.a.createElement("h4",{className:"card-subtitle"},"Learn more about .ZIL domain"))),r.a.createElement(b,null)))))),r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"40rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Left Hints"),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Base URL")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"https://unstoppabledomains.com/api/v1"))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"API Calls")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-text"},"/resellers",r.a.createElement("code",null,"resseler-id"),"/domains",r.a.createElement("code",null,"/domain-name"),".zil")),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",null,r.a.createElement("li",null,"Method: GET"),r.a.createElement("li",null,"Response:",r.a.createElement(S.a,{src:{domain:{name:"bogdantest.zil",owner:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf",reselling:null,auction:null}},collapsed:!0,displayDataTypes:!1,indentWidth:1,collapseStringsAfterLength:10,displayObjectSize:!1})),r.a.createElement("li",null,"Errors:",r.a.createElement(S.a,{src:{errors:[{code:"DOMAIN_NAME_INVALID",message:"Domain name is invalid"}]},collapsed:!0,displayDataTypes:!1,indentWidth:1,collapseStringsAfterLength:20,displayObjectSize:!1})))))))))))),r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"40rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Right Hints"),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-text"},"You need to have a ZIL or ETH wallet in your list to  buy a domain")),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{style:{paddingLeft:"15px"}},r.a.createElement("li",null,"Click on the add new wallet button at the top"),r.a.createElement("li",null,"Fill the form"),r.a.createElement("li",null,"Don't change the address"),r.a.createElement("li",null,"Submit is on the left")))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Test domain name space")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"For testing purporses please use folowing name conventions"),r.a.createElement("code",null,"[reseller-test-][reseller-ID]-[any number].zil"),r.a.createElement("p",{className:"card-text"},"Example."),r.a.createElement("code",null,"reseller-test-",j.reseller,"-",Math.floor(502562*Math.random()).zil))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Reseller ID")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Get your id and API token from UD team"),r.a.createElement("p",{className:"card-text"},"You will need to use your API ID instead of hardcoded udtesting in examples above. You can the API ID and token from UD integration team"))))))))))};function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function C(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(t,!0).forEach(function(a){Object(u.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var H=function(e){var a=Object(n.useState)("johnny@unstoppabledomains.com"),t=Object(E.a)(a,2),c=t[0],l=t[1];console.log(e.location.state),console.log(e);var s=function(e){return!/.+@.+\..+/.test(e)},i=Object(n.useState)(s("")),o=Object(E.a)(i,2),d=o[0],u=o[1],f=function(){if(console.log(e),console.log("submiting!!!",c),console.log({isValid:d,func:s(c),email:c}),d)return e.history.push({pathname:"/checkout",state:C({},e.location.state,{email:c})})};return e.location.state?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Enter email"}),r.a.createElement("div",{className:"card-body",id:"big"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-9"},r.a.createElement("h5",{className:"card-title"},e.location.state.domain.name)),r.a.createElement("div",{className:"col-3 d-flex justify-content-end"},r.a.createElement("h5",{className:"card-title"},"$ ",e.location.state.domain.reselling.price))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-inline justify-content-md-center",onSubmit:f},r.a.createElement("p",{className:"card-text"},"Please provide an email address"),r.a.createElement("input",{type:"text",placeholder:"Email",className:"form-control-lg col-11",value:c,onChange:function(e){l(e.target.value),u(!s(e.target.value))}})))),r.a.createElement("div",{className:"d-flex justify-content-md-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary col-6",onClick:f,disabled:!d,id:"margin-top"},"Next"))),r.a.createElement(b,null)))))),r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5 md-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container  md-5"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Hints"),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Add new wallet")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"For testing purporses you can create a mock wallet by pressing plus button on top"))),r.a.createElement("div",{className:"card",id:"list-field"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Clean the list")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"You can erase all wallets created earlier by pressing reset button")))))))))):r.a.createElement(m.a,{to:"/"})};function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function A(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(t,!0).forEach(function(a){Object(u.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var F=function(e){var a=e.location.state,t=Object(n.useState)("4815821033352416"),c=Object(E.a)(t,2),l=c[0],s=c[1],i=Object(n.useState)(),o=Object(E.a)(i,2),d=o[0],u=o[1],f=Object(n.useState)(!1),N=Object(E.a)(f,2),v=N[0],h=N[1];if(console.log("checkout state = ",a),!a)return r.a.createElement(m.a,{to:"/"});var y=a.domain.name,g=a.owner,w=a.email,O=function(e){u(e),console.log("res = ",e),e.errors||h(!0)},x=function(e){var a,t,n="https://unstoppabledomains.com/api/v1/resellers/udtesting/users/".concat(w,"/orders");a=n,t={order:{domains:[{name:y,owner:g,resolution:{crypto:{ZIL:{address:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"},ETH:{address:"0xa823a39d2d5d2b981a10ca8f0516e6eaff78bdcf"}}}}]}},console.log("post data = ",t),fetch(a,{method:"POST",body:JSON.stringify(t),headers:{Authentication:"Bearer ".concat(j.token),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(O)};return r.a.createElement(r.a.Fragment,null,v?e.history.push({pathname:"/finish",state:A({},e.location.state,{},d)}):null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Payment flow"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-title"},"Payment Flow Credit Card Mock")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-row mt-5 justify-content-md-center"},r.a.createElement("label",{htmlFor:"creditCard",className:"align-self-start"},"Credit card number"),r.a.createElement("input",{id:"creditCard",type:"text",value:l,className:"form-control",onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{onClick:x,className:"btn btn-primary btn-lg mt-5"},"Buy ",y)))))),r.a.createElement("div",{className:"row justify-content-md-center align-items-end"},r.a.createElement("h4",{className:"card-subtitle"},"Learn more about .ZIL domain")),r.a.createElement(b,null)))))),r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Hints"))))))))},T=function(e){var a=e.location.state;console.log("finish props = ",a);var t=Object(n.useState)(!1),c=Object(E.a)(t,2),l=c[0],s=c[1];Object(n.useEffect)(function(){if(a){var e=a.order.orderNumber,t=a.email,n=setInterval(function(){return r.apply(this,arguments)},5e3);return function(){return clearInterval(n)}}function r(){return(r=Object(O.a)(w.a.mark(function a(){var n,r,c;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!0!==l){a.next=2;break}return a.abrupt("return");case 2:return n="https://unstoppabledomains.com/api/v1/resellers/udtesting/users/".concat(t,"/orders/").concat(e),a.next=5,fetch(n,{method:"GET",headers:{Authentication:"Bearer ".concat(j.token),"Content-Type":"application/json"}});case 5:return r=a.sent,a.next=8,r.json();case 8:c=a.sent,200===r.status&&s("MINED"===c.order.items[0].blockchain.status);case 10:case"end":return a.stop()}},a)}))).apply(this,arguments)}},[l,s,a]);var i=function(){return r.a.createElement("div",{className:"card d-flex align-items-md-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-title"},"Order status"),r.a.createElement("h5",{className:"card-subtitle"},"Unfortunately, transactions on blockchain are not instantly. Use this page for status check")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"loader"},"Searching...")))};return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement(p,{title:"Status Check"}),r.a.createElement("div",{className:"card-body",id:"list-field"},l?r.a.createElement("div",{className:"card d-flex align-items-md-center"},r.a.createElement("img",{src:"https://www.freeiconspng.com/uploads/youtube-like-png-14.png",class:"card-img-top col-6",alt:"Ok"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},"Congratulations!"),r.a.createElement("h5",{className:"card-subtitle text-center"},"You own"),a.order.items.map(function(e){return r.a.createElement("span",{key:e.name},e.name)}))):i()),r.a.createElement("div",{className:"row justify-content-md-center align-items-end"},r.a.createElement("button",{className:"btn btn-primary btn-lg"},"Post-configure your domain!")),r.a.createElement(b,null)))))),r.a.createElement("div",{className:"row justify-content-md-center flex-nowrap mt-5"},r.a.createElement("div",{className:"col-lg-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card",style:{width:"45rem",minHeight:"40rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Hints")))))))):r.a.createElement(m.a,{to:"/"})},B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-fluid",id:"tall"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("h1",null,"Resseler buy demo")),r.a.createElement(s.a,{history:o,basename:"/"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/landing",exact:!0,component:y}),r.a.createElement(m.b,{path:"/",exact:!0,component:D}),r.a.createElement(m.b,{path:"/email",exact:!0,component:H}),r.a.createElement(m.b,{path:"/checkout",exact:!0,component:F}),r.a.createElement(m.b,{path:"/finish",exact:!0,component:T})))))};t(35),t(36);l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.197a0c74.chunk.js.map