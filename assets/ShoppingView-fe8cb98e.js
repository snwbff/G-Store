import{v as h}from"./runtime-dom.esm-bundler-6a61cd91.js";import{b as L,c as P,I as F}from"./index-60b37718.js";import{d as A,o as p,a as y,j as _,f as t,t as d,u as l,$ as D,r as w,h as G,q as R,y as B,a1 as V,l as E,g,_ as I,x as f,c as $,w as k,e as S,p as O,k as j,a4 as z}from"./runtime-core.esm-bundler-fd07f792.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{N as M}from"./NavBarForEmpty-e7cf4316.js";import{S as U}from"./ShakeableWrapper-f4fddcb1.js";import{f as q}from"./fetchGameDetails-76b9059a.js";import{r as W,g as H,a as J,c as K}from"./index.esm2017-64649ea8.js";import{l as v}from"./index-770713f3.js";import{u as Q}from"./vuex.esm-bundler-5129276b.js";import"./vue-router-5622f771.js";import"./index-30f3030e-585ad33e.js";const X={class:"shopping-item flex"},Y={class:"shopping-pannel flex"},Z={class:"shopping-details flex flex_column"},ee={class:"shopping-details__price main-blue"},te=A({__name:"ShoppingItem",props:{game:null},setup(s){const{removeGame:a}=D("shoppingRemove");return(o,r)=>{const e=w("v-lazy-image"),c=w("icon-cross");return p(),y("article",X,[_(e,{class:"shopping-item_img",imgSrc:s.game.background_image,alt:s.game.name},null,8,["imgSrc","alt"]),t("div",Y,[t("div",Z,[_(L,{class:"shopping-details__title",gameId:s.game.id,gameName:s.game.name},null,8,["gameId","gameName"]),_(P,{class:"shopping-details__platforms",platforms:s.game.parent_platforms},null,8,["platforms"]),t("h3",ee,d(s.game.suggestions_count==0?"Free":"$"+s.game.suggestions_count/10),1)]),t("button",{class:"shopping-pannel__bttn cursor-pointer",onClick:r[0]||(r[0]=b=>l(a)(s.game))},[_(c,{class:"shopping-pannel__icon"})])])])}}});const se=T(te,[["__scopeId","data-v-ec54fc6a"]]);function oe(s){const a=W(H());J(K(a,"Promo")).then(o=>{if(o.exists()){const e=o.val().find(c=>c.value===s.value);s.isChecked=!0,e?(s.isActive=!0,s.discount=e.discount,s.discountType=e.discountType):s.isActive=!1}else console.log("No data available")}).catch(o=>{console.error(o)})}const u=s=>(O("data-v-adb35b8c"),s=s(),j(),s),ie={class:"page-block flex flex_column"},ae={class:"page-block__title main-white"},ne={class:"shopping-block flex"},ce={key:2,class:"order-info"},le={class:"order-info__block flex flex_align-center"},_e=u(()=>t("h3",{class:"order-info__title main-white"},"Subtotal:",-1)),me={class:"order-info__price main-blue"},de={class:"order-info__block flex flex_align-center"},re=u(()=>t("h3",{class:"order-info__title main-white"},"Sales Tax:",-1)),pe={class:"order-info__price main-blue"},ue={class:"order-info__block flex flex_align-center"},he=u(()=>t("h3",{class:"order-info__title main-white"},"Grand Total:",-1)),ge={class:"order-info__price main-blue"},fe={class:"promo flex flex_column"},ve=u(()=>t("h3",{class:"promo__title main-white"},"Redeem Promo Code:",-1)),be={class:"promo__status promo__status_red"},xe={class:"promo__status promo__status_green"},ke=u(()=>t("button",{class:"order-info__bttn bttn bttn_buy"},"Checkout",-1)),Se=A({__name:"ShoppingView",setup(s){const a=Q(),o=G([]);R(()=>{const i=v.getList(v.shopping);i.length&&(a.commit("loading/setLoading",!0),i.forEach(n=>{const m=B({});q(m,n).then(()=>{o.value.push(m.value),o.value.length==i.length&&a.commit("loading/setLoading",!1)})}))}),z("shoppingRemove",{removeGame:r});function r(i){const n=o.value.indexOf(i);o.value.splice(n,1),v.placeItem(v.shopping,i.id),a.commit("notification/pushNotification",`${i.name}: removed from shopping cart`)}const e=V({isActive:!1,isChecked:!1,value:"",discount:0,discountType:""});E(e,()=>{e.value.length||(e.isChecked=!1,e.isActive=!1)});const c=g(()=>{let i=o.value.reduce((n,m)=>n+=m.suggestions_count/10,0);return e.discountType=="%"&&e.isActive?i=i-i/100*e.discount:e.discountType=="$"&&e.isActive&&(i=i-e.discount),i.toFixed(2)}),b=g(()=>(+c.value/79).toFixed(2)),N=g(()=>(+b.value+ +c.value).toFixed(2)),C=g(()=>a.state.loading.isLoading);return(i,n)=>{const m=w("v-input-submit");return p(),y("section",ie,[t("h1",ae,[I(" Shopping Cart "),f(t("span",{class:"page-block__count main-blue"},"("+d(o.value.length)+" items)",513),[[h,o.value.length]])]),t("div",ne,[!l(C)&&o.value.length?(p(),$(F,{key:0,class:"shopping-block__content game-list",itemsList:o.value},{item:k(x=>[_(se,{game:x.item},null,8,["game"])]),_:1},8,["itemsList"])):S("",!0),!l(C)&&!o.value.length?(p(),$(M,{key:1},{default:k(()=>[I(" Shopping list is empty ")]),_:1})):S("",!0),o.value.length?(p(),y("div",ce,[t("div",le,[_e,t("p",me,"$"+d(l(c)),1),f(t("p",{class:"order-info__discount main-white"},d("-"+e.discountType+e.discount),513),[[h,e.isActive]])]),t("div",de,[re,t("p",pe,"$"+d(l(b)),1)]),t("div",ue,[he,t("p",ge,"$"+d(l(N)),1)]),t("div",fe,[ve,_(U,{condition:e.isChecked&&!e.isActive},{default:k(()=>[_(m,{class:"promo__input",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=x=>e.value=x),maxlength:"15",placeholder:"PROMO1",submitFunc:l(oe),funcArguments:e},null,8,["modelValue","submitFunc","funcArguments"])]),_:1},8,["condition"]),f(t("span",be,"Invalid promo",512),[[h,e.isChecked&&!e.isActive]]),f(t("span",xe,"Promo activated",512),[[h,e.isChecked&&e.isActive]])]),ke])):S("",!0)])])}}});const Ge=T(Se,[["__scopeId","data-v-adb35b8c"]]);export{Ge as default};
