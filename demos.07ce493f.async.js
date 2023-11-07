"use strict";(self.webpackChunkreact_ui_dumi_library=self.webpackChunkreact_ui_dumi_library||[]).push([[433],{6746:function(Z,g,n){n.r(g),n.d(g,{default:function(){return f}});var R=n(27424),r=n.n(R),A=n(67294),p=n(95170),M=n(85893);function f(){var z=(0,A.useState)(0),x=r()(z,2),E=x[0],I=x[1],l=(0,A.useRef)(null);return(0,p.Sw)(function(){return I(E+1)},l),(0,M.jsxs)("div",{children:[E,(0,M.jsx)("button",{ref:l,children:"click"})]})}},40466:function(Z,g,n){n.r(g),n.d(g,{default:function(){return p}});var R=n(67294),r=n(95170),A=n(85893);function p(){var M=function(){return fetch("https://jsonplaceholder.typicode.com/todos/1")},f=(0,r.aM)(M),z=f.data,x=f.loading,E=f.query;return(0,A.jsx)("button",{onClick:E,children:"\u81EA\u52A8\u8BF7\u6C42"})}},84682:function(Z,g,n){n.r(g),n.d(g,{default:function(){return p}});var R=n(67294),r=n(95170),A=n(85893);function p(){var M=function(){return fetch("https://jsonplaceholder.typicode.com/todos/1")},f=(0,r.aM)(M,{isAuto:!1,success:{msg:["data","successMsg"],flag:["data","success"],dataKey:["data","result"],callback:alert},error:{msg:["data","errMsg"],callback:alert}}),z=f.data,x=f.loading,E=f.query;return(0,A.jsx)("button",{onClick:E,children:"\u624B\u52A8\u8BF7\u6C42"})}},42609:function(Z,g,n){n.r(g),n.d(g,{default:function(){return z}});var R=n(42122),r=n.n(R),A=n(91096),p=n(67294),M=n(95170),f=n(85893);function z(){var x=function(F){var W=F.current,N=F.pageSize,H="page=".concat(W,"&size=").concat(N);return fetch("https://randomuser.me/api?results=55&".concat(H)).then(function(P){return P.json()}).then(function(P){return{total:P.info.results,list:P.results}})},E=(0,M.x6)(x({current:1,pageSize:10})),I=E.tableProps,l=E.queryTable;return(0,f.jsx)(A.Z,r()({},I))}},95170:function(Z,g,n){n.d(g,{zx:function(){return mn},Sw:function(){return pn},aM:function(){return Dn},x6:function(){return On}});var R=n(42122),r=n.n(R),A=n(27424),p=n.n(A),M=n(70215),f=n.n(M),z=n(59400),x=n.n(z),E=n(77145),I=n(90512),l=n(67294),ln=n(20648),F,W="#fff",N="#4C84FF",H="#ff817d",P="#d9d9d9",J="rgba(0, 0, 0, 0.8);",xn=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return css(F||(F=_taggedTemplateLiteral([`
    `,":",`;
  `])),e,t)},V=n(85893),vn=["type","size","disabled","debounce","debounceNode","ghost","loading","block","children","shape","icon","onClick"],un,gn=ln.ZP.button(un||(un=x()([`
  border: 1px solid transparent;
  color: `,`;
  background-color: `,`;
  border-color: `,`;
  appearance: button;
  text-shadow: none;
  box-shadow: none;
  outline: 0;
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  text-transform: none;
  overflow: visible;
  box-sizing: border-box;

  /**\u5757\u7EA7\u6309\u94AE */
  &.block {
    width: 100%;
  }

  /** \u80CC\u666F */
  &.default-btn {
    background: `,`;
    border-color: `,`;
    color: `,`;
    &.default-btn:hover {
      color: #75a5ff;
      border-color: #75a5ff;
    }
    &.default-btn.ghost {
      background: transparent;
      color: white;
      border-color: white;
      text-shadow: none;
    }
    &.default-btn.ghost:hover {
      border-color: #75a5ff;
      color: #75a5ff;
    }
    &.default-btn.circle {
      border-radius: 50%;
    }
  }

  &.primary {
    background: `,`;
    border-color: `,`;
    color: `,`;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(105, 73, 73, 0.045);
    &.primary:hover {
      background-color: #75a5ff;
      border-color: #75a5ff;
    }
    &.primary.ghost {
      background: transparent;
      color: #4c84ff;
      border-color: #4c84ff;
      text-shadow: none;
    }
    &.primary.ghost:hover {
      border-color: #75a5ff;
      color: #75a5ff;
    }
    &.primary.circle {
      border-radius: 50%;
    }
  }

  &.dashed {
    background: `,`;
    border-color: `,`;
    color: `,`;
    border-style: dashed;
    &.dashed:hover {
      color: #75a5ff;
      border-color: #75a5ff;
    }
    &.dashed.ghost {
      background: transparent;
      color: white;
      border-color: white;
      text-shadow: none;
    }
    &.dashed.ghost:hover {
      border-color: #75a5ff;
      color: #75a5ff;
    }
    &.dashed.circle {
      border-radius: 50%;
    }
  }

  &.danger {
    background: `,`;
    border-color: `,`;
    color: `,`;
    &.danger:hover {
      background: #ffaca6;
      border-color: #ffaca6;
    }
    &.danger.ghost {
      color: #ff817d;
      background-color: transparent;
      border-color: #ff817d;
      text-shadow: none;
    }
    &.danger.ghost:hover {
      color: #ffaca6;
      background-color: transparent;
      border-color: #ffaca6;
    }
    &.danger.circle {
      border-radius: 50%;
    }
  }

  &.link {
    background: transparent;
    border-color: transparent;
    color: `,`;
    &.link:hover {
      color: #75a5ff;
    }
    &.link.circle {
      border-radius: 50%;
    }
  }

  &.text {
    background: transparent;
    border-color: transparent;
    color: `,`;
    &.text:hover {
      color: rgba(0, 0, 0, 0.8);
      background-color: rgba(0, 0, 0, 0.018);
    }
    &.text.circle {
      border-radius: 50%;
    }
  }

  /**\u5C3A\u5BF8\u5927\u5C0F */
  &.default {
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
  }

  &.small {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
  }

  &.large {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }
  /**\u7981\u7528 */
  &.disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: `,`;
    text-shadow: none;
    box-shadow: none;
    &.disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: `,`;
      text-shadow: none;
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`])),J,W,P,W,P,J,N,N,W,W,P,J,H,H,W,N,J,P,P),bn=function(e){return e?typeof e=="boolean"?1:e:null},hn=l.forwardRef(function(o,e){var t=o.type,b=t===void 0?"default-btn":t,u=o.size,h=u===void 0?"default":u,D=o.disabled,T=o.debounce,B=o.debounceNode,Q=B===void 0?"".concat(bn(T),"s\u540E\u53EF\u70B9\u51FB"):B,G=o.ghost,j=o.loading,w=o.block,d=o.children,O=o.shape,K=o.icon,L=o.onClick,U=f()(o,vn),C=(0,l.useState)(!0),m=p()(C,2),s=m[0],i=m[1],a=function(S){if(s&&!j&&!D&&(L==null||L(S),T)){var $=0;$=T?typeof T=="boolean"?1e3:T*1e3:0,i(!1),setTimeout(function(){i(!0)},$)}},y=(0,l.useCallback)(function(){return(0,V.jsxs)(V.Fragment,{children:[j?(0,V.jsx)(E.Z,{spin:!0,style:{marginRight:5}}):null,K,d]})},[]);return(0,V.jsx)(gn,r()(r()({},U),{},{ref:e,onClick:a,className:(0,I.Z)([[b,h,O],{disabled:D||!s?"disabled":null,ghost:G,block:w}]),children:s?y():Q}))}),mn=hn;function yn(o,e){(0,l.useEffect)(function(){var t=function(u){if(e!=null&&e.current){var h;e!=null&&(h=e.current)!==null&&h!==void 0&&h.contains(u.target)||o(u)}else throw new Error("ref current is null")};return window.addEventListener("click",t),function(){window.removeEventListener("click",t)}},[o,e])}var pn=yn,En=n(861),Cn=n.n(En),An=n(17061),X=n.n(An),Mn=n(17156),dn=n.n(Mn),k={isAuto:!0,success:{msg:["data","successMsg"],flag:["data","success"],dataKey:["data","result"]},error:{msg:["data","errMsg"]}},Y=function(e,t){var b=e.reduce(function(u,h){return u==null?void 0:u[h]},t);return b},Pn=function(e,t){var b=(0,l.useState)(!1),u=p()(b,2),h=u[0],D=u[1],T=(0,l.useState)({}),B=p()(T,2),Q=B[0],G=B[1],j=t||k,w=j.isAuto,d=j.success,O=j.error,K=(0,l.useCallback)(dn()(X()().mark(function L(){var U,C,m,s,i,a,y,_,S,$,v,nn,sn,rn,cn,en,an,fn,on,tn,Sn=arguments;return X()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,!h){c.next=3;break}return c.abrupt("return",alert("\u4E0D\u8981\u91CD\u590D\u8BF7\u6C42"));case 3:return console.log("send request"),D(!0),c.next=7,e.apply(void 0,Sn);case 7:if(a=c.sent,console.log(a),y=d||k.success,_=y.flag,S=_===void 0?(U=k.success)===null||U===void 0?void 0:U.flag:_,$=y.callback,v=$===void 0?null:$,nn=y.msg,sn=nn===void 0?(C=k.success)===null||C===void 0?void 0:C.msg:nn,rn=y.dataKey,cn=rn===void 0?(m=k.success)===null||m===void 0?void 0:m.dataKey:rn,en=O||k.error,an=en.msg,fn=an===void 0?(s=k.error)===null||s===void 0?void 0:s.msg:an,on=en.callback,tn=on===void 0?(i=k.error)===null||i===void 0?void 0:i.callback:on,!Y(S,a)){c.next=15;break}return D(!1),v&&v(Y(sn,a)),c.abrupt("return",G(Y(cn,a)));case 15:return D(!1),c.abrupt("return",tn&&tn(Y(fn,a)));case 19:c.prev=19,c.t0=c.catch(0),D(!1),console.log(c.t0);case 23:case"end":return c.stop()}},L,null,[[0,19]])})),[e,d,O]);return(0,l.useEffect)(function(){w&&K.apply(void 0,Cn()([]))},[]),{loading:h,data:Q,query:K}},Dn=Pn,_n=["isAuto","pagination","onSuccess","onError"],q={isAuto:!0,pagination:{current:1,pageSize:10,total:0}},Tn=function(e,t){var b=t||{},u=b.isAuto,h=u===void 0?q.isAuto:u,D=b.pagination,T=D===void 0?q.pagination:D,B=b.onSuccess,Q=b.onError,G=f()(b,_n),j=(0,l.useState)({loading:!1}),w=p()(j,2),d=w[0],O=w[1],K=(0,l.useCallback)(dn()(X()().mark(function C(){var m,s,i,a,y,_,S=arguments;return X()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:for(O(r()(r()({},d),{},{loading:!0})),v.prev=1,m=S.length,s=new Array(m),i=0;i<m;i++)s[i]=S[i];return v.next=5,e.apply(void 0,s);case 5:a=v.sent,console.log("res",a),a!=null&&a.success?(y=s[0],_=s[1],O(r()(r()(r()({},d),G),{},{pagination:r()(r()({},t!=null&&t.pagination?t==null?void 0:t.pagination:d==null?void 0:d.pagination),{},{total:a.total,current:y,pageSize:_}),dataSource:a==null?void 0:a.list,loading:!1})),typeof B=="function"&&B(a)):(O(r()(r()({},d),{},{loading:!1})),typeof Q=="function"&&Q(a)),v.next=13;break;case 10:v.prev=10,v.t0=v.catch(1),O(r()(r()({},d),{},{loading:!1}));case 13:case"end":return v.stop()}},C,null,[[1,10]])})),[e]),L=function(){K.apply(void 0,arguments)},U=(0,l.useMemo)(function(){return r()(r()({},d),{},{pagination:r()(r()({},d.pagination),{},{onChange:L,onShowSizeChange:L})})},[d]);return(0,l.useEffect)(function(){if(h){var C=q.pagination,m=C.current,s=C.pageSize,i=T,a=i.current,y=a===void 0?m:a,_=i.pageSize,S=_===void 0?s:_;K(y,S)}},[]),{queryTable:K,tableProps:U}},On=Tn}}]);
