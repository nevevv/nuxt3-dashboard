import{_ as x}from"./HeadVue.02c42a3b.js";import{_ as b,r,B as k,c as v,k as i,a as t,q as y,u as o,d as l,s as B,o as a,l as D,t as R,p as q,g as I,C as p}from"./entry.c60b3006.js";import{_ as V}from"./Loader.ce1f7a85.js";import{_ as w}from"./tableVue.3e0ae0ca.js";import{u as C}from"./cookie.6bf8de49.js";import{u as S}from"./GET_REQUESTS.cd5f1bde.js";import"./index.ab3166c5.js";import"./POST_REQUESTS.186e5882.js";const A=e=>(q("data-v-4fee4154"),e=e(),I(),e),N={class:"programs__page"},$={class:"main__programs-content"},j={class:"users-content-head"},U=A(()=>t("h3",{class:"users-content-title"},"All Roles",-1)),z={class:"main__programs-content-block"},E={__name:"index",setup(e){const m=S(),n=r(),c=r(!0),d=k(()=>[{title:p().t("id"),prop:"id"},{title:p().t("name"),prop:"name"}]);return(async()=>{const s={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+C("token").value}};m.getRequest("roles",s,_=>{n.value=_.data,c.value=!1})})(),(s,_)=>{const u=x,f=B,g=V,h=w;return a(),v("section",N,[i(u,{text:"Roles",subtitle:"/ Roles"}),t("div",$,[t("div",j,[U,i(f,{to:"/roles/create_new",class:"main__programs-content-btn modalBtn"},{default:y(()=>[D(R(s.$t("create")),1)]),_:1})]),t("div",z,[o(c)?(a(),l(g,{key:0})):(a(),l(h,{key:1,style:{"margin-right":"15px","margin-left":"15px",width:"97%"},lables:o(d),tableData:o(n)},null,8,["lables","tableData"]))])])])}}},P=b(E,[["__scopeId","data-v-4fee4154"]]);export{P as default};