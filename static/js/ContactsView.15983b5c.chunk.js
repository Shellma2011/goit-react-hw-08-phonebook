"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[705],{6074:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(5861),a=t(885),i=t(7757),o=t.n(i),s=t(2791),d=t(2411),x=t(3008),c=t(6140),l=t(4554),u=t(1331),p=t(6151),h=t(184);function f(){var e=(0,s.useState)(""),n=(0,a.Z)(e,2),t=n[0],i=n[1],f=(0,s.useState)(""),m=(0,a.Z)(f,2),b=m[0],g=m[1],v=(0,d.Jx)().data,j=(0,d.Lr)(),Z=(0,a.Z)(j,2),w=Z[0],k=Z[1].isLoading,y=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":i(r);break;case"number":g(r);break;default:return}},C=function(){var e=(0,r.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!v.find((function(e){return e.name.toLowerCase()===t.toLowerCase()||e.number===b}))){e.next=5;break}c.ZP.error("".concat(t," is already in contacts!")),e.next=7;break;case 5:return e.next=7,w({name:t,number:b});case 7:i(""),g("");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsxs)(l.Z,{component:"form",onSubmit:C,autoComplete:"off",sx:{maxWidth:"260px",margin:"auto",padding:"16px",border:"1px solid #2a2a2a",borderRadius:"4px","&:hover":{boxShadow:"-1px 15px 30px -12px black"}},children:[(0,h.jsx)(c.x7,{position:"top-center",reverseOrder:!1}),(0,h.jsx)(u.Z,{margin:"none",fullWidth:!0,label:"Name",variant:"outlined",type:"text",name:"name",value:t,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,h.jsx)(u.Z,{margin:"normal",fullWidth:!0,label:"Number",variant:"outlined",type:"tel",name:"number",value:b,onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,h.jsxs)(p.Z,{type:"submit",variant:"contained",sx:{width:80,color:"white",background:"#3f51b5",fontWeight:600,"&:hover":{backgroundColor:"#303f9f"}},children:[k&&(0,h.jsx)(x.Xw,{}),"add"]})]})}var m=t(1413),b=t(890),g=t(7247),v=function(e){var n=e.id,t=e.name,r=e.number,i=(0,d.Nt)(),o=(0,a.Z)(i,2),s=o[0],x=o[1].isLoading;return(0,h.jsxs)(l.Z,{component:"li",fullWidth:!0,sx:{display:"inline",marginBottom:"5px",padding:"8px 12px",border:"1px solid rgba(33, 33, 33, 0.2)",borderRadius:"4px","&:hover":{boxShadow:"-1px 15px 30px -12px black"}},children:[(0,h.jsx)(b.Z,{sx:{display:"flex",textAlign:"start",fontWeight:"bold"},children:t+":"}),(0,h.jsxs)(l.Z,{component:"div",sx:{display:"flex",alignItems:"center",justifyContent:"space-between",fontWeight:"bold"},children:[(0,h.jsx)(b.Z,{children:r}),(0,h.jsx)(p.Z,{type:"button",onClick:function(){return s(n)},disabled:x,sx:{padding:0,minWidth:"24px"},children:x?(0,h.jsx)(g.Z,{sx:{color:"#3f51b5",background:"white","&:hover":{color:"white",background:"#303f9f",borderRadius:50}}}):(0,h.jsx)(g.Z,{sx:{color:"#303f9f",background:"white",borderRadius:50}})})]})]})},j=function(e){return e.contacts.filter},Z=t(2978),w=function(){var e=(0,d.Jx)(),n=e.data,t=e.isFetching,r=(0,Z.v9)(j).toLowerCase(),a=n?n.filter((function(e){return e.name.toLowerCase().includes(r)})):[];return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)(x.Qf,{}),(0,h.jsx)(l.Z,{component:"ul",maxWidth:"xs",sx:{display:"flex",flexDirection:"column",maxWidth:"260px",margin:"auto",marginBottom:"20px",padding:"16px",border:"1px solid #2a2a2a",borderRadius:"4px"},children:a&&a.map((function(e){return(0,h.jsx)(v,(0,m.Z)({},e),e.id)}))})]})},k=t(6445),y=function(e){var n=e.title,t=e.children;return(0,h.jsxs)(k.Z,{maxWidth:"xs",children:[n&&(0,h.jsx)(b.Z,{sx:{fontWeight:700,marginTop:"25px",textTransform:"uppercase",fontSize:20,color:"#5c6368"},children:n}),t]})},C=t(4443),W=function(){var e=(0,Z.v9)(j),n=(0,Z.I0)();return(0,h.jsx)(l.Z,{sx:{maxWidth:"260px",margin:"auto",padding:"12px"},children:(0,h.jsx)(u.Z,{margin:"none",label:"Find contacts by name",variant:"outlined",type:"text",value:e,onChange:function(e){return n((0,C.M)(e.target.value))}})})};function z(e){var n=e.title,t=e.children;return(0,h.jsxs)(k.Z,{maxWidth:"xs",sx:{marginTop:15,textAlign:"center",minWidth:280,border:"1px solid grey",borderRadius:"25px",background:"white",boxShadow:"-1px 15px 30px -12px black",zIndex:9999},children:[n&&(0,h.jsx)(b.Z,{sx:{fontWeight:700,padding:"20px",textTransform:"uppercase",fontSize:24,color:"#5c6368"},children:n}),t]})}function S(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(z,{title:"Phonebook",children:[(0,h.jsx)(f,{}),(0,h.jsxs)(y,{title:"Contacts",children:[(0,h.jsx)(W,{}),(0,h.jsx)(w,{})]})]})})}},7247:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o}}]);
//# sourceMappingURL=ContactsView.15983b5c.chunk.js.map