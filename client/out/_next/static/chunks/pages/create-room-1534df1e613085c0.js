(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{92:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-room",function(){return t(658)}])},3695:function(e,i,t){"use strict";t.d(i,{z:function(){return n}});let n="http://185.217.131.80:4000"},4268:function(e,i,t){"use strict";t.d(i,{wt:function(){return U},$G:function(){return D},vS:function(){return X},r8:function(){return M},mQ:function(){return y}});var n=t(5893),a=t(2831),r=t(4381),s=t(7297),l=t(9521);function o(){let e=(0,s.Z)([""]);return o=function(){return e},e}function d(){let e=(0,s.Z)(["\n  margin: 0 5px;\n  cursor: pointer;\n  transition: all 0.4s ease;\n  display: inline-block;\n\n  & > span {\n    font-size: 20px;\n  }\n\n  &:hover {\n    opacity: 0.6;\n    transform: scale(1.05);\n  }\n"]);return d=function(){return e},e}function m(){let e=(0,s.Z)(["\n   position: relative;\n"]);return m=function(){return e},e}let c=l.ZP.div(o()),u=l.ZP.div(d()),h=l.ZP.span(m()),x=e=>{let{tabs:i,index:t,tabRightContent:s,setIndex:l}=e,{Search:o}=a.Z,d=e=>console.log(e),m={right:null==s?void 0:s.map((e,i)=>(0,n.jsx)(h,{children:(0,n.jsx)(u,{onClick(){var i;return null==e?void 0:null===(i=e.onClick)||void 0===i?void 0:i.call(e)},children:e.icon},i)},i))};return(0,n.jsxs)(c,{children:[(0,n.jsx)("div",{className:"w50",children:(0,n.jsx)(o,{placeholder:"input search text",onSearch:d,enterButton:!0})}),(0,n.jsx)(r.Z,{animated:!0,activeKey:t.toString(),onChange:e=>l(parseInt(e)),tabBarExtraContent:m,children:i.map((e,i)=>(0,n.jsx)(r.Z.TabPane,{tab:e.title,children:e.content},i))})]})};var y=x,j=t(6334),p=t(5355),Z=t(7183),k=t(6516),b=t(1577),I=t(8492),g=t(7294),f=t(9473),v=t(7083),q=t(1163),S=t(1664),N=t.n(S);t(4213),t(1535);let{Header:O,Content:_,Footer:z,Sider:T}=Z.Z;function B(e,i,t,n,a){return{key:i,icon:t,path:n,children:a,label:e}}let K=[B("Obyekt","1",(0,n.jsx)(j.Z,{}),"/object"),B("Uy","2",(0,n.jsx)(p.Z,{}),"/houses"),B("Xonadon","2",(0,n.jsx)(p.Z,{}),"/room"),B("Tur","2",(0,n.jsx)(p.Z,{}),"/type"),B("Shartnoma","2",(0,n.jsx)(p.Z,{}),"/contract"),B("Buxgalteriya","2",(0,n.jsx)(p.Z,{}),"/accounting"),B("Qarzdorlar","2",(0,n.jsx)(p.Z,{}),"/debt")],C=e=>{let{children:i}=e,t=(0,q.useRouter)(),[a,r]=(0,g.useState)(!1),s=(0,f.I0)(),l=()=>{s((0,v.kS)()),t.push("/login")},o=()=>{s((0,v.kS)()),t.push("/")};return(0,n.jsxs)(Z.Z,{style:{minHeight:"100vh"},children:[(0,n.jsxs)(T,{collapsible:!0,collapsed:a,onCollapse:e=>r(e),children:[(0,n.jsx)("div",{className:"sidebar-logo",onClick:()=>o(),children:a?"HS":" Object"}),(0,n.jsx)(k.Z,{theme:"dark",defaultSelectedKeys:[t.pathname],mode:"inline",children:null==K?void 0:K.map((e,i)=>(0,n.jsxs)(k.Z.Item,{icon:e.icon,children:[(0,n.jsx)(N(),{href:e.path}),e.label]},e.path))})]}),(0,n.jsxs)(Z.Z,{className:"site-layout",children:[(0,n.jsx)(O,{className:"mHeader",children:(0,n.jsx)(b.Z,{type:"primary",onClick:()=>l(),children:"Log out"})}),(0,n.jsx)(I.Z,{style:{margin:"16px 20px"},children:(0,n.jsx)(I.Z.Item,{children:"Dashboard"})}),(0,n.jsx)(_,{style:{margin:"0 16px"},children:(0,n.jsx)("div",{className:"site-layout-background",children:i})}),(0,n.jsxs)(z,{style:{textAlign:"center"},children:["Safeeds Transport Inc \xa92022 Created by \xa0",(0,n.jsx)("a",{href:"https://senior-developer.vercel.app/",children:"Ikhtiyor"})]})]})]})};var U=C,E=t(1463),Q=t(4269),w=t(9669),A=t.n(w),H=t(1475),P=t(3695),R=t(2920),M=function(){let e=e=>{Q.Z.confirm({centered:!0,title:"Rostan ham o'chirmoqchimisiz?",icon:(0,n.jsx)(H.Z,{}),onOk(){A().delete("".concat(P.z,"/api/object/delete/").concat(e)).then(e=>{R.Am.success("Muvaffaqqiyatli o'chirildi!"),a()}).catch(e=>R.Am.error("Error"))}})},[i,t]=(0,g.useState)([]),a=()=>{A().get("".concat(P.z,"/api/object")).then(e=>{t(e.data.data)})};return(0,g.useEffect)(()=>{a()},[]),(0,n.jsx)("div",{children:(0,n.jsx)(E.Z,{columns:[{title:"Nomi",dataIndex:"Nomi",key:"Nomi",render:e=>(0,n.jsx)("a",{children:e})},{title:"Ummumiy",dataIndex:"Ummumiy",key:"Ummumiy"},{title:"Bino",dataIndex:"Bino",key:"Bino"},{title:"Qurilishni Boshlanish Sanasi",dataIndex:"QurilishniBoshlanishSanasi",key:"QurilishniBoshlanishSanasi"},{title:"Qurilishni Bitish Sanasi",dataIndex:"QurilishniBitishSanasi",key:"rooms"},{title:"Tip",dataIndex:"Tip",key:"Tip"},{title:"delete",dataIndex:"_id",key:"_id",render:i=>(0,n.jsx)(b.Z,{type:"danger",onClick:()=>e(i),children:"O'chirish"})},{title:"edit",dataIndex:"upd",key:"upd",render:()=>(0,n.jsx)(b.Z,{type:"default",children:"O'zgartirish"})}],data:i})})},X=function(){let e=e=>{Q.Z.confirm({centered:!0,title:"Rostan ham o'chirmoqchimisiz?",icon:(0,n.jsx)(H.Z,{}),onOk(){A().delete("".concat(P.z,"/api/bino/delete/").concat(e)).then(e=>{R.Am.success("Muvaffaqqiyatli o'chirildi!"),a()}).catch(e=>R.Am.error("Error"))}})},[i,t]=(0,g.useState)([]),a=()=>{A().get("".concat(P.z,"/api/bino")).then(e=>{t(e.data.data)})};return(0,g.useEffect)(()=>{a()},[]),(0,n.jsx)("div",{children:(0,n.jsx)(E.Z,{columns:[{title:"Nomi",dataIndex:"Nomi",key:"Nomi",render:e=>(0,n.jsx)("a",{children:e})},{title:"Object",dataIndex:"Object",key:"Object"},{title:"Qavatliligi",dataIndex:"Qavatliligi",key:"Qavatliligi"},{title:"PodezlarSoni",dataIndex:"PodezlarSoni",key:"PodezlarSoni"},{title:"HonalarSoni",dataIndex:"HonalarSoni",key:"HonalarSoni"},{title:"Raqami",dataIndex:"Raqami",key:"Raqami"},{title:"UmmumiyKvadrati",dataIndex:"UmmumiyKvadrati",key:"UmmumiyKvadrati"},{title:"Tip",dataIndex:"Tip",key:"Tip"},{title:"delete",dataIndex:"_id",key:"_id",render:i=>(0,n.jsx)(b.Z,{type:"danger",onClick:()=>e(i),children:"O'chirish"})},{title:"edit",dataIndex:"upd",key:"upd",render:()=>(0,n.jsx)(b.Z,{type:"default",children:"O'zgartirish"})}],data:i})})};let F=[{title:"Umumiy qarzdorlar soni",dataIndex:"debts",key:"debts",render:e=>(0,n.jsx)("a",{children:e})},{title:"Foiz qarzdorligi",dataIndex:"per_debts",key:"per_debts"},{title:"Xonalar soni",dataIndex:"rooms",key:"rooms"},{title:"Kreditga olingan xonadonning kvadrati",dataIndex:"area",key:"area"},{title:"Xonadan topshiradigan yili",dataIndex:"year",key:"year"},{title:"",dataIndex:"del",key:"del",render:()=>(0,n.jsx)(b.Z,{type:"danger",children:"O'chirish"})},{title:"",dataIndex:"add",key:"add",render:()=>(0,n.jsx)(b.Z,{type:"primary",children:"Qo'shish"})},{title:"",dataIndex:"upd",key:"upd",render:()=>(0,n.jsx)(b.Z,{type:"default",children:"O'zgartirish"})}],Y=[{key:"1",per_debts:"2",location:"Amir Temur 105 a uy",debts:"3",area:"120 m2",rooms:4,year:2020},{key:"1",per_debts:"2",location:"Amir Temur 105 a uy",debts:"3",area:"120 m2",rooms:4,year:2020},{key:"1",per_debts:"2",location:"Amir Temur 105 a uy",debts:"3",area:"120 m2",rooms:4,year:2020}];var D=function(e){return(0,n.jsx)("div",{children:(0,n.jsx)(E.Z,{columns:F,data:Y})})}},1463:function(e,i,t){"use strict";var n=t(5893),a=t(4435);i.Z=function(e){let{columns:i,data:t}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{columns:i,dataSource:t,scroll:{x:"max-content"}})})}},658:function(e,i,t){"use strict";t.r(i);var n=t(5893),a=t(4786),r=t(2831),s=t(1577),l=t(4268),o=t(7294),d=t(9669),m=t.n(d),c=t(2920),u=t(3695);let h=()=>{let[e,i]=(0,o.useState)(0),t=e=>{m().post("".concat(u.z,"/api/honadon"),e).then(()=>{c.Am.success("successfully saved object"),console.log("success")}).catch(()=>{c.Am.error("error")})},d=e=>{console.log("Failed:",e)};return(0,n.jsx)("div",{children:(0,n.jsx)(l.wt,{children:(0,n.jsx)(l.mQ,{index:e,setIndex:i,tabs:[{title:"Xonadon qo'shish",content:(0,n.jsxs)(a.Z,{name:"basic",initialValues:{remember:!0},onFinish:t,onFinishFailed:d,autoComplete:"off",layout:"vertical",wrapperCol:{span:16},children:[(0,n.jsx)(a.Z.Item,{label:"Nomi",name:"Nomi",rules:[{required:!0,message:"Iltimos nomini kiriting!"}],children:(0,n.jsx)(r.Z,{})}),(0,n.jsx)(a.Z.Item,{label:"Oshhona",name:"Oshhona",rules:[{required:!0,message:"Iltimos Oshhonani kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"MehmonHona",name:"MehmonHona",rules:[{required:!0,message:"Iltimos MehmonHonani kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Yotohona",name:"Yotohona",rules:[{required:!0,message:"Iltimos Yotohonani kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Balkon",name:"Balkon",rules:[{required:!0,message:"Iltimos Balkonni kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Kirish",name:"Kirish",rules:[{required:!0,message:"Iltimos Kirishni kiriting!"}],children:(0,n.jsx)(r.Z,{})}),(0,n.jsx)(a.Z.Item,{label:"Kartira qiymati",name:"Kvqiymadi",rules:[{required:!0,message:"Iltimos Kartira qiymatini kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Ummumiy Maydon",name:"UmmumiyMaydon",rules:[{required:!0,message:"Iltimos Ummumiy Maydonni kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Uy raqami",name:"Uyraqami",rules:[{required:!0,message:"Iltimos Uy raqamini kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Bino Raqami",name:"BinoRaqami",rules:[{required:!0,message:"Iltimos Bino Raqamini kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Obyekt Nomi",name:"ObektNomi",rules:[{required:!0,message:"Iltimos Obyekt Nomi kiriting!"}],children:(0,n.jsx)(r.Z,{})}),(0,n.jsx)(a.Z.Item,{label:"Etaji",name:"Etaji",rules:[{required:!0,message:"Iltimos Etajini kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Kvartira narxi",name:"Kvnarhi",rules:[{required:!0,message:"Iltimos Kvartira narxi kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Tip",name:"Tip",rules:[{required:!0,message:"Iltimos Tipni kiriting!"}],children:(0,n.jsx)(r.Z,{type:"number"})}),(0,n.jsx)(a.Z.Item,{label:"Statuslar",name:"Statuslar",rules:[{required:!0,message:"Iltimos Statuslar kiriting!"}],children:(0,n.jsx)(r.Z,{})}),(0,n.jsx)(a.Z.Item,{children:(0,n.jsx)(s.Z,{type:"primary",htmlType:"submit",children:"Submit"})})]})}]})})})};i.default=h}},function(e){e.O(0,[652,623,836,786,774,888,179],function(){return e(e.s=92)}),_N_E=e.O()}]);