import{_ as m,a as h}from"./Actions.157496b5.js";import{u as k,_ as f}from"./GET_REQUESTS.909cc5c6.js";import{a as x,r as p,B as S,f as n,s as l,h as e,F as A,x as N,c as V,y as B,o,t as c,p as F,j as I,z as C}from"./entry.cc575467.js";import{u as D}from"./cookie.a478a7c9.js";import{H as L}from"./Head.5fe21d4c.js";import"./POST_REQUESTS.fbf4c081.js";import"./index.c8575ce5.js";const q={name:"page",setup(){const t="service-fields",r=k(),d=p([]),a=p(!0),_=async()=>{const u={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+D("token").value}};r.getRequest(t,u,i=>{d.value=i.data,a.value=!1})};return S(()=>{_()}),{usersList:d,loading:a,api_url:t}},components:{HeadVue:L,Loader:f,Actions:m,CreateNew:h}},v=t=>(F("data-v-dfaa2567"),t=t(),I(),t),w={class:"programs__page"},H={class:"main__programs-content"},R={class:"users-content-head"},j=v(()=>e("h3",{class:"users-content-title"},"All Service",-1)),z={class:"main__programs-content-block"},E=B('<div class="main__content-block-head" data-v-dfaa2567><h3 class="main__block-head-title" data-v-dfaa2567>All Roles</h3><div class="main__block-head-item" data-v-dfaa2567><div class="main__block-head-input" data-v-dfaa2567><i class="bi bi-search" data-v-dfaa2567></i><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-v-dfaa2567></div><button data-v-dfaa2567><i class="bi bi-funnel" data-v-dfaa2567></i> Filter </button><button data-v-dfaa2567><i class="bi bi-calendar" data-v-dfaa2567></i> Filter </button></div></div>',1),G={key:0},M=v(()=>e("thead",null,[e("tr",null,[e("th",{class:"th"},"ID"),e("th",{class:"th"},"Name"),e("th",{class:"th"},"Default Value"),e("th",{class:"th"},"Field type ID"),e("th",{class:"th"},"Action")])],-1)),O={style:{width:"16%"}};function U(t,r,d,a,_,u){const i=C("HeadVue"),b=h,y=m,g=f;return o(),n("section",w,[l(i,{text:"Service Field",subtitle:"/ Service"}),e("div",H,[e("div",R,[j,l(b,{modalName:"service",fields:["name","field_type_id"],url:a.api_url},null,8,["url"])]),e("div",z,[E,a.loading?(o(),V(g,{key:1})):(o(),n("table",G,[M,e("tbody",null,[(o(!0),n(A,null,N(a.usersList,s=>(o(),n("tr",{key:s.id},[e("td",null,c(s.id),1),e("td",null,c(s.name),1),e("td",null,c(s.default_value),1),e("td",null,c(s.field_type_id),1),e("td",O,[l(y,{list:s,fields:["name","default_value","field_type_id"],url:a.api_url},null,8,["list","url"])])]))),128))])]))])])])}const Y=x(q,[["render",U],["__scopeId","data-v-dfaa2567"]]);export{Y as default};
