(this["webpackJsonpatlana-search-for-github-users"]=this["webpackJsonpatlana-search-for-github-users"]||[]).push([[0],{170:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(20),s=r.n(a),c=r(19),i=r(41),o=(r(117),r(191)),l=r(187),u=r(15),d=r(60),p=r(92),j=r(101),b=r(93),h=r(24),g=r.n(h),f=r(46),m=r(71),O=r(61),x=r.n(O),v="https://api.github.com/search/users?q=",C="https://api.github.com/users/",U="&per_page=20",w="/repos?type=all&sort=updated&per_page=100",k="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",y=Object(d.b)({name:"users",initialState:{loading:!1,error:null,queriedUsers:[],isCurrentUsers:!1,currentUser:null,isCurrentUserRepos:!1,isOpenDisplayUser:!1,users:{}},reducers:{startLoading:function(e){e.loading=!0},getUsersSuccess:function(e,t){var r=t.payload;e.queriedUsers=r,e.isOpenDisplayUser=!1,e.isCurrentUsers=!1,e.loading=!1,e.errorMessage=null},getCurrentUsersSuccess:function(e,t){var r=t.payload.reduce((function(e,t){return e[t.login]={user:t,repos:[]},e}),{});e.users=Object(m.a)(Object(m.a)({},e.users),r),e.isOpenDisplayUser=!1,e.loading=!1,e.isCurrentUsers=!0,e.error=null},getCurrentUserReposSuccess:function(e,t){var r=t.payload,n=r.repos,a=r.login;0===n.length?e.users[a].repos=null:e.users[a].repos=n,e.loading=!1,e.error=null,e.isOpenDisplayUser=!0,e.isCurrentUserRepos=!0,e.currentUser=a},getCurrentUser:function(e,t){var r=t.payload;e.currentUser=r,e.isCurrentUsers=!0},getError:function(e,t){var r=t.payload;e.loading=!1,e.error=r},clearResults:function(e){e.loading=!1,e.error=null,e.queriedUsers=[],e.isCurrentUsers=!1,e.isCurrentUserRepos=!1,e.isOpenDisplayUser=!1},toggleDisplayCurrentUser:function(e,t){var r=t.payload;r?e.isOpenDisplayUser=r:(e.isCurrentUsers=!1,e.currentUser=null,e.isCurrentUserRepos=!1,e.isOpenDisplayUser=!1)}}}),N=y.actions,S=N.startLoading,R=N.getUsersSuccess,D=N.getCurrentUsersSuccess,L=N.getCurrentUser,W=N.getCurrentUserReposSuccess,B=N.getError,_=(N.clearResults,N.toggleDisplayCurrentUser),z=function(e){return e.users},E=y.reducer,q=Object(u.combineReducers)({users:E}),A=Object(d.a)({reducer:q,devTools:[Object(p.devToolsEnhancer)({realtime:!0})]}),G=r(100),T=function(e){return e?"".concat(e/16,"rem"):0},F=Object(G.a)({typography:{fontFamily:["Roboto","sans-serif"].join(",")},backgroundColorMessageWrap:"#DCDCDC",backgroundColorOwnerWindow:"rgb(220, 248, 198)",colorTimeChat:"green",overrides:{MuiCssBaseline:{"@global":{html:{boxSizing:"border-box",width:"100%",height:"100%"},"html, body":{outline:"none"},body:{margin:"0 auto"},"#root":{minHeight:"100%",height:"100vh",width:"100%"},":focus":{outline:"none"},a:{textDecoration:"none !important"}}},MuiButton:{root:{textTransform:"none",fontSize:T(16)}},outlined:{fontSize:T(16),border:"2px "}},"MuiGrid-spacing-xs-2":{margin:0}}),H=r(97),I=r.n(H),J=r(185),M=r(186),P=r(87),Q=r(176),Z=r(99),V=r.n(Z),Y=r(183),K=Object(Y.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(1)},marginBottom:e.spacing(2),display:"flex",alignItems:"center"},toolBar:{width:"100%",height:"100%",display:"flex"},menuButton:{paddingLeft:e.spacing(4)}}})),X=r(2),$=function(){var e=K();return Object(X.jsx)(J.a,{className:e.root,children:Object(X.jsxs)(M.a,{className:e.toolBar,children:[Object(X.jsx)(P.a,{size:"small",edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(X.jsx)(V.a,{})}),Object(X.jsx)(Q.a,{component:"h1",variant:"h6",children:"GitHub user search"})]})})},ee=r(189),te=r(45),re=r(58),ne=r.n(re),ae=r(70),se=r(193),ce=r(59),ie=r.n(ce),oe=r(188),le=r(192),ue=Object(Y.a)((function(e){return{paper:{backgroundColor:e.palette.background.default,margin:T(6),display:"flex"},gridContainer:{padding:T(12),alignItems:"center"},large:{width:T(56),height:T(56)},userName:{textAlign:"left"},repos:{textAlign:"right"},preloader:{float:"right"}}})),de=function(e){var t=e.user,r=e.handleDisplayCurrentUser,n=ue(),a=Object(c.c)(z).users;return Object(X.jsx)(ae.a,{className:n.paper,children:Object(X.jsx)(oe.a,{fullWidth:!0,onClick:function(){return r(t.login,a)},children:Object(X.jsxs)(ee.a,{container:!0,className:n.gridContainer,children:[Object(X.jsx)(ee.a,{item:!0,xs:6,sm:3,md:2,children:Object(X.jsx)(le.a,{alt:t.login,src:t.avatar_url,variant:"rounded",className:n.large})}),Object(X.jsx)(ee.a,{item:!0,xs:6,sm:5,md:8,className:n.userName,children:Object(X.jsx)(Q.a,{noWrap:!0,children:t.login})}),Object(X.jsx)(ee.a,{item:!0,xs:12,sm:4,md:2,children:Object(X.jsxs)(Q.a,{noWrap:!0,className:n.repos,children:["Repo:\xa0",0===a[t.login].user.public_repos?0:a[t.login].user.public_repos]})})]})})})},pe=r(16),je=Object(Y.a)((function(e){var t;return{root:{marginRight:T(10)},container:{padding:T(3),flexGrow:1},paper:{backgroundColor:e.palette.background.default},titleContainer:{display:"flex",flexWrap:"nowrap"},title:{flexGrow:1,fontWeight:500,letterSpacing:T(.2)},searchContainer:(t={position:"relative",width:"100%",boxSizing:"border-box",padding:"".concat(T(18)," ").concat(T(36)," ").concat(T(28))},Object(pe.a)(t,e.breakpoints.down("md"),{paddingLeft:T(14),paddingRight:T(14)}),Object(pe.a)(t,e.breakpoints.down("sm"),{paddingLeft:T(6),paddingRight:T(6)}),t),preloader:{position:"absolute",width:"100%",bottom:0,left:0,right:0}}})),be=function(){var e=je(),t=Object(c.b)(),r=Object(c.c)(z),a=r.loading,s=r.users,o=r.queriedUsers,l=r.isOpenDisplayUser,u=r.isCurrentUsers,d=Object(n.useState)(""),p=Object(te.a)(d,2),h=p[0],m=p[1],O=Object(n.useCallback)(ne()((function(e){var r,n=e.trim();m(n),""!==n?t((r=n,function(){var e=Object(f.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S()),e.prev=1,e.next=4,x.a.get("".concat(v).concat(r).concat(U),{headers:{Authorization:"token ".concat(k)}});case 4:(n=e.sent)&&t(R(n.data.items)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),i.b.error(null===e.t0||void 0===e.t0?void 0:e.t0.message),t(B(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())):y()}),1e3),[]),y=function(){m(""),t(_(!1))};Object(n.useEffect)((function(){return 0!==o.length&&t(function(e,t){return function(){var r=Object(f.a)(g.a.mark((function r(n){var a;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(S()),r.prev=1,a=function(){var e=Object(f.a)(g.a.mark((function e(t,r){var n,a,s,c,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=Object(b.a)(t),e.prev=2,a.s();case 4:if((s=a.n()).done){e.next=13;break}if(c=s.value,0!==Object.entries(r).length&&r.hasOwnProperty(c.login)){e.next=11;break}return e.next=9,x.a.get("".concat(C).concat(c.login,"?").concat(U),{headers:{Authorization:"token ".concat(k)}});case 9:i=e.sent,n=[].concat(Object(j.a)(n),[i.data]);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:return e.abrupt("return",Promise.all(n));case 22:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(t,r){return e.apply(this,arguments)}}(),r.next=5,a(e,t).then((function(e){return n(D(e))}));case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),n(B(null===r.t0||void 0===r.t0?void 0:r.t0.message));case 10:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}()}(o,s)),function(){O.cancel()}}),[o]);var N=Object(n.useCallback)((function(e,r){r.hasOwnProperty(e)&&r[e].repos&&0===r[e].repos.length?t(function(e,t){return function(){var r=Object(f.a)(g.a.mark((function r(n){var a;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n(S()),r.prev=1,(!t[e].repos||0!==t[e].repos.length)&&t.hasOwnProperty(e)){r.next=11;break}return r.next=5,x.a.get("".concat(C).concat(e).concat(w),{headers:{Authorization:"token ".concat(k)}});case 5:if(!(a=r.sent)){r.next=9;break}return r.next=9,n(W({login:e,repos:a.data}));case 9:r.next=12;break;case 11:return r.abrupt("return",!1);case 12:r.next=18;break;case 14:r.prev=14,r.t0=r.catch(1),i.b.error(null===r.t0||void 0===r.t0?void 0:r.t0.message),n(B(null===r.t0||void 0===r.t0?void 0:r.t0.message));case 18:case"end":return r.stop()}}),r,null,[[1,14]])})));return function(e){return r.apply(this,arguments)}}()}(e,r)):(t(_(!0)),t(L(e)))}),[]);return Object(X.jsx)(ee.a,{item:!0,sm:6,xs:12,className:e.root,children:Object(X.jsx)(ae.a,{className:e.paper,elevation:3,children:Object(X.jsxs)(ee.a,{container:!0,direction:"column",className:e.container,children:[Object(X.jsx)(ee.a,{item:!0,className:e.titleContainer,children:Object(X.jsx)(Q.a,{variant:"h5",align:"center",gutterBottom:!0,className:e.title,children:"GitHub Searcher"})}),Object(X.jsxs)(ee.a,{item:!0,className:e.searchContainer,children:[Object(X.jsx)(ie.a,{onChange:function(e){return O(e)},placeholder:"Search for Users",onCancelSearch:y,onRequestSearch:y,className:e.searchBar}),a&&!l&&Object(X.jsx)(se.a,{color:"secondary",className:e.preloader})]}),0!==o.length&&""!==h&&u&&Object(X.jsx)(ee.a,{item:!0,"data-aos":"fade-right",children:o.map((function(e){return Object(X.jsx)(de,{user:e,userLogin:e.login,handleDisplayCurrentUser:N},e.id)}))})]})})})},he=r(190),ge=Object(Y.a)((function(e){var t;return{paper:{backgroundColor:e.palette.background.default,margin:T(6),display:"flex"},gridContainer:{padding:T(12),alignItems:"center"},link:{width:"100%",height:"100%"},large:{width:T(56),height:T(56)},userName:(t={textAlign:"left",paddingLeft:T(30)},Object(pe.a)(t,e.breakpoints.down("sm"),{paddingLeft:T(25)}),Object(pe.a)(t,e.breakpoints.down("xs"),{paddingLeft:T(12)}),t),repos:{textAlign:"right"},preloader:{float:"right"}}})),fe=function(e){var t=e.repo,r=ge();return Object(X.jsx)(ae.a,{className:r.paper,children:Object(X.jsx)(he.a,{href:t.html_url,underline:"none",className:r.link,children:Object(X.jsx)(oe.a,{fullWidth:!0,children:Object(X.jsxs)(ee.a,{container:!0,className:r.gridContainer,spacing:2,justifyContent:"space-between",children:[Object(X.jsx)(ee.a,{children:Object(X.jsx)(Q.a,{children:t.name})}),Object(X.jsx)(ee.a,{item:!0,children:Object(X.jsxs)(ee.a,{container:!0,direction:"column",children:[Object(X.jsxs)(Q.a,{noWrap:!0,children:[t.forks_count," \xa0 Forks"]}),Object(X.jsxs)(Q.a,{noWrap:!0,children:[t.stargazers_count," \xa0 Stars"]})]})})]})})})})},me=Object(Y.a)((function(e){var t;return{paper:{backgroundColor:e.palette.background.default},containerUser:{padding:T(12)},searchContainer:(t={position:"relative",overflow:"hidden",padding:"".concat(T(18)," ").concat(T(36)," ").concat(T(28))},Object(pe.a)(t,e.breakpoints.down("md"),{paddingLeft:T(14),paddingRight:T(14)}),Object(pe.a)(t,e.breakpoints.down("sm"),{paddingLeft:T(6),paddingRight:T(6)}),t),bio:{paddingLeft:T(12)},large:{width:T(160),height:T(160)},preloader:{position:"absolute",width:"100%",bottom:0,left:0},reposContainer:{padding:"0 ".concat(T(4))}}})),Oe=function(){var e=me(),t=Object(c.c)(z),r=t.loading,a=t.users,s=t.currentUser,i=t.isOpenDisplayUser,o=Object(n.useState)(""),l=Object(te.a)(o,2),u=l[0],d=l[1],p=Object(n.useState)(""),j=Object(te.a)(p,2),b=j[0],h=j[1],g=a[s],f=g.user,m=g.repos,O=m;Object(n.useEffect)((function(){return function(){v()}}),[s]),""!==b&&m&&0!==m.length&&(O=m.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})));var x=Object(n.useCallback)(ne()((function(e){return h(e)}),1e3),[]),v=function(){h(""),d(""),x("")};return i&&Object(X.jsx)(ee.a,{item:!0,sm:6,"data-aos":"fade-left",children:Object(X.jsx)(ae.a,{className:e.paper,elevation:3,children:Object(X.jsxs)(ee.a,{container:!0,direction:"column",className:e.container,children:[Object(X.jsx)(ee.a,{item:!0,children:Object(X.jsx)(Q.a,{variant:"h5",align:"center",gutterBottom:!0,className:e.title,children:"GitHub Searcher"})}),Object(X.jsx)(ee.a,{item:!0,xs:12,md:12,children:Object(X.jsxs)(ee.a,{container:!0,alignItems:"center",spacing:2,className:e.containerUser,children:[Object(X.jsx)(ee.a,{item:!0,md:6,children:Object(X.jsx)(le.a,{alt:f.login,src:f.avatar_url,variant:"rounded",className:e.large})}),Object(X.jsx)(ee.a,{item:!0,md:6,children:Object(X.jsxs)(ee.a,{container:!0,direction:"column",children:[Object(X.jsxs)(Q.a,{children:["UserName \xa0 - \xa0",f.login]}),Object(X.jsxs)(Q.a,{children:["Email \xa0 - \xa0",f.email]}),Object(X.jsxs)(Q.a,{children:["Location \xa0 - \xa0",f.location]}),Object(X.jsxs)(Q.a,{children:["Join Date \xa0 - \xa0",f.created_at.toLocaleString().slice(0,10)]}),Object(X.jsxs)(Q.a,{children:[f.followers," \xa0 Followers"]}),Object(X.jsxs)(Q.a,{children:["Following \xa0",f.following]})]})}),Object(X.jsx)(ee.a,{item:!0,xs:12,md:12,children:Object(X.jsx)(Q.a,{className:e.bio,children:f.bio})})]})}),Object(X.jsxs)(ee.a,{item:!0,className:e.searchContainer,children:[Object(X.jsx)(ie.a,{value:u,placeholder:"Search for User's Repositories",onChange:function(e){return function(e){var t=e.trim();d(t),x(t)}(e)},onCancelSearch:v,onRequestSearch:v,className:e.searchBar}),r&&Object(X.jsx)(se.a,{color:"secondary",className:e.preloader})]}),m&&0!==m.length&&Object(X.jsx)(ee.a,{item:!0,"data-aos":"fade-left",className:e.reposContainer,children:O.map((function(e){return Object(X.jsx)(fe,{repo:e,loading:r},e.id)}))})]})})})},xe=Object(Y.a)((function(e){return{container:Object(pe.a)({width:"100%",minWidth:T(600),flexWrap:"nowrap",padding:"".concat(T(120)," ").concat(T(18)," ").concat(T(50)," ").concat(T(18))},e.breakpoints.down("md"),{paddingLeft:T(8),paddingRight:T(8)})}})),ve=function(){var e=xe(),t=Object(c.c)(z).isOpenDisplayUser;return Object(X.jsxs)(ee.a,{container:!0,component:"main",className:e.container,children:[Object(X.jsx)(be,{}),t&&Object(X.jsx)(Oe,{})]})},Ce=(r(169),function(){return Object(n.useEffect)((function(){I.a.init({offset:80,duration:700})}),[]),Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)($,{}),Object(X.jsx)(ve,{})]})});s.a.render(Object(X.jsxs)(c.a,{store:A,children:[Object(X.jsxs)(l.a,{theme:F,children:[Object(X.jsx)(o.a,{}),Object(X.jsx)(Ce,{})]}),Object(X.jsx)(i.a,{})]}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.4b943f65.chunk.js.map