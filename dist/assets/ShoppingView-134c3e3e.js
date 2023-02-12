import{a as h}from"./runtime-dom.esm-bundler-d846f7c9.js";import{b as P,c as F,I as D}from"./index-2cd3f6ff.js";import{d as A,o as p,a as y,j as d,e as t,t as m,u as l,a1 as G,f as S,_ as N,h as C,s as B,a2 as R,l as V,g,a0 as I,x as f,c as $,w as T,b as k,p as E,k as O,a6 as j}from"./_plugin-vue_export-helper-b66d6dea.js";import{N as z}from"./NavBarForEmpty-4693fa01.js";import{f as M}from"./fetchGameDetails-7986d339.js";import{r as U,g as q,a as H,c as J}from"./index.esm2017-53faf82b.js";import{l as v}from"./index-770713f3.js";import{u as K}from"./vuex.esm-bundler-0c4770ad.js";import"./vue-router-920ae1c6.js";import"./index-e5b3cc81-e712630f.js";const Q={class:"shopping-item flex"},W={class:"shopping-pannel flex"},X={class:"shopping-details flex flex_column"},Y={class:"shopping-details__price main-blue"},Z=A({__name:"ShoppingItem",props:{game:null},setup(s){const{removeGame:n}=G("shoppingRemove");return(o,r)=>{const e=S("v-lazy-image"),c=S("icon-cross");return p(),y("article",Q,[d(e,{class:"shopping-item_img",imgSrc:s.game.background_image,alt:s.game.name},null,8,["imgSrc","alt"]),t("div",W,[t("div",X,[d(P,{class:"shopping-details__title",gameId:s.game.id,gameName:s.game.name},null,8,["gameId","gameName"]),d(F,{class:"shopping-details__platforms",platforms:s.game.parent_platforms},null,8,["platforms"]),t("h3",Y,m(s.game.suggestions_count==0?"Free":"$"+s.game.suggestions_count/10),1)]),t("button",{class:"shopping-pannel__bttn cursor-pointer",onClick:r[0]||(r[0]=x=>l(n)(s.game))},[d(c,{class:"shopping-pannel__icon"})])])])}}});const ee=N(Z,[["__scopeId","data-v-d545e004"]]);function te(s){const n=U(q());H(J(n,"Promo")).then(o=>{if(o.exists()){const e=o.val().find(c=>c.value===s.value);s.isChecked=!0,e?(s.isActive=!0,s.discount=e.discount,s.discountType=e.discountType):s.isActive=!1}else console.log("No data available")}).catch(o=>{console.error(o)})}const u=s=>(E("data-v-a8819f03"),s=s(),O(),s),se={class:"page-block flex flex_column"},oe={class:"page-block__title main-white"},ie={class:"shopping-block flex"},ae={key:2,class:"order-info"},ne={class:"order-info__block flex flex_align-center"},ce=u(()=>t("h3",{class:"order-info__title main-white"},"Subtotal:",-1)),le={class:"order-info__price main-blue"},_e={class:"order-info__block flex flex_align-center"},me=u(()=>t("h3",{class:"order-info__title main-white"},"Sales Tax:",-1)),de={class:"order-info__price main-blue"},re={class:"order-info__block flex flex_align-center"},pe=u(()=>t("h3",{class:"order-info__title main-white"},"Grand Total:",-1)),ue={class:"order-info__price main-blue"},he={class:"promo flex flex_column"},ge=u(()=>t("h3",{class:"promo__title main-white"},"Redeem Promo Code:",-1)),fe={class:"promo__status promo__status_red"},ve={class:"promo__status promo__status_green"},xe=u(()=>t("button",{class:"order-info__bttn bttn bttn_buy"},"Checkout",-1)),be=A({__name:"ShoppingView",setup(s){const n=K(),o=C([]);B(()=>{const i=v.getList(v.shopping);i.length&&(n.commit("loading/setLoading",!0),i.forEach(a=>{const _=C([]);M(_,a).then(()=>{o.value.push(_.value)}).then(()=>{a==i[i.length-1]&&n.commit("loading/setLoading",!1)})}))}),j("shoppingRemove",{removeGame:r});function r(i){const a=o.value.indexOf(i);o.value.splice(a,1),v.placeItem(v.shopping,i.id),n.commit("notification/pushNotification",`${i.name}: removed from shopping cart`)}const e=R({isActive:!1,isChecked:!1,value:"",discount:0,discountType:""});V(e,()=>{e.value.length||(e.isChecked=!1,e.isActive=!1)});const c=g(()=>{let i=o.value.reduce((a,_)=>a+=_.suggestions_count/10,0);return e.discountType=="%"&&e.isActive?i=i-i/100*e.discount:e.discountType=="$"&&e.isActive&&(i=i-e.discount),i.toFixed(2)}),x=g(()=>(+c.value/79).toFixed(2)),L=g(()=>(+x.value+ +c.value).toFixed(2)),w=g(()=>n.state.loading.isLoading);return(i,a)=>{const _=S("v-input-submit");return p(),y("section",se,[t("h1",oe,[I(" Shopping Cart "),f(t("span",{class:"page-block__count main-blue"},"("+m(o.value.length)+" items)",513),[[h,o.value.length]])]),t("div",ie,[!l(w)&&o.value.length?(p(),$(D,{key:0,class:"shopping-block__content game-list",itemsList:o.value},{item:T(b=>[d(ee,{game:b.item},null,8,["game"])]),_:1},8,["itemsList"])):k("",!0),!l(w)&&!o.value.length?(p(),$(z,{key:1},{default:T(()=>[I(" Shopping list is empty ")]),_:1})):k("",!0),o.value.length?(p(),y("div",ae,[t("div",ne,[ce,t("p",le,"$"+m(l(c)),1),f(t("p",{class:"order-info__discount main-white"},m("-"+e.discountType+e.discount),513),[[h,e.isActive]])]),t("div",_e,[me,t("p",de,"$"+m(l(x)),1)]),t("div",re,[pe,t("p",ue,"$"+m(l(L)),1)]),t("div",he,[ge,d(_,{class:"promo__input",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=b=>e.value=b),maxlength:"15",placeholder:"PROMO1",submitFunc:l(te),funcArguments:e},null,8,["modelValue","submitFunc","funcArguments"]),f(t("span",fe,"Invalid promo",512),[[h,e.isChecked&&!e.isActive]]),f(t("span",ve,"Promo activated",512),[[h,e.isChecked&&e.isActive]])]),xe])):k("",!0)])])}}});const Le=N(be,[["__scopeId","data-v-a8819f03"]]);export{Le as default};
