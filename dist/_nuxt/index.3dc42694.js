import{_ as v}from"./Search.c2c260eb.js";import{u as k,_ as h}from"./GET_REQUESTS.fea82bf3.js";import{a as x,r as l,D as b,f as a,y as p,h as e,F,E as L,c as B,o as s,t as u,p as I,l as S,A as V}from"./entry.e169430c.js";import{u as q}from"./cookie.15737df0.js";import{H as m}from"./Head.f247d694.js";import"./index.2f476a7c.js";import"./POST_REQUESTS.76d2b8df.js";const D={components:{HeadVue:m},setup(){const t=k(),n=l([]),c=l(!0),o=async()=>{const r={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+q("token").value}};t.getRequest("field-types",r,i=>{n.value=i.data.data,c.value=!1})};return b(()=>{o()}),{dataList:n,loading:c}},components:{HeadVue:m,Loader:h}},d=t=>(I("data-v-5f7e9c03"),t=t(),S(),t),H={class:"programs__page"},A={class:"main__programs-content"},C=d(()=>e("div",{class:"users-content-head"},[e("h3",{class:"users-content-title"},"Fields Types")],-1)),N={class:"main__programs-content-block"},R={class:"main__content-block-head"},T=d(()=>e("h3",{class:"main__block-head-title"},"Fields Types List",-1)),j={key:0},E=d(()=>e("thead",null,[e("tr",null,[e("th",{class:"th"},"ID"),e("th",{class:"th"},"Name")])],-1));function $(t,n,c,o,r,i){const f=V("HeadVue"),y=v,g=h;return s(),a("section",H,[p(f,{text:"Fields Types",subtitle:"/ Fields"}),e("div",A,[C,e("div",N,[e("div",R,[T,p(y)]),o.loading?(s(),B(g,{key:1})):(s(),a("table",j,[E,e("tbody",null,[(s(!0),a(F,null,L(o.dataList,_=>(s(),a("tr",{key:_.id},[e("td",null,u(_.id),1),e("td",null,u(_.name),1)]))),128))])]))])])])}const P=x(D,[["render",$],["__scopeId","data-v-5f7e9c03"]]);export{P as default};
