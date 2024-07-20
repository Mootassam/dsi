import{n as r,r as i,o as ms,u,i as M,l as V,p as F,m as v,k as gs,j as s,q as L}from"./index-c78ce0e0.js";/* empty css               */import{L as us}from"./LoadingModal-3a5436e9.js";import{D as z}from"./Dates-2dd70c42.js";import{u as hs}from"./useDispatch-a1b9c728.js";import"./v4-4a60fe23.js";const d=e=>e.product,ps=r([d],e=>e.loading),Ns=r([d],e=>e.exportLoading),j=r([d],e=>e.rows),bs=r([d],e=>e.sorter||{}),xs=r([d],e=>{const a=e.sorter;if(!a||!a.field)return null;let g=a.order==="descend"?"DESC":"ASC";return`${a.field}_${g}`}),_s=r([d],e=>e.filter),vs=r([d],e=>e.rawFilter),js=r([d],e=>e.pagination.pageSize),ys=r([d],e=>{const a=e.pagination;return!a||!a.pageSize?0:((a.current||1)-1)*a.pageSize}),H=r([d],e=>e.selectedKeys),As=r([d,j],(e,a)=>a.filter(g=>e.selectedKeys.includes(g.id))),Is=r([j,H],(e,a)=>e.length===a.length),B={selectLoading:ps,selectRows:j,selectOrderBy:xs,selectLimit:js,selectFilter:_s,selectOffset:ys,selectSelectedKeys:H,selectSelectedRows:As,selectExportLoading:Ns,selectRawFilter:vs,selectIsAllSelected:Is,selectSorter:bs},W=[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PMJKS9sbGqi8X45YjLZxJwh7-qNCZxoXqg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJY24VX__LPcpD-gCUP9DdcY1oScxUUBdyzw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJNAtmwfDRhKeBLU5VHNKnk9Lyoav36d1og&s"},{url:"https://images-na.ssl-images-amazon.com/images/I/61poQWkytVL.jpg"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bS_rvI71eJjBaHUoQGZClX9UMWeBmeVyfg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyViSHarKBRXQtKtBCFn6iXN95fpf10vjfA&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91RVBHFdJ57CHKWqF5Ie7FBY7W7VQ9stDug&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxO3ijulkqC2dOzsKCR2lY_fD1omdF24R-w&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYmicGnPNTyrw9aEOJAqNImciCzpNrWGq3w&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZ5fPsd7kjY2AMvNXqojSYguPKB9QhQvudw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQuJxzoRV8RwSfjNrAPg9zHlcmcVGZfYEVg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3-CwxMkLvZkx8a4frBfsDWMuztHjDXEBFg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNph0oxHSU835ZfCvdHsWbTR1_c7_uBcmZrQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__CyMVvk9ay_xWcEztXUJdEgM2UnWfsepfA&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaO6tsvI9TAWDuNQVA94BoHUL4Qvk35K_JUQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhjwCIacWtskWBMnNHk31nHp9byhWpNTxcw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhjwCIacWtskWBMnNHk31nHp9byhWpNTxcw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAhf3pqgZliN2irJ1sRyA81B8H9RnVnUuOQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ITriUAD8VfVx9whhAkjiKMuJA5bQIkW8hA&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxallF-K1ciYzpSw8dzLCjJIVUuxKAZfG3zg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJTLFzt_tu7hd5Tk0M49FibqxWcQplBI-dQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV93_dW3a5DCy9FuN3dn44YrubouRo06So8A&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypGTA4MN6oYsInCmit-Av9V1m7Mv7FvxTNQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCMvfIMjz31dn6ujsi3UFBd7jE3R_n3NGEw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ul0nxE2QDt9_b_scfKDtl6NOzSPx01S5Xw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewy3j3tucy56bsCK4khW2QaA3157i1I1zbw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSrf8LZ7DOnVr5OcDNSih37w0hksXvobiLQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrG3_Fv6CO3HlCwrOsQThJuTOIpih2Co6HQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRmWMuJHSE26XWTxcYyV3IjqJwVHdV7h3jA&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfcb9J7QnTISEb6haE3CQIy9TD9hmF07Caw&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ149eWJBUt_vb3LOWDhkiTtqp3Cd6VQaxgsg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7e0uJG8HhfZThm-LjDsU2jQ9IXpYEYSdpQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1rjgs3AFKp8crqmzj40rMq6888VigrcuDg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdP8RYsiaBCYmLfa7wDZX8E7gKrnuaPtwIGQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeH4zF5TUYMVxV1DeQ0gQ6jvzmJlOltaU1g&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MwDw0bPXjqBZZM9Se2G7fqq3Dx5KoprAaQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RXYj-oYXpONBa2NOvu67wnhj9MGr4UhSTA&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfdgSDyqaa9yM_G9XL75klMXwnD1hnMt-7w&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FB4NgTpxz-iVIm9olVK6veKIyO_ZDC4Bgg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3fdM2nwnU-k28fUu0Q_UHT7Kkjluz7wHBg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGF4tGc4zmMTAxiQJdueVQNtpUHbsvOPBeRQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3_1Q3fAHopdsQwxfgvRfLlWjwNz8AhklPA&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VLutxSBPNq6de3YUCfgesC31lut1d6fGUg&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcs83Fz907ol8shY7qINJbWC0agzP0h4PYZQ&s"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcs83Fz907ol8shY7qINJbWC0agzP0h4PYZQ&s"}];class m{}m.randomImages=()=>{const e=Math.floor(Math.random()*W.length);return W[e].url};class fs{static USDT(a){return a?a.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")+" USDT":"0.00 USDT"}}const Rs=()=>{var q,S,w,G,Q,C,R;const[e,a]=i.useState(""),[g,J]=i.useState(""),[Y,E]=i.useState(""),[K,O]=i.useState(""),[X,P]=i.useState(""),[Z,$]=i.useState(""),[ss,ts]=i.useState(""),[es,as]=i.useState("");i.useState(""),ms();const l=hs(),c=u(M.selectCurrentUser),t=u(B.selectRows),y=u(B.selectLoading),[cs,N]=i.useState(!1),[A,b]=i.useState(!1);u(V.selectCountRecord);const ns=u(V.selectError),I=i.useCallback(async()=>{await l(F.doFetch()),await l(v.doFetch()),await l(gs.doRefreshCurrentUser())},[l]),is=()=>{const o=async()=>{const n=await m.randomImages();a(n)},p=async()=>{const n=await m.randomImages();J(n)},x=async()=>{const n=await m.randomImages();E(n)},T=async()=>{const n=await m.randomImages();O(n)},U=async()=>{const n=await m.randomImages();P(n)},D=async()=>{const n=await m.randomImages();$(n)},k=async()=>{const n=await m.randomImages();ts(n)},_=async()=>{const n=await m.randomImages();as(n)};o(),p(),x(),T(),U(),D(),k(),_(),setInterval(o,3e3),setInterval(p,4e3),setInterval(x,2e3),setInterval(T,4e3),setInterval(U,5e3),setInterval(D,2e3),setInterval(k,3e3),setInterval(_,4e3),setInterval(_,3e3)},rs=async()=>{try{if(b(!0),await l(v.doCheck()),ns)return;await l(F.doFetch()),setTimeout(()=>{N(!0)},1e3),b(!1)}catch(o){console.log(o),b(!1)}},ds=()=>{N(!1)},[f]=i.useState(z.Number());i.useEffect(()=>{l(v.doCount()),is()},[l]);const ls=(o,p)=>(parseFloat(o)*parseFloat(p)/100).toFixed(3),h=u(M.selectCurrentUser),os=async()=>{const o={number:f,product:t==null?void 0:t.id,status:t!=null&&t.combo?"pending":"completed",user:h.id};t.combo?l(L.doCreateCombo(o)):l(L.doCreate(o)),N(!1),await I()};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"app__grappage",children:[s.jsx("div",{className:"online__service"}),s.jsxs("div",{className:"grap__order",children:[s.jsxs("div",{className:"order__top",children:[s.jsxs("div",{className:"first__order",children:[s.jsxs("div",{className:"vip__title",children:[" ",(q=c==null?void 0:c.vip)==null?void 0:q.title]}),s.jsxs("div",{children:[s.jsx("label",{className:"vip__commission",children:"Commission Rate: "}),s.jsx("label",{className:"comission",children:(S=c==null?void 0:c.vip)==null?void 0:S.comisionrate})]})]}),s.jsx("div",{className:"second__order",children:s.jsx("div",{children:s.jsx("span",{className:"exclusive__channel",children:"Exclusive channel for exclsuive members"})})})]}),s.jsxs("div",{className:"grap__products",children:[s.jsxs("div",{className:"list__ofproduct",children:[s.jsx("div",{className:"",children:s.jsx("img",{src:e,alt:""})}),s.jsx("div",{className:"",children:s.jsx("img",{src:g,alt:""})}),s.jsx("div",{className:"",children:s.jsx("img",{src:Y,alt:""})})]}),s.jsxs("div",{className:"list__ofproduct",children:[s.jsx("div",{className:"",children:s.jsx("img",{src:K,alt:""})}),s.jsx("div",{className:"",children:s.jsx("button",{className:`grap ${A?"__disabled":""}`,onClick:()=>rs(),disabled:A,children:s.jsx("span",{className:"product__start",children:"Start"})})}),s.jsx("div",{className:"",children:s.jsx("img",{src:X,alt:""})})]}),s.jsxs("div",{className:"list__ofproduct",children:[s.jsx("div",{className:"",children:s.jsx("img",{src:Z,alt:""})}),s.jsx("div",{className:"",children:s.jsx("img",{src:ss,alt:""})}),s.jsx("div",{className:"",children:s.jsx("img",{src:es})})]})]}),s.jsx("div",{style:{paddingTop:10},children:s.jsx("span",{className:"exclusive__chaneels",children:"Exclusive channel for exclsuive members"})})]}),s.jsx("div",{className:"button__grap"}),s.jsxs("div",{className:"order__comission",children:[s.jsxs("div",{className:"today__achievements",children:[s.jsx("div",{className:"comission__title",children:"Today's achievements"}),s.jsx("div",{className:"achivemnts__refreshe",children:s.jsx("i",{className:"fa-solid fa-rotate-right click",onClick:()=>I()})})]}),s.jsxs("div",{className:"achievements__group",children:[s.jsxs("div",{className:"group__comission",children:[s.jsx("div",{className:"comission__text",children:"Comission"}),s.jsx("div",{className:"comission__value",children:(w=c==null?void 0:c.vip)==null?void 0:w.comisionrate})]}),s.jsxs("div",{className:"group__comission",children:[s.jsx("div",{className:"comission__text",children:" Availbale Balance "}),s.jsx("div",{className:"comission__value",children:fs.USDT(c==null?void 0:c.balance)})]}),s.jsxs("div",{className:"group__comission",children:[s.jsx("div",{className:"comission__text",children:"Orders Completed"}),s.jsxs("div",{className:"comission__value",children:[" ",h==null?void 0:h.tasksDone]})]}),s.jsxs("div",{className:"group__comission",children:[s.jsx("div",{className:"comission__text",children:"Total Orders"}),s.jsx("div",{className:"comission__value",children:(G=c==null?void 0:c.vip)==null?void 0:G.dailyorder})]})]}),s.jsx("div",{className:"comission__smallmessage",children:"A higher rank member can unlock more orders and get more commission"})]}),s.jsxs("div",{className:"rules__description",children:[s.jsx("div",{className:"rules__title",children:"Rules Description"}),s.jsxs("ul",{className:"rules__list",children:[s.jsx("li",{children:"(1) Every user in the platform should be able to submit all daily orders before withdrawal"}),s.jsx("li",{children:"(2) commissions depends on the vip level"}),s.jsx("li",{children:"(3) The system automatically dispatch’s the products through the cloud after submission"}),s.jsx("li",{children:"(4) If the order is not submitted, the user will not be able to continue with the next product. The user need to submit the previous product to continue with the task"})]})]}),y&&s.jsx(us,{}),!y&&cs&&t&&s.jsx("div",{className:"modal__grap",children:s.jsx("div",{className:"modal__product",children:s.jsxs("div",{className:"single__product",children:[s.jsx("div",{className:"single__header",children:(Q=t==null?void 0:t.vip)==null?void 0:Q.title}),s.jsxs("div",{className:"order__time",children:[s.jsxs("div",{children:["Order Time: ",z.current()]}),s.jsxs("div",{children:["Order Number: N",f]})]}),s.jsx("div",{className:"badge__single pending__",children:s.jsx("label",{children:"Pending"})}),s.jsxs("div",{className:"product__image",children:[s.jsx("div",{className:"image__",children:(t==null?void 0:t.photo)&&((C=t==null?void 0:t.photo[0])==null?void 0:C.downloadUrl)&&s.jsx("img",{src:(R=t==null?void 0:t.photo[0])==null?void 0:R.downloadUrl,alt:""})}),s.jsxs("div",{className:"product__detail",children:[s.jsx("div",{className:"detail__name",children:t==null?void 0:t.title}),s.jsxs("div",{className:"detail__price",children:[s.jsxs("div",{children:[" ",t==null?void 0:t.amount]}),s.jsx("div",{children:"X 1"})]})]})]}),s.jsxs("div",{className:"bottom__cadre",children:[s.jsxs("div",{className:"cadre__detail",children:[s.jsx("div",{children:"Total order amount"}),s.jsxs("div",{children:[t==null?void 0:t.amount," USDT"]})]}),s.jsxs("div",{className:"cadre__detail",children:[s.jsx("div",{children:"Commission"}),s.jsx("div",{children:t==null?void 0:t.commission})]}),s.jsxs("div",{className:"cadre__detail",children:[s.jsx("div",{children:"Estimated return"}),s.jsxs("div",{children:[ls(t==null?void 0:t.amount,t==null?void 0:t.commission)," USDT"]})]})]}),s.jsxs("div",{className:"bottom__submit",children:[s.jsx("div",{className:"submit__ligne"}),s.jsxs("div",{className:"sumbit__buttons",children:[s.jsx("div",{className:"cancel__product",onClick:()=>ds(),children:"Cancel"}),s.jsx("div",{className:"submit__product",onClick:()=>os(),children:"Submit"})]})]})]})})})]})})};export{Rs as default};
