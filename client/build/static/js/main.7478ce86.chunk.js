(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{96:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(8),o=n.n(a),i=n(39),r=n.n(i),s=n(50),l=n(5),j=n(21),u=n.n(j),d=n(53),b=n.n(d),h=n(2);var O=function(){return Object(h.jsx)("header",{children:Object(h.jsxs)("h1",{children:[Object(h.jsx)(b.a,{}),"Keeper"]})})};var p=function(){var e=(new Date).getFullYear();return Object(h.jsx)("footer",{children:Object(h.jsxs)("p",{children:["Copyright \u24d2 ",e," Chirag Garg"]})})},x=n(12),f=n(27),v=n(56),m=n.n(v),g=n(57),C=n.n(g),k=n(58),w=n.n(k),N=n(59),y=n.n(N),T=n(118);function S(e){var t=e.handleChange,n=e.note;return Object(h.jsx)("input",{name:"title",onChange:t,value:n.title,placeholder:"Title",maxLength:"20",autoComplete:"off",autoFocus:!0})}function D(e){var t=e.handleChange,n=e.note,c=e.rowExpand;return Object(h.jsx)("textarea",{name:"content",onChange:t,value:n.content,placeholder:"Take a note...",rows:c||"3"})}var L=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(!1),r=Object(l.a)(i,2),s=r[0],j=r[1],d=Object(c.useState)({title:e.title,content:e.content}),b=Object(l.a)(d,2),O=b[0],p=b[1];function v(){o(!a)}function g(e){var t=e.target,n=t.name,c=t.value;"title"===n&&20===c.length&&console.log("Max Characters reached"),p((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,c))}))}return Object(h.jsxs)("div",{className:"note",onMouseOver:v,onMouseOut:v,children:[s?Object(h.jsx)(S,{handleChange:g,note:O}):Object(h.jsx)("h1",{children:e.title}),s?Object(h.jsx)(D,{handleChange:g,note:O}):Object(h.jsx)("p",{children:e.content}),Object(h.jsx)(T.a,{in:a,children:Object(h.jsx)("button",{title:"Delete",onClick:function(){e.onDelete(e.id)},children:Object(h.jsx)(m.a,{})})}),Object(h.jsx)(T.a,{in:a&&!s,children:Object(h.jsx)("button",{title:"Edit",onClick:function(){j(!s)},children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(T.a,{in:s,children:Object(h.jsx)("button",{title:"Done",onClick:function(){var t=O.title,n=O.content;""===t||""===n?console.log("Please type a Title and a Note."):(u.a.put("".concat("https://note-keeper1.herokuapp.com/api","/notes/update/").concat(e.id),O,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}).then((function(t){console.log(t.data),e.updateList()})),j(!1))},children:Object(h.jsx)(w.a,{})})}),Object(h.jsx)(T.a,{in:s,children:Object(h.jsx)("button",{title:"Cancel",onClick:function(){p({title:e.title,content:e.content}),j(!1)},children:Object(h.jsx)(y.a,{})})})]})},E=n(60),F=n.n(E),A=n(121),M=n(120),J=n(119),P=n(122);var U=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(!1),r=Object(l.a)(i,2),s=r[0],j=r[1],d=Object(c.useState)(!1),b=Object(l.a)(d,2),O=b[0],p=b[1],v=Object(c.useState)({title:"",content:""}),m=Object(l.a)(v,2),g=m[0],C=m[1];function k(e){var t=e.target,n=t.name,c=t.value;"title"===n&&20===c.length&&(j(!0),setTimeout((function(){j(!1)}),5e3)),C((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,c))}))}return Object(h.jsx)(J.a,{onClickAway:function(){o(!1)},children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"alert-container",children:[Object(h.jsx)("div",{className:s?"":"hideAlert",children:Object(h.jsx)(M.a,{in:s,direction:"down",children:Object(h.jsx)(P.a,{className:"alert",severity:"warning",variant:"filled",children:"Reached Title's max character limit."})})}),Object(h.jsx)("div",{className:O?"":"hideAlert",children:Object(h.jsx)(M.a,{in:O,direction:"down",children:Object(h.jsx)(P.a,{className:"alert",severity:"warning",variant:"filled",children:"Please type a Title and a Note."})})})]}),Object(h.jsxs)("form",{className:"create-note",onClick:function(){o(!0)},children:[a&&Object(h.jsx)(S,{handleChange:k,note:g}),Object(h.jsx)(D,{handleChange:k,note:g,rowExpand:a?"3":"1"}),Object(h.jsx)(T.a,{in:a,children:Object(h.jsx)(A.a,{onClick:function(t){var n=g.title,c=g.content;""===n||""===c?(p(!0),setTimeout((function(){p(!1)}),5e3)):(u.a.post("https://note-keeper1.herokuapp.com/api/notes",g,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}).then((function(e){return console.log(e.data)})),C({title:"",content:""}),o(!1),e.updateList(),t.preventDefault())},children:Object(h.jsx)(F.a,{})})})]})]})})};var _=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([!0]),i=Object(l.a)(o,2),j=i[0],d=i[1],b=Object(c.useState)(!0),x=Object(l.a)(b,2),f=x[0],v=x[1];if(Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,u.a.get("https://note-keeper1.herokuapp.com/api/notes/").then((function(e){v(!1),d(!0),a(e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]),f)return"Loading...";function m(){d(!1)}function g(e){u.a.delete("".concat("https://note-keeper1.herokuapp.com/api","/notes/").concat(e)).then((function(e){console.log(e.data),m()}))}return Object(h.jsxs)("div",{className:"page-container",children:[Object(h.jsx)(O,{}),Object(h.jsx)(U,{updateList:m}),Object(h.jsx)("div",{className:"flex-notes-container",children:n.map((function(e){return Object(h.jsx)(L,{className:"flex-note",id:e._id,title:e.title,content:e.content,onDelete:g,updateList:m},e._id)}))}),Object(h.jsx)(p,{})]})};o.a.render(Object(h.jsx)(_,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.7478ce86.chunk.js.map