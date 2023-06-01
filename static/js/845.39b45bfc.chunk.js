"use strict";(self.webpackChunkjs_ninjas_superhero=self.webpackChunkjs_ninjas_superhero||[]).push([[845],{6148:function(n,e,r){r.d(e,{P:function(){return E}});var a,o,i,t,c,s,l,p,d,x,h,g=r(9439),u=r(168),m=r(6444),b=m.ZP.form(a||(a=(0,u.Z)(["\n    max-width: 800px;\n\n    margin: 0 auto;\n\n    text-align: left;\n    color: var(--main-text-color);\n\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),f=m.ZP.label(o||(o=(0,u.Z)(["\n    display: block;\n    margin-bottom: 10px;\n    padding-top: 10px;\n\n    font-weight: 500;\n"]))),v=m.ZP.p(i||(i=(0,u.Z)(["\n    padding-top: 10px;\n    font-weight: 500;\n"]))),j=m.ZP.input(t||(t=(0,u.Z)(["\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n\n    padding: 12px 20px;\n\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--main-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),Z=m.ZP.input(c||(c=(0,u.Z)(["\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n\n    padding: 12px 20px;\n\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),k=m.ZP.textarea(s||(s=(0,u.Z)(["\n    display: block;\n    resize: none;\n    box-sizing: border-box;\n    width: 100%;\n    height: 150px;\n\n    padding: 12px 20px;\n    \n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),y=m.ZP.button(l||(l=(0,u.Z)(["\n    cursor: pointer;\n\n    box-sizing: border-box;\n    margin-top: 25px;\n    padding: 12px 20px;\n    width: 200px;\n    border: none;\n    border-radius: 5px;\n\n    background-color: var(--accent-bg-color);\n    color: var(--light-text-color);\n\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 16px;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-bg-color);\n    }\n"]))),w=m.ZP.button(p||(p=(0,u.Z)(["\n    cursor: pointer;\n\n    box-sizing: border-box;\n    margin-bottom: 15px;\n    padding: 12px 15px;\n    border: none;\n    border-radius: 5px;\n\n    background-color: var(--accent-text-color);\n    color: var(--light-text-color);\n\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 13px;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-bg-color);\n    }\n"]))),_=m.ZP.div(d||(d=(0,u.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n"]))),P=m.ZP.div(x||(x=(0,u.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n\n    margin-top: 20px;\n"]))),z=m.ZP.div(h||(h=(0,u.Z)(["\n    width: 350px;\n"]))),C=r(2791),S=r(7689),F=r(9434),H=r(7564),D=r(184),E=function(n){var e=n.info,r=(0,C.useState)(""),a=(0,g.Z)(r,2),o=a[0],i=a[1],t=(0,C.useState)(""),c=(0,g.Z)(t,2),s=c[0],l=c[1],p=(0,C.useState)(""),d=(0,g.Z)(p,2),x=d[0],h=d[1],u=(0,C.useState)(""),m=(0,g.Z)(u,2),E=m[0],J=m[1],T=(0,C.useState)(""),q=(0,g.Z)(T,2),I=q[0],L=q[1],N=(0,S.TH)(),A=(0,S.s0)(),O=(0,F.I0)(),R=function(n){switch(n.target.name){case"nickname":i(n.target.value);break;case"real_name":l(n.target.value);break;case"origin":h(n.target.value);break;case"superpowers":J(n.target.value);break;case"catchphrase":L(n.target.value);break;default:return}};(0,C.useEffect)((function(){if(e){var n=e.nickname,r=e.real_name,a=e.origin_description,o=e.superpowers,t=e.catch_phrase;i(n),l(r),h(a),J(o),L(t)}}),[e]);var B=function(){i(""),l(""),h(""),J(""),L("")};return(0,D.jsxs)(D.Fragment,{children:["/edit"===N.pathname&&(0,D.jsx)(w,{type:"button",onClick:function(){if("/edit"===N.pathname){var n=e._id;O(H.J.deleteHero(n)),A("/"),B()}},children:"Delete Hero"}),(0,D.jsxs)(b,{onSubmit:function(n){n.preventDefault();var r={nickname:o,real_name:s,origin_description:x,superpowers:E,catch_phrase:I};"/create"===N.pathname&&(O(H.J.createHero(r)),A("/"),B()),"/edit"===N.pathname&&O(H.J.updateHero({id:e._id,newInfo:r}))},children:[(0,D.jsxs)(_,{children:[(0,D.jsxs)(z,{children:[(0,D.jsx)(f,{htmlFor:"main_image",children:"Choose the main image"}),(0,D.jsx)(j,{type:"file",id:"main_image",name:"main_image",accept:"image/png, image/jpeg"})]}),(0,D.jsxs)(z,{children:[(0,D.jsx)(f,{htmlFor:"nickname",children:"Nickname"}),(0,D.jsx)(Z,{type:"text",name:"nickname",id:"nickname",placeholder:"Enter name...",value:o,onChange:R,required:!0}),(0,D.jsx)(f,{htmlFor:"nickname",children:"Real Name"}),(0,D.jsx)(Z,{type:"text",name:"real_name",id:"real_name",placeholder:"Enter name...",value:s,onChange:R,required:!0})]})]}),(0,D.jsxs)(P,{children:[(0,D.jsxs)(z,{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,D.jsx)(v,{children:"Add more images"}),(0,D.jsx)(j,{type:"file",id:"image",name:"image",accept:"image/png, image/jpeg"}),(0,D.jsx)(j,{type:"file",id:"image",name:"image",accept:"image/png, image/jpeg"})]}),(0,D.jsxs)(z,{children:[(0,D.jsx)(f,{htmlFor:"origin",children:"Origin Description"}),(0,D.jsx)(k,{name:"origin",id:"origin",placeholder:"Tell the story...",value:x,onChange:R}),(0,D.jsx)(f,{htmlFor:"superpowers",children:"Superpowers"}),(0,D.jsx)(k,{name:"superpowers",id:"superpowers",placeholder:"List the powers...",value:E,onChange:R,style:{height:"120px"}}),(0,D.jsx)(f,{htmlFor:"catchphrase",children:"Catchphrase"}),(0,D.jsx)(k,{name:"catchphrase",id:"catchphrase",placeholder:"The hero says...",value:I,onChange:R,style:{height:"90px"}})]})]}),(0,D.jsx)(y,{type:"submit",children:"Submit Changes"})]})]})}},2845:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var a,o,i,t=r(6148),c=r(168),s=r(6444),l=s.ZP.main(a||(a=(0,c.Z)(["\n    text-align: center;\n"]))),p=s.ZP.h1(o||(o=(0,c.Z)(["\n    margin-top: 30px;\n    color: var(--main-text-color);\n"]))),d=s.ZP.section(i||(i=(0,c.Z)(["\n    padding: 20px 0 30px 0;\n"]))),x=r(184),h=function(){return(0,x.jsxs)(l,{children:[(0,x.jsx)(p,{children:"Let's meet our Hero!"}),(0,x.jsx)(d,{children:(0,x.jsx)(t.P,{})})]})}}}]);
//# sourceMappingURL=845.39b45bfc.chunk.js.map