(this["webpackJsonpCarl Portfolio"]=this["webpackJsonpCarl Portfolio"]||[]).push([[0],{26:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(7),i=s(1),a=s(0);const n=Object(i.createContext)(),l=e=>{let{children:t}=e;const[s,c]=Object(i.useState)("light");Object(i.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");c(e.matches?"dark":"light"),e.addEventListener("change",(e=>{c(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(n.Provider,{value:[{themeName:s,toggleTheme:()=>{const e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),c(e)}}],children:t})},r={homepage:"https://github.com/espi0054",title:"CE"},o={name:"Carl Espiritu",role:"Front End Developer",description:"I build modern, responsive websites and apps that focus on performance, usability, and clean design. With a strong foundation in both front-end and back-end development, I create solutions that not only look great but work seamlessly. Check out my projects and let's create something amazing together!",resume:"https://example.com",social:{linkedin:"https://ca.linkedin.com/in/carl-espiritu",github:"https://github.com/espi0054",medium:"https://github.com/silly-g00s"}},j=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],h=["HTML","CSS","JavaScript","TypeScript","React","Flutter","Swift","SASS","SASS","Material UI","Git","Figma","Photoshop","Illustrator"],b="cjespiritu802@gmail.com";var m=s(13),d=s.n(m),u=s(11),p=s.n(u),O=s(15),x=s.n(O),k=s(14),v=s.n(k);s(26);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(i.useContext)(n),[s,c]=Object(i.useState)(!1),l=()=>c(!s);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:s?"flex":null},className:"nav__list",children:[j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,h.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,b?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(a.jsx)(p.a,{}):Object(a.jsx)(d.a,{})}),Object(a.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:s?Object(a.jsx)(v.a,{}):Object(a.jsx)(x.a,{})})]})};s(30);var g=()=>{const{homepage:e,title:t}=r;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(f,{})]})},N=s(8),_=s.n(N),S=s(16),C=s.n(S),w=s(19);s(31);var y=()=>{const{name:e,role:t,description:s,resume:c,social:i}=o,n={fontSize:"1.5em"};return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:s&&s}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(_.a,{style:n})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(C.a,{style:n})}),i.medium&&Object(a.jsx)("a",{href:i.medium,"aria-label":"medium",className:"link link--icon",children:Object(a.jsx)(w.a,{style:n})})]})]})]})},P=s(6),E=s.n(P),A=s(17),I=s.n(A);s(33);var T=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},E()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(I.a,{})})]})};s(34);var q=()=>j.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(a.jsx)(T,{project:e},E()())))})]}):null;s(35);var R=()=>h.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:h.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())))})]}):null,F=s(18),L=s.n(F);s(36);var z=()=>{const[e,t]=Object(i.useState)(!1);return Object(i.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(L.a,{fontSize:"large"})})}):null};s(37);var J=()=>b?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:`mailto:${b}`,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;s(38);var M=()=>Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/espi0054",className:"link footer__link",children:"Created with \u2764 by Carl Espiritu"})});s(39);var V=()=>{const[{themeName:e}]=Object(i.useContext)(n);return Object(a.jsxs)("div",{id:"top",className:`${e} app`,children:[Object(a.jsx)(g,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(y,{}),Object(a.jsx)(q,{}),Object(a.jsx)(R,{}),Object(a.jsx)(J,{})]}),Object(a.jsx)(z,{}),Object(a.jsx)(M,{})]})};s(40);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e01554af.chunk.js.map