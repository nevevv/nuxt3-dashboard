import{_ as N}from"./HeadVue.02c42a3b.js";import{_ as R}from"./Loader.ce1f7a85.js";import{_ as b,r as c,c as i,k as B,a,t as u,u as n,F as $,A as V,f as z,d as A,z as m,o as r,a4 as C,l as O,w as T,e as j,n as D}from"./entry.c60b3006.js";import{u as l}from"./cookie.6bf8de49.js";import{u as F}from"./GET_REQUESTS.cd5f1bde.js";import{u as E}from"./POST_REQUESTS.186e5882.js";import"./index.ab3166c5.js";const L={class:"d-flex flex-column w-100"},M={class:"fs-3 createNew-title pt-3"},P={key:0,class:"createNew-form"},S=["onUpdate:modelValue"],U={style:{color:"red"},class:"d-flex w-100 text-danger"},G={class:"d-flex justify-content-start w-100"},H={__name:"[id]",setup(I){const f=E(),d=F(),p=c(""),_=c(!0),v=c([]),s=c([]),h=async()=>{const e={method:"POST",body:s.value,headers:{Authorization:"Bearer "+l("token").value}};f.postRequest(`services/${m().params.id}/update`,e,t=>{t.success?D("/services"):p.value=t.error.message})},g=()=>{const e={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+l("token").value}};d.getRequest("services/create",e,t=>{v.value=t.data,_.value=!1})},y=()=>{const e={headers:{Authorization:"Bearer "+l("token").value}};d.getRequest(`services/${m().params.id}/show`,e,t=>{s.value=t.data})};return g(),y(),(e,t)=>{const w=N,k=R;return r(),i("div",L,[B(w),a("p",M,u(e.$t("edit")),1),n(_)?(r(),A(k,{key:1})):(r(),i("form",P,[(r(!0),i($,null,V(n(s),(q,o)=>(r(),i("div",{class:C(["d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item",{"d-none":o==="id"}]),key:o},[O(u(e.$t(o))+" ",1),T(a("input",{type:"text",class:"w-100 h-100 createNew-form-input","onUpdate:modelValue":x=>n(s)[o]=x},null,8,S),[[j,n(s)[o]]])],2))),128)),a("p",U,u(n(p)),1),a("div",G,[a("button",{type:"submit",class:"btn btn-primary createNew-btn",onClick:t[0]||(t[0]=z(q=>h(),["prevent"]))},u(e.$t("create")),1)])]))])}}},ee=b(H,[["__scopeId","data-v-f7d0037f"]]);export{ee as default};
