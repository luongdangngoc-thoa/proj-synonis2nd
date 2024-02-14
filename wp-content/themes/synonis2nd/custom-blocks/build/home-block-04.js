(()=>{"use strict";var e,t={866:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.blockEditor,l=window.wp.components;(0,t.registerBlockType)("home/block-04",{title:"Home Block 04",icon:"index-card",category:"layout",attributes:{heading:{type:"array",source:"children",selector:"h2",default:"サポート内容"},subHeading:{type:"array",source:"children",selector:"h3",default:"相続手続きをお手伝いさせていただくに私たちの想い、私たちが大切にしていることがあります"},mediaID_01:{type:"number",default:0},mediaURL_01:{type:"string",source:"attribute",selector:"img.image_01",attribute:"src"},title_01:{type:"array",source:"children",selector:".title_01",default:"ご不安やお悩み"},description_01:{type:"array",source:"children",selector:".desc_01",default:"依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします"},mediaID_02:{type:"number",default:0},mediaURL_02:{type:"string",source:"attribute",selector:"img.image_02",attribute:"src"},title_02:{type:"array",source:"children",selector:".title_02",default:"ご不安やお悩み"},description_02:{type:"array",source:"children",selector:".desc_02",default:"依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします"},mediaID_03:{type:"number",default:0},mediaURL_03:{type:"string",source:"attribute",selector:"img.image_03",attribute:"src"},title_03:{type:"array",source:"children",selector:".title_03",default:"ご不安やお悩み"},description_03:{type:"array",source:"children",selector:".desc_03",default:"依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします"},mediaID_04:{type:"number",default:0},mediaURL_04:{type:"string",source:"attribute",selector:"img.image_04",attribute:"src"},title_04:{type:"array",source:"children",selector:".title_04",default:"ご不安やお悩み"},description_04:{type:"array",source:"children",selector:".desc_04",default:"依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします"},mediaID_05:{type:"number",default:0},mediaURL_05:{type:"string",source:"attribute",selector:"img.image_05",attribute:"src"},title_05:{type:"array",source:"children",selector:".title_05",default:"ご不安やお悩み"},description_05:{type:"array",source:"children",selector:".desc_05",default:"依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします"}},edit:t=>{const{className:c,attributes:{heading:i,subHeading:r,mediaID_01:n,mediaURL_01:m,title_01:s,description_01:d,mediaID_02:o,mediaURL_02:p,title_02:u,description_02:_,mediaID_03:g,mediaURL_03:h,title_03:N,description_03:E,mediaID_04:v,mediaURL_04:b,title_04:R,description_04:y,mediaID_05:C,mediaURL_05:w,title_05:U,description_05:k},setAttributes:T}=t;return(0,e.createElement)("div",{className:`${c} container`},(0,e.createElement)("div",{className:"heading-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h2",placeholder:"heading",value:i,onChange:e=>{T({heading:e})}}),(0,e.createElement)(a.RichText,{tagName:"h3",className:"SubHeading",placeholder:"SubHeading",value:r,onChange:e=>{T({subHeading:e})}})),(0,e.createElement)("div",{className:"col-2"},(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{T({mediaURL_01:e.url,mediaID_01:e.id})},allowedTypes:["image"],value:n,render:({open:t})=>(0,e.createElement)(l.Button,{className:n?"image-button":"button button-large",onClick:t},n?(0,e.createElement)("img",{className:"image_01",src:m,alt:"アップロード画像"}):"画像をアップロード")})),0!=n&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_01:0,mediaURL_01:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_01",placeholder:"title",value:s,onChange:e=>{T({title_01:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_01",placeholder:"description",value:d,onChange:e=>{T({description_01:e})}}))),(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{T({mediaURL_02:e.url,mediaID_02:e.id})},allowedTypes:["image"],value:o,render:({open:t})=>(0,e.createElement)(l.Button,{className:o?"image-button":"button button-large",onClick:t},o?(0,e.createElement)("img",{className:"image_02",src:p,alt:"アップロード画像"}):"画像をアップロード")})),0!=o&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_02:0,mediaURL_02:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_02",placeholder:"title",value:u,onChange:e=>{T({title_02:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_02",placeholder:"description",value:_,onChange:e=>{T({description_02:e})}})))),(0,e.createElement)("div",{className:"col-3"},(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{T({mediaURL_03:e.url,mediaID_03:e.id})},allowedTypes:["image"],value:g,render:({open:t})=>(0,e.createElement)(l.Button,{className:g?"image-button":"button button-large",onClick:t},g?(0,e.createElement)("img",{className:"image_03",src:h,alt:"アップロード画像"}):"画像をアップロード")})),0!=g&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_03:0,mediaURL_03:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_01",placeholder:"title",value:N,onChange:e=>{T({title_03:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_03",placeholder:"description",value:E,onChange:e=>{T({description_03:e})}}))),(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{T({mediaURL_04:e.url,mediaID_04:e.id})},allowedTypes:["image"],value:v,render:({open:t})=>(0,e.createElement)(l.Button,{className:v?"image-button":"button button-large",onClick:t},v?(0,e.createElement)("img",{className:"image_04",src:b,alt:"アップロード画像"}):"画像をアップロード")})),0!=v&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_04:0,mediaURL_04:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_04",placeholder:"title",value:R,onChange:e=>{T({title_04:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_04",placeholder:"description",value:y,onChange:e=>{T({description_04:e})}}))),(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{T({mediaURL_05:e.url,mediaID_05:e.id})},allowedTypes:["image"],value:C,render:({open:t})=>(0,e.createElement)(l.Button,{className:C?"image-button":"button button-large",onClick:t},C?(0,e.createElement)("img",{className:"image_05",src:w,alt:"アップロード画像"}):"画像をアップロード")})),0!=C&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_05:0,mediaURL_05:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_05",placeholder:"title",value:U,onChange:e=>{T({title_05:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_05",placeholder:"description",value:k,onChange:e=>{T({description_05:e})}})))))},save:t=>{const{className:l,attributes:{heading:c,subHeading:i,mediaURL_01:r,title_01:n,description_01:m,mediaURL_02:s,title_02:d,description_02:o,mediaURL_03:p,title_03:u,description_03:_,mediaURL_04:g,title_04:h,description_04:N,mediaURL_05:E,title_05:v,description_05:b}}=t;return(0,e.createElement)("div",{className:`${l} container`},(0,e.createElement)("div",{className:"heading-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h2",className:"heading",value:c}),(0,e.createElement)(a.RichText.Content,{tagName:"h3",className:"SubHeading",value:i})),(0,e.createElement)("div",{className:"col-2"},(0,e.createElement)("div",{className:"col"},r&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_01",src:r,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_01",value:n}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_01",value:m}))),(0,e.createElement)("div",{className:"col"},s&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_02",src:s,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_02",value:d}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_02",value:o})))),(0,e.createElement)("div",{className:"col-3"},(0,e.createElement)("div",{className:"col"},p&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_03",src:p,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_03",value:u}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_03",value:_}))),(0,e.createElement)("div",{className:"col"},g&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_04",src:g,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_04",value:h}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_04",value:N}))),(0,e.createElement)("div",{className:"col"},E&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_05",src:E,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_05",value:v}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_05",value:b})))))}})}},a={};function l(e){var c=a[e];if(void 0!==c)return c.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,l),i.exports}l.m=t,e=[],l.O=(t,a,c,i)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,c,i]=e[d],n=!0,m=0;m<a.length;m++)(!1&i||r>=i)&&Object.keys(l.O).every((e=>l.O[e](a[m])))?a.splice(m--,1):(n=!1,i<r&&(r=i));if(n){e.splice(d--,1);var s=c();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,c,i]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={496:0,362:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var c,i,[r,n,m]=a,s=0;if(r.some((t=>0!==e[t]))){for(c in n)l.o(n,c)&&(l.m[c]=n[c]);if(m)var d=m(l)}for(t&&t(a);s<r.length;s++)i=r[s],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(d)},a=globalThis.webpackChunkblock_dev=globalThis.webpackChunkblock_dev||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var c=l.O(void 0,[362],(()=>l(866)));c=l.O(c)})();