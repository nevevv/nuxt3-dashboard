import{u as p,_ as i}from"./GET_REQUESTS.6e0113c4.js";import{a as m,r as l,B as f,f as _,h as t,t as n,c as h,D as g,o as a}from"./entry.de36398c.js";import{u as k}from"./cookie.34c9a6f3.js";const v={setup(){const r=p(),s=l(!0),o=l([]),e=async()=>{const c={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+k("token").value}};r.getRequest(`users/${g().params.id}/show`,c,u=>{o.value=u.data,s.value=!1})};return f(()=>{e()}),{userArr:o,loading:s}},components:{Loader:i}},y={key:0,class:"singleUsersPage"};function A(r,s,o,e,c,u){const d=i;return a(),_("div",null,[e.loading?(a(),h(d,{key:1})):(a(),_("div",y,[t("h5",null,"ID: "+n(e.userArr.id),1),t("h6",null,"Name: "+n(e.userArr.full_name),1),t("h6",null,"Username: "+n(e.userArr.login),1)]))])}const R=m(v,[["render",A]]);export{R as default};
