import{u as R,_ as h}from"./GET_REQUESTS.a1a9bcf6.js";import{a as k,b as w,r as m,e as D,f as g,h as o,t as b,w as f,v,c as x,i as I,o as d,p as q,j as T}from"./entry.0cb68092.js";import{u as E}from"./index.98182563.js";import{u as A,a as B}from"./POST_REQUESTS.13e70c71.js";import{_ as L,a as U}from"./logo-text.c5228760.js";import"./cookie.ac068b8c.js";const V={setup(){const a=A(),s=R(),c=B(),e=E(),p=w(),r=m(!1),i=m(""),t=D({login:"",password:""}),S=async()=>{const l={method:"POST",body:{login:t.login,password:t.password}};r.value=!0,a.postRequest("login",l,n=>{n.success?(i.value="",document.cookie=`token=${n.data.token}; max-age=3600`,y(n.data.token),I("/")):i.value=n.message,r.value=!1})},y=async l=>{const n={method:"GET",headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+l}};s.getRequest("users/me",n,u=>{document.cookie=`personName=${u.data.full_name}`,c.userName=u.data.full_name})};return{store:e,config:p,user:c,postRequest:a,error:i,userSendData:t,loading:r,submit:S}},components:{Loader:h}},_=a=>(q("data-v-1445e3ba"),a=a(),T(),a),C={class:"login-page"},G={class:"login-page-content"},N=_(()=>o("p",{class:"login-page-title"}," COPYRIGHT\xA9 AKFA UNIVERSITY ALL RIGHTS RESERVED. ",-1)),O={key:0,class:"login"},P=_(()=>o("div",{class:"login__head"},[o("div",{class:"login__head-img"},[o("img",{src:L,alt:""}),o("img",{src:U,alt:""})])],-1)),j={style:{color:"red"}},F={class:"login__form"},H={class:"login__foot"},M=_(()=>o("a",{class:"login__foot-forgot"},"Forgot password?",-1));function Y(a,s,c,e,p,r){const i=h;return d(),g("div",C,[o("div",G,[N,e.loading?(d(),x(i,{key:1})):(d(),g("div",O,[P,o("p",j,b(e.error),1),o("form",F,[f(o("input",{type:"text",placeholder:"ID","onUpdate:modelValue":s[0]||(s[0]=t=>e.userSendData.login=t)},null,512),[[v,e.userSendData.login]]),f(o("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=t=>e.userSendData.password=t)},null,512),[[v,e.userSendData.password]])]),o("div",H,[M,o("a",{onClick:s[2]||(s[2]=t=>e.submit()),style:{cursor:"pointer"},class:"login__foot-btn"},"Submit")])]))])])}const Z=k(V,[["render",Y],["__scopeId","data-v-1445e3ba"]]);export{Z as default};