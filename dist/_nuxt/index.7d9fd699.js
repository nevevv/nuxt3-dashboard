import{_ as m,a as h}from"./Actions.79955c58.js";import{u as y,_ as f}from"./GET_REQUESTS.fad87908.js";import{a as x,r as p,B as A,f as n,s as r,h as t,F as N,x as S,c as w,y as B,o,t as i,p as L,j as V,z as C}from"./entry.7525e9fa.js";import{u as F}from"./cookie.c045175d.js";import{H as I}from"./Head.b2fb4ed3.js";import"./POST_REQUESTS.d5e17025.js";import"./index.ad2db2cb.js";const q={name:"page",setup(){const e="users",_=y(),c=p([]),a=p(!0),d=async()=>{const u={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+F("token").value}};_.getRequest(e,u,l=>{c.value=l.data,a.value=!1})};return A(()=>{d()}),{usersList:c,loading:a,api_url:e}},components:{HeadVue:I,Loader:f,Actions:m,CreateNew:h}},v=e=>(L("data-v-825fa099"),e=e(),V(),e),H={class:"programs__page"},U={class:"main__programs-content"},j={class:"users-content-head"},D=v(()=>t("h3",{class:"users-content-title"},"All users",-1)),R={class:"main__programs-content-block"},z=B('<div class="main__content-block-head" data-v-825fa099><h3 class="main__block-head-title" data-v-825fa099>All Users</h3><div class="main__block-head-item" data-v-825fa099><div class="main__block-head-input" data-v-825fa099><i class="bi bi-search" data-v-825fa099></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-v-825fa099></div><button data-v-825fa099><i class="bi bi-funnel" data-v-825fa099></i> Filter </button><button data-v-825fa099><i class="bi bi-calendar" data-v-825fa099></i> Filter </button></div></div>',1),E={key:0},G=v(()=>t("thead",null,[t("tr",null,[t("th",{class:"th"},"ID"),t("th",{class:"th"},"Full Name"),t("th",{class:"th"},"Login"),t("th",{class:"th"},"Action")])],-1)),M={style:{width:"16%"}};function O(e,_,c,a,d,u){const l=C("HeadVue"),b=h,g=m,k=f;return o(),n("section",H,[r(l,{text:"Users",subtitle:"/ Users"}),t("div",U,[t("div",j,[D,r(b,{modalName:"user",fields:["login","password","full_name","role[]"],url:a.api_url},null,8,["url"])]),t("div",R,[z,a.loading?(o(),w(k,{key:1})):(o(),n("table",E,[G,t("tbody",null,[(o(!0),n(N,null,S(a.usersList,s=>(o(),n("tr",{key:s.id},[t("td",null,i(s.id),1),t("td",null,i(s.full_name),1),t("td",null,i(s.login),1),t("td",M,[r(g,{list:s,fields:["login","password","full_name","role[]"],url:a.api_url},null,8,["list","url"])])]))),128))])]))])])])}const Y=x(q,[["render",O],["__scopeId","data-v-825fa099"]]);export{Y as default};