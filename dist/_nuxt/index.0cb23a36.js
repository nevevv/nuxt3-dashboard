import{_ as v}from"./Search.38dd5720.js";import{u as k,_ as h}from"./GET_REQUESTS.427526b5.js";import{a as x,r as l,C as b,f as a,y as p,h as e,F as B,z as F,c as L,o as s,t as u,p as I,l as S,B as V}from"./entry.d7d972f8.js";import{u as q}from"./cookie.1d60285c.js";import{H as m}from"./Head.bb06a6fe.js";import"./index.2d867956.js";import"./POST_REQUESTS.1b833dc9.js";const C={components:{HeadVue:m},setup(){const t=k(),n=l([]),c=l(!0),o=async()=>{const r={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+q("token").value}};t.getRequest("field-types",r,i=>{n.value=i.data.data,c.value=!1})};return b(()=>{o()}),{dataList:n,loading:c}},components:{HeadVue:m,Loader:h}},d=t=>(I("data-v-5f7e9c03"),t=t(),S(),t),H={class:"programs__page"},D={class:"main__programs-content"},N=d(()=>e("div",{class:"users-content-head"},[e("h3",{class:"users-content-title"},"Fields Types")],-1)),R={class:"main__programs-content-block"},T={class:"main__content-block-head"},j=d(()=>e("h3",{class:"main__block-head-title"},"Fields Types List",-1)),z={key:0},A=d(()=>e("thead",null,[e("tr",null,[e("th",{class:"th"},"ID"),e("th",{class:"th"},"Name")])],-1));function $(t,n,c,o,r,i){const f=V("HeadVue"),y=v,g=h;return s(),a("section",H,[p(f,{text:"Fields Types",subtitle:"/ Fields"}),e("div",D,[N,e("div",R,[e("div",T,[j,p(y)]),o.loading?(s(),L(g,{key:1})):(s(),a("table",z,[A,e("tbody",null,[(s(!0),a(B,null,F(o.dataList,_=>(s(),a("tr",{key:_.id},[e("td",null,u(_.id),1),e("td",null,u(_.name),1)]))),128))])]))])])])}const P=x(C,[["render",$],["__scopeId","data-v-5f7e9c03"]]);export{P as default};
