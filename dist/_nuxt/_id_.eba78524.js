import{u as M,_ as D}from"./GET_REQUESTS.fea82bf3.js";import{a as H,r as s,D as z,f as d,y as V,h as r,t as m,c as S,J as T,F as k,E as F,j as L,H as q,k as P,o as l,w as O,i as A,A as N}from"./entry.e169430c.js";import{u as w}from"./cookie.15737df0.js";import{u as G}from"./POST_REQUESTS.76d2b8df.js";import{H as I}from"./Head.f247d694.js";import{s as J}from"./vue-multiselect.esm.6065e928.js";import"./index.2f476a7c.js";const K={setup(){const p=G(),i=M(),g=s(""),e=s([]),_=s([]),h=s(!0),f=s([]),y=s(""),v=s(""),t=s([]),a=s(""),x=s(),b=s([]),j=s([]),E=()=>{const n={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+w("token").value}};i.getRequest(`users/${q().params.id}/edit`,n,o=>{o.data.roles.forEach(c=>{b.value.push({title:c.display_name,id:c.id})}),_.value=Object.keys(o.data),h.value=!1,f.value=o.data,e.value.full_name=o.data.full_name,e.value.login=o.data.login})},R=()=>{const n={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+w("token").value}};i.getRequest("roles",n,o=>{t.value=o.data,o.data.data.forEach(c=>{j.value.push({title:c.display_name,id:c.id})})})},B=n=>{v.value=n.id},C=()=>{const n=[];_.value.forEach(u=>{n[u]=e.value[u]});let{...o}=n;const c=b.value.map(u=>u.id);o.roles=c;const U={method:"POST",body:o,headers:{Authorization:"Bearer "+w("token").value}};p.postRequest(`users/${q().params.id}/update`,U,u=>{u.success?P("/users"):a.value=u.message})};return z(()=>{E(),R()}),{requestError:g,fieldsObj:e,fields:_,loading:h,arr:f,select:y,selectId:v,permissionsArr:t,changeSelect:B,editUser:C,editError:a,editCurrentArray:x,options:j,value:b}},components:{HeadVue:I,Multiselect:J}},Q={class:"d-flex flex-column w-100"},W={class:"fs-3 createNew-title pt-3"},X={class:"createNew-form"},Y=["onUpdate:modelValue"],Z=["onUpdate:modelValue"],$={class:"w-100"},ee={class:"text-danger"},te={class:"d-flex justify-content-start w-100"};function se(p,i,g,e,_,h){const f=N("HeadVue"),y=D,v=N("Multiselect");return l(),d("div",Q,[V(f),r("p",W,m(p.$t("edit")),1),r("form",X,[e.loading?(l(),S(y,{key:0})):T("",!0),(l(!0),d(k,null,F(e.fields,t=>(l(),d("div",{class:"d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item",key:t.id},[t!="roles"?(l(),d(k,{key:0},[r("label",null,m(p.$t(t)),1),t!="password"&&t!="password_confirmation"?O((l(),d("input",{key:0,class:"w-100 h-100 createNew-form-input",type:"text","onUpdate:modelValue":a=>e.fieldsObj[t]=a},null,8,Y)),[[A,e.fieldsObj[t]]]):O((l(),d("input",{key:1,class:"w-100 h-100 createNew-form-input",type:"password","onUpdate:modelValue":a=>e.fieldsObj[t]=a},null,8,Z)),[[A,e.fieldsObj[t]]])],64)):(l(),d(k,{key:1},[r("label",null,m(p.$t(t)),1),V(v,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),options:e.options,multiple:!0,"hide-selected":!0,"track-by":"id",label:"title",class:"pointer-event"},null,8,["modelValue","options"])],64))]))),128)),r("div",$,[r("p",ee,m(e.editError),1)]),r("div",te,[r("button",{type:"submit",class:"btn btn-primary createNew-btn",onClick:i[1]||(i[1]=L(t=>e.editUser(),["prevent"]))},m(p.$t("perform")),1)])])])}const ue=H(K,[["render",se]]);export{ue as default};