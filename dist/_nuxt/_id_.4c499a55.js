import{_ as j}from"./HeadVue.02c42a3b.js";import{_ as N}from"./Loader.ce1f7a85.js";import{_ as $,r,b as A,c as v,k as h,a as s,t as i,u as o,a4 as B,w as O,e as V,Q as z,f as C,d as U,z as p,o as d,n as D}from"./entry.c60b3006.js";import{u as c}from"./cookie.6bf8de49.js";import{u as E}from"./GET_REQUESTS.cd5f1bde.js";import{u as P}from"./POST_REQUESTS.186e5882.js";import{s as T}from"./vue-multiselect.esm.2f74a6bf.js";import"./index.ab3166c5.js";const M={class:"d-flex flex-column w-100"},S={class:"fs-3 createNew-title pt-3"},F={class:"d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item"},G={class:"d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item h-auto"},H={style:{color:"red"},class:"d-flex w-100 text-danger"},I={class:"d-flex justify-content-start w-100"},L={__name:"[id]",setup(Q){const g=P(),u=E(),m=r(""),n=A({}),_=r(!0),b=r([]),f=r(),a=r(),w=()=>{const t={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+c("token").value}};u.getRequest(`roles/${p().params.id}/show`,t,e=>{Object.assign(n,e.data)})},y=()=>{const t={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+c("token").value}};u.getRequest("permissions",t,e=>{f.value=e.data.items,_.value=!1})},k=()=>{const t={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+c("token").value}};u.getRequest(`roles/${p().params.id}/show`,t,e=>{a.value=e.data.permissions})},q=async()=>{n.permissions=a.value.map(e=>b.value.push(e.id));const t={method:"POST",body:n,headers:{Authorization:"Bearer "+c("token").value}};g.postRequest(`roles/${p().params.id}/update`,t,e=>{e.success?D("/roles"):m.value=e.error.message})};return w(),y(),k(),(t,e)=>{const x=j,R=N;return d(),v("div",M,[h(x),s("p",S,i(t.$t("edit")),1),o(_)?(d(),U(R,{key:1})):(d(),v("form",{key:0,class:B(["createNew-form",{"h-50":o(a).length>5}])},[s("div",F,[s("label",null,i(t.$t("name")),1),O(s("input",{class:"w-100 h-100 createNew-form-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>o(n).name=l)},null,512),[[V,o(n).name]])]),s("div",G,[s("label",null,i(t.$t("role")),1),h(o(T),{options:o(f),modelValue:o(a),"onUpdate:modelValue":e[1]||(e[1]=l=>z(a)?a.value=l:null),value:o(a),multiple:!0,"hide-selected":!0,"track-by":"id",label:"name",placeholder:"Ruxsatlarni tanlang"},null,8,["options","modelValue","value"])]),s("p",H,i(o(m)),1),s("div",I,[s("button",{type:"submit",class:"btn btn-primary createNew-btn",onClick:e[2]||(e[2]=C(l=>q(),["prevent"]))},i(t.$t("create")),1)])],2))])}}},se=$(L,[["__scopeId","data-v-201d5d8b"]]);export{se as default};
