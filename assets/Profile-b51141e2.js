import{u as r,l as n,r as _,m,o as p,i as u,j as s,L as l,k as g,M as h}from"./index-44c65d6d.js";/* empty css               */import{u as y}from"./useDispatch-ec218e9a.js";function T(){var t;const c=y(),x=r(n.selectTotal),j=r(n.selectTotalPerday);_.useEffect(()=>{const a={status:"completed"};c(m.doCountDay()),c(m.doFetch(a,a))},[c]);const N=()=>{c(g.doSignout())},v=p(),o=a=>{v.push(a)},e=r(u.selectCurrentUser),d=_.useRef(null),f=()=>{const a=d.current.innerText;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(a).then(()=>{h.success("Copied")}).catch(i=>{console.error("Error copying to clipboard:",i)});else{const i=document.createElement("textarea");i.value=a,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),h.success("Copied")}};return s.jsxs("div",{className:"app__profile",children:[s.jsxs("div",{className:"profiles__header",children:[s.jsx("div",{className:"header__background"}),s.jsxs("div",{className:"carde__profile",children:[s.jsxs("div",{className:"cadre__top",children:[s.jsxs("div",{className:"cadre__left",children:[s.jsx("div",{children:s.jsx("img",{src:"/images/user.png",alt:"",style:{height:70}})}),s.jsxs("div",{className:"left__details",children:[s.jsx("div",{className:"user__title",children:e==null?void 0:e.fullName}),s.jsx("div",{className:"small__invitation",children:s.jsxs("div",{className:"small__inviation__left",children:["InvitationCode : ",s.jsxs("span",{ref:d,children:[" ",e==null?void 0:e.refcode]})]})})]})]}),s.jsx("div",{className:"cadre__right",children:s.jsx("i",{className:"fa-regular fa-copy",style:{fontSize:30,color:"orange"},onClick:f})})]}),s.jsxs("div",{className:"score",children:[s.jsx("div",{className:"score__right",children:"Credit Score:"}),s.jsxs("div",{className:"score__left",children:[e!=null&&e.score?e.score:100,"%"]})]}),s.jsx("div",{className:"bar",children:s.jsx("div",{className:"progress-value",style:{width:`${e!=null&&e.score?e.score:100}%`}})}),s.jsxs("div",{className:"cadre__bottom",children:[s.jsxs("div",{className:"firt__cadre",children:[s.jsx("span",{className:"title__cadre",children:"Wallet Amount"}),s.jsxs("span",{className:"amount__cadre",children:[((t=e==null?void 0:e.balance)==null?void 0:t.toFixed(2))||0," USDT"]})]}),s.jsx("div",{className:"second__cadre"}),s.jsxs("div",{className:"",children:[s.jsx("span",{className:"title__cadre",children:"Daily Comission"}),s.jsxs("span",{className:"amount__cadre",children:[j," USDT "]})]}),s.jsx("div",{className:"second__cadre"}),s.jsxs("div",{children:[s.jsx("span",{className:"title__cadre",children:"Total Profit "}),s.jsxs("span",{className:"amount__cadre",children:[x," USDT"]})]})]})]})]}),s.jsxs("div",{className:"profile__content",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"",className:"titre",children:"My Financial"}),s.jsxs("div",{className:"detail__section",children:[s.jsxs("div",{className:"line__section border__",onClick:()=>o("/online"),children:[s.jsxs("div",{className:"titre__section",children:[s.jsx("i",{className:"fa-solid fa-paper-plane"}),s.jsx("span",{children:"Deposit"})]}),s.jsx("div",{children:s.jsx("i",{className:"fa fa-arrow-right "})})]}),s.jsxs("div",{className:"line__section",onClick:()=>o("/withdraw"),children:[s.jsxs("div",{className:"titre__section",children:[s.jsx("i",{className:"fa-solid fa-money-check"}),s.jsx("span",{children:"Withdraw"})]}),s.jsx("div",{children:s.jsx("i",{className:"fa fa-arrow-right "})})]})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"",className:"titre",children:"My Details"}),s.jsxs("div",{className:"detail__section",children:[s.jsx(l,{to:"/myprofile",className:"remove__ligne",children:s.jsxs("div",{className:"line__section border__",children:[s.jsxs("div",{className:"titre__section",children:[s.jsx("i",{className:"fa-solid fa-user profile__icon"}),s.jsx("span",{children:"Profile"})]}),s.jsx("div",{children:s.jsx("i",{className:"fa fa-arrow-right "})})]})}),s.jsx(l,{to:"/wallet",className:"remove__ligne",children:s.jsxs("div",{className:"line__section",children:[s.jsxs("div",{className:"titre__section",children:[s.jsx("i",{className:"fa-solid fa-wallet profile__icon"}),s.jsx("span",{children:"Wallet"})]}),s.jsx("div",{children:s.jsx("i",{className:"fa fa-arrow-right "})})]})})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"",className:"titre",children:"Other"}),s.jsxs("div",{className:"detail__section",children:[s.jsx(l,{to:"/transacation",className:"remove__ligne",children:s.jsxs("div",{className:"line__section border__",children:[s.jsxs("div",{className:"titre__section",children:[s.jsx("i",{className:"fa-solid fa-arrow-right-arrow-left profile__icon"}),s.jsx("span",{children:"Transaction"})]}),s.jsx("div",{children:s.jsx("i",{className:"fa fa-arrow-right "})})]})}),s.jsx(l,{to:"/order",className:"remove__ligne",children:s.jsxs("div",{className:"line__section border__",children:[s.jsxs("div",{className:"titre__section",children:[s.jsx("i",{className:"fa-solid fa-clock-rotate-left profile__icon"}),s.jsx("span",{children:"Tasks History"})]}),s.jsx("div",{children:s.jsx("i",{className:"fa fa-arrow-right "})})]})}),s.jsx(l,{to:"/security",className:"remove__ligne",children:s.jsxs("div",{className:"line__section",children:[s.jsxs("div",{className:"titre__section",children:[s.jsx("i",{className:"fa-solid fa-lock profile__icon"}),s.jsx("span",{children:"Security"})]}),s.jsx("div",{children:s.jsx("i",{className:"fa fa-arrow-right "})})]})})]})]})]}),s.jsxs("div",{className:"logout__button",onClick:()=>N(),children:[" ","Logout"]})]})}export{T as default};
