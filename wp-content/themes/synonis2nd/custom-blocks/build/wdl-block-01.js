(()=>{"use strict";var e,t={269:()=>{const e=window.React,t=window.wp.blocks,r=window.wp.components;(0,t.registerBlockType)("wdl/block-01",{title:"WDL Sample Block 01",icon:"smiley",category:"text",attributes:{myTextInput:{type:"string",default:""},myTextAreaInput:{type:"string",default:""}},edit:t=>{const{attributes:n,setAttributes:l}=t;return(0,e.createElement)("div",null,(0,e.createElement)(r.TextControl,{label:"Text input:",value:n.myTextInput,onChange:e=>l({myTextInput:e})}),(0,e.createElement)(r.TextareaControl,{label:"Textarea:",value:n.myTextAreaInput,onChange:e=>l({myTextAreaInput:e})}))},save:t=>{const{attributes:r}=t;return(0,e.createElement)("div",null,(0,e.createElement)("h3",null,r.myTextInput),(0,e.createElement)("div",null,r.myTextAreaInput))}})}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,l,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,l,a]=e[c],i=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,l,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={126:0,626:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[o,i,u]=r,s=0;if(o.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(u)var c=u(n)}for(t&&t(r);s<o.length;s++)a=o[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=globalThis.webpackChunkblock_dev=globalThis.webpackChunkblock_dev||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=n.O(void 0,[626],(()=>n(269)));l=n.O(l)})();