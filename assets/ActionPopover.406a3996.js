import{_ as e,d as t,r as a,y as o,z as s,w as l,c as i,j as n,e as c,A as u,C as d,o as p,l as v,D as r,k as h,E as f,G as m,s as g,t as k,i as x}from"./index.bb742943.js";import{g as y}from"./direction.933aa86d.js";const w=[(e=>(g("data-v-709ad391"),e=e(),k(),e))((()=>x("i",{class:"el-icon-close"},null,-1)))];var C=e(t({props:{popoverCustomClass:{type:String},closeOnClickOutside:{type:Boolean,default:!0}},emits:["opend","closed"],setup(e,{expose:t,emit:g}){const k=e,x=a(!1),C=a(!1),O=a(""),$=a();o((()=>{document.addEventListener("click",_)})),s((()=>{document.removeEventListener("click",_)}));const _=e=>{k.closeOnClickOutside&&x.value&&!$.value.contains(e.target)&&(x.value=!1)},T=a({width:200,height:200,top:0,left:0}),b=async(e,t)=>{setTimeout((()=>{if(!e.actionSetting)return;const{actionSetting:a}=e,{actionType:o,actionClickType:s,actionClickValue:l}=a;if(1===o&&1===s){const{w:e,h:a,direction:o}=l,[s,i,n,c]=y(t,{width:e||200,height:a||200},o);T.value={width:e||200,height:a||200,left:s,top:i},O.value=`${n-s}px ${c-i}px`,x.value=!0,C.value=0===o}}))},j=()=>{x.value=!1,C.value=!1};return l((()=>x.value),(e=>{g(e?"opend":"closed")})),t({open:b,close:j,toggle:(e,t)=>{x.value?j():b(e,t)},defaultOpen:({w:e,h:t,direction:a},o)=>{setTimeout((()=>{const[s,l,i,n]=y(o,{width:e||200,height:t||200},a);T.value={width:e||200,height:t||200,left:s,top:l},O.value=`${i-s}px ${n-l}px`,x.value=!0,C.value=0===a}))}}),(t,a)=>(p(),i(d,{to:"body"},[n(u,{name:"zoomIn"},{default:c((()=>[x.value?(p(),v("div",{key:0,ref_key:"actionPopover",ref:$,class:f(["action-popover",e.popoverCustomClass]),style:m({width:T.value.width+"px",height:T.value.height+"px",top:T.value.top+"px",left:T.value.left+"px",transformOrigin:O.value})},[r(t.$slots,"default",{},void 0,!0),C.value?(p(),v("div",{key:0,class:"close",onClick:j},w)):h("",!0)],6)):h("",!0)])),_:3})]))}}),[["__scopeId","data-v-709ad391"]]);export{C as default};