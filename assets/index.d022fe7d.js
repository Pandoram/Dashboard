import{W as e,_ as t,r as a,w as o,H as i,o as n,l as s,i as l,I as d,F as c,p as r,E as h,G as u,s as p,t as m,d as v,u as k,y as g,N as f,j as S,h as C,X as y,O as D,Y as w,R as M}from"./index.bb742943.js";import{d as b}from"./dayjs.min.28237ddf.js";import{l as x,g as Y}from"./color.556e4bcb.js";var O,_,A={exports:{}},P=A.exports=(O="week",_="year",function(e,t,a){var o=t.prototype;o.week=function(e){if(void 0===e&&(e=null),null!==e)return this.add(7*(e-this.week()),"day");var t=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var o=a(this).startOf(_).add(1,_).date(t),i=a(this).endOf(O);if(o.isBefore(i))return 1}var n=a(this).startOf(_).date(t).startOf(O).subtract(1,"millisecond"),s=this.diff(n,O,!0);return s<0?a(this).startOf("week").week():Math.ceil(s)},o.weeks=function(e){return void 0===e&&(e=null),this.week(e)}});b.extend(P);const L={name:"DatePicker",props:{date:String,todo:{type:Object,required:!0},isDark:{type:Boolean,default:!1}},emit:["selectDate"],setup(e,{emit:t}){const n=a("");o((()=>e.date),(e=>{n.value=b(e).format("YYYY-MM")}),{immediate:!0});return{weekStrArr:["S","M","T","W","T","F","S"],dayList:i((()=>{const e=b().month(b(n.value).month()).startOf("month");let t=b().week(b(e).week()).startOf("week");const a=[];for(let o=0;o<35;o++){const e=~~t.format("DD"),o=t.format("YYYY-MM-DD"),i=~~t.format("MM");a.push({label:e,value:o,month:i}),t=t.add(1,"d")}return a})),selectedMonth:i((()=>~~b(n.value).format("MM"))),labelMonth:i((()=>b(n.value).format("MMM, YYYY"))),hasTodoListDates:i((()=>Object.keys(e.todo).filter((t=>e.todo[t].some((e=>!e.isChecked)))))),handleClickDay:e=>t("selectDate",e),handlePrevClick:()=>{n.value=b(n.value).subtract(1,"month").format("YYYY-MM")},handleNextClick:()=>{n.value=b(n.value).add(1,"month").format("YYYY-MM")}}}},E=e=>(p("data-v-68c5d07e"),e=e(),m(),e),T={class:"calendar__date"},N=[E((()=>l("svg",{viewBox:"0 0 1024 1024",width:"20",height:"20"},[l("path",{d:"M754.739998 129.124869 677.034219 62.024635 266.002818 515.097548 672.169421 958.024379 749.894643 890.904703 408.017252 515.097548Z"})],-1)))],B={class:"calendar__head content"},j=[E((()=>l("svg",{viewBox:"0 0 1024 1024",width:"20",height:"20"},[l("path",{d:"M754.739998 129.124869 677.034219 62.024635 266.002818 515.097548 672.169421 958.024379 749.894643 890.904703 408.017252 515.097548Z"})],-1)))],z=["onClick"];const F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],J=v({name:"TodoList",components:{DatePicker:t(L,[["render",function(e,t,a,o,i,p){return n(),s("div",{class:"date-picker",style:u({"--themeTextColor1":a.isDark?"#fff":"#464646","--themeTextColor2":a.isDark?"#464646":"#fff"})},[l("div",T,[l("div",{class:"calendar__head prev",onClick:t[0]||(t[0]=(...e)=>o.handlePrevClick&&o.handlePrevClick(...e))},N),l("div",B,d(o.labelMonth),1),l("div",{class:"calendar__head next",onClick:t[1]||(t[1]=(...e)=>o.handleNextClick&&o.handleNextClick(...e))},j),(n(!0),s(c,null,r(o.weekStrArr,((e,t)=>(n(),s("div",{class:"calendar__day",key:e+t},d(e),1)))),128)),(n(!0),s(c,null,r(o.dayList,(e=>(n(),s("div",{class:h(["calendar__number",{"not-this-month":e.month!==o.selectedMonth,active:e.value===a.date,tips:o.hasTodoListDates.includes(e.value)}]),key:e.value,onClick:t=>o.handleClickDay(e)},d(e.label),11,z)))),128))])],4)}],["__scopeId","data-v-68c5d07e"]])},directives:{focus(e){document.activeElement!==e&&e.focus()}},props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0},isAction:{type:Boolean,default:!1}},setup(e){const t=k(),o=i((()=>x(e.componentSetting.themeColor||"#643a7a",50))),n=i((()=>Y(e.componentSetting.themeColor||"#643a7a")<150)),s=a(),l=a(),d=a(270);g((()=>{var e,t;s.value=b().format("YYYY-MM-DD"),(null==(t=null==(e=l.value)?void 0:e.$el)?void 0:t.offsetHeight)&&(d.value=l.value.$el.offsetHeight+30)}));const c=a(""),r=a(!1),h=i((()=>e.componentSetting.todo[s.value]||[]));return{weekDay:i((()=>F[new Date(s.value).getDay()])),formatterDate:i((()=>{const e=new Date(s.value).toDateString().split(" ");return`${e[1]} ${e[2]}, ${e[3]}`})),todoList:h,handleChecked:a=>{const o=!h.value[a].isChecked,i=JSON.parse(JSON.stringify(e.element));e.isAction?(i.actionSetting.actionClickValue.componentSetting.todo[s.value][a].isChecked=o,t.dispatch("updateActionElement",i)):i.componentSetting.todo[s.value][a].isChecked=o,t.dispatch("editComponent",i)},handleRemove:a=>{const o=JSON.parse(JSON.stringify(e.element));e.isAction?(o.actionSetting.actionClickValue.componentSetting.todo[s.value].splice(a,1),t.dispatch("updateActionElement",o)):o.componentSetting.todo[s.value].splice(a,1),t.dispatch("editComponent",o)},handleAdd:()=>{c.value="";const a=JSON.parse(JSON.stringify(e.element)),o={content:"",isChecked:!1,isEditing:!0};e.isAction?(a.actionSetting.actionClickValue.componentSetting.todo[s.value]?a.actionSetting.actionClickValue.componentSetting.todo[s.value].push(o):a.actionSetting.actionClickValue.componentSetting.todo[s.value]=[o],t.dispatch("updateActionElement",a)):a.componentSetting.todo[s.value]?a.componentSetting.todo[s.value].push(o):a.componentSetting.todo[s.value]=[o],t.dispatch("editComponent",a)},handleEditSubmit:(a,o,i)=>{if(o.isEditing){const o=JSON.parse(JSON.stringify(e.element)),n=e.isAction?o.actionSetting.actionClickValue.componentSetting.todo[s.value]:o.componentSetting.todo[s.value];a.currentTarget.value?(n[i].content=c.value=a.currentTarget.value,n[i].isEditing=!1):n.splice(i,1),e.isAction&&t.dispatch("updateActionElement",o),t.dispatch("editComponent",o)}},editingValue:c,showDatePicker:r,date:s,updateDate:e=>{s.value=e.value},themeLightColor:o,isDark:n,dateTimePickerDom:l,pickerHeight:d,contextmenu:e=>{t.state.isLock&&e.stopPropagation()}}}}),V=e=>(p("data-v-2d2c82a4"),e=e(),m(),e),$={class:"head"},H={class:"list"},q=["checked"],I=["onClick"],R=["value","onBlur","onKeyup"],W=["onClick"],K={class:"wrapper"},Z=["width","height"],G=[V((()=>l("path",{class:"checkmark",fill:"none","stroke-width":"8","stroke-miterlimit":"10",d:"M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"},null,-1)))],X=["onClick"],Q=["width","height"],U=[V((()=>l("path",{d:"M510.8096 420.3008l335.296-335.296 90.5088 90.5088-335.296 335.296 335.296 335.296-90.5088 90.5088-335.296-335.296-335.296 335.296-90.5088-90.5088 335.296-335.296-335.296-335.296 90.5088-90.5088z"},null,-1)))],ee={viewBox:"0 0 1024 1024",width:"20",height:"20"},te=["fill"];var ae=t(J,[["render",function(e,t,a,o,i,h){const p=C("DatePicker"),m=y("focus");return n(),s("div",{class:"todo-list-card",style:u({"--themeColor":e.componentSetting.themeColor,"--themeLightColor":e.themeLightColor,fontSize:e.componentSetting.baseFontSize+"px",padding:e.componentSetting.padding+"px"}),onContextmenu:t[3]||(t[3]=(...t)=>e.contextmenu&&e.contextmenu(...t))},[l("div",$,[l("div",{class:"title",onClick:t[0]||(t[0]=f((t=>e.showDatePicker=!e.showDatePicker),["stop"]))},d(e.weekDay),1),l("div",{class:"subtitle",onClick:t[1]||(t[1]=f((t=>e.showDatePicker=!e.showDatePicker),["stop"]))},d(e.formatterDate),1),l("div",{class:"picker",style:u(e.showDatePicker?`border-bottom: 1px solid var(--themeLightColor); height: ${e.pickerHeight}px`:"")},[S(p,{ref:"dateTimePickerDom",date:e.date,todo:e.componentSetting.todo,onSelectDate:e.updateDate,isDark:e.isDark},null,8,["date","todo","onSelectDate","isDark"])],4)]),l("ul",H,[(n(!0),s(c,null,r(e.todoList,((t,a)=>(n(),s("li",{class:"list-item",key:t.content+a},[l("input",{type:"checkbox",name:"todo",checked:t.isChecked},null,8,q),t.isEditing?D((n(),s("input",{key:1,type:"text",class:"edit",value:e.editingValue,onBlur:o=>e.handleEditSubmit(o,t,a),onKeyup:w((o=>e.handleEditSubmit(o,t,a)),["enter"])},null,40,R)),[[m]]):(n(),s("div",{key:0,class:"text",onClick:t=>e.handleChecked(a)},d(t.content),9,I)),D(l("div",{class:"button",onClick:t=>e.handleChecked(a)},null,8,W),[[M,!t.isChecked]]),D(l("div",K,[(n(),s("svg",{viewBox:"0 0 98.5 98.5",width:20*e.componentSetting.baseFontSize/16,height:20*e.componentSetting.baseFontSize/16},G,8,Z))],512),[[M,t.isChecked]]),l("div",{class:"close",onClick:f((t=>e.handleRemove(a)),["stop"])},[(n(),s("svg",{viewBox:"0 0 1024 1024",width:20*e.componentSetting.baseFontSize/16,height:20*e.componentSetting.baseFontSize/16},U,8,Q))],8,X)])))),128))]),l("div",{class:"add",onClick:t[2]||(t[2]=(...t)=>e.handleAdd&&e.handleAdd(...t))},[(n(),s("svg",ee,[l("path",{fill:e.isDark?"#fff":"#464646",d:"M510.8096 420.3008l335.296-335.296 90.5088 90.5088-335.296 335.296 335.296 335.296-90.5088 90.5088-335.296-335.296-335.296 335.296-90.5088-90.5088 335.296-335.296-335.296-335.296 90.5088-90.5088z"},null,8,te)]))])],36)}],["__scopeId","data-v-2d2c82a4"]]);export{ae as default};