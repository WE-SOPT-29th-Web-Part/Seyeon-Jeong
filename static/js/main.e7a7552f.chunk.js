(this["webpackJsonpgithub-profile-finder"]=this["webpackJsonpgithub-profile-finder"]||[]).push([[0],{35:function(n,e,r){},36:function(n,e,r){},57:function(n,e,r){"use strict";r.r(e);var t,i=r(1),o=r.n(i),c=r(24),a=r.n(c),s=(r(35),r(5)),d=(r(36),r(3)),l=r(4),u=r(0);var b,p=l.a.div(t||(t=Object(d.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(27, 29, 33);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  * {\n    box-sizing: border-box;\n  }\n  header {\n    font-size: 1.5rem;\n    fonr-wight: bold;\n    color: white;\n    margin-bottom: 1.5rem;\n  }\n"]))),h=function(n){var e=n.children;return Object(u.jsx)(p,{children:e})},g=r(13),j=r.n(g),x=r(30),m=r(28),f=r(29),v=r.n(f);var O,w=l.a.div(b||(b=Object(d.a)(["\n    .history-wrapper{\n        width: 100%;\n        background-color: transparent;\n        border-radius: 5px;\n    }\n    .history{\n        width: 100%;\n        color: white;\n        background-color: gray;\n        border-radius: 5px;\n        padding: 5px;\n        margin-top: 2px;\n    }\n    .input{\n        font-size: 0.9rem;\n        font-weight: bold;\n        cursor: pointer;\n    }\n    .delete{\n        float: right;\n        border-radius: 5px;\n        border: none;\n        cursor: pointer;\n    }\n"]))),y=function(n){var e=n.history,r=n.setHistory,t=n.getUser;return Object(u.jsx)(w,{children:Object(u.jsx)("div",{className:"history-wrapper",children:null===e||void 0===e?void 0:e.map((function(n,i){return Object(u.jsxs)("div",{className:"history",children:[Object(u.jsx)("span",{className:"input",onClick:function(){t(n)},children:n}),Object(u.jsx)("button",{className:"delete",onClick:function(){return function(n){var t=e.filter((function(e,r){return r!==n}));localStorage.setItem("history",t),r(t)}(i)},children:"X"})]},i)}))})})};var k,S=l.a.div(O||(O=Object(d.a)(["\n  input {\n    width: 320px;\n    height: 57px;\n    border: 8px solid rgba(105, 105, 105, 0.5);\n    border-radius: 20px;\n    background-color: rgb(36, 39, 43);\n    color: rgb(229, 230, 231);\n    outline: none;\n    padding: 1rem;\n    \n  }\n"]))),I=function(n){var e=n.setUserInfo,r=n.setCardOpen,t=n.loading,o=Object(i.useState)(""),c=Object(s.a)(o,2),a=c[0],d=c[1],l=Object(i.useState)(localStorage.getItem("history")?localStorage.getItem("history").split(","):[]),b=Object(s.a)(l,2),p=b[0],h=b[1];function g(n){return f.apply(this,arguments)}function f(){return f=Object(m.a)(j.a.mark((function n(i){var o,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(!0),n.prev=1,n.next=4,v.a.get("https://api.github.com/users/".concat(i));case 4:o=n.sent,c=o.data,e(c),r(!0),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),e("error"),r(!1);case 14:d(""),O(i),t(!1);case 17:case"end":return n.stop()}}),n,null,[[1,10]])}))),f.apply(this,arguments)}function O(n){var e=Object(x.a)(p);e.includes(n)||(e.length>=3&&e.pop(),e.unshift(n)),localStorage.setItem("history",e),h(e)}return Object(u.jsxs)(S,{children:[Object(u.jsx)("form",{onSubmit:function(n){return function(n){n.preventDefault(),g(a)}(n)},children:Object(u.jsx)("input",{placeholder:"GitHub \ud504\ub85c\ud544\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",value:a||"",onChange:function(n){return d(n.target.value)}})}),Object(u.jsx)(y,{history:p,setHistory:h,getUser:g})]})};var N,C=l.a.div(k||(k=Object(d.a)(["\n  width: 390px;\n  height: 450px;\n  background-color: rgb(44, 48, 53);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 1.5rem;\n  border-radius: 10px;\n  .close {\n    width: 80px;\n    height: 40px;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(36, 39, 43);\n    color: white;\n    outline: none;\n    position: absolute;\n    right: 10px;\n    top:10px;\n    cursor: pointer;\n  }\n  .card-image{\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    margin-top: 30px;\n  }\n  .user-id{color: whitesmoke; margin: 30px;}\n  .visit{\n    color: mediumspringgreen;\n    text-decoration: none;\n    // margin: 15px;\n    border: 1px solid mediumspringgreen;\n    padding: 1rem;\n    border-radius: 10px;\n  }\n  .visit:hover{\n    background-color: mediumspringgreen;\n    color: black;\n  }\n  .github-info-con{\n    width : 100%;\n    height: 60px;\n    display: flex;\n    justify-content: space-between;\n    margin-top: auto; \n\n    div:nth-child(1) {border-bottom-left-radius: 10px;}\n    div:nth-child(3) {border-bottom-right-radius: 10px;}\n  }\n  .github-info-con div{\n    width: 100px;\n    background-color: rgb(36, 39, 43);\n    color: whitesmoke;\n    text-align: center;\n    padding: 10px 0;\n    font-weight: bold;\n  }\n"]))),F=function(n){var e=n.userInfo,r=n.setCardOpen;return Object(u.jsxs)(C,{children:[Object(u.jsx)("button",{className:"close",onClick:function(){return r(!1)},children:"\ub2eb\uae30"}),Object(u.jsx)("img",{className:"card-image",src:null===e||void 0===e?void 0:e.avatar_url,alt:"card"}),Object(u.jsx)("div",{className:"user-id",children:null===e||void 0===e?void 0:e.login}),Object(u.jsx)("a",{className:"visit",href:null===e||void 0===e?void 0:e.html_url,target:"_blank",rel:"noreferrer",children:"Visit Github"}),Object(u.jsxs)("div",{className:"github-info-con",children:[Object(u.jsxs)("div",{children:["Followers",Object(u.jsx)("br",{}),null===e||void 0===e?void 0:e.followers]}),Object(u.jsxs)("div",{children:["Following ",Object(u.jsx)("br",{}),null===e||void 0===e?void 0:e.following]}),Object(u.jsxs)("div",{children:["Repos ",Object(u.jsx)("br",{}),null===e||void 0===e?void 0:e.public_repos]})]})]})};var H=l.a.div(N||(N=Object(d.a)(["\n  width: 50px;\n  height: 50px;\n  border: 7px solid transparent;\n  border-top-color: whitesmoke;\n  border-radius: 50%;\n  margin-top: 30px;\n  animation: loading 800ms linear 0s infinite normal none; \n \n  @keyframes loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),U=function(){return Object(u.jsx)(H,{})};var _=function(){var n=Object(i.useState)(null),e=Object(s.a)(n,2),r=e[0],t=e[1],o=Object(i.useState)(!1),c=Object(s.a)(o,2),a=c[0],d=c[1],l=Object(i.useState)(!1),b=Object(s.a)(l,2),p=b[0],g=b[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(h,{children:[Object(u.jsx)("header",{children:"GitHub Profile Finder"}),Object(u.jsx)(I,{setUserInfo:t,setCardOpen:d,loading:g}),p?Object(u.jsx)(U,{}):"error"===r?Object(u.jsx)("div",{style:{color:"whitesmoke",margin:"1.5rem"},children:"\uc0ac\uc6a9\uc790\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}):a&&Object(u.jsx)(F,{userInfo:r,setCardOpen:d})]})})};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.e7a7552f.chunk.js.map