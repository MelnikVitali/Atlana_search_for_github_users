(this["webpackJsonpatlana-search-for-github-users"]=this["webpackJsonpatlana-search-for-github-users"]||[]).push([[0],{170:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(20),s=r.n(a),c=r(19),i=r(41),o=(r(117),r(191)),l=r(187),u=r(15),d=r(60),p=r(92),b=r(101),j=r(93),g=r(24),h=r.n(g),f=r(46),m=r(71),O=r(61),x=r.n(O),v="13db30216a6e8642a8cb",U="dbd5ba3d6ed62e8564e3a0ea05c956ecefdd403c",C={baseURL:"https://api.github.com/",searchUsers:"https://api.github.com/search/users?q=",searchUser:"https://api.github.com/users/",gitHubQuerySettingsUsers:"client_id=".concat(v,"&client_secret=").concat(U,"&per_page=30"),gitHubQuerySettingsRepos:"/repos?type=all&sort=updated&$client_id=".concat(v,"&client_secret=").concat(U)},y=Object(d.b)({name:"users",initialState:{loading:!1,error:null,queriedUsers:[],isCurrentUsers:!1,currentUser:null,isCurrentUserRepos:!1,isOpenDisplayUser:!1,users:{}},reducers:{startLoading:function(e){e.loading=!0},getUsersSuccess:function(e,t){var r=t.payload;e.queriedUsers=r,e.isOpenDisplayUser=!1,e.isCurrentUsers=!1,e.loading=!1,e.errorMessage=null},getCurrentUsersSuccess:function(e,t){var r=t.payload.reduce((function(e,t){return e[t.login]={user:t,repos:[]},e}),{});e.users=Object(m.a)(Object(m.a)({},e.users),r),e.isOpenDisplayUser=!1,e.loading=!1,e.isCurrentUsers=!0,e.error=null},getCurrentUserReposSuccess:function(e,t){var r=t.payload,n=r.repos,a=r.login;0===n.length?e.users[a].repos=null:e.users[a].repos=n,e.loading=!1,e.error=null,e.isOpenDisplayUser=!0,e.isCurrentUserRepos=!0,e.currentUser=a},getCurrentUser:function(e,t){var r=t.payload;e.currentUser=r,e.isCurrentUsers=!0},getError:function(e,t){var r=t.payload;e.loading=!1,e.error=r},clearResults:function(e){e.loading=!1,e.error=null,e.queriedUsers=[],e.isCurrentUsers=!1,e.isCurrentUserRepos=!1,e.isOpenDisplayUser=!1},toggleDisplayCurrentUser:function(e,t){var r=t.payload;r?e.isOpenDisplayUser=r:(e.isCurrentUsers=!1,e.currentUser=null,e.isCurrentUserRepos=!1,e.isOpenDisplayUser=!1)}}}),w=y.actions,k=w.startLoading,N=w.getUsersSuccess,S=w.getCurrentUsersSuccess,R=w.getCurrentUser,D=w.getCurrentUserReposSuccess,L=w.getError,_=(w.clearResults,w.toggleDisplayCurrentUser),B=function(e){return e.users},W=y.reducer,H=Object(u.combineReducers)({users:W}),E=Object(d.a)({reducer:H,devTools:[Object(p.devToolsEnhancer)({realtime:!0})]}),q=r(100),z=function(e){return e?"".concat(e/16,"rem"):0},G=Object(q.a)({typography:{fontFamily:["Roboto","sans-serif"].join(",")},backgroundColorMessageWrap:"#DCDCDC",backgroundColorOwnerWindow:"rgb(220, 248, 198)",colorTimeChat:"green",overrides:{MuiCssBaseline:{"@global":{html:{boxSizing:"border-box",width:"100%",height:"100%"},"html, body":{outline:"none"},body:{margin:"0 auto"},"#root":{minHeight:"100%",height:"100vh",width:"100%"},":focus":{outline:"none"},a:{textDecoration:"none !important"}}},MuiButton:{root:{textTransform:"none",fontSize:z(16)}},outlined:{fontSize:z(16),border:"2px "}},"MuiGrid-spacing-xs-2":{margin:0}}),F=r(97),I=r.n(F),M=r(185),Q=r(186),T=r(87),A=r(176),P=r(99),J=r.n(P),$=r(183),K=Object($.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(1)},marginBottom:e.spacing(2),display:"flex",alignItems:"center"},toolBar:{width:"100%",height:"100%",display:"flex"},menuButton:{paddingLeft:e.spacing(4)}}})),V=r(2),X=function(){var e=K();return Object(V.jsx)(M.a,{className:e.root,children:Object(V.jsxs)(Q.a,{className:e.toolBar,children:[Object(V.jsx)(T.a,{size:"small",edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(V.jsx)(J.a,{})}),Object(V.jsx)(A.a,{component:"h1",variant:"h6",children:"GitHub user search"})]})})},Y=r(189),Z=r(45),ee=r(58),te=r.n(ee),re=r(70),ne=r(193),ae=r(59),se=r.n(ae),ce=r(188),ie=r(192),oe=Object($.a)((function(e){return{paper:{backgroundColor:e.palette.background.default,margin:z(6),display:"flex"},gridContainer:{padding:z(12),alignItems:"center"},large:{width:z(56),height:z(56)},userName:{textAlign:"left"},repos:{textAlign:"right"},preloader:{float:"right"}}})),le=function(e){var t=e.user,r=e.handleDisplayCurrentUser,n=oe(),a=Object(c.c)(B).users;return Object(V.jsx)(re.a,{className:n.paper,children:Object(V.jsx)(ce.a,{fullWidth:!0,onClick:function(){return r(t.login,a)},children:Object(V.jsxs)(Y.a,{container:!0,className:n.gridContainer,children:[Object(V.jsx)(Y.a,{item:!0,xs:6,sm:3,md:2,children:Object(V.jsx)(ie.a,{alt:t.login,src:t.avatar_url,variant:"rounded",className:n.large})}),Object(V.jsx)(Y.a,{item:!0,xs:6,sm:5,md:8,className:n.userName,children:Object(V.jsx)(A.a,{noWrap:!0,children:t.login})}),Object(V.jsx)(Y.a,{item:!0,xs:12,sm:4,md:2,children:Object(V.jsxs)(A.a,{noWrap:!0,className:n.repos,children:["Repo:\xa0",0===a[t.login].user.public_repos?0:a[t.login].user.public_repos]})})]})})})},ue=r(16),de=Object($.a)((function(e){var t;return{root:{marginRight:z(10)},container:{padding:z(3),flexGrow:1},paper:{backgroundColor:e.palette.background.default},titleContainer:{display:"flex",flexWrap:"nowrap"},title:{flexGrow:1,fontWeight:500,letterSpacing:z(.2)},searchContainer:(t={position:"relative",width:"100%",boxSizing:"border-box",padding:"".concat(z(18)," ").concat(z(36)," ").concat(z(28))},Object(ue.a)(t,e.breakpoints.down("md"),{paddingLeft:z(14),paddingRight:z(14)}),Object(ue.a)(t,e.breakpoints.down("sm"),{paddingLeft:z(6),paddingRight:z(6)}),t),preloader:{position:"absolute",width:"100%",bottom:0,left:0,right:0}}})),pe=function(){var e=de(),t=Object(c.b)(),r=Object(c.c)(B),a=r.loading,s=r.users,o=r.queriedUsers,l=r.isOpenDisplayUser,u=r.isCurrentUsers,d=Object(n.useState)(""),p=Object(Z.a)(d,2),g=p[0],m=p[1],O=Object(n.useCallback)(te()((function(e){var r,n=e.trim();m(n),""!==n?t((r=n,function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k()),e.prev=1,e.next=4,x.a.get("".concat(C.searchUsers).concat(r,"&").concat(C.gitHubQuerySettingsUsers));case 4:(n=e.sent)&&t(N(n.data.items)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),i.b.error(null===e.t0||void 0===e.t0?void 0:e.t0.message),t(L(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())):v()}),1e3),[]),v=function(){m(""),t(_(!1))};Object(n.useEffect)((function(){return 0!==o.length&&t(function(e,t){return function(){var r=Object(f.a)(h.a.mark((function r(n){var a;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(k()),r.prev=1,a=function(){var e=Object(f.a)(h.a.mark((function e(t,r){var n,a,s,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=Object(j.a)(t),e.prev=2,a.s();case 4:if((s=a.n()).done){e.next=13;break}if(c=s.value,0!==Object.entries(r).length&&r.hasOwnProperty(c.login)){e.next=11;break}return e.next=9,x.a.get("".concat(C.searchUser).concat(c.login,"?").concat(C.gitHubQuerySettingsUsers));case 9:i=e.sent,n=[].concat(Object(b.a)(n),[i.data]);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:return e.next=23,Promise.all(n);case 23:return e.abrupt("return",e.sent);case 24:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(t,r){return e.apply(this,arguments)}}(),r.next=5,a(e,t).then((function(e){return n(S(e))}));case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),n(L(null===r.t0||void 0===r.t0?void 0:r.t0.message));case 10:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}()}(o,s)),function(){O.cancel()}}),[o]);var U=Object(n.useCallback)((function(e,r){r.hasOwnProperty(e)&&r[e].repos&&0===r[e].repos.length?t(function(e,t){return function(){var r=Object(f.a)(h.a.mark((function r(n){var a;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n(k()),r.prev=1,(!t[e].repos||0!==t[e].repos.length)&&t.hasOwnProperty(e)){r.next=11;break}return r.next=5,x.a.get("".concat(C.searchUser).concat(e).concat(C.gitHubQuerySettingsRepos));case 5:if(!(a=r.sent)){r.next=9;break}return r.next=9,n(D({login:e,repos:a.data}));case 9:r.next=12;break;case 11:return r.abrupt("return",!1);case 12:r.next=18;break;case 14:r.prev=14,r.t0=r.catch(1),i.b.error(null===r.t0||void 0===r.t0?void 0:r.t0.message),n(L(null===r.t0||void 0===r.t0?void 0:r.t0.message));case 18:case"end":return r.stop()}}),r,null,[[1,14]])})));return function(e){return r.apply(this,arguments)}}()}(e,r)):(t(_(!0)),t(R(e)))}),[]);return Object(V.jsx)(Y.a,{item:!0,sm:6,xs:12,className:e.root,children:Object(V.jsx)(re.a,{className:e.paper,elevation:3,children:Object(V.jsxs)(Y.a,{container:!0,direction:"column",className:e.container,children:[Object(V.jsx)(Y.a,{item:!0,className:e.titleContainer,children:Object(V.jsx)(A.a,{variant:"h5",align:"center",gutterBottom:!0,className:e.title,children:"GitHub Searcher"})}),Object(V.jsxs)(Y.a,{item:!0,className:e.searchContainer,children:[Object(V.jsx)(se.a,{onChange:function(e){return O(e)},placeholder:"Search for Users",onCancelSearch:v,onRequestSearch:v,className:e.searchBar}),a&&!l&&Object(V.jsx)(ne.a,{color:"secondary",className:e.preloader})]}),0!==o.length&&""!==g&&u&&Object(V.jsx)(Y.a,{item:!0,"data-aos":"fade-right",children:o.map((function(e){return Object(V.jsx)(le,{user:e,userLogin:e.login,handleDisplayCurrentUser:U},e.id)}))})]})})})},be=r(190),je=Object($.a)((function(e){var t;return{paper:{backgroundColor:e.palette.background.default,margin:z(6),display:"flex"},gridContainer:{padding:z(12),alignItems:"center"},link:{width:"100%",height:"100%"},large:{width:z(56),height:z(56)},userName:(t={textAlign:"left",paddingLeft:z(30)},Object(ue.a)(t,e.breakpoints.down("sm"),{paddingLeft:z(25)}),Object(ue.a)(t,e.breakpoints.down("xs"),{paddingLeft:z(12)}),t),repos:{textAlign:"right"},preloader:{float:"right"}}})),ge=function(e){var t=e.repo,r=je();return Object(V.jsx)(re.a,{className:r.paper,children:Object(V.jsx)(be.a,{href:t.html_url,underline:"none",className:r.link,children:Object(V.jsx)(ce.a,{fullWidth:!0,children:Object(V.jsxs)(Y.a,{container:!0,className:r.gridContainer,spacing:2,justifyContent:"space-between",children:[Object(V.jsx)(Y.a,{children:Object(V.jsx)(A.a,{children:t.name})}),Object(V.jsx)(Y.a,{item:!0,children:Object(V.jsxs)(Y.a,{container:!0,direction:"column",children:[Object(V.jsxs)(A.a,{noWrap:!0,children:[t.forks_count," \xa0 Forks"]}),Object(V.jsxs)(A.a,{noWrap:!0,children:[t.stargazers_count," \xa0 Stars"]})]})})]})})})})},he=Object($.a)((function(e){var t;return{paper:{backgroundColor:e.palette.background.default},containerUser:{padding:z(12)},searchContainer:(t={position:"relative",overflow:"hidden",padding:"".concat(z(18)," ").concat(z(36)," ").concat(z(28))},Object(ue.a)(t,e.breakpoints.down("md"),{paddingLeft:z(14),paddingRight:z(14)}),Object(ue.a)(t,e.breakpoints.down("sm"),{paddingLeft:z(6),paddingRight:z(6)}),t),bio:{paddingLeft:z(12)},large:{width:z(160),height:z(160)},preloader:{position:"absolute",width:"100%",bottom:0,left:0},reposContainer:{padding:"0 ".concat(z(4))}}})),fe=function(){var e=he(),t=Object(c.c)(B),r=t.loading,a=t.users,s=t.currentUser,i=t.isOpenDisplayUser,o=Object(n.useState)(""),l=Object(Z.a)(o,2),u=l[0],d=l[1],p=Object(n.useState)(""),b=Object(Z.a)(p,2),j=b[0],g=b[1],h=a[s],f=h.user,m=h.repos,O=m;Object(n.useEffect)((function(){return function(){v()}}),[s]),""!==j&&m&&0!==m.length&&(O=m.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})));var x=Object(n.useCallback)(te()((function(e){return g(e)}),1e3),[]),v=function(){g(""),d(""),x("")};return i&&Object(V.jsx)(Y.a,{item:!0,sm:6,"data-aos":"fade-left",children:Object(V.jsx)(re.a,{className:e.paper,elevation:3,children:Object(V.jsxs)(Y.a,{container:!0,direction:"column",className:e.container,children:[Object(V.jsx)(Y.a,{item:!0,children:Object(V.jsx)(A.a,{variant:"h5",align:"center",gutterBottom:!0,className:e.title,children:"GitHub Searcher"})}),Object(V.jsx)(Y.a,{item:!0,xs:12,md:12,children:Object(V.jsxs)(Y.a,{container:!0,alignItems:"center",spacing:2,className:e.containerUser,children:[Object(V.jsx)(Y.a,{item:!0,md:6,children:Object(V.jsx)(ie.a,{alt:f.login,src:f.avatar_url,variant:"rounded",className:e.large})}),Object(V.jsx)(Y.a,{item:!0,md:6,children:Object(V.jsxs)(Y.a,{container:!0,direction:"column",children:[Object(V.jsxs)(A.a,{children:["UserName \xa0 - \xa0",f.login]}),Object(V.jsxs)(A.a,{children:["Email \xa0 - \xa0",f.email]}),Object(V.jsxs)(A.a,{children:["Location \xa0 - \xa0",f.location]}),Object(V.jsxs)(A.a,{children:["Join Date \xa0 - \xa0",f.created_at.toLocaleString().slice(0,10)]}),Object(V.jsxs)(A.a,{children:[f.followers," \xa0 Followers"]}),Object(V.jsxs)(A.a,{children:["Following \xa0",f.following]})]})}),Object(V.jsx)(Y.a,{item:!0,xs:12,md:12,children:Object(V.jsx)(A.a,{className:e.bio,children:f.bio})})]})}),Object(V.jsxs)(Y.a,{item:!0,className:e.searchContainer,children:[Object(V.jsx)(se.a,{value:u,placeholder:"Search for User's Repositories",onChange:function(e){return function(e){var t=e.trim();d(t),x(t)}(e)},onCancelSearch:v,onRequestSearch:v,className:e.searchBar}),r&&Object(V.jsx)(ne.a,{color:"secondary",className:e.preloader})]}),m&&0!==m.length&&Object(V.jsx)(Y.a,{item:!0,"data-aos":"fade-left",className:e.reposContainer,children:O.map((function(e){return Object(V.jsx)(ge,{repo:e,loading:r},e.id)}))})]})})})},me=Object($.a)((function(e){return{container:Object(ue.a)({width:"100%",minWidth:z(600),flexWrap:"nowrap",padding:"".concat(z(120)," ").concat(z(18)," ").concat(z(50)," ").concat(z(18))},e.breakpoints.down("md"),{paddingLeft:z(8),paddingRight:z(8)})}})),Oe=function(){var e=me(),t=Object(c.c)(B).isOpenDisplayUser;return Object(V.jsxs)(Y.a,{container:!0,component:"main",className:e.container,children:[Object(V.jsx)(pe,{}),t&&Object(V.jsx)(fe,{})]})},xe=(r(169),function(){return Object(n.useEffect)((function(){I.a.init({offset:80,duration:700})}),[]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(X,{}),Object(V.jsx)(Oe,{})]})});s.a.render(Object(V.jsxs)(c.a,{store:E,children:[Object(V.jsxs)(l.a,{theme:G,children:[Object(V.jsx)(o.a,{}),Object(V.jsx)(xe,{})]}),Object(V.jsx)(i.a,{})]}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.053dd44a.chunk.js.map