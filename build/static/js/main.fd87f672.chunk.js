(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(48)},38:function(e,t,a){},39:function(e,t,a){},46:function(e,t){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(38),a(17)),u=(a(39),a(22)),s=a.n(u),m=a(28),i=(a(20),a(9)),d=a(12),E=a(23),f=a(32),h=function(e){var t=e.setbBoards,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],u=l[1],h=function(){var e=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),fetch("http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours"+"?search=".concat(c),{method:"GET",mode:"cors",header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){console.log("\uac80\uc0c9\ub370\uc774\ud130",e.data.results),t(e.data.results)})).catch((function(e){console.log("err",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:h},r.a.createElement(i.a,null,r.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement(E.a,{bg:"light",expand:"lg"},r.a.createElement(E.a.Brand,null,"\uac8c\uc2dc\ud310"),r.a.createElement(f.a,{className:"mr-auto"}),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694",value:c,onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{variant:"outline-success",type:"submit",value:"\uac80\uc0c9"}))))))},p=function(e){var t=e.setbBoards;return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement(h,{setbBoards:t})))},v=a(16),b=a(8),g=function(e){var t=e.boards;return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(v.a,{Row:!0,className:"justify-content-md-center"},r.a.createElement(b.a,{xs:6,md:1},r.a.createElement("tr",null,t.id)),r.a.createElement(b.a,{xs:6,md:7},t.title),r.a.createElement(b.a,{xs:6,md:4},t.created_at))))},x=(a(46),a(25)),j=function(e){var t=e.boards,a=e.setbBoards;Object(n.useEffect)((function(){fetch("http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours",{method:"GET",mode:"cors",header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){console.log("\uc774\uac70 \ubb50\ub098\uc624\uc9c0?",e.data),a(e.data.results)})).catch((function(e){console.log("err",e)}))}),[]);var l=function(){console.log("test")};return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(v.a,null,r.a.createElement(b.a,{xs:6,md:1},"\ubc88\ud638"),r.a.createElement(b.a,{xs:6,md:7},"\uc81c\ubaa9"),r.a.createElement(b.a,{xs:6,md:4},"\uc791\uc131\uc77c"))))),r.a.createElement("tbody",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement(x.a,{defaultActiveKey:"#link1"},r.a.createElement(x.a.Item,{action:!0,onClick:l},r.a.createElement(g,{boards:e})))})))))))},w=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"\ud22c\uc5b4\ub77c\uc774\ube0c"),r.a.createElement(p,{setbBoards:l}),r.a.createElement(j,{boards:a,setbBoards:l}),r.a.createElement("h7",null,"\ucd1d ",a.length,"\uac1c\uc758 \uac8c\uc2dc\uae00"))};a(47);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.fd87f672.chunk.js.map