import{u as p,_ as i}from"./GET_REQUESTS.fea82bf3.js";import{a as f,r as u,D as m,f as _,h as s,t,c as h,H as v,o as n}from"./entry.e169430c.js";import{u as y}from"./cookie.15737df0.js";const g={setup(){const r=p(),o=u(!0),a=u([]),e=async()=>{const l={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+y("token").value}};r.getRequest(`service-fields/${v().params.id}/show`,l,c=>{a.value=c.data,o.value=!1})};return m(()=>{e()}),{userArr:a,loading:o}},components:{Loader:i}},k={key:0,class:"singleUsersPage"};function A(r,o,a,e,l,c){const d=i;return n(),_("div",null,[e.loading?(n(),h(d,{key:1})):(n(),_("div",k,[s("h5",null,"ID: "+t(e.userArr.id),1),s("h6",null,"name: "+t(e.userArr.name),1),s("h6",null,"default_value: "+t(e.userArr.default_value),1),s("h6",null,"field_type_id: "+t(e.userArr.field_type_id),1)]))])}const R=f(g,[["render",A]]);export{R as default};