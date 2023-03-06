import{M as k,_ as v,a as g}from"./Actions.f4f144c7.js";import{u as x,_ as y}from"./GET_REQUESTS.358673ba.js";import{_ as z}from"./Pagination.f8935cb8.js";import{a as S,r as m,B as N,f as n,s as c,h as e,F as C,x as L,c as A,y as B,o as a,t as o,z as D}from"./entry.79f9e98a.js";import{u as P}from"./cookie.f4052aae.js";import{H as V}from"./Head.1df896f5.js";import"./POST_REQUESTS.6a693605.js";import"./index.fe5935d6.js";const q={setup(){const r="services",h=x(),l=m([]),s=m(!0),_=m(1),i=d=>{s.value=!0;const u={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+P("token").value}};h.getRequest(`${r}?list_type=pagination&page=${d}`,u,p=>{l.value=p.data,s.value=!1,i(_.value)})};return N(()=>{i(_.value)}),{getUsersData:i,usersList:l,loading:s,api_url:r}},components:{HeadVue:V,Modal:k,Loader:y,Actions:v,CreateNew:g}},F={class:"programs__page"},H={class:"main__programs-content"},w={class:"main__programs-content"},M={class:"users-content-head"},R=e("h3",{class:"users-content-title"},"All Services",-1),j={class:"main__programs-content-block mb-5"},U=B('<div class="main__content-block-head"><h3 class="main__block-head-title"> Services List </h3><div class="main__block-head-item"><div class="main__block-head-input"><i class="bi bi-search"></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div><div style="display:flex;gap:12px;"><button><i class="bi bi-funnel"></i> Filter </button><button><i class="bi bi-calendar"></i> Filter </button></div></div></div>',1),E={key:0},G=e("thead",null,[e("tr",null,[e("th",{class:"th"},"ID"),e("th",{class:"th"},"Name"),e("th",{class:"th"},"Description"),e("th",{class:"th"},"Price"),e("th",{class:"th"},"Size1"),e("th",{class:"th"},"Size"),e("th",{class:"th"},"Display Name"),e("th",{class:"th"},"Action")])],-1),I={key:0},O={key:1},J={key:2},K={key:3},Q={style:{width:"16%"}};function T(r,h,l,s,_,i){const d=D("HeadVue"),u=g,p=v,b=y,f=z;return a(),n("section",F,[c(d,{text:"Permissions",subtitle:"/ Services list"}),e("div",H,[e("div",w,[e("div",M,[R,c(u,{modalName:"service",fields:["name","description","price","size","display_name"],url:s.api_url},null,8,["url"])])]),e("div",j,[U,s.loading?(a(),A(b,{key:1})):(a(),n("table",E,[G,e("tbody",null,[(a(!0),n(C,null,L(s.usersList.data,t=>(a(),n("tr",{key:t.id},[e("td",null,o(t.id),1),e("td",null,o(t.name),1),e("td",null,o(t.description),1),e("td",null,o(t.price),1),t.size1?(a(),n("td",I,o(t.size1),1)):(a(),n("td",O,"null")),t.size?(a(),n("td",J,o(t.size),1)):(a(),n("td",K,"null")),e("td",null,o(t.display_name),1),e("td",Q,[c(p,{list:t,fields:["name","description","price","display_name","size"],url:s.api_url},null,8,["list","url"])])]))),128))])])),c(f,{arr:s.usersList,onPageChange:s.getUsersData},null,8,["arr","onPageChange"])])])])}const ae=S(q,[["render",T]]);export{ae as default};
