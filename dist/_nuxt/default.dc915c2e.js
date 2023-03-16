import{a as g,o as s,f as i,h as e,F as _,z as v,y as h,H as u,J as a,t as b,I as f,D as w,c as y,j as C,K as B,P as L}from"./entry.d7d972f8.js";import{u as x}from"./index.2d867956.js";import{_ as k}from"./favicon.4ba50764.js";import"./cookie.1d60285c.js";const M={setup(){return{store:x()}},data(){return{child:!1}},computed:{links(){return[{title:this.$t("dashboard"),to:"/",icons:"bi bi-grid-fill"},{title:this.$t("permissions"),to:"/permissions",icons:"bi bi-grid"},{title:this.$t("users"),to:"/users",icons:"bi bi-people"},{title:this.$t("role"),to:"/roles",icons:"bi bi-person-plus-fill"},{title:this.$t("fields_list"),to:"/field_types",icons:"bi bi-chat-dots"},{title:this.$t("export"),to:"/data",icons:"bi bi-download"},{title:this.$t("options"),to:"/options",icons:"bi bi-gear",children:[{title:this.$t("settings"),to:"/settings"}]},{title:this.$t("services"),to:"/services",icons:"bi bi-calendar"}]}},methods:{closeMenu(){this.store.activeSidebar=!this.store.activeSidebar},showChild(r){r.children?this.child=!0:this.child=!1}}},N=e("div",{class:"header__nav-logo"},[e("img",{src:k,alt:""})],-1),V={class:"header__nav-list"},T={key:0},z=e("div",{class:"header__nav-logo"},[e("img",{src:k,alt:"",class:"header__nav-logo",style:{"margin-left":"20px"}})],-1),D={class:"header__nav-list"},F={class:"header__nav-blocks-item"},P=e("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"},null,-1),j=[P];function E(r,n,$,o,m,c){const l=B;return s(),i(_,null,[e("nav",{class:a(["header__nav",{active:!o.store.activeSidebar}])},[N,e("ul",V,[(s(!0),i(_,null,v(c.links,(t,p)=>(s(),i(_,{key:p},[h(l,{to:t.to,class:"header__nav-blocks","exact-active-class":"active",onClick:d=>c.showChild(t)},{default:u(()=>[e("div",{class:a(["header__nav-blocks-item",{active:!o.store.activeSidebar}])},[e("i",{class:a(t.icons)},null,2),o.store.activeSidebar?(s(),i("p",T,b(t.title),1)):f("",!0)],2)]),_:2},1032,["to","onClick"]),m.child?(s(!0),i(_,{key:0},v(t.children,d=>(s(),i("div",{key:d.title},[h(l,{to:`${t.to}${d.to}`,class:"header__nav-child","exact-active-class":"active"},{default:u(()=>[w(b(d.title),1)]),_:2},1032,["to"])]))),128)):f("",!0)],64))),128))])],2),e("nav",{class:a(["header__nav nav-mob",{active:!o.store.activeSidebar}])},[z,e("div",D,[(s(!0),i(_,null,v(c.links,t=>(s(),y(l,{to:t.to,key:t.id,class:"header__nav-blocks","active-class":"active",onClick:n[0]||(n[0]=C(p=>c.closeMenu(),["prevent"]))},{default:u(()=>[e("div",F,[e("i",{class:a(t.icons)},null,2),e("p",null,b(t.title),1)])]),_:2},1032,["to"]))),128)),(s(),i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",onClick:n[1]||(n[1]=(...t)=>o.store.sideToggle&&o.store.sideToggle(...t)),class:"bi bi-x-lg closeButton",viewBox:"0 0 16 16"},j))])],2)],64)}const S=g(M,[["render",E]]),H={setup(){return{store:x()}},components:{SidebarVue:S}};function I(r,n,$,o,m,c){const l=S,t=L;return s(),i("div",{class:a(["header",{hidden:!o.store.activeSidebar}])},[h(l),h(t)],2)}const A=g(H,[["render",I]]);export{A as default};
