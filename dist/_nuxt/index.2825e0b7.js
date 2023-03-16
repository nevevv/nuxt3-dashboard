import{a as K,r as d,B as Q,f as c,y as g,h as e,t as s,H as b,c as M,I as V,F as p,C,A as W,K as I,o as l,D as $,w as L,i as X,v as Y,j,J as Z,p as ee,l as te}from"./entry.71a57e02.js";import{u as oe,_ as D}from"./GET_REQUESTS.e7dfadbd.js";import{A as se,C as ne,_ as ae}from"./Actions.4a4c1392.js";import{_ as le}from"./Search.b781958b.js";import{u as k}from"./cookie.820c3a4b.js";import{H as re}from"./Head.b01dfced.js";import{u as de}from"./POST_REQUESTS.730cf731.js";import{P as ce}from"./Pagination.5babd6d0.js";import"./index.4fa70c02.js";const ie={name:"page",setup(){const t="users",r=oe(),q=de(),o=d([]),A=d(!0),B=d(!0),m=d(!1),h=d(""),_=d([]),v=d(""),y=d([]),w=d([]),n=d(""),a=d(""),f=d(!1),N=d(""),O=d(""),R=d(!1),z=()=>{const i={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+k("token").value}};r.getRequest(`${t}/create`,i,u=>{B.value=!1,y.value=u.data;const U=[];u.data.forEach(J=>{U[J]=""});let{...G}=U;_.value=G})},x=()=>{const i={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+k("token").value}};r.getRequest("roles",i,u=>{w.value=u.data})},H=()=>{z(),x(),m.value=!m.value,v.value=t},P=async()=>{a.value&&(_.value.roles=[],_.value.roles.push(a.value));const i={method:"POST",body:_.value,headers:{Authorization:"Bearer "+k("token").value}};q.postRequest(`${v.value}/create`,i,u=>{u.success?location.reload():h.value=u.message})},E=i=>{a.value=i.id},S=async()=>{const i={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+k("token").value}};r.getRequest(t,i,u=>{o.value=u.data.data,A.value=!1})},T=i=>{f.value=!f.value,N.value=i},F=()=>{const i={method:"POST",headers:{Authorization:"Bearer "+k("token").value}};q.postRequest(`users/${N.value}/delete`,i,u=>{u.code===403?(O.value=u.message,R.value=!0):location.reload()})};return Q(()=>{S()}),{getUsersData:S,usersList:o,loading:A,api_url:t,showModal:m,createNewUser:P,requestError:h,showCreateModal:H,fieldsObj:_,fields:y,arr:w,select:n,changeSelect:E,Loader:D,loadingModal:B,confirmModal:f,deleteUser:T,notAccessMessage:O,activeMessage:R,confirmDelete:F}},components:{HeadVue:re,Loader:D,Actions:se,CreateNew:ne,Pagination:ce}},ue=t=>(ee("data-v-b2d5690d"),t=t(),te(),t),_e={class:"programs__page"},pe={class:"main__programs-content"},me={class:"users-content-head"},he={class:"users-content-title"},ve={class:"fs-3 text-center"},fe=["onUpdate:modelValue"],ge=["value"],be={class:"text-danger"},ke={class:"main__programs-content-block"},ye={class:"main__content-block-head"},we={class:"main__block-head-title"},Me={key:0},Ce=ue(()=>e("th",{class:"th"},"ID",-1)),qe={class:"th"},Ae={class:"th"},Be={class:"th"},$e={class:"th"},je={key:0},De={key:1},Ne={style:{width:"16%"}},Oe={class:"dropdown"},Re={class:"btn btn-secondary dropdown-toggle bg-success border-0",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},Se={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},Ue=["onClick"],Ve={class:"text-center fs-3"};function Ie(t,r,q,o,A,B){const m=W("HeadVue"),h=I,_=D,v=ae,y=le,w=I;return l(),c("section",_e,[g(m,{text:`${t.$t("users")}`,subtitle:`/ ${t.$t("users")}`},null,8,["text","subtitle"]),e("div",pe,[e("div",me,[e("h3",he,s(`${t.$t("all")+" "+t.$t("users")}`),1),e("div",null,[e("div",null,[g(h,{to:"/users/createNew",class:"main__programs-content-btn modalBtn"},{default:b(()=>[$("Create")]),_:1})]),o.showModal?(l(),M(v,{key:0},{default:b(()=>[e("p",ve,s(t.$t("create")),1),o.loadingModal?(l(),M(_,{key:0})):(l(!0),c(p,{key:1},C(o.fields,n=>(l(),c("div",{class:"d-flex flex-column align-items-start gap-2",key:n.id},[n!="roles"?(l(),c(p,{key:0},[e("label",null,s(t.$t(n)),1),L(e("input",{type:"text","onUpdate:modelValue":a=>o.fieldsObj[n]=a},null,8,fe),[[X,o.fieldsObj[n]]])],64)):(l(),c(p,{key:1},[e("label",null,s(t.$t(n)),1),L(e("select",{"onUpdate:modelValue":r[0]||(r[0]=a=>o.select=a),class:"form-select createModal-select",onChange:r[1]||(r[1]=a=>o.changeSelect(o.select))},[(l(!0),c(p,null,C(o.arr,(a,f)=>(l(),c("option",{key:f,value:a},s(a.display_name),9,ge))),128))],544),[[Y,o.select]])],64))]))),128)),e("p",be,s(o.requestError),1),e("div",null,[e("button",{class:"btn btn-danger",onClick:r[2]||(r[2]=n=>o.showModal=!o.showModal)},s(t.$t("cancel")),1),e("button",{class:"btn btn-primary",onClick:r[3]||(r[3]=j((...n)=>o.createNewUser&&o.createNewUser(...n),["prevent"]))},s(t.$t("create")),1)])]),_:1})):V("",!0)])]),e("div",ke,[e("div",ye,[e("h3",we,s(`${t.$t("all")+" "+t.$t("users")}`),1),g(y)]),o.loading?(l(),M(_,{key:1})):(l(),c("table",Me,[e("thead",null,[e("tr",null,[Ce,e("th",qe,s(t.$t("full_name")),1),e("th",Ae,s(t.$t("login")),1),e("th",Be,s(t.$t("role")),1),e("th",$e,s(t.$t("action")),1)])]),e("tbody",null,[(l(!0),c(p,null,C(o.usersList,n=>(l(),c("tr",{key:n.id},[e("td",null,s(n.id),1),e("td",null,s(n.full_name),1),e("td",null,s(n.login),1),n.roles.length?(l(),c("td",je,[(l(!0),c(p,null,C(n.roles,a=>(l(),c("span",{class:"bg-primary text-white p-1 m-1 td-span",key:a},s(a.display_name+" "),1))),128))])):(l(),c("td",De)),e("td",Ne,[e("div",Oe,[e("button",Re,s(t.$t("action")),1),e("ul",Se,[e("li",null,[g(w,{to:"users/"+n.id,class:"dropdown-item"},{default:b(()=>[$(s(t.$t("show")),1)]),_:2},1032,["to"])]),e("li",null,[e("a",{class:"dropdown-item",onClick:a=>o.deleteUser(n.id,"users")},s(t.$t("delete")),9,Ue)]),e("li",null,[g(h,{class:"dropdown-item",to:`users/edit/${n.id}/`},{default:b(()=>[$(s(t.$t("edit")),1)]),_:2},1032,["to"])])])]),o.confirmModal?(l(),M(v,{key:0},{default:b(()=>[e("p",Ve,s(t.$t("confirmDelete")),1),e("div",null,[e("button",{class:"btn btn-primary",onClick:r[4]||(r[4]=j(a=>o.confirmModal=!o.confirmModal,["prevent"]))},s(t.$t("cancel")),1),e("button",{class:"btn btn-danger",onClick:r[5]||(r[5]=j((...a)=>o.confirmDelete&&o.confirmDelete(...a),["prevent"]))},s(t.$t("perform")),1)]),e("p",{class:Z(["text-danger text-center",{"d-none":!o.activeMessage}])},s(o.notAccessMessage),3)]),_:1})):V("",!0)])]))),128))])]))])])])}const Je=K(ie,[["render",Ie],["__scopeId","data-v-b2d5690d"]]);export{Je as default};
