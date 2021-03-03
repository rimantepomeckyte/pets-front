(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[2],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(34),r=n(4),i=(n(0),n(291)),c=n(284),o=n(271),s=n(285),l=n(265),j=n(84),u=n(283),b=n(144),d=n.n(b);function h(e){var t=e.title,n=e.topSection,a=e.children,i=e.displayTitleOnMobile,o=O(),l=function(){var e=d()();return Object(u.a)(e.breakpoints.down("sm"))}();return Object(r.jsx)(c.a,{component:"main",className:o.root,maxWidth:"lg",children:Object(r.jsxs)(s.a,{container:!0,spacing:4,children:[(!l||i)&&Object(r.jsx)(s.a,{item:!0,xs:12,children:t&&Object(r.jsx)(p,{title:t})}),n&&Object(r.jsx)(s.a,{item:!0,xs:12,children:n}),Object(r.jsx)(s.a,{item:!0,xs:12,children:a})]})})}function p(e){var t=e.title;return"string"!==typeof t?Object(r.jsx)(r.Fragment,{children:"title"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{mb:1,children:Object(r.jsx)(j.a,{variant:"h3",component:"h1",color:"textSecondary",children:t})}),Object(r.jsx)(o.a,{})]})}var O=Object(l.a)((function(e){var t;return{root:(t={},Object(a.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(1)}),Object(a.a)(t,e.breakpoints.up("md"),{marginTop:64+e.spacing(3)}),Object(a.a)(t,"marginBottom",e.spacing(10)),t),heading:{marginBottom:e.spacing(2)},endAlign:{textAlign:"end"}}}))},189:function(e,t,n){},193:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(4),r=(n(189),n(0)),i=n.n(r),c=n(16),o=n.n(c),s=n(36),l=(n(193),n(19)),j=n(286),u=n(265),b=n(43),d=n(282),h=n(283),p=n(287),O=n(86),m=n(56),x=n(37),f=n(275),g=n(271),v=n(290),k=n(277),w=n(270),y=n(272),T=n(238),A=n(273),z=n(274),C=n(269),S=n(267),H=n(276),U=n(84),I=n(268),N=n(167),R=n.n(N),B=n(165),L=n.n(B),P=n(164),_=n.n(P),F=n(166),M=n.n(F),D=[{authRequired:!1,title:"Home",to:"/",pageTitle:"Welcome"},{authRequired:!1,title:"About",to:"/about",pageTitle:"About this project"},{authRequired:!0,title:"Animals",to:"/animal-list",pageTitle:"Animal list"},{authRequired:!0,title:"Favourites",to:"/favourites",pageTitle:"Favourites"},{authRequired:!0,title:"Reports",to:"/reports",pageTitle:"Reports"}],q=Object(u.a)((function(e){return Object(S.a)({appBar:{top:"auto",bottom:0,backgroundColor:e.palette.primary.light},drawerHeader:Object(m.a)(Object(m.a)({display:"flex",alignItems:"center",padding:e.spacing(0,3)},e.mixins.toolbar),{},{justifyContent:"space-between"}),fabButton:{position:"absolute",zIndex:1,top:-30,right:e.spacing(3)},show:{transform:"translateY(0)",transition:"transform .5s"},hide:{transform:"translateY(-110%)",transition:"transform .5s"}})}));function E(e){var t=e.children,n=Object(I.a)();return Object(a.jsx)(C.a,{appear:!1,direction:"up",in:!n,children:t})}function W(){var e=q(),t=Object(l.f)(),n=Object(l.g)(),r=i.a.useState(!1),c=Object(O.a)(r,2),o=c[0],s=c[1],j=Object(x.b)().isAuthenticated,u=function(){s(!1)};return Object(a.jsx)(E,{children:Object(a.jsxs)(f.a,{className:e.appBar,position:"fixed",color:"default",children:[Object(a.jsxs)(H.a,{children:[Object(a.jsx)(w.a,{edge:"start",onClick:function(){s(!0)},color:"inherit","aria-label":"open drawer",children:Object(a.jsx)(M.a,{})}),Object(a.jsx)(k.a,{color:"secondary","aria-label":"add",className:e.fabButton,children:Object(a.jsx)(R.a,{})})]}),Object(a.jsx)(v.a,{anchor:"bottom",open:o,onClose:u,children:Object(a.jsxs)("div",{role:"presentation",children:[Object(a.jsxs)("div",{className:e.drawerHeader,children:[Object(a.jsx)(U.a,{variant:"h6",children:"PetBook"}),Object(a.jsx)(w.a,{edge:"end",onClick:u,children:Object(a.jsx)(_.a,{})})]}),Object(a.jsx)(g.a,{}),Object(a.jsx)(y.a,{children:D.filter((function(e){return!e.authRequired||j})).map((function(e){return Object(a.jsxs)(T.a,{button:!0,selected:(r=e.to,n.pathname===r),onClick:function(n){return function(e,n){t.push(n),s(!1)}(0,e.to)},children:[Object(a.jsx)(A.a,{children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(z.a,{primary:e.title})]},e.title);var r}))})]})})]})})}var G=n(278),Q=n(289),Y=n(279),J=n(129),V=n.n(J);function X(){var e=Object(x.b)(),t=e.isAuthenticated,n=e.user,r=e.loginWithRedirect,c=e.logout,o=Object(l.f)(),s=i.a.useState(null),j=Object(O.a)(s,2),u=j[0],b=j[1],d=Boolean(u);return Object(a.jsx)("div",{children:t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(G.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",startIcon:Object(a.jsx)(V.a,{}),children:n.name}),Object(a.jsxs)(Q.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){b(null)},children:[Object(a.jsx)(Y.a,{onClick:function(){o.push("/user-profile")},children:"Profile"}),Object(a.jsx)(Y.a,{onClick:function(){return c({returnTo:window.location.origin})},children:"Logout"})]})]}):Object(a.jsx)(w.a,{"aria-label":"login",edge:"end",onClick:function(){return r()},color:"inherit",children:Object(a.jsx)(V.a,{})})})}var Z=Object(u.a)((function(){return Object(S.a)({appbar:{backgroundColor:"transparent"},toolbar:{justifyContent:"space-between"},title:{flexGrow:1}})}));function $(){var e=Z(),t=Object(l.g)();return Object(a.jsx)(f.a,{className:e.appbar,position:"static",color:"default",elevation:0,children:Object(a.jsxs)(H.a,{className:e.toolbar,children:[Object(a.jsx)(U.a,{variant:"h6",className:e.title,children:function(){var e=D.filter((function(e){return e.to===t.pathname}));return 1===e.length?e[0].pageTitle:""}()}),Object(a.jsx)(X,{})]})})}var K=n(280),ee=Object(u.a)((function(e){return Object(S.a)({appBar:{backgroundColor:e.palette.primary.light},title:{flexGrow:1,textAlign:"left"},link:{margin:e.spacing(1,1.5),fontWeight:"bold",textTransform:"uppercase",color:e.palette.text.secondary}})}));function te(){var e=ee(),t=Object(x.b)().isAuthenticated;return Object(a.jsx)(f.a,{className:e.appBar,position:"fixed",color:"default",children:Object(a.jsxs)(H.a,{children:[Object(a.jsx)(U.a,{variant:"h6",className:e.title,children:"PetBook"}),D.filter((function(e){return!e.authRequired||t})).map((function(t){return Object(a.jsx)(K.a,{component:s.c,className:e.link,to:t.to,children:t.title},t.title)})),Object(a.jsx)(X,{})]})})}var ne=n(133);var ae=function(){return Object(a.jsxs)(ne.a,{children:[Object(a.jsx)(U.a,{variant:"h3",component:"h1",children:"Page Not Found"}),Object(a.jsxs)(U.a,{variant:"body1",children:["Try navigating to ",Object(a.jsx)(s.b,{to:"/",children:"homepage"})]})]})},re=n(34),ie=n(172),ce=Object(ie.a)({palette:{primary:{light:"#e8cdb8",main:"#875e3b",dark:"#4e2c1a"},secondary:{light:"#417565",main:"#13493b",dark:"#002115"}},breakpoints:{values:{xs:0,sm:450,md:768,lg:1280,xl:1920}}}),oe=ce.breakpoints,se=Object(m.a)(Object(m.a)({},ce),{},{overrides:{MuiTypography:{h1:Object(re.a)({fontSize:"3rem",lineHeight:1.2},oe.down("sm"),{fontSize:"2.6rem"}),h2:Object(re.a)({fontSize:"2.6rem",lineHeight:1.2},oe.down("sm"),{fontSize:"2.2rem"}),h3:Object(re.a)({fontSize:"2.2rem",lineHeight:1.2},oe.down("sm"),{fontSize:"1.8rem"}),h4:Object(re.a)({fontSize:"1.8rem",lineHeight:1.2},oe.down("sm"),{fontSize:"1.6rem"}),h5:Object(re.a)({fontSize:"1.8rem",lineHeight:1.2},oe.down("sm"),{fontSize:"1.6rem"}),h6:Object(re.a)({fontSize:"1.6rem",lineHeight:1.2},oe.down("sm"),{fontSize:"1.4rem"})},MuiListItemIcon:{root:{minWidth:"auto",marginTop:4,marginBottom:4}}},props:{MuiUseMediaQuery:{noSsr:!0}}}),le=n(173);function je(e){var t=e.component,n=Object(le.a)(e,["component"]);return t?Object(a.jsx)(l.a,Object(m.a)({component:Object(x.c)(t)},n)):null}var ue=function(){var e=Object(l.g)();return Object(a.jsx)("div",{"data-testid":"location-display",children:e.pathname})},be=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},footer:{padding:e.spacing(3,2),marginTop:"auto"}}}));function de(){var e=be(),t=Object(b.a)(),r=Object(h.a)(t.breakpoints.up("md"));return Object(a.jsxs)(d.a,{theme:se,children:[Object(a.jsx)(j.a,{}),Object(a.jsxs)("div",{className:e.root,children:[r?Object(a.jsx)(te,{}):Object(a.jsx)($,{}),Object(a.jsx)(i.a.Suspense,{fallback:Object(a.jsx)(p.a,{variant:"rect",height:"100vh"}),children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/about",component:i.a.lazy((function(){return n.e(9).then(n.bind(null,319))}))}),Object(a.jsx)(je,{exact:!0,path:"/user-profile",component:i.a.lazy((function(){return n.e(11).then(n.bind(null,320))}))}),Object(a.jsx)(je,{exact:!0,path:"/animal-list",component:i.a.lazy((function(){return Promise.all([n.e(1),n.e(5),n.e(8)]).then(n.bind(null,337))}))}),Object(a.jsx)(je,{exact:!0,path:"/animal/:id",component:i.a.lazy((function(){return Promise.all([n.e(1),n.e(6),n.e(7)]).then(n.bind(null,338))}))}),Object(a.jsx)(l.a,{exact:!0,path:"/search",component:i.a.lazy((function(){return n.e(0).then(n.bind(null,334))}))}),Object(a.jsx)(l.a,{exact:!0,path:"/login",component:i.a.lazy((function(){return n.e(0).then(n.bind(null,334))}))}),Object(a.jsx)(l.a,{exact:!0,path:"/logout",component:i.a.lazy((function(){return n.e(0).then(n.bind(null,334))}))}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:i.a.lazy((function(){return n.e(10).then(n.bind(null,339))}))}),Object(a.jsx)(l.a,{component:ae})]})}),!r&&Object(a.jsx)(W,{})]}),Object(a.jsx)(ue,{})]})}var he=function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,335)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(70),Oe=function(e){var t=e.children,n=Object(l.f)();return Object(a.jsx)(x.a,{domain:pe.a.AUTH0_DOMAIN,clientId:pe.a.AUTH0_CLIENT_ID,redirectUri:window.location.origin,audience:pe.a.AUTH0_AUDIENCE_URL,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})},me=n(130),xe=n.n(me),fe=n(168),ge=n(79),ve=n(169),ke=function(e){var t=e.children,n=Object(x.b)().getAccessTokenSilently,r=Object(ge.createHttpLink)({uri:pe.a.GRAPHQL_URL}),i=Object(ve.a)(Object(fe.a)(xe.a.mark((function e(){var t;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return t=e.sent,e.abrupt("return",{headers:{Authorization:"Bearer ".concat(t)}});case 4:case"end":return e.stop()}}),e)})))),c=new ge.ApolloClient({link:i.concat(r),cache:new ge.InMemoryCache,connectToDevTools:!0});return Object(a.jsx)(ge.ApolloProvider,{client:c,children:t})};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(s.a,{children:Object(a.jsx)(Oe,{children:Object(a.jsx)(ke,{children:Object(a.jsx)(de,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),he()},70:function(e,t,n){"use strict";t.a={GRAPHQL_URL:"https://petbook-back.herokuapp.com/graphql",AUTH0_DOMAIN:"pets-oss.eu.auth0.com",AUTH0_CLIENT_ID:"e42ezU7Z8Hxw4m0b24P2jrUUUmYrVPXA",AUTH0_AUDIENCE_URL:"https://pet-oss/api",PUBLIC_URL:""}}},[[233,3,4]]]);
//# sourceMappingURL=main.98f3e0e2.chunk.js.map