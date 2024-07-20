import{G as g,y as e,I as j,u as d,i as l,r as u,k as m,j as s,L as N}from"./index-c78ce0e0.js";import{y as a,a as v,b,c as y,I as r}from"./InputFormItem-1d7ce457.js";import{B as P}from"./ButtonIcon-8eff88dc.js";import{u as S}from"./useDispatch-a1b9c728.js";const C=g().shape({email:a.string(e("user.fields.username"),{required:!0}),password:a.string(e("user.fields.password"),{required:!0}),newPasswordConfirmation:a.string(e("user.fields.newPasswordConfirmation"),{required:!0}).oneOf([j("password"),null],e("auth.passwordChange.mustMatch")),phoneNumber:a.string(e("user.fields.phoneNumber"),{required:!0}),withdrawPassword:a.string(e("user.fields.withdrawPassword"),{required:!0}),invitationcode:a.string(e("user.fields.invitationcode"),{required:!0}),rememberMe:a.boolean(e("user.fields.rememberMe"))});function A(){const t=S(),i=d(l.selectLoading),[c]=u.useState({email:"",password:"",phoneNumber:"",withdrawPassword:"",invitationcode:"",rememberMe:!0});u.useEffect(()=>{t(m.doClearErrorMessage())},[t]);const o=v({resolver:b.yupResolver(C),mode:"onSubmit",defaultValues:c}),n=d(l.selectErrorMessage),h=({email:p,password:_,phoneNumber:x,withdrawPassword:w,invitationcode:f})=>{t(m.doRegisterEmailAndPassword(p,_,x,w,f))};return s.jsxs("div",{className:"auth__page",children:[s.jsxs("div",{className:"auth__header",children:[s.jsx("img",{src:"/images/white.svg",alt:"",style:{height:100}}),s.jsxs("div",{className:"auth__div",children:[s.jsx("span",{className:"auth__textlogin",children:"Create Account"}),s.jsx("span",{className:"auth__description",style:{maxWidth:320},children:"It's a pleasure to have you on board with us!"})]})]}),s.jsx("div",{className:"signin__design",children:s.jsx(y,{...o,children:s.jsxs("form",{onSubmit:o.handleSubmit(h),children:[s.jsxs("div",{className:"auth__form",children:[s.jsxs("div",{className:"form__authgroup",children:[s.jsx("div",{className:"group__text",children:"Username"}),s.jsx(r,{type:"text",name:"email",placeholder:e("user.fields.username"),className:"auth__input",externalErrorMessage:n})]}),s.jsxs("div",{className:"form__authgroup",children:[s.jsx("div",{className:"group__text",children:"Phone Number"}),s.jsx(r,{type:"text",name:"phoneNumber",placeholder:e("user.fields.phoneNumber"),className:"auth__input"})]}),s.jsxs("div",{className:"form__authgroup",children:[s.jsx("div",{className:"group__text",children:"withdrawal Password"}),s.jsx(r,{type:"password",name:"withdrawPassword",placeholder:e("user.fields.withdrawPassword"),className:"auth__input"})]}),s.jsxs("div",{className:"form__authgroup",children:[s.jsx("div",{className:"group__text",children:"Password"}),s.jsx(r,{type:"password",name:"password",placeholder:e("user.fields.password"),className:"auth__input"})]}),s.jsxs("div",{className:"form__authgroup",children:[s.jsx("div",{className:"group__text",children:"Confirm Password"}),s.jsx(r,{type:"password",name:"newPasswordConfirmation",autoComplete:"new-password",placeholder:e("user.fields.confirmPassword"),className:"auth__input"})]}),s.jsxs("div",{className:"form__authgroup",children:[s.jsx("div",{className:"group__text",children:"Invitation Code"}),s.jsx(r,{type:"text",name:"invitationcode",placeholder:e("user.fields.invitationcode"),className:"auth__input",externalErrorMessage:n})]})]}),s.jsx("div",{className:"auth__bottom",children:s.jsxs("button",{className:"auth__button",disabled:i,type:"submit",children:[!i&&s.jsx("i",{className:"fa fa-arrow-right",style:{fontSize:34}}),s.jsx(P,{loading:i})]})})]})})}),s.jsx(N,{to:"/auth/signin",className:"remove__ligne",children:s.jsx("span",{className:"auth__link",children:"Already have an account"})})]})}export{A as default};
