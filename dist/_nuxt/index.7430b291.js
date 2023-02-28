import{M as k,_ as f,a as v}from"./Actions.157496b5.js";import{u as y,_ as b}from"./GET_REQUESTS.909cc5c6.js";import{a as x,r as m,B as N,f as c,s as u,h as s,F as L,x as P,c as A,t,y as B,o as i,z as V}from"./entry.cc575467.js";import{u as C}from"./cookie.a478a7c9.js";import{H as D}from"./Head.5fe21d4c.js";import"./POST_REQUESTS.fbf4c081.js";import"./index.c8575ce5.js";const q={setup(){const r="permissions",h=y(),_=m([]),e=m(!0),g=m(1),o=async n=>{const p={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+C("token").value}};h.getRequest(`${r}?list_type=pagination&page=${n}`,p,l=>{_.value=l.data,e.value=!1,console.log(l.data)})},d=n=>{o(n.target.value)};return N(()=>{e.value=!0,o(g.value),e.value=!0}),{getUsersData:o,usersList:_,loading:e,api_url:r,changePage:d}},components:{HeadVue:D,Modal:k,Loader:b,Actions:f,CreateNew:v}},F={class:"programs__page"},H={class:"main__programs-content"},S={class:"main__programs-content"},w={class:"users-content-head"},M=s("h3",{class:"users-content-title"},"All Permissions",-1),R={class:"main__programs-content-block mb-5"},j=B('<div class="main__content-block-head"><h3 class="main__block-head-title"> Permissions List </h3><div class="main__block-head-item"><div class="main__block-head-input"><i class="bi bi-search"></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div><div style="display:flex;gap:12px;"><button><i class="bi bi-funnel"></i> Filter </button><button><i class="bi bi-calendar"></i> Filter </button></div></div></div>',1),z={key:0},E=s("thead",null,[s("tr",null,[s("th",{class:"th"},"ID"),s("th",{class:"th"},"Name"),s("th",{class:"th"},"Display Name"),s("th",{class:"th"},"Description"),s("th",{class:"th"},"Action")])],-1),G={style:{width:"16%"}},I={class:"main__programs-sub"},O={class:"main__programs-sub-item"},U=s("nav",{"aria-label":"Page navigation example"},[s("ul",{class:"pagination","total-items":"1000","items-per-page":"10"},[s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#","aria-label":"Previous"},[s("span",{"aria-hidden":"true"},"\xAB"),s("span",{class:"sr-only"})])]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"1")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"2")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"3")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"4")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"5")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"6")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#","aria-label":"Next"},[s("span",{"aria-hidden":"true"},"\xBB"),s("span",{class:"sr-only"})])])])],-1);function J(r,h,_,e,g,o){const d=V("HeadVue"),n=v,p=f,l=b;return i(),c("section",F,[u(d,{text:"Permissions",subtitle:"/ Permissions list"}),s("div",H,[s("div",S,[s("div",w,[M,u(n,{modalName:"permission",fields:["name","display_name","description"],url:e.api_url},null,8,["url"])])]),s("div",R,[j,e.loading?(i(),A(l,{key:1})):(i(),c("table",z,[E,s("tbody",null,[(i(!0),c(L,null,P(e.usersList.data,a=>(i(),c("tr",{key:a.id},[s("td",null,t(a.id),1),s("td",null,t(a.name),1),s("td",null,t(a.display_name),1),s("td",null,t(a.description),1),s("td",G,[u(p,{list:a,fields:["name","display_name","description"],url:e.api_url},null,8,["list","url"])])]))),128))])])),s("div",I,[s("div",O,[s("p",null,t(e.usersList.to)+" of "+t(e.usersList.total)+" items",1)]),U])])])])}const $=x(q,[["render",J]]);export{$ as default};
