(()=>{"use strict";var e,t={141:()=>{const e=window.React,t=window.wp.blocks,r=window.wp.element,n=(window.wp.editor,window.wp.components);(0,t.registerBlockType)("common/qa",{title:"QA",icon:"index-card",category:"layout",attributes:{question:{type:"string",default:"",source:"text",selector:".question-class"},answer:{type:"string",default:"",source:"text",selector:".answer-class"}},edit:({attributes:t,setAttributes:o})=>{const{question:s,answer:a}=t;return(0,e.createElement)(r.Fragment,null,(0,e.createElement)(n.TextControl,{label:"Question",value:s,onChange:e=>{o({question:e})}}),(0,e.createElement)(n.TextControl,{label:"Answer",value:a,onChange:e=>{o({answer:e})}}))},save:({attributes:t})=>{const{question:r,answer:n}=t;return(0,e.createElement)("div",null,(0,e.createElement)("h3",{className:"question-class"},r),(0,e.createElement)("p",{className:"answer-class"},n))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,r,o,s)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,o,s]=e[u],l=!0,i=0;i<r.length;i++)(!1&s||a>=s)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(l=!1,s<a&&(a=s));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,o,s]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={98:0,195:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,s,[a,l,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(i)var u=i(n)}for(t&&t(r);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=globalThis.webpackChunkblock_dev=globalThis.webpackChunkblock_dev||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[195],(()=>n(141)));o=n.O(o)})();