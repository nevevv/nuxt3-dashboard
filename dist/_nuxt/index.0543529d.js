import{u as k,_ as h}from"./GET_REQUESTS.fad87908.js";import{a as R,b as w,r as m,e as D,f as g,h as o,t as x,w as f,v,c as I,i as q,o as d,p as b,j as T}from"./entry.7525e9fa.js";import{u as E}from"./index.ad2db2cb.js";import{u as A,a as B}from"./POST_REQUESTS.d5e17025.js";import{_ as L,a as U}from"./logo-text.c5228760.js";import"./cookie.c045175d.js";const V={setup(){const a=A(),s=k(),c=B(),e=E(),p=w(),r=m(!1),i=m(""),t=D({login:"",password:""}),y=async()=>{const l={method:"POST",body:{login:t.login,password:t.password}};r.value=!0,a.postRequest("login",l,n=>{n.success?(i.value="",document.cookie=`token=${n.data.token}; max-age=3600`,S(n.data.token),q("/")):i.value=n.message,r.value=!1})},S=async l=>{const n={method:"GET",headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+l}};s.getRequest("users/me",n,u=>{document.cookie=`personName=${u.data.full_name}`,c.userName=u.data.full_name})};return{store:e,config:p,user:c,postRequest:a,error:i,userSendData:t,loading:r,submit:y}},components:{Loader:h}},_=a=>(b("data-v-a3e36764"),a=a(),T(),a),C={class:"login-page"},G={class:"login-page-content"},N=_(()=>o("p",{class:"login-page-title"}," COPYRIGHT\xA9 AKFA UNIVERSITY ALL RIGHTS RESERVED. ",-1)),O={key:0,class:"login"},P=_(()=>o("div",{class:"login__head"},[o("div",{class:"login__head-img"},[o("img",{src:L,alt:""}),o("img",{src:U,alt:""})])],-1)),j={style:{color:"red"}},F={class:"login__form"},H={class:"login__foot"},M=_(()=>o("a",{class:"login__foot-forgot"},"Forgot password?",-1));function Y(a,s,c,e,p,r){const i=h;return d(),g("div",C,[o("div",G,[N,e.loading?(d(),I(i,{key:1})):(d(),g("div",O,[P,o("p",j,x(e.error),1),o("form",F,[f(o("input",{type:"text",placeholder:"ID","onUpdate:modelValue":s[0]||(s[0]=t=>e.userSendData.login=t)},null,512),[[v,e.userSendData.login]]),f(o("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=t=>e.userSendData.password=t)},null,512),[[v,e.userSendData.password]]),o("div",H,[M,o("input",{type:"submit",onClick:s[2]||(s[2]=t=>e.submit()),style:{cursor:"pointer",background:"#e92026"},class:"login__foot-btn"})])])]))])])}const Z=R(V,[["render",Y],["__scopeId","data-v-a3e36764"]]);export{Z as default};