import{a as g,o as s,f as o,h as t,F as _,z as u,y as p,H as h,c as m,I as f,K as n,j as y,J as C,t as b,D as L,N as B}from"./entry.07508c0e.js";import{u as x}from"./index.5aa9b526.js";import"./cookie.cd26d598.js";const S=""+new URL("favicon.b3739caa.webp",import.meta.url).href;const M={setup(){return{store:x()}},data(){return{child:!1,links:[{title:"Dashboard",to:"/",icons:"bi bi-grid-fill"},{title:"Permissions",to:"/permissions",icons:"bi bi-grid"},{title:"Users",to:"/users",icons:"bi bi-people"},{title:"Roles",to:"/roles",icons:"bi bi-person-plus-fill"},{title:"Fields Types List",to:"/field_types",icons:"bi bi-chat-dots"},{title:"Data Export",to:"/data",icons:"bi bi-download"},{title:"Options",to:"/options",icons:"bi bi-gear",children:[{title:"Settings",to:"/settings"}]},{title:"Services",to:"/services",icons:"bi bi-calendar"},{title:"Course Managements",to:"/course",icons:"bi bi-bookmark-fill"}]}},methods:{closeMenu(){this.store.activeSidebar=!this.store.activeSidebar},showChild(r){r.children?this.child=!0:this.child=!1}}},N=t("div",{class:"header__nav-logo"},[t("img",{src:S,alt:""})],-1),V={class:"header__nav-list"},D={key:0},T=t("div",{class:"header__nav-logo"},[t("img",{src:S,alt:"",class:"header__nav-logo",style:{"margin-left":"20px"}})],-1),$={class:"header__nav-list"},F={class:"header__nav-blocks-item"},z=t("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"},null,-1),E=[z];function P(r,c,w,i,d,v){const l=C;return s(),o(_,null,[t("nav",{class:n(["header__nav",{active:!i.store.activeSidebar}])},[N,t("ul",V,[(s(!0),o(_,null,u(d.links,e=>(s(),o(_,{key:e.id},[p(l,{to:e.to,class:"header__nav-blocks","exact-active-class":"active",onClick:a=>v.showChild(e)},{default:h(()=>[t("div",{class:n(["header__nav-blocks-item",{active:!i.store.activeSidebar}])},[t("i",{class:n(e.icons)},null,2),i.store.activeSidebar?(s(),o("p",D,b(e.title),1)):f("",!0)],2)]),_:2},1032,["to","onClick"]),(s(!0),o(_,null,u(e.children,a=>(s(),o("div",{key:a.title},[a?(s(),m(l,{key:0,to:`${e.to}${a.to}`,class:"header__nav-child","exact-active-class":"active"},{default:h(()=>[L(b(a.title),1)]),_:2},1032,["to"])):f("",!0)]))),128))],64))),128))])],2),t("nav",{class:n(["header__nav nav-mob",{active:!i.store.activeSidebar}])},[T,t("div",$,[(s(!0),o(_,null,u(d.links,e=>(s(),m(l,{to:e.to,key:e.id,class:"header__nav-blocks","active-class":"active",onClick:c[0]||(c[0]=y(a=>v.closeMenu(),["prevent"]))},{default:h(()=>[t("div",F,[t("i",{class:n(e.icons)},null,2),t("p",null,b(e.title),1)])]),_:2},1032,["to"]))),128)),(s(),o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",onClick:c[1]||(c[1]=(...e)=>i.store.sideToggle&&i.store.sideToggle(...e)),class:"bi bi-x-lg closeButton",viewBox:"0 0 16 16"},E))])],2)],64)}const k=g(M,[["render",P]]),R={setup(){return{store:x()}},components:{SidebarVue:k}};function U(r,c,w,i,d,v){const l=k,e=B;return s(),o("div",{class:n(["header",{hidden:!i.store.activeSidebar}])},[p(l),p(e)],2)}const J=g(R,[["render",U]]);export{J as default};
