(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),c=n(11),s=n.n(c),o=(n(76),n(77),n(78),n(79),n(12)),u=n(10),l=n(15),j=n(14),d=n(16),b=n(17),h=n(26),f=n(25),m=n.n(f),p=n(37),O="https://ibsa-test-deployment.herokuapp.com/api",x=n(60),v=n.n(x),g=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=O+e,r={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};return null!==n&&(r.body=JSON.stringify(n)),fetch(a,r)}},{key:"signIn",value:function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/login/","POST",{email:t,password:n});case 2:if(200!==(a=e.sent).status&&401!==a.status){e.next=8;break}return!0===a.success&&v.a.set("jwt",a.token),e.abrupt("return",a.json().then((function(e){return e})));case 8:throw new Error("Problem logging in, please try again next time");case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/user","POST",t);case 2:if(201!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==n.status){e.next=11;break}return e.abrupt("return",n.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHolidays",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/holidays","GET");case 2:return t=e.sent,e.abrupt("return",t.json().then((function(e){return e})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHomepageInstagramData",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/instagram/homepage");case 2:return t=e.sent,e.abrupt("return",t.json().then((function(e){return e})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPastEvents",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/instagram/pastevents");case 2:return t=e.sent,e.abrupt("return",t.json().then((function(e){return e})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),w=i.a.createContext(),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).data=new g,e}return Object(u.a)(n,[{key:"render",value:function(){var e={data:this.data,actions:{signIn:this.signIn}};return Object(a.jsx)(w.Provider,{value:e,children:this.props.children})}}]),n}(r.Component);w.Consumer;function A(e){return function(t){return Object(a.jsx)(w.Consumer,{children:function(n){return Object(a.jsx)(e,Object(h.a)(Object(h.a)({},t),{},{context:n}))}})}}var k=n(34),S=n(5),N=n(6),E=(n(81),n.p+"static/media/ibsa_logo.a427566f.jpeg"),I=n(108);function C(){var e=Object(S.a)(["\n  text-align: center;\n  position: relative;\n  top: 0em;\n  left: 0%;\n  transform: ",";\n  z-index: ",";\n  transition: transform 0.5s ease-in-out;\n"]);return C=function(){return e},e}function P(){var e=Object(S.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  @media (max-width: 980px) {\n    flex-flow: column nowrap;\n    background-color: rgba(255, 255, 255, 0.8);\n    position: fixed;\n    opacity: ",";\n    right: 0;\n    height: 100vh;\n    padding-top: 3.5rem;\n    width: 100%;\n    z-index: ",";\n    transition: opacity 0.3s ease-in-out;\n  }\n"]);return P=function(){return e},e}var U=N.a.ul(P(),(function(e){return e.open?"1":"0"}),(function(e){return e.open?"0":"-1"})),D=N.a.li(C(),(function(e){return e.open?"translateY(0)":"translateY(100%)"}),(function(e){return e.open?"0":"-1"})),G=function(e){var t=Object(r.useState)(!1),n=Object(k.a)(t,2),i=n[0],c=n[1];return Object(a.jsxs)("header",{id:"header",className:"alt",children:[Object(a.jsx)("nav",{id:"logo",children:Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("img",{src:E,alt:"IBSA Logo"})})}),Object(a.jsx)("nav",{id:"nav1",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/about",children:"About Us"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/events",children:"Events"})})]})}),Object(a.jsx)("nav",{id:"nav2"}),Object(a.jsxs)("nav",{id:"nav-mobile",children:[Object(a.jsxs)(U,{open:i,id:"mobile-ul",children:[Object(a.jsx)(D,{open:i,onClick:Object(r.useState)(!1),children:Object(a.jsx)(d.b,{to:"/",children:"Home"})}),Object(a.jsx)(D,{open:i,onClick:Object(r.useState)(!1),children:Object(a.jsx)(d.b,{to:"/about",children:"About Us"})}),Object(a.jsx)(D,{open:i,onClick:Object(r.useState)(!1),children:Object(a.jsx)(d.b,{to:"/events",children:"Events"})})]}),Object(a.jsx)("div",{id:"hamburger",children:Object(a.jsx)(I.a,{direction:"right",color:"#1f8ad0",toggled:i,toggle:c})})]})]})},B=n(22),J=n(57);function L(){var e=Object(S.a)(["\n   position: relative;\n   height: 100vh;\n   padding-top: 50vh;\n   padding-bottom: 50vh;\n   background-image:  url(","), url(",");\n   background-position: center top;\n   background-size: cover;\n   line-height: 1.75;\n   text-align: center;\n"]);return L=function(){return e},e}function R(){var e=Object(S.a)(["\n   color: #aaa;\n   font-size: 1.5em;\n   margin-bottom: 1.75em;\n   text-transform: uppercase;\n"]);return R=function(){return e},e}function z(){var e=Object(S.a)(["\n   margin-top: 30px;\n   font-size: 200px;\n   color: #ffffff;\n   display: inline-block;\n   font-size: 4.0em;\n   line-height: 1.35;\n   margin-bottom: 0.0em;\n"]);return z=function(){return e},e}var T=N.a.h2(z()),M=N.a.p(R()),H=N.a.div(L(),(function(e){return e.overlay}),(function(e){return e.imgURL}));function _(e){var t=e.contents;return Object(a.jsx)(J.a,{children:t.map((function(e,t){return Object(a.jsx)(J.a.Item,{children:Object(a.jsxs)(H,{imgURL:e.image,overlay:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAA1BMVEUuLTSUN/hqAAAAAXRSTlO99TYXVwAAABxJREFUWMPtwYEAAAAAw6D7U19hANUAAAAAAKIDFFAAARZNHj8AAAAASUVORK5CYII=",children:[Object(a.jsx)(T,{children:"IBSA"}),Object(a.jsx)(M,{children:"Indonesian Bruins Student Association"})]})},t)}))})}var V=[{image:n.p+"static/media/ibsa_cover.1bedb777.jpg"},{image:n.p+"static/media/ibsa_cover2.c2922540.JPG"}],F=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(_,{contents:V})}}]),n}(r.Component),W=n.p+"static/media/ibsa_f1.c94e02df.jpg";function q(){var e=Object(S.a)(["\n   text-align: left;\n   font-size: 20px;\n   color: #ffffff;\n"]);return q=function(){return e},e}function Y(){var e=Object(S.a)(["\n   width: 600px;\n   height: auto;\n"]);return Y=function(){return e},e}function K(){var e=Object(S.a)(["\n   text-align: left;\n   font-size: 20px;\n   margin-bottom: 20px;\n   color: #ffffff;\n"]);return K=function(){return e},e}function X(){var e=Object(S.a)(["\n   padding: 3em 0 3em 0;\n"]);return X=function(){return e},e}var Q=N.a.div(X()),Z=(N.a.h2(K()),N.a.img(Y())),$=(N.a.p(q()),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(Q,{className:"wrapper style1",id:"one",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{id:"textbox",children:[Object(a.jsx)("h2",{children:"Welcome to IBSA!"}),Object(a.jsx)("p",{children:"Indonesian Bruins Student Association (IBSA) is a UCLA based student organization that promotes and celebrates Indonesian culture in the UCLA community."}),Object(a.jsx)(d.b,{to:"/about",children:Object(a.jsx)("input",{type:"button",value:"Check Us Out!"})})]}),Object(a.jsx)("div",{id:"images",children:Object(a.jsx)(Z,{src:W})})]})})}}]),n}(r.Component)),ee=n.p+"static/media/ibsa_f3.c482c94a.jpg";function te(){var e=Object(S.a)(["\n   width: 600px;\n"]);return te=function(){return e},e}function ne(){var e=Object(S.a)(["\n   padding: 3em 0 3em 0;\n"]);return ne=function(){return e},e}var ae=N.a.div(ne()),re=N.a.img(te()),ie=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(ae,{className:"wrapper style1",id:"two",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{id:"images",children:Object(a.jsx)(re,{src:ee})}),Object(a.jsxs)("div",{id:"textbox",children:[Object(a.jsx)("h2",{children:"IBSA Winter Retreat"}),Object(a.jsx)("p",{children:"Come join us on our annual winter retreat! It will take place in Big Bear Lake, and we\u2019ll be having a series of games, activities and bonding sessions! "}),Object(a.jsx)(d.b,{to:"/signin",children:Object(a.jsx)("input",{type:"button",value:"Sign Up"})})]})]})})}}]),n}(r.Component),ce="#1F8AD0",se="#ffffff",oe="@media screen and (max-width: 700px)",ue="@media screen and (max-width: 980px)";function le(){var e=Object(S.a)(["\n    margin-top: 1.5em;\n    font-weight: bold;\n    \n    "," {\n        font-size: 2em;\n    }\n"]);return le=function(){return e},e}function je(){var e=Object(S.a)(["\n   position: relative;\n   text-align: center;\n   margin-top: 5em;\n   width: 80%;\n   margin: auto;\n   padding-bottom: 3em;\n\n   "," {\n    width:90%;\n    margin: auto;\n   }\n\n   "," {\n\n   }\n"]);return je=function(){return e},e}N.a.div(je(),oe,ue);var de=N.a.h1(le(),oe),be=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.images.filter((function(e,t){return!("IMAGE"!=e.media_type&&"CAROUSEL_ALBUM"!=e.media_type||t>12)})).map((function(e,t){return Object(a.jsx)("div",{className:"square",children:Object(a.jsx)("a",{href:e.permalink,children:Object(a.jsx)("img",{src:e.media_url})})},t)}));return Object(a.jsxs)("div",{id:"instagram",children:[Object(a.jsx)(de,{children:"FOLLOW US ON INSTAGRAM!"}),Object(a.jsx)("div",{className:"igImages",children:e})]})}}]),n}(r.Component);n(89);function he(e){var t=i.a.useState(!1),n=Object(k.a)(t,2),r=n[0],c=n[1],s=i.a.useRef();return i.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return c(e.isIntersecting)}))})).observe(s.current)}),[]),Object(a.jsx)("div",{className:"fade-in-section ".concat(r?"is-visible":""),ref:s,children:e.children})}var fe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={instagramData:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.context.data.getHomepageInstagramData().then((function(t){var n=[];t.data.forEach((function(e){return n.push(e)})),e.setState({instagramData:n})})),document.querySelector("body").setAttribute("class","landing")}},{key:"componentWillUnmount",value:function(){document.querySelector("body").removeAttribute("class")}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(B.a,{children:Object(a.jsx)("title",{children:"IBSA | Home"})}),Object(a.jsx)(F,{}),Object(a.jsx)(he,{children:Object(a.jsx)($,{})}),Object(a.jsx)(he,{children:Object(a.jsx)(ie,{})}),Object(a.jsx)(he,{children:Object(a.jsx)(be,{images:this.state.instagramData})})]})}}]),n}(r.Component),me=(n(90),n(56)),pe=n(70),Oe=n.n(pe),xe=(n(92),n(106)),ve=n(107);function ge(){var e=Object(S.a)(["\n  text-align: center;\n  font-size: 65px;\n  margin: 0.5em 0;\n\n  "," {\n    font-size:50px;\n  }\n"]);return ge=function(){return e},e}var we=Object(me.b)(Oe.a),ye=N.a.h1(ge(),ue);function Ae(e){var t,n,r,i,c=e.event;"none"==c.image?(t=Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Start: "}),new Date(c.start).toLocaleDateString()]}),n=Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"End: "}),new Date(c.end).toLocaleDateString()]})):(t=Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Start: "}),new Date(c.start).toLocaleString()]}),n=Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"End: "}),new Date(c.end).toLocaleString()]}),r=Object(a.jsx)("img",{src:c.image}),i=Object(a.jsx)("button",{children:Object(a.jsx)("a",{href:c.linkToEvent,children:"Sign up"})}));var s=Object(a.jsxs)(ve.a,{id:"popover-trigger-click-root-close",style:{opacity:1},children:[Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:c.title})}),r,t,n,i]});return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)(xe.a,{id:"help",trigger:"click",rootClose:!0,container:this,placement:"top",overlay:s,children:Object(a.jsx)("div",{children:c.title})})})})}var ke=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={holidays:[],pastEvents:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.populateHolidays()}},{key:"populateHolidays",value:function(){var e=this;this.props.context.data.getHolidays().then((function(t){e.setState({holidays:t})}))}},{key:"populatePastEvents",value:function(){var e=this;this.props.context.data.getPastEvents().then((function(t){e.setState({pastEvents:t})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"events",children:[Object(a.jsx)(B.a,{children:Object(a.jsx)("title",{children:"IBSA | Events"})}),Object(a.jsxs)("div",{id:"current-events",children:[Object(a.jsx)(ye,{children:"EVENTS"}),Object(a.jsx)(me.a,{startAccessor:"start",endAccessor:"end",localizer:we,events:this.state.holidays,defaultDate:new Date,components:{event:Ae}})]}),Object(a.jsx)("div",{id:"past-events",children:Object(a.jsx)(ye,{children:"PAST EVENTS"})})]})}}]),n}(r.Component),Se=(n(94),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"abanner",children:[Object(a.jsx)(G,{}),Object(a.jsx)("h2",{children:"ABOUT US"}),Object(a.jsx)("p",{children:"Learn more about who we are"})]})}}]),n}(r.Component)),Ne=[{quote:"I learned the beauty of discovering my own voice, while also learning how to amplify others at the same time",creator:"Michelle Tirtoatmojo, Vice President"},{quote:"I could not have pictured a better organization to be 'Home Away from Home'.",creator:"Andara Atteenaputri, Director of Internal Events"}];function Ee(){var e=Object(S.a)(["\n   font-weight:200;\n   font-size:16px;\n"]);return Ee=function(){return e},e}function Ie(){var e=Object(S.a)(["\n   font-size: 2em;\n   font-weight: 800;\n   font-style: bold;\n   margin-bottom:1em;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(S.a)(["\n   margin: 6em 3em;\n   color: ",";\n   font-family: ",", sans-serif;\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(S.a)(["\n   background-color: ",";\n   align-items: center;\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(S.a)(["\n   margin: 0;\n"]);return Ue=function(){return e},e}var De=N.a.div(Ue()),Ge=N.a.div(Pe(),ce),Be=N.a.div(Ce(),se,"aktiv-grotesk"),Je=N.a.p(Ie()),Le=N.a.p(Ee());function Re(){return Object(a.jsx)(De,{className:"container-fluid",children:Object(a.jsx)(Ge,{className:"row",children:Ne.map((function(e){return Object(a.jsxs)(Be,{className:"col-md my-5",children:[Object(a.jsxs)(Je,{children:[' "',e.quote,'" ']}),Object(a.jsxs)(Le,{children:[" - ",e.creator]})]})}))})})}function ze(){var e=Object(S.a)(["\n   margin-top: 1em;\n"]);return ze=function(){return e},e}function Te(){var e=Object(S.a)(["\n   font-weight: 600;\n"]);return Te=function(){return e},e}function Me(){var e=Object(S.a)(["\n   text-align: center;\n   margin: 1em 0.5em;\n"]);return Me=function(){return e},e}function He(){var e=Object(S.a)(["\n   border-top-left-radius: 1em;\n   border-top-right-radius: 1em;\n   border-bottom: 1px solid black;\n"]);return He=function(){return e},e}function _e(){var e=Object(S.a)(["\n   border-radius:1em;\n   width: 50%;\n   height: auto;\n   box-shadow: 10px 10px 5px;\n   padding-bottom: 1em;\n   max-width: 25%;\n   margin: 2em 1em;\n   flex-grow: 1;\n\n   "," {\n      min-width:80%;\n      margin: 2em 2em;\n   }\n\n   "," {\n      box-shadow: 7.5px 7.5px 3.725px;\n      max-width: 40%;\n   }\n"]);return _e=function(){return e},e}var Ve=N.a.div(_e(),oe,ue),Fe=N.a.img(He()),We=N.a.div(Me()),qe=N.a.h2(Te()),Ye=N.a.p(ze());function Ke(e){var t=e.imgURL,n=e.name,r=e.title;return Object(a.jsxs)(Ve,{children:[Object(a.jsx)(Fe,{src:t,className:"img-fluid"}),Object(a.jsxs)(We,{children:[Object(a.jsxs)(qe,{children:[" ",n," "]}),Object(a.jsxs)(Ye,{children:[" ",r," "]})]})]})}var Xe=n.p+"static/media/Valerie.d07fd74a.JPG",Qe=n.p+"static/media/Andara.d07fd74a.JPG",Ze=n.p+"static/media/Brian.d07fd74a.JPG",$e=n.p+"static/media/Chanel.d07fd74a.JPG",et=n.p+"static/media/Daphne.d07fd74a.JPG",tt=n.p+"static/media/Winston.d07fd74a.JPG",nt=n.p+"static/media/Patrick.d07fd74a.JPG",at=n.p+"static/media/Michelle.d07fd74a.JPG",rt=n.p+"static/media/natanael.2060861a.JPG",it=n.p+"static/media/natasha.c3ef19db.JPG",ct=n.p+"static/media/jason.7985e972.JPG",st=n.p+"static/media/joshua.d07fd74a.JPG",ot=n.p+"static/media/elena.e73af757.JPG",ut=n.p+"static/media/giselle.5fb47533.JPG",lt=n.p+"static/media/sheren.9a92b2b3.JPG",jt=[{img:Xe,name:"Valerie Taruno",title:"President"},{img:at,name:"Michelle Tirtoatomojo",title:"Vice President"},{img:nt,name:"Patrick Lukito",title:"Director of External Events"},{img:Ze,name:"Brian Sinambela",title:"Director of External Events"},{img:Qe,name:"Andara Atteenaputri",title:"Director of Internal Events"},{img:tt,name:"Winston Wibawa",title:"Director of Internal Events"},{img:$e,name:"Chanel Salim",title:"Director of Finance"},{img:et,name:"Daphne Marina",title:"Director of Media & Public Relations"}],dt=[{img:rt,name:"Natanael Wijaya",title:"Internal Events Officer"},{img:st,name:"Joshua Gunawan",title:"Internal Events Officer"},{img:ot,name:"Elena Alimin",title:"External Events Officer"},{img:lt,name:"Sheren Morita",title:"External Events Officer"},{img:it,name:"Natasha Grace",title:"Media & Public Relations Officer"},{img:ut,name:"Giselle Kurniawan",title:"Media & Public Relations Officer"},{img:ct,name:"Jason Agus",title:"Finance Officer"}];function bt(){var e=Object(S.a)(["\n  margin-bottom: 1em;\n  display:flex;\n  flex-grow: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return bt=function(){return e},e}var ht=N.a.div(bt());function ft(){return Object(a.jsx)(ht,{className:"container-fluid",id:"officers",children:dt.map((function(e,t){return Object(a.jsx)(Ke,{imgURL:e.img,name:e.name,title:e.title},t)}))})}function mt(){var e=Object(S.a)(["\n  margin-bottom: 1em;\n  display:flex;\n  flex-grow: 0;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]);return mt=function(){return e},e}var pt=N.a.div(mt());function Ot(){return Object(a.jsx)(pt,{className:"container-fluid",id:"board_members",children:jt.map((function(e,t){return Object(a.jsx)(Ke,{imgURL:e.img,name:e.name,title:e.title},t)}))})}function xt(){var e=Object(S.a)(["\n  border: 1px solid ",";\n  margin: 0 3em 0 3em;\n"]);return xt=function(){return e},e}function vt(){var e=Object(S.a)(["\n  margin: 1em 0 1em 0;\n  color: ",";\n  text-align: center;\n  font-size: 4em;\n  font-weight: 800;\n  font-style: bold;\n"]);return vt=function(){return e},e}function gt(){var e=Object(S.a)(["\n  margin-top: 140px;\n  "," {\n    margin-top: 122px;\n  }\n"]);return gt=function(){return e},e}N.a.div(gt(),ue);var wt=N.a.h1(vt(),ce),yt=N.a.hr(xt(),ce),At=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(B.a,{children:Object(a.jsx)("title",{children:"IBSA | About Us"})}),Object(a.jsx)(Se,{}),Object(a.jsx)(Re,{}),Object(a.jsx)(wt,{children:" Our Team"}),Object(a.jsx)(yt,{}),Object(a.jsx)(Ot,{}),Object(a.jsx)(ft,{})]})},kt=n(31);function St(){var e=Object(S.a)(["\n   margin:1em 0; \n"]);return St=function(){return e},e}function Nt(){var e=Object(S.a)(["\n   width:60%;\n   padding-top: 20vh;\n   margin-top: 0em;\n   margin-left: 20vw;\n   margin-right: 20vw;\n   margin-bottom: 10vh;\n"]);return Nt=function(){return e},e}var Et=N.a.div(Nt()),It=N.a.input(St()),Ct=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",password:"",phone:""},e.handleSubmit=function(t){t.preventDefault(),e.submit()},e.change=function(t){var n=t.target.name,a=t.target.value;e.setState((function(){return Object(kt.a)({},n,a)}))},e.submit=function(){var t=e.props.context,n=e.state,a=n.firstName,r=n.lastName,i=n.email,c=n.password,s=n.phone,o={firstName:a,lastName:r,email:i,password:c,phone:s};t.data.createUser(o).then((function(n){n.length?e.setState({errors:n}):t.actions.signIn(i,c).then((function(){e.props.history.push("/")}))})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.firstName,n=e.lastName,r=e.email,i=e.password,c=e.phone;return Object(a.jsxs)(Et,{children:[Object(a.jsx)(B.a,{children:Object(a.jsx)("title",{children:"IBSA | Sign Up"})}),Object(a.jsx)("h1",{children:" Sign Up "}),Object(a.jsxs)("div",{children:["Already have an account? ",Object(a.jsx)(d.b,{to:"/signin",children:"Sign In!"})]}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(It,{id:"firstName",name:"firstName",type:"text",placeholder:"First Name",value:t,onChange:this.change}),Object(a.jsx)(It,{id:"lastName",name:"lastName",type:"text",placeholder:"Last Name",value:n,onChange:this.change}),Object(a.jsx)(It,{id:"email",name:"email",type:"text",placeholder:"Email (g.ucla.edu or ucla.edu)",value:r,onChange:this.change}),Object(a.jsx)(It,{id:"password",name:"password",type:"password",placeholder:"Password",value:i,onChange:this.change}),Object(a.jsx)(It,{id:"phone",name:"phone",type:"text",placeholder:"Phone Number",value:c,onChange:this.change}),Object(a.jsx)("button",{type:"submit",children:"Sign Up"})]})]})}}]),n}(r.Component);function Pt(){var e=Object(S.a)(["\n  background-color: red;\n  color: white;\n  padding: 0.5em;\n  margin: 1em 0;\n  border-radius: 0.5em;\n"]);return Pt=function(){return e},e}function Ut(){var e=Object(S.a)(["\n   margin:1em 0; \n"]);return Ut=function(){return e},e}function Dt(){var e=Object(S.a)(["\n   width:60%;\n   padding-top: 30vh;\n   margin-top: 0em;\n   margin-left: 20vw;\n   margin-right: 20vw;\n   margin-bottom: 20vh;\n"]);return Dt=function(){return e},e}var Gt=N.a.div(Dt()),Bt=N.a.input(Ut()),Jt=N.a.div(Pt()),Lt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",error:""},e.handleSubmit=function(t){t.preventDefault(),e.submit()},e.change=function(t){var n=t.target.name,a=t.target.value;e.setState((function(){return Object(kt.a)({},n,a)}))},e.submit=function(){var t=e.props.context,n=(e.props.location.state||{from:{pathname:"/"}}).from,a=e.state,r=a.email,i=a.password;t.data.signIn(r,i).then((function(t){console.log(t),!1===t.success?e.setState((function(){return{error:t.message}})):e.props.history.push(n)})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,r=e.error;return Object(a.jsxs)(Gt,{children:[Object(a.jsx)(B.a,{children:Object(a.jsx)("title",{children:"IBSA | Sign In"})}),Object(a.jsx)("h1",{children:" Sign In "}),Object(a.jsx)(Rt,{error:r}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(Bt,{id:"email",name:"email",type:"text",placeholder:"Email (g.ucla.edu or ucla.edu)",value:t,onChange:this.change}),Object(a.jsx)(Bt,{id:"password",name:"password",type:"password",placeholder:"Password",value:n,onChange:this.change}),Object(a.jsxs)("div",{children:["Don't have an account? ",Object(a.jsx)(d.b,{to:"/signup",children:"Sign Up!"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{button:!0,type:"submit",children:"Sign In"})})]})]})}}]),n}(r.Component);function Rt(e){var t=null;return console.log(e.error),""!==e.error&&(t=Object(a.jsx)(Jt,{children:e.error})),t}n(95);var zt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"notfound",children:[Object(a.jsx)(B.a,{children:Object(a.jsx)("title",{children:"IBSA | Error"})}),Object(a.jsxs)("div",{class:"notfound-bg",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{class:"notfound",children:[Object(a.jsx)("div",{class:"notfound-404",children:Object(a.jsx)("h1",{children:"404"})}),Object(a.jsx)("h2",{children:"Page Not Found"}),Object(a.jsx)("p",{children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),Object(a.jsx)(d.b,{to:"/",children:"Homepage"}),Object(a.jsxs)("div",{class:"notfound-social",children:[Object(a.jsx)("a",{href:"https://www.instagram.com/bruins.ibsa/",children:Object(a.jsx)("i",{class:"fa fa-instagram"})}),Object(a.jsx)("a",{href:"https://www.facebook.com/groups/ibsaucla/",children:Object(a.jsx)("i",{class:"fa fa-facebook"})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/company/ibsaucla/about/",children:Object(a.jsx)("i",{class:"fa fa-linkedin"})}),Object(a.jsx)("a",{href:"mailto:bruin.ibsa@gmail.com",children:Object(a.jsx)("i",{class:"fa fa-envelope"})})]})]})]})}}]),n}(r.Component),Tt=(n(96),function(){return Object(a.jsx)("footer",{id:"footer",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("ul",{className:"icons",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.instagram.com/bruins.ibsa/",className:"icon fa-instagram"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.facebook.com/groups/ibsaucla/",className:"icon fa-facebook"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.linkedin.com/company/ibsaucla/about/",className:"icon fa-linkedin"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.youtube.com/channel/UCGpRZ-RXaURw2_m2z4dIM4Q",className:"icon fa-youtube-play"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"mailto:bruin.ibsa@gmail.com",className:"icon fa-envelope"})})]}),Object(a.jsxs)("ul",{className:"footlinks",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:"|"}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/about",children:"About Us"})}),Object(a.jsx)("li",{children:"|"}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/events",children:"Events"})})]})]})})}),Mt=A(Ct),Ht=A(Lt),_t=A(fe),Vt=A(ke),Ft=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(d.a,{children:[Object(a.jsx)(G,{}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",component:_t}),Object(a.jsx)(b.a,{path:"/events",component:Vt}),Object(a.jsx)(b.a,{path:"/about",component:At}),Object(a.jsx)(b.a,{path:"/signup",component:Mt}),Object(a.jsx)(b.a,{path:"/signin",component:Ht}),Object(a.jsx)(b.a,{component:zt})]}),Object(a.jsx)(Tt,{})]})}}]),n}(r.Component);s.a.render(Object(a.jsx)(y,{children:Object(a.jsx)(Ft,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.257534e5.chunk.js.map