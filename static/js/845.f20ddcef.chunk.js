"use strict";(self.webpackChunkjs_ninjas_superhero=self.webpackChunkjs_ninjas_superhero||[]).push([[845],{6148:function(n,e,r){r.d(e,{P:function(){return J}});var a,o,t,i,c,s,p,l,d,g,h,u=r(9439),x=r(168),m=r(6444),b=m.ZP.form(a||(a=(0,x.Z)(["\n    max-width: 800px;\n\n    margin: 0 auto;\n\n    text-align: left;\n    color: var(--main-text-color);\n\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),f=m.ZP.label(o||(o=(0,x.Z)(["\n    display: block;\n    margin-bottom: 10px;\n    padding-top: 10px;\n\n    font-weight: 500;\n"]))),v=m.ZP.p(t||(t=(0,x.Z)(["\n    padding-top: 10px;\n    font-weight: 500;\n"]))),j=m.ZP.input(i||(i=(0,x.Z)(["\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n\n    padding: 12px 20px;\n\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--main-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),Z=m.ZP.input(c||(c=(0,x.Z)(["\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n\n    padding: 12px 20px;\n\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),k=m.ZP.textarea(s||(s=(0,x.Z)(["\n    display: block;\n    resize: none;\n    box-sizing: border-box;\n    width: 100%;\n    height: 150px;\n\n    padding: 12px 20px;\n    \n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-text-color);\n\n    font-family: inherit;\n    font-size: 13px;\n"]))),y=m.ZP.button(p||(p=(0,x.Z)(["\n    cursor: pointer;\n\n    box-sizing: border-box;\n    margin-top: 25px;\n    padding: 12px 20px;\n    width: 200px;\n    border: none;\n    border-radius: 5px;\n\n    background-color: var(--accent-bg-color);\n    color: var(--light-text-color);\n\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 16px;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-bg-color);\n    }\n"]))),w=m.ZP.button(l||(l=(0,x.Z)(["\n    cursor: pointer;\n\n    box-sizing: border-box;\n    margin-bottom: 15px;\n    padding: 12px 15px;\n    border: none;\n    border-radius: 5px;\n\n    background-color: var(--accent-text-color);\n    color: var(--light-text-color);\n\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 13px;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-bg-color);\n    }\n"]))),_=m.ZP.div(d||(d=(0,x.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n"]))),P=m.ZP.div(g||(g=(0,x.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n\n    margin-top: 20px;\n"]))),S=m.ZP.div(h||(h=(0,x.Z)(["\n    width: 350px;\n"]))),C=r(2791),z=r(7689),F=r(9434),D=r(4873),H=r(184),J=function(n){var e=n.info,r=(0,C.useState)(""),a=(0,u.Z)(r,2),o=a[0],t=a[1],i=(0,C.useState)(""),c=(0,u.Z)(i,2),s=c[0],p=c[1],l=(0,C.useState)(""),d=(0,u.Z)(l,2),g=d[0],h=d[1],x=(0,C.useState)(""),m=(0,u.Z)(x,2),J=m[0],E=m[1],I=(0,C.useState)(""),N=(0,u.Z)(I,2),L=N[0],O=N[1],R=(0,C.useState)(null),T=(0,u.Z)(R,2),q=T[0],A=T[1],U=(0,C.useState)(null),B=(0,u.Z)(U,2),G=B[0],K=B[1],M=(0,C.useState)(null),Q=(0,u.Z)(M,2),V=Q[0],W=Q[1],X=(0,z.TH)(),Y=(0,z.s0)(),$=(0,F.I0)(),nn=function(n){switch(n.target.name){case"nickname":t(n.target.value);break;case"real_name":p(n.target.value);break;case"origin":h(n.target.value);break;case"superpowers":E(n.target.value);break;case"catchphrase":O(n.target.value);break;default:return}};(0,C.useEffect)((function(){if(e){var n=e.nickname,r=e.real_name,a=e.origin_description,o=e.superpowers,i=e.catch_phrase;t(n),p(r),h(a),E(o),O(i),sessionStorage.setItem("hero",JSON.stringify(e))}}),[e]),(0,C.useEffect)((function(){if("/edit"===X.pathname){var n=sessionStorage.getItem("hero"),e=JSON.parse(n);t(e.nickname),p(e.real_name),h(e.origin_description),E(e.superpowers),O(e.catch_phrase)}}),[X.pathname]);var en=function(n){var e=n.target.files[0],r=new FileReader;if(e)switch(r.readAsDataURL(e),n.target.name){case"main_image":r.onloadend=function(){A(e)};break;case"image1":K(e);break;case"image2":W(e);break;default:return}},rn=function(){var n=new FormData;return q&&n.append("img",q),G&&n.append("img",G),V&&n.append("img",V),""!==o&&n.append("nickname",o),""!==s&&n.append("real_name",s),""!==g&&n.append("origin_description",g),""!==J&&n.append("superpowers",J),""!==L&&n.append("catch_phrase",L),n},an=function(){t(""),p(""),h(""),E(""),O("")};return(0,H.jsxs)(H.Fragment,{children:["/edit"===X.pathname&&(0,H.jsx)(w,{type:"button",onClick:function(){if("/edit"===X.pathname){var n=e._id;$(D.J.deleteHero(n)),Y("/"),an()}},children:"Delete Hero"}),(0,H.jsxs)(b,{onSubmit:function(n){n.preventDefault();var r=rn();"/create"===X.pathname&&($(D.J.createHero(r)),Y("/"),an()),"/edit"===X.pathname&&$(D.J.updateHero({id:e._id,newInfo:r}))},children:[(0,H.jsxs)(_,{children:[(0,H.jsxs)(S,{children:[(0,H.jsx)(f,{htmlFor:"main_image",children:"Choose the main image"}),(0,H.jsx)(j,{type:"file",id:"main_image",name:"main_image",accept:"image/png, image/jpeg",onChange:en})]}),(0,H.jsxs)(S,{children:[(0,H.jsx)(f,{htmlFor:"nickname",children:"Nickname"}),(0,H.jsx)(Z,{type:"text",name:"nickname",id:"nickname",placeholder:"Enter name...",value:o,onChange:nn,required:!0}),(0,H.jsx)(f,{htmlFor:"nickname",children:"Real Name"}),(0,H.jsx)(Z,{type:"text",name:"real_name",id:"real_name",placeholder:"Enter name...",value:s,onChange:nn,required:!0})]})]}),(0,H.jsxs)(P,{children:[(0,H.jsxs)(S,{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,H.jsx)(v,{children:"Add more images"}),(0,H.jsx)(j,{type:"file",id:"image",name:"image1",accept:"image/png, image/jpeg",onChange:en}),(0,H.jsx)(j,{type:"file",id:"image",name:"image2",accept:"image/png, image/jpeg",onChange:en})]}),(0,H.jsxs)(S,{children:[(0,H.jsx)(f,{htmlFor:"origin",children:"Origin Description"}),(0,H.jsx)(k,{name:"origin",id:"origin",placeholder:"Tell the story...",value:g,onChange:nn}),(0,H.jsx)(f,{htmlFor:"superpowers",children:"Superpowers"}),(0,H.jsx)(k,{name:"superpowers",id:"superpowers",placeholder:"List the powers...",value:J,onChange:nn,style:{height:"120px"}}),(0,H.jsx)(f,{htmlFor:"catchphrase",children:"Catchphrase"}),(0,H.jsx)(k,{name:"catchphrase",id:"catchphrase",placeholder:"The hero says...",value:L,onChange:nn,style:{height:"90px"}})]})]}),(0,H.jsx)(y,{type:"submit",children:"Submit Changes"})]})]})}},2845:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var a,o,t,i=r(6148),c=r(168),s=r(6444),p=s.ZP.main(a||(a=(0,c.Z)(["\n    text-align: center;\n"]))),l=s.ZP.h1(o||(o=(0,c.Z)(["\n    margin-top: 30px;\n    color: var(--main-text-color);\n"]))),d=s.ZP.section(t||(t=(0,c.Z)(["\n    padding: 20px 0 30px 0;\n"]))),g=r(184),h=function(){return(0,g.jsxs)(p,{children:[(0,g.jsx)(l,{children:"Let's meet our Hero!"}),(0,g.jsx)(d,{children:(0,g.jsx)(i.P,{})})]})}}}]);
//# sourceMappingURL=845.f20ddcef.chunk.js.map