(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{96:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(8),i=n.n(a),o=n(17),r=n(39),s=n.n(r),l=n(51),j=n(5),u=n(22),d=n.n(u),b=n(54),h=n.n(b),O=n(2);var p=function(){return Object(O.jsx)("header",{children:Object(O.jsxs)("h1",{children:[Object(O.jsx)(h.a,{}),"Keeper"]})})};var x=function(){var e=(new Date).getFullYear();return Object(O.jsx)("footer",{children:Object(O.jsxs)("p",{children:["Copyright \u24d2 ",e," Chirag Garg"]})})},f=n(12),v=n(27),m=n(56),g=n.n(m),C=n(57),k=n.n(C),w=n(58),N=n.n(w),y=n(59),S=n.n(y),T=n(118);function D(e){var t=e.handleChange,n=e.note;return Object(O.jsx)("input",{name:"title",onChange:t,value:n.title,placeholder:"Title",maxLength:"20",autoComplete:"off",autoFocus:!0})}function L(e){var t=e.handleChange,n=e.note,c=e.rowExpand;return Object(O.jsx)("textarea",{name:"content",onChange:t,value:n.content,placeholder:"Take a note...",rows:c||"3"})}var E=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(!1),r=Object(j.a)(o,2),s=r[0],l=r[1],u=Object(c.useState)({title:e.title,content:e.content}),b=Object(j.a)(u,2),h=b[0],p=b[1];function x(){i(!a)}function m(e){var t=e.target,n=t.name,c=t.value;"title"===e.target.name&&20===e.target.value.length&&console.log("Max Characters reached"),p((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},n,c))}))}return Object(O.jsxs)("div",{className:"note",onMouseOver:x,onMouseOut:x,children:[s?Object(O.jsx)(D,{handleChange:m,note:h}):Object(O.jsx)("h1",{children:e.title}),s?Object(O.jsx)(L,{handleChange:m,note:h}):Object(O.jsx)("p",{children:e.content}),Object(O.jsx)(T.a,{in:a,children:Object(O.jsx)("button",{title:"Delete",onClick:function(){e.onDelete(e.id)},children:Object(O.jsx)(g.a,{})})}),Object(O.jsx)(T.a,{in:a&&!s,children:Object(O.jsx)("button",{title:"Edit",onClick:function(){l(!s)},children:Object(O.jsx)(k.a,{})})}),Object(O.jsx)(T.a,{in:s,children:Object(O.jsx)("button",{title:"Done",onClick:function(){var t={title:h.title,content:h.content};d.a.put("".concat("https://note-keeper1.herokuapp.com/api","/notes/update/").concat(e.id),t,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}).then((function(t){console.log(t.data),e.updateList()})),l(!1)},children:Object(O.jsx)(N.a,{})})}),Object(O.jsx)(T.a,{in:s,children:Object(O.jsx)("button",{title:"Cancel",onClick:function(){p({title:e.title,content:e.content}),l(!1)},children:Object(O.jsx)(S.a,{})})})]})},A=n(60),F=n.n(A),M=n(121),J=n(120),U=n(119),_=n(122);var B=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(!1),r=Object(j.a)(o,2),s=r[0],l=r[1],u=Object(c.useState)(!1),b=Object(j.a)(u,2),h=b[0],p=b[1],x=Object(c.useState)({title:"",content:""}),m=Object(j.a)(x,2),g=m[0],C=m[1];function k(e){var t=e.target,n=t.name,c=t.value;"title"===e.target.name&&20===e.target.value.length&&(l(!0),setTimeout((function(){l(!1)}),5e3)),C((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},n,c))}))}return Object(O.jsx)(U.a,{onClickAway:function(){i(!1)},children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"alert-container",children:[Object(O.jsx)("div",{className:s?"":"hideAlert",children:Object(O.jsx)(J.a,{in:s,direction:"down",children:Object(O.jsx)(_.a,{className:"alert",severity:"warning",variant:"filled",children:"Reached Title's max character limit."})})}),Object(O.jsx)("div",{className:h?"":"hideAlert",children:Object(O.jsx)(J.a,{in:h,direction:"down",children:Object(O.jsx)(_.a,{className:"alert",severity:"warning",variant:"filled",children:"Please type a Title and a Note."})})})]}),Object(O.jsxs)("form",{className:"create-note",onClick:function(){i(!0)},children:[a&&Object(O.jsx)(D,{handleChange:k,note:g}),Object(O.jsx)(L,{handleChange:k,note:g,rowExpand:a?"3":"1"}),Object(O.jsx)(T.a,{in:a,children:Object(O.jsx)(M.a,{onClick:function(t){var n={title:g.title,content:g.content};""===g.title||""===g.content?(p(!0),setTimeout((function(){p(!1)}),5e3)):(d.a.post("https://note-keeper1.herokuapp.com/api/notes",n,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}).then((function(e){return console.log(e.data)})),C({title:"",content:""}),i(!1),e.updateList(),t.preventDefault())},children:Object(O.jsx)(F.a,{})})})]})]})})};var G=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([!0]),r=Object(j.a)(i,2),u=r[0],b=r[1],h=Object(c.useState)(!0),f=Object(j.a)(h,2),v=f[0],m=f[1];if(Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(!0),d.a.get("https://note-keeper1.herokuapp.com/api/notes/").then((function(e){m(!1),b(!0),a(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u]),v)return"Loading...";function g(){b(!1)}function C(e){d.a.delete("".concat("https://note-keeper1.herokuapp.com/api","/notes/").concat(e)).then((function(e){console.log(e.data),g()}))}return Object(O.jsxs)("div",{className:"page-container",children:[Object(O.jsx)(p,{}),Object(O.jsx)(B,{onAdd:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])})),g()},updateList:g}),Object(O.jsx)("div",{className:"flex-notes-container",children:n.map((function(e){return Object(O.jsx)(E,{className:"flex-note",id:e._id,title:e.title,content:e.content,onDelete:C,updateList:g},e._id)}))}),Object(O.jsx)(x,{})]})};i.a.render(Object(O.jsx)(G,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.6b35cbdd.chunk.js.map