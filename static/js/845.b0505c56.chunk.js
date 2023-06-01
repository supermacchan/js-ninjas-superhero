"use strict";(self.webpackChunkjs_ninjas_superhero=self.webpackChunkjs_ninjas_superhero||[]).push([[845],{6148:function(n,e,r){r.d(e,{P:function(){return H}});var a,i,o,t,c,s,p,l,d,x,h=r(9439),g=r(168),m=r(6444),u=m.ZP.form(a||(a=(0,g.Z)(["\n    max-width: 800px;\n    padding: 10px;\n\n    margin: 0 auto;\n\n    text-align: left;\n    color: var(--main-text-color);\n\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),b=m.ZP.label(i||(i=(0,g.Z)(["\n    display: block;\n    margin-bottom: 10px;\n    padding-top: 10px;\n\n    font-weight: 500;\n"]))),f=m.ZP.p(o||(o=(0,g.Z)(["\n    padding-top: 10px;\n    font-weight: 500;\n"]))),j=m.ZP.input(t||(t=(0,g.Z)(["\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n\n    padding: 12px 20px;\n\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--main-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),v=m.ZP.input(c||(c=(0,g.Z)(["\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n\n    padding: 12px 20px;\n\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),Z=m.ZP.textarea(s||(s=(0,g.Z)(["\n    display: block;\n    resize: none;\n    box-sizing: border-box;\n    width: 100%;\n    height: 150px;\n\n    padding: 12px 20px;\n    \n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),y=m.ZP.button(p||(p=(0,g.Z)(["\n    cursor: pointer;\n\n    box-sizing: border-box;\n    margin-top: 25px;\n    padding: 12px 20px;\n    width: 200px;\n    border: none;\n    border-radius: 5px;\n\n    background-color: var(--accent-bg-color);\n    color: var(--light-text-color);\n\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 16px;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-bg-color);\n    }\n"]))),k=m.ZP.div(l||(l=(0,g.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n"]))),w=m.ZP.div(d||(d=(0,g.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n\n    margin-top: 20px;\n"]))),_=m.ZP.div(x||(x=(0,g.Z)(["\n    width: 350px;\n"]))),P=r(2791),z=r(7689),C=r(9434),S=r(7564),F=r(184),H=function(n){var e=n.info,r=(0,P.useState)(""),a=(0,h.Z)(r,2),i=a[0],o=a[1],t=(0,P.useState)(""),c=(0,h.Z)(t,2),s=c[0],p=c[1],l=(0,P.useState)(""),d=(0,h.Z)(l,2),x=d[0],g=d[1],m=(0,P.useState)(""),H=(0,h.Z)(m,2),D=H[0],E=H[1],T=(0,P.useState)(""),q=(0,h.Z)(T,2),I=q[0],J=q[1],L=(0,z.TH)(),N=(0,z.s0)(),A=(0,C.I0)(),O=function(n){switch(n.target.name){case"nickname":o(n.target.value);break;case"real_name":p(n.target.value);break;case"origin":g(n.target.value);break;case"superpowers":E(n.target.value);break;case"catchphrase":J(n.target.value);break;default:return}};(0,P.useEffect)((function(){if(e){var n=e.nickname,r=e.real_name,a=e.origin_description,i=e.superpowers,t=e.catch_phrase;o(n),p(r),g(a),E(i),J(t)}}),[e]);var R=function(){o(""),p(""),g(""),E(""),J("")};return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(u,{onSubmit:function(n){n.preventDefault();var r={nickname:i,real_name:s,origin_description:x,superpowers:D,catch_phrase:I};"/create"===L.pathname&&(A(S.J.createHero(r)),N("/"),R()),"/edit"===L.pathname&&A(S.J.updateHero({id:e._id,newInfo:r}))},children:[(0,F.jsxs)(k,{children:[(0,F.jsxs)(_,{children:[(0,F.jsx)(b,{htmlFor:"main_image",children:"Choose the main image"}),(0,F.jsx)(j,{type:"file",id:"main_image",name:"main_image",accept:"image/png, image/jpeg"})]}),(0,F.jsxs)(_,{children:[(0,F.jsx)(b,{htmlFor:"nickname",children:"Nickname"}),(0,F.jsx)(v,{type:"text",name:"nickname",id:"nickname",placeholder:"Enter name...",value:i,onChange:O,required:!0}),(0,F.jsx)(b,{htmlFor:"nickname",children:"Real Name"}),(0,F.jsx)(v,{type:"text",name:"real_name",id:"real_name",placeholder:"Enter name...",value:s,onChange:O,required:!0})]})]}),(0,F.jsxs)(w,{children:[(0,F.jsxs)(_,{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,F.jsx)(f,{children:"Add more images"}),(0,F.jsx)(j,{type:"file",id:"image",name:"image",accept:"image/png, image/jpeg"}),(0,F.jsx)(j,{type:"file",id:"image",name:"image",accept:"image/png, image/jpeg"})]}),(0,F.jsxs)(_,{children:[(0,F.jsx)(b,{htmlFor:"origin",children:"Origin Description"}),(0,F.jsx)(Z,{name:"origin",id:"origin",placeholder:"Tell the story...",value:x,onChange:O}),(0,F.jsx)(b,{htmlFor:"superpowers",children:"Superpowers"}),(0,F.jsx)(Z,{name:"superpowers",id:"superpowers",placeholder:"List the powers...",value:D,onChange:O}),(0,F.jsx)(b,{htmlFor:"catchphrase",children:"Catchphrase"}),(0,F.jsx)(Z,{name:"catchphrase",id:"catchphrase",placeholder:"The hero says...",value:I,onChange:O,style:{height:"90px"}})]})]}),(0,F.jsx)(y,{type:"submit",children:"Submit Changes"})]})})}},2845:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var a,i,o,t=r(6148),c=r(168),s=r(6444),p=s.ZP.main(a||(a=(0,c.Z)(["\n    text-align: center;\n"]))),l=s.ZP.h1(i||(i=(0,c.Z)(["\n    margin-top: 30px;\n    color: var(--main-text-color);\n"]))),d=s.ZP.section(o||(o=(0,c.Z)(["\n    padding: 20px 0 30px 0;\n"]))),x=r(184),h=function(){return(0,x.jsxs)(p,{children:[(0,x.jsx)(l,{children:"Let's meet our Hero!"}),(0,x.jsx)(d,{children:(0,x.jsx)(t.P,{})})]})}}}]);
//# sourceMappingURL=845.b0505c56.chunk.js.map