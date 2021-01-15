(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(12),s=n.n(i),o=(n(52),n(53),n(54),n(55),n(10)),u=n(7),j=n(15),l=n(14),b=n(13),d=n(9),h=n(19),f=n(27),p=n.n(f),O=n(31),x="http://localhost:8000",m=n(38),v=n.n(m),g=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=x+e,c={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};return null!==n&&(c.body=JSON.stringify(n)),fetch(r,c)}},{key:"signIn",value:function(){var e=Object(O.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/login/","POST",{email:t,password:n});case 2:if(200!==(r=e.sent).status&&401!==r.status){e.next=8;break}return(r.success=!0)&&v.a.set("jwt",r.token),e.abrupt("return",r.json().then((function(e){return e})));case 8:throw new Error("Problem logging in, please try again next time");case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/user","POST",t);case 2:if(201!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==n.status){e.next=11;break}return e.abrupt("return",n.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=a.a.createContext(),y=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).data=new g,e}return Object(u.a)(n,[{key:"render",value:function(){var e={data:this.data,actions:{signIn:this.signIn}};return Object(r.jsx)(w.Provider,{value:e,children:this.props.children})}}]),n}(c.Component);w.Consumer;function k(e){return function(t){return Object(r.jsx)(w.Consumer,{children:function(n){return Object(r.jsx)(e,Object(h.a)(Object(h.a)({},t),{},{context:n}))}})}}var S=n(24),N=n(8),C=n(6),U=(n(57),n.p+"static/media/ibsa_logo.a427566f.jpeg"),A=n(73);function I(){var e=Object(N.a)(["\n  text-align: center;\n  position: relative;\n  top: 2em;\n  left: 0%;\n  transform: ",";\n  z-index: ",";\n  transition: transform 0.5s ease-in-out;\n"]);return I=function(){return e},e}function E(){var e=Object(N.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  @media (max-width: 980px) {\n    flex-flow: column nowrap;\n    background-color: rgba(255, 255, 255, 0.8);\n    position: fixed;\n    opacity: ",";\n    right: 0;\n    height: 100vh;\n    padding-top: 3.5rem;\n    width: 100%;\n    z-index: ",";\n    transition: opacity 0.3s ease-in-out;\n  }\n"]);return E=function(){return e},e}var B=C.a.ul(E(),(function(e){return e.open?"1":"0"}),(function(e){return e.open?"0":"-1"})),z=C.a.li(I(),(function(e){return e.open?"translateY(0)":"translateY(100%)"}),(function(e){return e.open?"0":"-1"})),_=function(e){var t=Object(c.useState)(!1),n=Object(S.a)(t,2),a=n[0],i=n[1];return Object(r.jsxs)("header",{id:"header",class:"alt",children:[Object(r.jsx)("nav",{id:"logo",children:Object(r.jsx)(b.b,{to:"/",children:Object(r.jsx)("img",{src:U,alt:"IBSA Logo"})})}),Object(r.jsx)("nav",{id:"nav1",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/about",children:"About Us"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/events",children:"Events"})})]})}),Object(r.jsx)("nav",{id:"nav2",children:Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/signin",children:"Sign In"})})})}),Object(r.jsxs)("nav",{id:"nav-mobile",children:[Object(r.jsxs)(B,{open:a,id:"mobile-ul",children:[Object(r.jsx)(z,{open:a,onClick:Object(c.useState)(!1),children:Object(r.jsx)(b.b,{to:"/",children:"Home"})}),Object(r.jsx)(z,{open:a,onClick:Object(c.useState)(!1),children:Object(r.jsx)(b.b,{to:"/about",children:"About Us"})}),Object(r.jsx)(z,{open:a,onClick:Object(c.useState)(!1),children:Object(r.jsx)(b.b,{to:"/events",children:"Events"})}),Object(r.jsx)(z,{open:a,onClick:Object(c.useState)(!1),id:"SignIn",children:Object(r.jsx)(b.b,{to:"/signin",children:"Sign In"})})]}),Object(r.jsx)(A.a,{direction:"right",color:"#1f8ad0",toggled:a,toggle:i})]})]})};function D(){var e=Object(N.a)(["\n   margin-top: 30px;\n   font-size: 200px;\n"]);return D=function(){return e},e}var L=C.a.h2(D()),Z=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{id:"banner",children:[Object(r.jsx)(_,{}),Object(r.jsx)(L,{children:"IBSA"}),Object(r.jsx)("p",{children:"UCLA's  Bruins Student Association"})]})}}]),n}(c.Component),V=n.p+"static/media/ibsa_f1.c94e02df.jpg";function F(){var e=Object(N.a)(["\n   text-align: left;\n   font-size: 20px;\n   color: #ffffff;\n"]);return F=function(){return e},e}function J(){var e=Object(N.a)(["\n   width: 600px;\n"]);return J=function(){return e},e}function P(){var e=Object(N.a)(["\n   text-align: left;\n   font-size: 20px;\n   margin-bottom: 20px;\n   color: #ffffff;\n"]);return P=function(){return e},e}function R(){var e=Object(N.a)(["\n   padding: 3em 0 3em 0;\n"]);return R=function(){return e},e}var M=C.a.div(R()),Q=(C.a.h2(P()),C.a.img(J())),T=(C.a.p(F()),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(M,{className:"wrapper style1",id:"one",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{id:"textbox",children:[Object(r.jsx)("h2",{children:"Welcome to IBSA!"}),Object(r.jsx)("p",{children:"Indonesian Bruins Student Association (IBSA) is a UCLA based student organization that promotes and celebrates Indonesian culture in the UCLA community."}),Object(r.jsx)(b.b,{to:"/about",children:Object(r.jsx)("input",{type:"button",value:"Check Us Out!"})})]}),Object(r.jsx)("div",{id:"images",children:Object(r.jsx)(Q,{src:V})})]})})}}]),n}(c.Component)),G=n.p+"static/media/ibsa_f3.c482c94a.jpg";function Y(){var e=Object(N.a)(["\n   text-align: left;\n   font-size: 20px;\n   color: #ffffff;\n"]);return Y=function(){return e},e}function W(){var e=Object(N.a)(["\n   width: 600px;\n"]);return W=function(){return e},e}function X(){var e=Object(N.a)(["\n   text-align: left;\n   font-size: 20px;\n   margin-bottom: 20px;\n   color: #ffffff;\n"]);return X=function(){return e},e}function H(){var e=Object(N.a)(["\n   padding: 3em 0 3em 0;\n"]);return H=function(){return e},e}var q=C.a.div(H()),K=(C.a.h2(X()),C.a.img(W())),$=(C.a.p(Y()),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(q,{className:"wrapper style1",id:"two",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{id:"images",children:Object(r.jsx)(K,{src:G})}),Object(r.jsxs)("div",{id:"textbox",children:[Object(r.jsx)("h2",{children:"IBSA Winter Retreat"}),Object(r.jsx)("p",{children:"Come join us on our annual winter retreat! It will take place in Big Bear Lake, and we\u2019ll be having a series of games, activities and bonding sessions! "}),Object(r.jsx)(b.b,{to:"/signin",children:Object(r.jsx)("input",{type:"button",value:"Sign Up"})})]})]})})}}]),n}(c.Component)),ee=n(42),te=n.n(ee),ne=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={imgs:[]},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.UserList()}},{key:"UserList",value:function(){var e=this;te.a.getJSON("https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url&access_token=IGQVJYZAnBkeHJRYVdpQ09TZAGh1Yl9FVXBMUk1nSmxzSVFiZAmFidjVVVUdYU2pDcmtGZAnJjbzFwdU5BUExKQjRUQUQydExXS1JTWWxkZA0wzNUhnTU5HZAC0xNXBhUkxMd0VFZAEl3V2h5ajd1Um1iQXBwbgZDZD").then((function(t){var n=t.data;e.setState({imgs:n})}))}},{key:"render",value:function(){var e=this.state.imgs.filter((function(e,t){return!("IMAGE"!=e.media_type&&"CAROUSEL_ALBUM"!=e.media_type||t>12)})).map((function(e,t){return Object(r.jsx)("div",{class:"square",children:Object(r.jsx)("a",{href:e.permalink,children:Object(r.jsx)("img",{src:e.media_url})})})}));return Object(r.jsxs)("div",{id:"instagram",children:[Object(r.jsx)("h2",{children:"Follow Us on Instagram!"}),Object(r.jsx)("div",{className:"igImages",children:e})]})}}]),n}(c.Component);n(63);function re(e){var t=a.a.useState(!1),n=Object(S.a)(t,2),c=n[0],i=n[1],s=a.a.useRef();return a.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return i(e.isIntersecting)}))})).observe(s.current)}),[]),Object(r.jsx)("div",{className:"fade-in-section ".concat(c?"is-visible":""),ref:s,children:e.children})}var ce=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.querySelector("body").setAttribute("class","landing")}},{key:"componentWillUnmount",value:function(){document.querySelector("body").removeAttribute("class")}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{}),Object(r.jsx)(re,{children:Object(r.jsx)(T,{})}),Object(r.jsx)(re,{children:Object(r.jsx)($,{})}),Object(r.jsx)(re,{children:Object(r.jsx)(ne,{})})]})}}]),n}(c.Component),ae=(n(64),n(34)),ie=n(46),se=n.n(ie),oe=(n(66),Object(ae.b)(se.a)),ue=function(){return Object(r.jsxs)("div",{id:"events",children:[Object(r.jsxs)("div",{id:"current-events",children:[Object(r.jsx)("h2",{children:"Events"}),Object(r.jsx)(ae.a,{localizer:oe,events:[],defaultDate:new Date})]}),Object(r.jsx)("div",{id:"past-events",children:Object(r.jsx)("h2",{children:"Past Events"})})]})},je=function(){return Object(r.jsx)("div",{children:"About us"})},le=n(23);function be(){var e=Object(N.a)(["\n   margin:1em 0; \n"]);return be=function(){return e},e}function de(){var e=Object(N.a)(["\n   width:60%;\n   margin:3em auto;\n   height:calc(100vh - 321px);\n"]);return de=function(){return e},e}var he=C.a.div(de()),fe=C.a.input(be()),pe=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={firstName:"",lastName:"",email:"",password:"",phone:""},e.handleSubmit=function(t){t.preventDefault(),e.submit()},e.change=function(t){var n=t.target.name,r=t.target.value;e.setState((function(){return Object(le.a)({},n,r)}))},e.submit=function(){var t=e.props.context,n=e.state,r=n.firstName,c=n.lastName,a=n.email,i=n.password,s=n.phone,o={firstName:r,lastName:c,email:a,password:i,phone:s};t.data.createUser(o).then((function(n){n.length?e.setState({errors:n}):t.actions.signIn(a,i).then((function(){e.props.history.push("/")}))})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.firstName,n=e.lastName,c=e.email,a=e.password,i=e.phone;return Object(r.jsxs)(he,{children:[Object(r.jsx)("h1",{children:" Sign Up "}),Object(r.jsxs)("div",{children:["Already have an account? ",Object(r.jsx)(b.b,{to:"/signin",children:"Sign In!"})]}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)(fe,{id:"firstName",name:"firstName",type:"text",placeholder:"First Name",value:t,onChange:this.change}),Object(r.jsx)(fe,{id:"lastName",name:"lastName",type:"text",placeholder:"Last Name",value:n,onChange:this.change}),Object(r.jsx)(fe,{id:"email",name:"email",type:"text",placeholder:"Email (g.ucla.edu or ucla.edu)",value:c,onChange:this.change}),Object(r.jsx)(fe,{id:"password",name:"password",type:"password",placeholder:"Password",value:a,onChange:this.change}),Object(r.jsx)(fe,{id:"phone",name:"phone",type:"text",placeholder:"Phone Number",value:i,onChange:this.change}),Object(r.jsx)("button",{type:"submit",children:"Sign Up"})]})]})}}]),n}(c.Component);function Oe(){var e=Object(N.a)(["\n  background-color: red;\n  color: white;\n  padding: 0.5em;\n  margin: 1em 0;\n  border-radius: 0.5em;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(N.a)(["\n   margin:1em 0; \n"]);return xe=function(){return e},e}function me(){var e=Object(N.a)(["\n   width:60%;\n   margin:3em auto;\n   height:calc(100vh - 321px);\n"]);return me=function(){return e},e}var ve=C.a.div(me()),ge=C.a.input(xe()),we=C.a.div(Oe()),ye=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",error:""},e.handleSubmit=function(t){t.preventDefault(),e.submit()},e.change=function(t){var n=t.target.name,r=t.target.value;e.setState((function(){return Object(le.a)({},n,r)}))},e.submit=function(){var t=e.props.context,n=(e.props.location.state||{from:{pathname:"/"}}).from,r=e.state,c=r.email,a=r.password;t.data.signIn(c,a).then((function(t){console.log(t),!1===t.success?e.setState((function(){return{error:t.message}})):e.props.history.push(n)})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,c=e.error;return Object(r.jsxs)(ve,{children:[Object(r.jsx)("h1",{children:" Sign In "}),Object(r.jsx)(ke,{error:c}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)(ge,{id:"email",name:"email",type:"text",placeholder:"Email (g.ucla.edu or ucla.edu)",value:t,onChange:this.change}),Object(r.jsx)(ge,{id:"password",name:"password",type:"password",placeholder:"Password",value:n,onChange:this.change}),Object(r.jsxs)("div",{children:["Don't have an account? ",Object(r.jsx)(b.b,{to:"/signup",children:"Sign Up!"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{button:!0,type:"submit",children:"Sign In"})})]})]})}}]),n}(c.Component);function ke(e){var t=null;return console.log(e.error),""!==e.error&&(t=Object(r.jsx)(we,{children:e.error})),t}var Se=function(){return Object(r.jsx)("div",{children:"Not Found"})},Ne=(n(67),function(){return Object(r.jsx)("footer",{id:"footer",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("ul",{className:"icons",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.instagram.com/bruins.ibsa/",className:"icon fa-instagram"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.facebook.com/groups/ibsaucla/",className:"icon fa-facebook"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/company/ibsaucla/about/",className:"icon fa-linkedin"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.youtube.com/channel/UCGpRZ-RXaURw2_m2z4dIM4Q",className:"icon fa-youtube-play"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"mailto:bruin.ibsa@gmail.com",className:"icon fa-envelope"})})]}),Object(r.jsxs)("ul",{className:"footlinks",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"",children:"Home"})}),Object(r.jsx)("li",{children:"|"}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"",children:"About Us"})}),Object(r.jsx)("li",{children:"|"}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"",children:"Events"})})]})]})})}),Ce=k(pe),Ue=k(ye),Ae=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(b.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{}),Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:ce}),Object(r.jsx)(d.a,{path:"/events",component:ue}),Object(r.jsx)(d.a,{path:"/about",component:je}),Object(r.jsx)(d.a,{path:"/signup",component:Ce}),Object(r.jsx)(d.a,{path:"/signin",component:Ue}),Object(r.jsx)(d.a,{component:Se})]}),Object(r.jsx)(Ne,{})]})})}}]),n}(c.Component);s.a.render(Object(r.jsx)(y,{children:Object(r.jsx)(Ae,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e33322a4.chunk.js.map