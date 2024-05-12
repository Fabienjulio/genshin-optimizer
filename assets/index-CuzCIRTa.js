import{r as ee,i as te,j as ne,d as v,p as t,V as i,q as e,I as q,T as l,ax as S,B as g,D as A,ay as N,az as F,aA as P,aB as V,w as b,W as C,aC as B,s as D,af as ie,aD as re,x as _,ah as le,b as J,O as x,aE as Q,aF as se,N as X,aG as ae,aH as ce,aI as oe,aJ as de,Q as $,X as he}from"./index-aCyqTeus.js";import{R as I,d as ue}from"./AccessTimeFilled-B9o9IzY2.js";var H={},me=te;Object.defineProperty(H,"__esModule",{value:!0});var K=H.default=void 0,pe=me(ee()),xe=ne,fe=(0,pe.default)((0,xe.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");K=H.default=fe;const W={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:_.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:_.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:_.exp_books.wit}},T=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],ge=[20,40,50,60,70,80,90];function be(){return{mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}}function ve(){const[s,n]=v.useState(()=>be()),{mora:m,level:h,curExp:a,goUnder:r,books:c,books:{advice:p,experience:f,wit:u}}=s,o=ge.find(d=>d>h);let y=-a;for(let d=h;d<Math.min(o,T.length);d++)y+=T[d];const j=ye(u,f,p,y,r)||[],[M=0,R=0,O=0]=j,Z={advice:O,experience:R,wit:M},G=M*2e4+R*5e3+O*1e3,Y=G/5,z=y-G,L=m-Y;let k=G+a,w=h;for(;w<Math.min(o,T.length)&&T[w]<=k;w++)k-=T[w];w===o&&(k=0);let E="";return L<0?E=t("span",{children:["You don't have enough ",e("b",{children:"Mora"})," for this operation."]}):j.length===0?E=t("span",{children:["You don't have enough ",e("b",{children:"EXP. books"})," to level to the next milestone."]}):h===90&&(E="You are at the maximum level."),t(b,{children:[t(i,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(i,{item:!0,children:e(q,{src:W.wit.img,size:2})}),e(i,{item:!0,flexGrow:1,children:e(l,{variant:"h6",children:"Experience Calculator"})}),e(i,{item:!0,children:t(S,{children:[e(g,{color:"primary",disabled:!r,onClick:()=>n({...s,goUnder:!1}),children:"Full Level"}),e(g,{color:"primary",disabled:r,onClick:()=>n({...s,goUnder:!0}),children:"Don't fully level"})]})})]}),e(A,{}),e(D,{children:t(i,{container:!0,spacing:1,children:[e(i,{item:!0,children:t(l,{children:[t("span",{children:["This calculator tries to calculate the amount of exp books required to get to the next milestone level."," "]}),r?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),e(i,{item:!0,xs:6,md:3,children:t(S,{sx:{display:"flex"},children:[e(N,{children:"Current Level"}),e(F,{sx:{flexBasis:30,flexGrow:1},children:e(P,{value:h,onChange:d=>n({...s,level:V(d??0,0,90)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:t(S,{sx:{display:"flex"},children:[e(N,{children:"Current EXP."}),e(F,{sx:{flexBasis:30,flexGrow:1},children:e(P,{value:a,onChange:d=>n({...s,curExp:V(d??0,0,(T[h]||1)-1)}),endAdornment:`/${T[h]||0}`,sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Next Milestone Level:"}),e(l,{children:e("b",{children:o})})]})})}),e(i,{item:!0,xs:6,md:3,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"EXP. to milestone:"}),e(l,{children:t("span",{children:[e("strong",{children:G})," / ",e("strong",{children:y})]})})]})})}),Object.entries(c).map(([d])=>e(i,{item:!0,xs:12,md:4,children:e(Ce,{bookKey:d,value:c[d],setValue:U=>n({...s,books:{...c,[d]:U}}),required:Z[d]})},d)),e(i,{item:!0,xs:12,md:4,children:t(S,{sx:{display:"flex"},children:[e(N,{children:"Current Mora"}),e(F,{sx:{flexBasis:30,flexGrow:1},children:e(P,{value:m,onChange:d=>n({...s,mora:Math.max(d??0,0)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Mora Cost: "}),e(l,{children:e("b",{children:Y})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[t(l,{children:["EXP ",r?"Diff":"Waste",": "]}),e(l,{children:e("b",{children:e(B,{color:z<0?"error":"success",children:z})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final Mora: "}),e(l,{children:e("b",{children:e(B,{color:L<0?"error":"success",children:L})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final Level: "}),e(l,{children:e("b",{children:e(B,{color:"success",children:w})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final EXP: "}),e(l,{children:e("b",{children:e(B,{color:k<0?"error":"success",children:k})})})]})})})]})}),e(A,{}),e(D,{sx:{py:1},children:t(i,{container:!0,spacing:2,children:[e(i,{item:!0,flexGrow:1,children:!!E&&e(ie,{variant:"filled",severity:"error",children:E})}),e(i,{item:!0,xs:"auto",children:e(g,{disabled:!!E,onClick:()=>n({...s,level:w,curExp:k,books:re(Z,(d,U)=>c[U]-d),mora:L}),color:"success",startIcon:e(K,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function Ce(s){const{bookKey:n,value:m=0,setValue:h,required:a=0}=s;return t(b,{bgt:"light",children:[e(D,{sx:{py:1},children:e(l,{children:W[n].name})}),e(A,{}),e(D,{children:t(i,{container:!0,children:[e(i,{item:!0,xs:3,children:e(le,{src:W[n].img})}),t(i,{item:!0,xs:9,children:[t(S,{sx:{display:"flex"},children:[e(N,{children:"Amount"}),e(F,{sx:{flexBasis:30,flexGrow:1},children:e(P,{value:m,onChange:r=>h(Math.max(r??0,0)),sx:{px:2}})})]}),t(C,{display:"flex",justifyContent:"space-between",mt:1,children:[e(l,{children:"Required:"}),e(l,{children:e("b",{children:e(B,{color:a?"success":void 0,children:a})})})]})]})]})})]})}function ye(s,n,m,h,a){let r=a?Math.floor(h/1e3):Math.ceil(h/1e3);const c=Math.min(Math.floor(r/20),s);r-=c*20;const p=Math.min(Math.floor(r/5),n);r-=p*5;const f=Math.min(r,m);return r-=f,a||r===0?[c,p,f]:p===3&&c!==s?[c+1,0,0]:p!==n?[c,p+1,0]:c!==s?[c+1,0,0]:null}function we(){const s=J(),[{resin:n,resinDate:m},h]=v.useState(()=>s.displayTool.get());v.useEffect(()=>s.displayTool.follow((o,y)=>h(y)),[s]);const a=v.useRef(void 0),r=o=>{o>=x?(a.current&&clearTimeout(a.current),a.current=void 0):a.current=setTimeout(()=>console.log("set resin",o+1),I),s.displayTool.set({resin:o,resinDate:new Date().getTime()})};v.useEffect(()=>{if(n<x){const o=Date.now(),y=x-n,j=Math.min(Math.floor((o-m)/I),y),M=n+j,R=m+j*I;s.displayTool.set({resin:M,resinDate:R}),M<x&&(a.current=setTimeout(()=>r(M+1),o-R))}return()=>a.current&&clearTimeout(a.current)},[]);const c=n>=x?m:m+I,p=n>=x?m:m+(x-n)*I,f=new Date(p),u=Q(Math.abs(c-Date.now()));return t(b,{children:[t(i,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(i,{item:!0,children:e(q,{src:_.resin.fragile,size:2})}),e(i,{item:!0,children:e(l,{variant:"h6",children:"Resin Counter"})})]}),e(A,{}),e(D,{children:t(i,{container:!0,spacing:2,children:[e(i,{item:!0,children:t(l,{variant:"h2",children:[e(q,{src:_.resin.fragile}),e(se,{type:"number",sx:{width:"2em",fontSize:"4rem"},value:n,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:o=>r(parseInt(o.target.value))}),t("span",{children:["/",x]})]})}),t(i,{item:!0,flexGrow:1,children:[t(S,{fullWidth:!0,children:[e(g,{onClick:()=>r(0),disabled:n===0,children:"0"}),e(g,{onClick:()=>r(n-1),disabled:n===0,children:"-1"}),e(g,{onClick:()=>r(n-20),disabled:n<20,children:"-20"}),e(g,{onClick:()=>r(n-40),disabled:n<40,children:"-40"}),e(g,{onClick:()=>r(n-60),disabled:n<60,children:"-60"}),e(g,{onClick:()=>r(n+1),children:"+1"}),e(g,{onClick:()=>r(n+60),children:"+60"}),t(g,{onClick:()=>r(x),disabled:n===x,children:["MAX ",x]})]}),e(l,{variant:"subtitle1",sx:{mt:2},children:n<x?t("span",{children:["Next resin in ",u,", full Resin at"," ",f.toLocaleTimeString()," ",f.toLocaleDateString()]}):t("span",{children:["Resin has been full for at least ",u,", since"," ",f.toLocaleTimeString()," ",f.toLocaleDateString()]})})]}),e(i,{item:!0,xs:12,children:e(l,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}function Te(){const s=J(),[{timeZoneKey:n},m]=v.useState(()=>s.displayTool.get());v.useEffect(()=>s.displayTool.follow((u,o)=>m(o)),[s]);const h=v.useCallback(u=>s.displayTool.set({timeZoneKey:u}),[s]),[a,r]=v.useState(new Date(Date.now()+X[n]));v.useEffect(()=>{const u=()=>(r(new Date(Date.now()+X[n])),setTimeout(()=>{o=u()},$-Date.now()%$));let o=u();return()=>clearTimeout(o)},[n]);let c=new Date(a);c.getUTCHours()<4||(c=new Date(c.getTime()+ae)),c.setUTCHours(4,0,0,0);const p=c.getTime()-a.getTime(),f=Q(p);return t(b,{children:[t(D,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(ue,{}),e(l,{variant:"h6",sx:{flexGrow:1},children:"Teyvat Time"}),e(oe,{title:n,children:Object.keys(X).map(u=>e(ce,{selected:n===u,disabled:n===u,onClick:()=>h(u),children:u},u))})]}),e(A,{}),e(D,{children:t(i,{container:!0,justifyContent:"center",spacing:3,children:[e(i,{item:!0,sx:{my:4},children:e(l,{variant:"h2",children:a.toLocaleTimeString([],{timeZone:"UTC"})})}),t(i,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[t(l,{children:["Server Date: ",e("b",{children:a.toDateString()})]}),t(l,{children:["Time until reset: ",e("b",{children:f})]}),t(l,{children:["Resin until reset:"," ",e("b",{children:Math.floor(p/(8*de))})]})]})]})})]})}function ke(){return he.send({hitType:"pageview",page:"/tools"}),t(C,{display:"flex",flexDirection:"column",gap:1,children:[e(Te,{}),e(we,{}),e(ve,{})]})}export{ke as default};