(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();try{let r=function(){navigator.geolocation.getCurrentPosition(async o=>{n=o.coords,s=o.coords.altitude,document.getElementById("debug-info").innerHTML=`
      <h1>Longitude: ${n}, Latitude: ${c}</h1>
      <h1>Altitude: ${s}</h1>`,document.getElementById("map").innerHTML=`<iframe width="700" height="300" src="https://maps.google.com/maps?q=${c},${n}&amp;z=15&amp;output=embed"></iframe>`},o=>{console.log("Error:",o)},{enableHighAccuracy:!0})};var d=r,{latitude:c,longitude:n}=[0,0],s=0;document.getElementById("update-location").onclick=r(),document.getElementById("copy-location").onclick=()=>{navigator.clipboard.writeText(`${c},${n},${s}`),alert("Location copied to clipboard!")}}catch(r){console.log("Error",r)}
