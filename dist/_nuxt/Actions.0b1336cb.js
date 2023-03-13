import{a as A,o as c,f as b,h as t,G as T,r as l,D as B,t as f,c as U,H as M,I as q,F as D,x as O,w as E,v as R,A as h,s as z,J as P,K as I}from"./entry.3a9842fd.js";import{u as y}from"./cookie.16d7df36.js";import{u as F}from"./GET_REQUESTS.4a4bae09.js";import{u as j}from"./POST_REQUESTS.313a1e44.js";const G={props:["modalTitle"]},L=t("div",{class:"modals-body-bg"},null,-1),$={class:"modal-programs"},H={class:"modal-programs-form"};function J(d,o,n,e,u,_){return c(),b("div",null,[L,t("div",$,[t("form",H,[T(d.$slots,"default")])])])}const V=A(G,[["render",J]]),K={props:["modalName","url"],setup(){const d=j(),o=F(),n=l(!1),e=l(""),u=l([]),_=l(""),i=l([]),a=r=>{const g={headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+y("token").value}};o.getRequest(`${r}/create`,g,C=>{i.value=C.data;const k=[];C.data.forEach(m=>{k[m]=""});let{...N}=k;u.value=N})};return{showModal:n,createNewUser:async()=>{const r={method:"POST",body:u.value,headers:{Authorization:"Bearer "+y("token").value}};d.postRequest(`${_.value}/create`,r,g=>{g.success?location.reload():e.value=g.message})},requestError:e,showCreateModal:r=>{n.value=!n.value,a(r),_.value=r},fieldsObj:u,fields:i}}},Q=t("i",{class:"bi bi-plus plus-icon"},null,-1),W={class:"fs-3 text-center"},X=["onUpdate:modelValue"],Y={style:{color:"red"}};function Z(d,o,n,e,u,_){const i=V;return c(),b("div",null,[t("div",null,[t("button",{class:"main__programs-content-btn modalBtn",onClick:o[0]||(o[0]=a=>e.showCreateModal(n.url))},[Q,B(" Create a new "+f(n.modalName),1)])]),e.showModal?(c(),U(i,{key:0},{default:M(()=>[t("p",W,"Create new "+f(n.modalName),1),(c(!0),b(D,null,O(e.fields,a=>(c(),b("div",{class:"d-flex flex-column align-items-start gap-2",key:a.id},[t("label",null,f(d.$t(a)),1),E(t("input",{type:"text","onUpdate:modelValue":s=>e.fieldsObj[a]=s},null,8,X),[[R,e.fieldsObj[a]]])]))),128)),t("p",Y,f(e.requestError),1),t("div",null,[t("button",{class:"btn btn-danger",onClick:o[1]||(o[1]=a=>e.showModal=!e.showModal)},"Cancel"),t("button",{class:"btn btn-primary",onClick:o[2]||(o[2]=h((...a)=>e.createNewUser&&e.createNewUser(...a),["prevent"]))},"Create")])]),_:1})):q("",!0)])}const ve=A(K,[["render",Z]]),ee={props:["list","fields","url"],setup(){const d=j(),o=l(!1),n=l(!1),e=l(""),u=l(!1),_=l(""),i=l(),a=l(!1),s=l(""),p=l(""),r=l("");return{edit:(m,v,x)=>{a.value=!0,s.value=m,i.value=Object.assign({},v),r.value=x},deleteUser:(m,v)=>{o.value=!o.value,e.value=m,r.value=v},confirmDelete:()=>{const m={method:"POST",headers:{Authorization:"Bearer "+y("token").value}};d.postRequest(`${r.value}/${e.value}/delete`,m,v=>{v.code===403?(_.value=v.message,u.value=!0):location.reload()})},editUser:m=>{const v=[];m.forEach(w=>{v[w]=i.value[w]});let{...x}=v;const S={method:"POST",body:x,headers:{Authorization:"Bearer "+y("token").value}};d.postRequest(`${r.value}/${s.value}/update`,S,w=>{w.success?location.reload():p.value=w.message})},confirmModal:o,showModal:n,activeMessage:u,notAccessMessage:_,editModal:a,editCurrentArray:i,editError:p}}},te={class:"dropdown"},oe=t("button",{class:"btn btn-secondary dropdown-toggle bg-success border-0",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," Action ",-1),ne={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},se=t("p",{class:"text-center fs-3"},"Do you really want to delete the user?",-1),ae=t("p",{class:"fs-3 text-center"},"Edit User",-1),le=["onUpdate:modelValue"],re={style:{color:"red"}};function de(d,o,n,e,u,_){const i=P,a=V;return c(),b("div",null,[t("div",null,[t("div",te,[oe,t("ul",ne,[t("li",null,[z(i,{to:n.url+"/"+n.list.id,class:"dropdown-item"},{default:M(()=>[B("Show ")]),_:1},8,["to"])]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[0]||(o[0]=s=>e.deleteUser(n.list.id,n.url))},"Delete")]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[1]||(o[1]=s=>e.edit(n.list.id,n.list,n.url))}," Edit ")])])])]),e.confirmModal?(c(),U(a,{key:0},{default:M(()=>[se,t("div",null,[t("button",{class:"btn btn-primary",onClick:o[2]||(o[2]=h(s=>e.confirmModal=!e.confirmModal,["prevent"]))},"Cancel"),t("button",{class:"btn btn-danger",onClick:o[3]||(o[3]=h((...s)=>e.confirmDelete&&e.confirmDelete(...s),["prevent"]))},"Delete")]),t("p",{class:I(["text-danger text-center",{"d-none":!e.activeMessage}])},f(e.notAccessMessage),3)]),_:1})):q("",!0),e.editModal?(c(),U(a,{key:1},{default:M(()=>[ae,(c(!0),b(D,null,O(n.fields,s=>(c(),b("div",{class:"d-flex flex-column align-items-start gap-2",key:s.id},[t("label",null,f(d.$t(s)),1),E(t("input",{type:"text","onUpdate:modelValue":p=>e.editCurrentArray[s]=p},null,8,le),[[R,e.editCurrentArray[s]]])]))),128)),t("p",re,f(e.editError),1),t("div",null,[t("button",{class:"btn btn-danger",onClick:o[4]||(o[4]=s=>e.editModal=!e.editModal)},"Cancel"),t("button",{class:"btn btn-primary",onClick:o[5]||(o[5]=h(s=>e.editUser(n.fields),["prevent"]))},"Edit")])]),_:1})):q("",!0)])}const _e=A(ee,[["render",de]]);export{V as M,_e as _,ve as a};
