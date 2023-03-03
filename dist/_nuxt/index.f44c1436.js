import{M as k,_ as v,a as g}from"./Actions.79955c58.js";import{u as x,_ as y}from"./GET_REQUESTS.fad87908.js";import{_ as z}from"./Pagination.6cc8877a.js";import{a as S,r as p,B as N,f as a,s as i,h as e,F as C,x as L,c as A,y as B,o as n,t as o,z as D}from"./entry.7525e9fa.js";import{u as P}from"./cookie.c045175d.js";import{H as V}from"./Head.b2fb4ed3.js";import"./POST_REQUESTS.d5e17025.js";import"./index.ad2db2cb.js";const q={setup(){const c="services",m=x(),r=p([]),s=p(!0),h=p(1),l=_=>{s.value=!0;const d={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+P("token").value}};m.getRequest(`${c}?list_type=pagination&page=${_}`,d,u=>{r.value=u.data,s.value=!1})};return N(()=>{l(h.value)}),{getUsersData:l,usersList:r,loading:s,api_url:c}},components:{HeadVue:V,Modal:k,Loader:y,Actions:v,CreateNew:g}},F={class:"programs__page"},H={class:"main__programs-content"},w={class:"main__programs-content"},M={class:"users-content-head"},R=e("h3",{class:"users-content-title"},"All Services",-1),j={class:"main__programs-content-block mb-5"},U=B('<div class="main__content-block-head"><h3 class="main__block-head-title"> Services List </h3><div class="main__block-head-item"><div class="main__block-head-input"><i class="bi bi-search"></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div><div style="display:flex;gap:12px;"><button><i class="bi bi-funnel"></i> Filter </button><button><i class="bi bi-calendar"></i> Filter </button></div></div></div>',1),E={key:0},G=e("thead",null,[e("tr",null,[e("th",{class:"th"},"ID"),e("th",{class:"th"},"Name"),e("th",{class:"th"},"Description"),e("th",{class:"th"},"Price"),e("th",{class:"th"},"Size1"),e("th",{class:"th"},"Size"),e("th",{class:"th"},"Display Name"),e("th",{class:"th"},"Action")])],-1),I={key:0},O={key:1},J={key:2},K={key:3},Q={style:{width:"16%"}};function T(c,m,r,s,h,l){const _=D("HeadVue"),d=g,u=v,b=y,f=z;return n(),a("section",F,[i(_,{text:"Permissions",subtitle:"/ Services list"}),e("div",H,[e("div",w,[e("div",M,[R,i(d,{modalName:"service",fields:["name","description","price","size","display_name"],url:s.api_url},null,8,["url"])])]),e("div",j,[U,s.loading?(n(),A(b,{key:1})):(n(),a("table",E,[G,e("tbody",null,[(n(!0),a(C,null,L(s.usersList.data,t=>(n(),a("tr",{key:t.id},[e("td",null,o(t.id),1),e("td",null,o(t.name),1),e("td",null,o(t.description),1),e("td",null,o(t.price),1),t.size1?(n(),a("td",I,o(t.size1),1)):(n(),a("td",O,"null")),t.size?(n(),a("td",J,o(t.size),1)):(n(),a("td",K,"null")),e("td",null,o(t.display_name),1),e("td",Q,[i(u,{list:t,fields:["name","description","price","display_name","size"],url:s.api_url},null,8,["list","url"])])]))),128))])])),i(f,{arr:s.usersList,onPageChange:s.getUsersData},null,8,["arr","onPageChange"])])])])}const ne=S(q,[["render",T]]);export{ne as default};
