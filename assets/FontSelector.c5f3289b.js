import{u as e}from"./index.656ddcf2.js";import{d as t,B as a,c as s,b as l,p as o,l as n,z as r,e as f,E as i,t as c,D as p,F as u,h as d,f as m,L as h,u as y,H as F,G as v,R as L,j as b}from"./element-plus.fcb38caf.js";var g=t({name:"FontSelector",props:{showRefresh:{type:Boolean,default:!1}},setup(){const t=e();a((()=>{t.state.fontFamilyList&&0!==t.state.fontFamilyList.length||t.commit("updateFontFamilyList")}));const o=s((()=>t.state.fontFamilyList)),n=l(!1);return{fontList:o,rotate:n,refresh:()=>{t.commit("updateFontFamilyList"),n.value=!0,setTimeout((()=>{n.value=!1}),500)}}}});o("data-v-7f535d1e");const w={class:"wrapper"},x={style:{float:"left","font-weight":"bold"}},_={style:{float:"right",color:"#8492a6","font-size":"13px","margin-left":"36px"}};n(),g.render=function(e,t,a,s,l,o){const n=r("el-option"),g=r("el-select");return f(),i("div",w,[c(g,v({placeholder:"请选择相关字体库",clearable:""},e.$attrs),{default:p((()=>[(f(!0),i(u,null,d(e.fontList,(e=>(f(),m(n,{key:e.cn,value:e.en,label:e.cn,style:F({fontFamily:e.en})},{default:p((()=>[h("span",x,y(e.cn),1),h("span",_,y(e.en),1)])),_:2},1032,["value","label","style"])))),128))])),_:1},16),e.showRefresh?(f(),i("i",{key:0,class:L(["el-icon-refresh",{rotate:e.rotate}]),onClick:t[0]||(t[0]=(...t)=>e.refresh&&e.refresh(...t))},null,2)):b("",!0)])},g.__scopeId="data-v-7f535d1e";export default g;