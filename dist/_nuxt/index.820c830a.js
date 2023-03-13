import{M as k,_ as g,a as b}from"./Actions.f4f144c7.js";import{u as P,_ as v}from"./GET_REQUESTS.358673ba.js";import{_ as f}from"./Pagination.f8935cb8.js";import{a as N,r as u,B as C,f as a,s as o,h as t,F as L,x as A,c as B,y as D,o as n,t as i,z as V}from"./entry.79f9e98a.js";import{u as q}from"./cookie.f4052aae.js";import{H as F}from"./Head.1df896f5.js";import"./POST_REQUESTS.6a693605.js";import"./index.fe5935d6.js";const H={setup(){const r="permissions",p=P(),c=u([]),e=u(!0),h=u(1),l=_=>{e.value=!0;const d={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+q("token").value}};p.getRequest(`${r}?list_type=pagination&page=${_}`,d,m=>{c.value=m.data,e.value=!1})};return C(()=>{l(h.value)}),{getUsersData:l,usersList:c,loading:e,api_url:r}},components:{HeadVue:F,Modal:k,Loader:v,Actions:g,CreateNew:b,Pagination:f}},S={class:"programs__page"},w={class:"main__programs-content"},M={class:"main__programs-content"},R={class:"users-content-head"},j=t("h3",{class:"users-content-title"},"All Permissions",-1),z={class:"main__programs-content-block mb-5"},U=D('<div class="main__content-block-head"><h3 class="main__block-head-title"> Permissions List </h3><div class="main__block-head-item"><div class="main__block-head-input"><i class="bi bi-search"></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div><div style="display:flex;gap:12px;"><button><i class="bi bi-funnel"></i> Filter </button><button><i class="bi bi-calendar"></i> Filter </button></div></div></div>',1),E={key:0},G=t("thead",null,[t("tr",null,[t("th",{class:"th"},"ID"),t("th",{class:"th"},"Name"),t("th",{class:"th"},"Display Name"),t("th",{class:"th"},"Description"),t("th",{class:"th"},"Action")])],-1),I={style:{width:"7%"}};function O(r,p,c,e,h,l){const _=V("HeadVue"),d=b,m=g,y=v,x=f;return n(),a("section",S,[o(_,{text:"Permissions",subtitle:"/ Permissions list"}),t("div",w,[t("div",M,[t("div",R,[j,o(d,{modalName:"permission",fields:["name","display_name","description"],url:e.api_url},null,8,["url"])])]),t("div",z,[U,e.loading?(n(),B(y,{key:1})):(n(),a("table",E,[G,t("tbody",null,[(n(!0),a(L,null,A(e.usersList.data,s=>(n(),a("tr",{key:s.id},[t("td",null,i(s.id),1),t("td",null,i(s.name),1),t("td",null,i(s.display_name),1),t("td",null,i(s.description),1),t("td",I,[o(m,{list:s,fields:["name","display_name","description"],url:e.api_url},null,8,["list","url"])])]))),128))])])),o(x,{arr:e.usersList,onPageChange:e.getUsersData},null,8,["arr","onPageChange"])])])])}const $=N(H,[["render",O]]);export{$ as default};