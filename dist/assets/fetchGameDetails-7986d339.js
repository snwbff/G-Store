import{a as t,k as e,r as o}from"./index-2cd3f6ff.js";async function p(r,s){try{const a=await t.get(`https://api.rawg.io/api/games/${s}`,{params:{key:e}});r.value=await a.data}catch(a){console.warn(a),o.push("/error")}}export{p as f};
