(()=>{"use strict";var e,t={633:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.blockEditor,l=window.wp.components;(0,t.registerBlockType)("home/block-05",{title:"Home Block 05",icon:"index-card",category:"layout",attributes:{heading:{type:"array",source:"children",selector:"h2",default:"ご相談からご依頼までの流れ"},subHeading:{type:"array",source:"children",selector:"h3",default:"相続手続きをお手伝いさせていただくに私たちの想い、私たちが大切にしていることがあります"},mediaID_01:{type:"number",default:0},mediaURL_01:{type:"string",source:"attribute",selector:"img.image_01",attribute:"src"},title_01:{type:"array",source:"children",selector:".title_01",default:"お問い合わせ"},description_01:{type:"array",source:"children",selector:".desc_01",default:"まずは、お電話かメールにてお問い合わせください。"},mediaID_02:{type:"number",default:0},mediaURL_02:{type:"string",source:"attribute",selector:"img.image_02",attribute:"src"},title_02:{type:"array",source:"children",selector:".title_02",default:"無料相談"},description_02:{type:"array",source:"children",selector:".desc_02",default:"ご相談内容をしっかりとお聞きし、解決方法を提案します。"},mediaID_03:{type:"number",default:0},mediaURL_03:{type:"string",source:"attribute",selector:"img.image_03",attribute:"src"},title_03:{type:"array",source:"children",selector:".title_03",default:"見積もり・ご検討"},description_03:{type:"array",source:"children",selector:".desc_03",default:"費用について見積もりを提示いたします。じっくりご検討ください。"},mediaID_04:{type:"number",default:0},mediaURL_04:{type:"string",source:"attribute",selector:"img.image_04",attribute:"src"},title_04:{type:"array",source:"children",selector:".title_04",default:"ご依頼"},description_04:{type:"array",source:"children",selector:".desc_04",default:"ご検討の上、ご納得いただいた場合は、正式にご依頼ください。"},text_bottom:{type:"array",source:"children",selector:".text-bottom",default:"来所・訪問に加えてオンラインでもご相談に対応しております。"}},edit:t=>{const{className:c,attributes:{heading:r,subHeading:i,mediaID_01:n,mediaURL_01:m,title_01:s,description_01:o,mediaID_02:d,mediaURL_02:p,title_02:u,description_02:_,mediaID_03:g,mediaURL_03:h,title_03:N,description_03:v,mediaID_04:E,mediaURL_04:b,title_04:R,description_04:y,mediaID_05:C,mediaURL_05:w,title_05:x,description_05:U,text_bottom:T},setAttributes:k}=t;return(0,e.createElement)("div",{className:`${c} container`},(0,e.createElement)("div",{className:"heading-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h2",placeholder:"heading",value:r,onChange:e=>{k({heading:e})}}),(0,e.createElement)(a.RichText,{tagName:"h3",className:"SubHeading",placeholder:"SubHeading",value:i,onChange:e=>{k({subHeading:e})}})),(0,e.createElement)("div",{className:"col-2"},(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{k({mediaURL_01:e.url,mediaID_01:e.id})},allowedTypes:["image"],value:n,render:({open:t})=>(0,e.createElement)(l.Button,{className:n?"image-button":"button button-large",onClick:t},n?(0,e.createElement)("img",{className:"image_01",src:m,alt:"アップロード画像"}):"画像をアップロード")})),0!=n&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_01:0,mediaURL_01:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_01",placeholder:"title",value:s,onChange:e=>{k({title_01:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_01",placeholder:"description",value:o,onChange:e=>{k({description_01:e})}}))),(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{k({mediaURL_02:e.url,mediaID_02:e.id})},allowedTypes:["image"],value:d,render:({open:t})=>(0,e.createElement)(l.Button,{className:d?"image-button":"button button-large",onClick:t},d?(0,e.createElement)("img",{className:"image_02",src:p,alt:"アップロード画像"}):"画像をアップロード")})),0!=d&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_02:0,mediaURL_02:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_02",placeholder:"title",value:u,onChange:e=>{k({title_02:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_02",placeholder:"description",value:_,onChange:e=>{k({description_02:e})}}))),(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{k({mediaURL_03:e.url,mediaID_03:e.id})},allowedTypes:["image"],value:g,render:({open:t})=>(0,e.createElement)(l.Button,{className:g?"image-button":"button button-large",onClick:t},g?(0,e.createElement)("img",{className:"image_03",src:h,alt:"アップロード画像"}):"画像をアップロード")})),0!=g&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_03:0,mediaURL_03:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_01",placeholder:"title",value:N,onChange:e=>{k({title_03:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_03",placeholder:"description",value:v,onChange:e=>{k({description_03:e})}}))),(0,e.createElement)("div",{className:"col"},(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>{k({mediaURL_04:e.url,mediaID_04:e.id})},allowedTypes:["image"],value:E,render:({open:t})=>(0,e.createElement)(l.Button,{className:E?"image-button":"button button-large",onClick:t},E?(0,e.createElement)("img",{className:"image_04",src:b,alt:"アップロード画像"}):"画像をアップロード")})),0!=E&&(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(l.Button,{onClick:()=>{t.setAttributes({mediaID_04:0,mediaURL_04:""})},isDestructive:!0,className:"removeImage"},"画像を削除"))),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText,{tagName:"h4",className:"title_04",placeholder:"title",value:R,onChange:e=>{k({title_04:e})}}),(0,e.createElement)(a.RichText,{tagName:"p",className:"desc_04",placeholder:"description",value:y,onChange:e=>{k({description_04:e})}})))),(0,e.createElement)("div",null,(0,e.createElement)(a.RichText,{tagName:"p",placeholder:"text bottom",value:T,onChange:e=>{k({text_bottom:e})}})))},save:t=>{const{className:l,attributes:{heading:c,subHeading:r,mediaURL_01:i,title_01:n,description_01:m,mediaURL_02:s,title_02:o,description_02:d,mediaURL_03:p,title_03:u,description_03:_,mediaURL_04:g,title_04:h,description_04:N,mediaURL_05:v,title_05:E,description_05:b,text_bottom:R}}=t;return(0,e.createElement)("div",{className:`${l} container`},(0,e.createElement)("div",{className:"heading-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h2",className:"heading",value:c}),(0,e.createElement)(a.RichText.Content,{tagName:"h3",className:"SubHeading",value:r})),(0,e.createElement)("div",{className:"col-2"},(0,e.createElement)("div",{className:"col"},i&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_01",src:i,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_01",value:n}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_01",value:m}))),(0,e.createElement)("div",{className:"col"},s&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_02",src:s,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_02",value:o}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_02",value:d}))),(0,e.createElement)("div",{className:"col"},p&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_03",src:p,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_03",value:u}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_03",value:_}))),(0,e.createElement)("div",{className:"col"},g&&(0,e.createElement)("div",{className:"image-wrapper"},(0,e.createElement)("img",{className:"image_04",src:g,alt:"画像"})),(0,e.createElement)("div",{className:"content-wrapper"},(0,e.createElement)(a.RichText.Content,{tagName:"h4",className:"title_04",value:h}),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"desc_04",value:N})))),(0,e.createElement)(a.RichText.Content,{tagName:"p",className:"text-bottom",value:R}))}})}},a={};function l(e){var c=a[e];if(void 0!==c)return c.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,a,c,r)=>{if(!a){var i=1/0;for(o=0;o<e.length;o++){for(var[a,c,r]=e[o],n=!0,m=0;m<a.length;m++)(!1&r||i>=r)&&Object.keys(l.O).every((e=>l.O[e](a[m])))?a.splice(m--,1):(n=!1,r<i&&(i=r));if(n){e.splice(o--,1);var s=c();void 0!==s&&(t=s)}}return t}r=r||0;for(var o=e.length;o>0&&e[o-1][2]>r;o--)e[o]=e[o-1];e[o]=[a,c,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={25:0,670:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var c,r,[i,n,m]=a,s=0;if(i.some((t=>0!==e[t]))){for(c in n)l.o(n,c)&&(l.m[c]=n[c]);if(m)var o=m(l)}for(t&&t(a);s<i.length;s++)r=i[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(o)},a=globalThis.webpackChunkblock_dev=globalThis.webpackChunkblock_dev||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var c=l.O(void 0,[670],(()=>l(633)));c=l.O(c)})();