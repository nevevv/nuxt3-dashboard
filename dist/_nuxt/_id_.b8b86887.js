import{u as D,_ as H}from"./GET_REQUESTS.fea82bf3.js";import{a as M,r as o,D as U,f as i,y as w,h as V,c as z,J as y,F as k,E as S,H as j,k as T,A as x,o as n,t as A,w as F,i as L}from"./entry.e169430c.js";import{u as g}from"./cookie.15737df0.js";import{u as P}from"./POST_REQUESTS.76d2b8df.js";import{H as $}from"./Head.f247d694.js";import{s as G}from"./vue-multiselect.esm.6065e928.js";import"./index.2f476a7c.js";const I={setup(){const u=P(),d=D(),b=o(""),t=o([]),p=o([]),f=o(!0),m=o([]),v=o(""),_=o(""),e=o([]),c=o(""),O=o(),h=o([]),q=o([]),R=()=>{const s={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token").value}};d.getRequest(`users/${j().params.id}/edit`,s,a=>{a.data.roles.forEach(r=>{h.value.push({title:r.display_name,id:r.id})}),p.value=Object.keys(a.data),f.value=!1,m.value=a.data,t.value.full_name=a.data.full_name,t.value.login=a.data.login})},B=()=>{const s={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token").value}};d.getRequest("roles",s,a=>{e.value=a.data,a.data.data.forEach(r=>{q.value.push({title:r.display_name,id:r.id})})})},E=s=>{_.value=s.id},C=()=>{const s=[];p.value.forEach(l=>{s[l]=t.value[l]});let{...a}=s;const r=h.value.map(l=>l.id);a.roles=r;const N={method:"POST",body:a,headers:{Authorization:"Bearer "+g("token").value}};u.postRequest(`users/${j().params.id}/update`,N,l=>{l.success?T("/users"):c.value=l.message})};return U(()=>{R(),B()}),{requestError:b,fieldsObj:t,fields:p,loading:f,arr:m,select:v,selectId:_,permissionsArr:e,changeSelect:E,editUser:C,editError:c,editCurrentArray:O,options:q,value:h}},components:{HeadVue:$,Multiselect:G}},J={class:"d-flex flex-column w-100"},K={class:"createNew-form"},Q={key:0},W=["onUpdate:modelValue"];function X(u,d,b,t,p,f){const m=x("HeadVue"),v=H,_=x("Multiselect");return n(),i("div",J,[w(m,{text:u.$t("user")},null,8,["text"]),V("form",K,[t.loading?(n(),z(v,{key:0})):y("",!0),(n(!0),i(k,null,S(t.fields,e=>(n(),i("div",{class:"d-flex flex-column align-items-start gap-2 mb-3 createNew-form-item",key:e.id},[e!="roles"?(n(),i(k,{key:0},[e!="password"&&e!="password_confirmation"?(n(),i("label",Q,A(u.$t(e)),1)):y("",!0),e!="password"&&e!="password_confirmation"?F((n(),i("input",{key:1,disabled:"",class:"w-100 h-100 createNew-form-input",type:"text","onUpdate:modelValue":c=>t.fieldsObj[e]=c},null,8,W)),[[L,t.fieldsObj[e]]]):y("",!0)],64)):(n(),i(k,{key:1},[V("label",null,A(u.$t(e)),1),w(_,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=c=>t.value=c),options:t.options,multiple:!0,"hide-selected":!0,"track-by":"id",label:"title"},null,8,["modelValue","options"])],64))]))),128))])])}const ne=M(I,[["render",X]]);export{ne as default};
