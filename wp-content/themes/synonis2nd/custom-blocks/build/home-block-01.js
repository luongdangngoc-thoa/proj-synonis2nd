(()=>{"use strict";var e,t={227:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.blockEditor,l=window.wp.components;(0,t.registerBlockType)("home/block-01",{title:"Home Block 01",icon:"index-card",category:"layout",attributes:{heading:{type:"array",source:"children",selector:"h2",default:"相続発生後の手続きは私たちにお任せてください。"},subHeading:{type:"array",source:"children",selector:"h3",default:"こんなお悩みありますか？"},list:{type:"array",source:"children",selector:".list"},buttonLable:{type:"array",source:"children",selector:"h4",default:"問い合わせはこちら"},mediaID:{type:"number",default:0},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"}},edit:t=>{const{className:r,attributes:{heading:n,subHeading:i,list:c,buttonLable:s,mediaID:o,mediaURL:m},setAttributes:u}=t;return(0,e.createElement)("div",{className:`${r} container`},(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h2",placeholder:"Heading",value:n,onChange:e=>{u({heading:e})}}),(0,e.createElement)(a.RichText,{tagName:"h3",className:"subHeading",placeholder:"Sub heading",value:i,onChange:e=>{u({subHeading:e})}}),(0,e.createElement)(a.RichText,{tagName:"ul",multiline:"li",placeholder:"List",value:c,onChange:e=>{u({list:e})},className:"list"}),(0,e.createElement)(a.RichText,{tagName:"h4",className:"buttonLable",placeholder:"Button lable",value:s,onChange:e=>{u({buttonLable:e})}})),(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{u({mediaURL:e.url,mediaID:e.id})},allowedTypes:["image"],value:o,render:({open:t})=>(0,e.createElement)(l.Button,{className:o?"image-button":"button button-large",onClick:t},o?(0,e.createElement)("img",{src:m,alt:"アップロード画像"}):"画像をアップロード")})),0!=o&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID:0,mediaURL:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))))},save:t=>{const{className:l,attributes:{heading:r,subHeading:n,list:i,buttonLable:c,mediaURL:s}}=t;return(0,e.createElement)("div",{className:`${l} container`},(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h2",className:"heading",value:r}),(0,e.createElement)(a.RichText.Content,{tagName:"h3",className:"subHeading",value:n}),(0,e.createElement)(a.RichText.Content,{tagName:"ul",className:"list",value:i}),(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"buttonLable",value:c})),s&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{src:s,alt:"画像"})))}})}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,a,r,n)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,r,n]=e[m],c=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(c=!1,n<i&&(i=n));if(c){e.splice(m--,1);var o=r();void 0!==o&&(t=o)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,r,n]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={910:0,842:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[i,c,s]=a,o=0;if(i.some((t=>0!==e[t]))){for(r in c)l.o(c,r)&&(l.m[r]=c[r]);if(s)var m=s(l)}for(t&&t(a);o<i.length;o++)n=i[o],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(m)},a=globalThis.webpackChunkblock_dev=globalThis.webpackChunkblock_dev||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=l.O(void 0,[842],(()=>l(227)));r=l.O(r)})();