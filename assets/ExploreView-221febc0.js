import{v as k}from"./runtime-dom.esm-bundler-6a61cd91.js";import{I as z,G as J,f as S}from"./index-60b37718.js";import{a as A,u as H}from"./vue-router-5622f771.js";import{u as X}from"./vuex.esm-bundler-5129276b.js";import{d as j,h as w,a1 as T,g as U,l as K,o as V,a as y,f as s,t as C,u as _,j as a,w as r,_ as i,n as Q,x as h,F as L,m as W,e as Y,r as c,c as Z,p as ee,k as te,a5 as le,a4 as se}from"./runtime-core.esm-bundler-fd07f792.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-30f3030e-585ad33e.js";const b=p=>(ee("data-v-9d70f509"),p=p(),te(),p),oe={class:"page-block flex flex_column"},re={class:"nav-bar flex flex_space-between flex_align-center"},ie={class:"nav-bar__title main-white"},ne={class:"search-block flex"},ue={class:"explore-block flex"},de={class:"explore-block__not-found second-white"},me={class:"filters"},_e={class:"filters__block"},ce=b(()=>s("h4",{class:"filters__title main-white"},"Platforms",-1)),pe={class:"filters__block"},fe=b(()=>s("h4",{class:"filters__title main-white"},"Features",-1)),ve={class:"filters__block"},ge=b(()=>s("h4",{class:"filters__title main-white"},"Genres",-1)),Ve={class:"filters__block"},he=b(()=>s("h4",{class:"filters__title main-white"},"Rating",-1)),be={key:0,class:"observer"},xe=j({__name:"ExploreView",setup(p){const o=A(),q=H(),f=X(),d=w([]),v=w(0);let m=1;const e=T({sort:o.query.sort||"",date:o.query.date?o.query.date:"",rating:o.query.rating?JSON.parse(`${o.query.rating}`):[10,100],genres:o.query.genres?JSON.parse(`${o.query.genres}`):[],platforms:o.query.platforms?JSON.parse(`${o.query.platforms}`):[],tags:[],search:"",size:24});function N(){e.sort="",e.date="",e.rating=[10,100],e.genres=[],e.platforms=[],e.tags=[],e.search=""}se("setPlatforms",{setPlatform:G});function G(u){e.platforms.includes(u)||e.platforms.push(u)}const g=w(!0),O=[{value:"-metacritic",name:"Rating: High to Low"},{value:"metacritic",name:"Rating: Low to High"},{value:"-released",name:"Date: Newest to Oldest"},{value:"released",name:"Date: Oldest to Newest"}];function P(){f.commit("loading/setLoading",!0),S(m,e).then(({data:u,totalItemsCount:t})=>{d.value=u.value,v.value=t.value,f.commit("loading/setLoading",!1)})}const I=U(()=>Math.ceil(v.value/e.size));K(e,()=>{m=1,o.fullPath!==o.path&&q.push(o.path),P()},{immediate:!0});function D(){m<I.value&&(m++,S(m,e).then(({data:u,totalItemsCount:t})=>{d.value=[...d.value,...u.value],v.value=t.value}))}const x=U(()=>f.state.loading.isLoading);return(u,t)=>{const B=c("v-select"),E=c("v-search-input"),F=c("icon-arrow"),n=c("v-checkbox"),R=c("v-range-slider"),$=le("intersection");return V(),y(L,null,[s("section",oe,[s("div",re,[s("h1",ie,C(_(o).query.title||"Explore Games"),1),a(B,{class:"nav-bar__select",modelValue:e.sort,"onUpdate:modelValue":t[0]||(t[0]=l=>e.sort=l),options:O},{default:r(()=>[i(" Default order ")]),_:1},8,["modelValue"])]),s("div",ne,[a(E,{class:"search-block__input",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=l=>e.search=l),modelModifiers:{trim:!0},placeholder:`Search ${v.value} games`},null,8,["modelValue","placeholder"]),s("button",{class:"bttn bttn_transparent search-block__bttn flex flex_align-center",onClick:t[2]||(t[2]=l=>g.value=!g.value)},[i(" Filter "),a(F,{class:Q(["search-block__icon",{"search-block__icon_active":g.value}])},null,8,["class"])])]),s("div",ue,[h(a(z,{class:"explore-block__content game-list",itemsList:d.value},{item:r(l=>[a(J,{game:l.item},null,8,["game"])]),_:1},8,["itemsList"]),[[k,!_(x)&&d.value.length]]),h(s("h3",de," List is empty ",512),[[k,!_(x)&&!d.value.length]]),h(s("aside",me,[s("div",_e,[ce,a(n,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[3]||(t[3]=l=>e.platforms=l),value:1},{default:r(()=>[i(" PC ")]),_:1},8,["modelValue"]),a(n,{tabindex:"2",class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[4]||(t[4]=l=>e.platforms=l),value:2},{default:r(()=>[i(" PlayStation ")]),_:1},8,["modelValue"]),a(n,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[5]||(t[5]=l=>e.platforms=l),value:3},{default:r(()=>[i(" XBOX ")]),_:1},8,["modelValue"]),a(n,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[6]||(t[6]=l=>e.platforms=l),value:4},{default:r(()=>[i(" iOS ")]),_:1},8,["modelValue"]),a(n,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[7]||(t[7]=l=>e.platforms=l),value:7},{default:r(()=>[i(" Nintendo ")]),_:1},8,["modelValue"]),a(n,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[8]||(t[8]=l=>e.platforms=l),value:8},{default:r(()=>[i(" Android ")]),_:1},8,["modelValue"])]),s("div",pe,[fe,a(n,{class:"filters__item",modelValue:e.tags,"onUpdate:modelValue":t[9]||(t[9]=l=>e.tags=l),value:31},{default:r(()=>[i(" Singleplayer ")]),_:1},8,["modelValue"]),a(n,{class:"filters__item",modelValue:e.tags,"onUpdate:modelValue":t[10]||(t[10]=l=>e.tags=l),value:7},{default:r(()=>[i(" Multiplayer ")]),_:1},8,["modelValue"]),a(n,{class:"filters__item",modelValue:e.tags,"onUpdate:modelValue":t[11]||(t[11]=l=>e.tags=l),value:18},{default:r(()=>[i(" Cooperative ")]),_:1},8,["modelValue"])]),s("div",ve,[ge,(V(!0),y(L,null,W(_(f).state.genres.genresList,l=>(V(),Z(n,{class:"filters__item",modelValue:e.genres,"onUpdate:modelValue":t[12]||(t[12]=M=>e.genres=M),value:l.id},{default:r(()=>[i(C(l.name),1)]),_:2},1032,["modelValue","value"]))),256))]),s("div",Ve,[he,a(R,{class:"filters__item",modelValue:e.rating,"onUpdate:modelValue":t[13]||(t[13]=l=>e.rating=l),minValue:10,maxValue:100,stepValue:1},null,8,["modelValue"])]),s("button",{class:"filters__block bttn bttn_transparent",onClick:N}," Clear ")],512),[[k,g.value]])])]),_(x)?Y("",!0):h((V(),y("div",be,null,512)),[[$,D]])],64)}}});const qe=ae(xe,[["__scopeId","data-v-9d70f509"]]);export{qe as default};
