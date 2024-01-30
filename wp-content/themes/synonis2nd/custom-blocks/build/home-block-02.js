(()=>{"use strict";var e,t={61:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.blockEditor,r=window.wp.components;(0,t.registerBlockType)("home/block-02",{title:"Home Block 02",icon:"index-card",category:"layout",attributes:{heading:{type:"array",source:"children",selector:"h2"},description:{type:"array",source:"children",selector:".desc"},mediaID:{type:"number",default:0},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"}},edit:t=>{const{className:n,attributes:{heading:i,description:c,mediaID:l,mediaURL:o},setAttributes:s}=t;return(0,e.createElement)("div",{className:`${n} container`},(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h2",placeholder:"heading",value:i,onChange:e=>{s({heading:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"description",placeholder:"sub heading",value:c,onChange:e=>{s({description:e})}})),(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{s({mediaURL:e.url,mediaID:e.id})},allowedTypes:["image"],value:l,render:({open:t})=>(0,e.createElement)(r.Button,{className:l?"image-button":"button button-large",onClick:t},l?(0,e.createElement)("img",{src:o,alt:"アップロード画像"}):"画像をアップロード")})),0!=l&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(r.Button,{onClick:()=>{t.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0,className:"removeImage"},"画像を削除"))))},save:t=>{const{className:r,attributes:{heading:n,description:i,mediaURL:c}}=t;return(0,e.createElement)("div",{className:`${r} container`},(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h2",className:"heading",value:n}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc",value:i})),c&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{src:c,alt:"画像"})))}})}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,a,n,i)=>{if(!a){var c=1/0;for(d=0;d<e.length;d++){for(var[a,n,i]=e[d],l=!0,o=0;o<a.length;o++)(!1&i||c>=i)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(l=!1,i<c&&(c=i));if(l){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,n,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={246:0,940:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[c,l,o]=a,s=0;if(c.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(o)var d=o(r)}for(t&&t(a);s<c.length;s++)i=c[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},a=globalThis.webpackChunkblock_dev=globalThis.webpackChunkblock_dev||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[940],(()=>r(61)));n=r.O(n)})();