import{M as y,_ as v,a as b}from"./Actions.5a269d6e.js";import{u as k,_ as f}from"./GET_REQUESTS.a1a9bcf6.js";import{a as x,r as m,B as N,f as l,s as u,h as s,F as L,x as P,c as A,t,y as B,o as i,z as V}from"./entry.0cb68092.js";import{u as C}from"./cookie.ac068b8c.js";import{H as D}from"./Head.7e87665d.js";import"./POST_REQUESTS.13e70c71.js";import"./index.98182563.js";const q={setup(){const c="permissions",h=k(),r=m([]),e=m(!0),g=m(1),o=async n=>{const d={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+C("token").value}};h.getRequest(`${c}?list_type=pagination&page=${n}`,d,p=>{r.value=p.data,e.value=!1})},_=n=>{o(n.target.value)};return N(()=>{e.value=!0,o(g.value),e.value=!0}),{getUsersData:o,usersList:r,loading:e,api_url:c,changePage:_}},components:{HeadVue:D,Modal:y,Loader:f,Actions:v,CreateNew:b}},F={class:"programs__page"},H={class:"main__programs-content"},S={class:"main__programs-content"},w={class:"users-content-head"},M=s("h3",{class:"users-content-title"},"All Permissions",-1),R={class:"main__programs-content-block mb-5"},j=B('<div class="main__content-block-head"><h3 class="main__block-head-title"> Permissions List </h3><div class="main__block-head-item"><div class="main__block-head-input"><i class="bi bi-search"></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div><div style="display:flex;gap:12px;"><button><i class="bi bi-funnel"></i> Filter </button><button><i class="bi bi-calendar"></i> Filter </button></div></div></div>',1),z={key:0},E=s("thead",null,[s("tr",null,[s("th",{class:"th"},"ID"),s("th",{class:"th"},"Name"),s("th",{class:"th"},"Display Name"),s("th",{class:"th"},"Description"),s("th",{class:"th"},"Action")])],-1),G={style:{width:"16%"}},I={class:"main__programs-sub"},O={class:"main__programs-sub-item"},U=s("nav",{"aria-label":"Page navigation example"},[s("ul",{class:"pagination","total-items":"1000","items-per-page":"10"},[s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#","aria-label":"Previous"},[s("span",{"aria-hidden":"true"},"\xAB"),s("span",{class:"sr-only"})])]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"1")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"2")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#"},"3")]),s("li",{class:"page-item"},[s("a",{class:"page-link",href:"#","aria-label":"Next"},[s("span",{"aria-hidden":"true"},"\xBB"),s("span",{class:"sr-only"})])])])],-1);function J(c,h,r,e,g,o){const _=V("HeadVue"),n=b,d=v,p=f;return i(),l("section",F,[u(_,{text:"Permissions",subtitle:"/ Permissions list"}),s("div",H,[s("div",S,[s("div",w,[M,u(n,{modalName:"permission",fields:["name","display_name","description"],url:e.api_url},null,8,["url"])])]),s("div",R,[j,e.loading?(i(),A(p,{key:1})):(i(),l("table",z,[E,s("tbody",null,[(i(!0),l(L,null,P(e.usersList.data,a=>(i(),l("tr",{key:a.id},[s("td",null,t(a.id),1),s("td",null,t(a.name),1),s("td",null,t(a.display_name),1),s("td",null,t(a.description),1),s("td",G,[u(d,{list:a,fields:["name","display_name","description"],url:e.api_url},null,8,["list","url"])])]))),128))])])),s("div",I,[s("div",O,[s("p",null,t(e.usersList.to)+" of "+t(e.usersList.total)+" items",1)]),U])])])])}const $=x(q,[["render",J]]);export{$ as default};