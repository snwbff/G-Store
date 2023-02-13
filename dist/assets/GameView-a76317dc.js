import{M as x,b as y}from"./index-24cb0f64.js";import{f as N}from"./fetchGameDetails-d297a9da.js";import{d as I,h as S,y as V,q as D,g as G,o as s,a as l,u as v,c as f,b as m,e,t as i,j as d,w as B,F as c,s as r,l as C,f as u,P as L,p as M,m as P,v as z}from"./vendor-8bbb4221.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const o=n=>(M("data-v-088aa0d1"),n=n(),P(),n),F={key:1,class:"game-block large-container flex"},R={class:"title-block flex flex_column"},j={class:"title-block__name main-blue"},q={class:"title-block__release second-white"},E={class:"game-block__buttons buttons-block flex flex_column"},T={class:"game-details flex flex_column"},H={class:"game-description"},J=o(()=>e("h2",{class:"game-description__title main-white"},"About",-1)),K={class:"game-description__info second-white"},O={class:"game-platforms"},Q=o(()=>e("h2",{class:"game-platforms main-white"},"Platforms",-1)),U={class:"details-list"},W=o(()=>e("li",{class:"details-list__title main-white"},[e("h3",null,"Developers")],-1)),X=o(()=>e("li",{class:"details-list__title main-white"},[e("h3",null,"Publisher")],-1)),Y=o(()=>e("li",{class:"details-list__title main-white"},[e("h3",null,"Release Date")],-1)),Z={class:"details-list__subtitle second-white"},$=o(()=>e("li",{class:"details-list__title main-white"},[e("h3",null,"Genres")],-1)),ee=o(()=>e("li",{class:"details-list__title main-white"},[e("h3",null,"Achievements")],-1)),te={class:"details-list__subtitle second-white"},se=I({__name:"GameView",setup(n){const h=z(),_=C(),t=S({});_.commit("loading/setLoading",!0);function p(){N(t,h.params.id).then(()=>{_.commit("loading/setLoading",!1)})}V(()=>{p()}),D(h,()=>{p()});const g=G(()=>_.state.loading.isLoading);return(ae,le)=>{const b=u("v-lazy-image"),w=u("v-price-button"),k=u("v-like-button");return s(),l(c,null,[v(g)?m("",!0):(s(),f(b,{key:0,class:"page__img",imgSrc:t.value.background_image,alt:t.value.name},null,8,["imgSrc","alt"])),v(g)?m("",!0):(s(),l("section",F,[e("div",R,[e("h1",j,i(t.value.name),1),e("h3",q," 🎯"+i(t.value.released||"Date is coming soon"),1),d(x,{class:"title-block__score",score:t.value.metacritic},{default:B(()=>[L(" Metacritic: ")]),_:1},8,["score"])]),e("nav",E,[d(w,{class:"buttons-block__price-bttn",price:t.value.suggestions_count/10,gameName:t.value.name,gameId:t.value.id},null,8,["price","gameName","gameId"]),d(k,{class:"buttons-block__like-bttn",gameId:t.value.id,gameName:t.value.name},null,8,["gameId","gameName"])]),e("div",T,[e("div",H,[J,e("p",K,i(t.value.description_raw),1)]),e("div",O,[Q,t.value.parent_platforms?(s(),f(y,{key:0,class:"game-platforms__icons main-white",platforms:t.value.parent_platforms},null,8,["platforms"])):m("",!0)])]),e("ul",U,[W,(s(!0),l(c,null,r(t.value.developers,a=>(s(),l("li",{class:"details-list__subtitle second-white",key:a.id},i(a.name),1))),128)),X,(s(!0),l(c,null,r(t.value.publishers,a=>(s(),l("li",{class:"details-list__subtitle second-white",key:a.id},i(a.name),1))),128)),Y,e("li",Z,i(t.value.released||"Date is coming soon"),1),$,(s(!0),l(c,null,r(t.value.genres,a=>(s(),l("li",{class:"details-list__subtitle second-white",key:a.name},i(a.name),1))),128)),ee,e("li",te,i(t.value.achievements_count||"None"),1)])]))],64)}}});const _e=A(se,[["__scopeId","data-v-088aa0d1"]]);export{_e as default};
