(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();try{const n={"A1-01":[100,256],"B3-05":[200,512]};navigator.geolocation.getCurrentPosition(async o=>{const c=await o.coords.altitude;document.getElementById("debug-info").innerHTML=`
      <h1>Altitude: ${c}</h1>`;const{latitude:r,longitude:e}=await o.coords,t=`<iframe width="700" height="300" src="https://maps.google.com/maps?q=${r},${e}&amp;z=15&amp;output=embed"></iframe>`;console.log("HTML:",t),document.getElementById("map").innerHTML=t,console.log("Location:",r,e)},o=>{console.log("Error:",o)},{enableHighAccuracy:!0})}catch(n){console.log("Error:",n)}
