import{a as k}from"./runtime-dom.esm-bundler-d846f7c9.js";import{I as J,f as S,G as A}from"./index-373097fd.js";import{u as H,a as X}from"./vue-router-920ae1c6.js";import{u as j}from"./vuex.esm-bundler-0c4770ad.js";import{d as T,h as w,a2 as U,s as K,g as L,l as Q,o as V,a as y,e as l,t as q,u as _,j as a,w as o,a0 as n,n as W,x as h,F as N,m as Y,b as Z,f as c,c as ee,p as te,k as se,a7 as le,a6 as ae,_ as oe}from"./_plugin-vue_export-helper-b66d6dea.js";import"./index-e5b3cc81-e712630f.js";const b=p=>(te("data-v-02ceed90"),p=p(),se(),p),ne={class:"page-block flex flex_column"},ie={class:"nav-bar flex flex_space-between flex_align-center"},re={class:"nav-bar__title main-white"},ue={class:"search-block flex"},de={class:"explore-block flex"},me={class:"explore-block__not-found second-white"},_e={class:"filters"},ce={class:"filters__block"},pe=b(()=>l("h4",{class:"filters__title main-white"},"Platforms",-1)),fe={class:"filters__block"},ve=b(()=>l("h4",{class:"filters__title main-white"},"Features",-1)),ge={class:"filters__block"},Ve=b(()=>l("h4",{class:"filters__title main-white"},"Genres",-1)),he={class:"filters__block"},be=b(()=>l("h4",{class:"filters__title main-white"},"Rating",-1)),xe={key:0,class:"observer"},ke=T({__name:"ExploreView",setup(p){const i=H(),G=X(),f=j(),d=w([]),v=w(0);let m=1;const e=U({sort:i.query.sort||"",date:i.query.date?i.query.date:"",rating:i.query.rating?JSON.parse(`${i.query.rating}`):[10,100],genres:i.query.genres?JSON.parse(`${i.query.genres}`):[],platforms:i.query.platforms?JSON.parse(`${i.query.platforms}`):[],tags:[],search:"",size:24});function O(){e.sort="",e.date="",e.rating=[10,100],e.genres=[],e.platforms=[],e.tags=[],e.search=""}ae("setPlatforms",{setPlatform:I});function I(u){e.platforms.includes(u)||e.platforms.push(u)}const g=w(!0),P=U([{value:"-metacritic",name:"Rating: High to Low"},{value:"metacritic",name:"Rating: Low to High"},{value:"-released",name:"Date: Newest to Oldest"},{value:"released",name:"Date: Oldest to Newest"}]);function C(){f.commit("loading/setLoading",!0),S(m,e).then(({data:u,totalItemsCount:t})=>{d.value=u.value,v.value=t.value,f.commit("loading/setLoading",!1)})}K(()=>{C()});const D=L(()=>Math.ceil(v.value/e.size));Q(e,()=>{m=1,e.date="",G.push(i.path);let u=e.rating[0]>=10&&e.rating[0]<=100,t=e.rating[1]>=10&&e.rating[1]<=100;u&&t&&C()});function B(){m<D.value&&(m++,S(m,e).then(({data:u,totalItemsCount:t})=>{d.value=[...d.value,...u.value],v.value=t.value}))}const x=L(()=>f.state.loading.isLoading);return(u,t)=>{const E=c("v-select"),F=c("v-search-input"),M=c("icon-arrow"),r=c("v-checkbox"),R=c("v-range-slider"),$=le("intersection");return V(),y(N,null,[l("section",ne,[l("div",ie,[l("h1",re,q(_(i).query.title||"Explore Games"),1),a(E,{class:"nav-bar__select",modelValue:e.sort,"onUpdate:modelValue":t[0]||(t[0]=s=>e.sort=s),options:P},{default:o(()=>[n(" Default order ")]),_:1},8,["modelValue","options"])]),l("div",ue,[a(F,{class:"search-block__input",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=s=>e.search=s),modelModifiers:{trim:!0},placeholder:`Search ${v.value} games`},null,8,["modelValue","placeholder"]),l("button",{class:"bttn bttn_transparent search-block__bttn flex flex_align-center",onClick:t[2]||(t[2]=s=>g.value=!g.value)},[n(" Filter "),a(M,{class:W(["search-block__icon",{"search-block__icon_active":g.value}])},null,8,["class"])])]),l("div",de,[h(a(J,{class:"explore-block__content game-list",itemsList:d.value},{item:o(s=>[a(A,{game:s.item},null,8,["game"])]),_:1},8,["itemsList"]),[[k,!_(x)&&d.value.length]]),h(l("h3",me," List is empty ",512),[[k,!_(x)&&!d.value.length]]),h(l("aside",_e,[l("div",ce,[pe,a(r,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[3]||(t[3]=s=>e.platforms=s),value:1},{default:o(()=>[n(" PC ")]),_:1},8,["modelValue"]),a(r,{tabindex:"2",class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[4]||(t[4]=s=>e.platforms=s),value:2},{default:o(()=>[n(" PlayStation ")]),_:1},8,["modelValue"]),a(r,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[5]||(t[5]=s=>e.platforms=s),value:3},{default:o(()=>[n(" XBOX ")]),_:1},8,["modelValue"]),a(r,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[6]||(t[6]=s=>e.platforms=s),value:4},{default:o(()=>[n(" iOS ")]),_:1},8,["modelValue"]),a(r,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[7]||(t[7]=s=>e.platforms=s),value:7},{default:o(()=>[n(" Nintendo ")]),_:1},8,["modelValue"]),a(r,{class:"filters__item",modelValue:e.platforms,"onUpdate:modelValue":t[8]||(t[8]=s=>e.platforms=s),value:8},{default:o(()=>[n(" Android ")]),_:1},8,["modelValue"])]),l("div",fe,[ve,a(r,{class:"filters__item",modelValue:e.tags,"onUpdate:modelValue":t[9]||(t[9]=s=>e.tags=s),value:31},{default:o(()=>[n(" Singleplayer ")]),_:1},8,["modelValue"]),a(r,{class:"filters__item",modelValue:e.tags,"onUpdate:modelValue":t[10]||(t[10]=s=>e.tags=s),value:7},{default:o(()=>[n(" Multiplayer ")]),_:1},8,["modelValue"]),a(r,{class:"filters__item",modelValue:e.tags,"onUpdate:modelValue":t[11]||(t[11]=s=>e.tags=s),value:18},{default:o(()=>[n(" Cooperative ")]),_:1},8,["modelValue"])]),l("div",ge,[Ve,(V(!0),y(N,null,Y(_(f).state.genres.genresList,s=>(V(),ee(r,{class:"filters__item",modelValue:e.genres,"onUpdate:modelValue":t[12]||(t[12]=z=>e.genres=z),value:s.id},{default:o(()=>[n(q(s.name),1)]),_:2},1032,["modelValue","value"]))),256))]),l("div",he,[be,a(R,{class:"filters__item",modelValue:e.rating,"onUpdate:modelValue":t[13]||(t[13]=s=>e.rating=s),minValue:10,maxValue:100,stepValue:1},null,8,["modelValue"])]),l("button",{class:"filters__block bttn bttn_transparent",onClick:O}," Clear ")],512),[[k,g.value]])])]),_(x)?Z("",!0):h((V(),y("div",xe,null,512)),[[$,B]])],64)}}});const qe=oe(ke,[["__scopeId","data-v-02ceed90"]]);export{qe as default};
