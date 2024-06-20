"use strict";(self.webpackChunkyxhooks=self.webpackChunkyxhooks||[]).push([[816],{10816:function(An,M,v){v.r(M),v.d(M,{Button:function(){return en},CopyToClipboard:function(){return an},useClickAny:function(){return ln},useCopy:function(){return sn},useDebounce:function(){return dn},useFullScreen:function(){return fn},useMount:function(){return gn},useRequest:function(){return Cn},useTable:function(){return xn},useThrottle:function(){return Tn},useUnMount:function(){return En}});var Q=v(97857),s=v.n(Q),H=v(5574),C=v.n(H),V=v(13769),P=v.n(V),X=v(68400),L=v.n(X),Y=v(77145),N=v(90512),f=v(67294),O=v(26745),T="#fff",A="#4C84FF",Z="#ff817d",E="#d9d9d9",D="rgba(0, 0, 0, 0.8);",w=v(85893),I=["type","size","disabled","debounce","ghost","loading","block","children","shape","icon","onClick"],K,q=O.ZP.button(K||(K=L()([`
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
`])),D,T,E,T,E,D,A,A,T,T,E,D,Z,Z,T,A,D,E,E),_=function(n){return n?typeof n=="boolean"?1:n:0},nn=f.forwardRef(function(o,n){var r=o.type,u=r===void 0?"default-btn":r,e=o.size,t=e===void 0?"default":e,a=o.disabled,i=o.debounce,d=i===void 0?0:i,m=o.ghost,g=o.loading,b=o.block,R=o.children,F=o.shape,l=o.icon,h=o.onClick,y=P()(o,I),j=(0,f.useState)(!0),z=C()(j,2),k=z[0],p=z[1],B=(0,f.useState)(0),$=C()(B,2),c=$[0],J=$[1],Rn=function(Dn){if(!(!k||g||a)&&(h==null||h(Dn),d)){var x=_(d);if(p(!1),typeof x=="number"&&x>0){J(x);var jn=setInterval(function(){if(x=x-1,J(x),x===0){p(!0),clearInterval(jn);return}},1e3)}}},Fn=function(){return(0,w.jsxs)(w.Fragment,{children:[g?(0,w.jsx)(Y.Z,{spin:!0,style:{marginRight:5}}):null,l,R]})};return(0,w.jsx)(q,s()(s()({},y),{},{ref:n,onClick:Rn,className:(0,N.Z)([[u,t,F],{disabled:a||!k?"disabled":null,ghost:m,block:b}]),children:k?Fn():(0,w.jsxs)("div",{children:[c,"s\u540E\u53EF\u70B9\u51FB"]})}))}),en=nn;function on(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.target,u=r===void 0?document.body:r,e=document.createElement("textarea"),t=document.activeElement;e.value=o,e.setAttribute("readonly",""),e.style.contain="strict",e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="12pt";var a=document.getSelection(),i=a.rangeCount>0&&a.getRangeAt(0);u.append(e),e.select(),e.selectionStart=0,e.selectionEnd=o.length;var d=!1;try{d=document.execCommand("copy")}catch(m){}return e.remove(),i&&(a.removeAllRanges(),a.addRange(i)),t&&t.focus(),d}var rn=["text","onCopy","children","className"],U,tn=O.ZP.div(U||(U=L()([`
  display: inline-flex;
  cursor: pointer;
`]))),W=f.forwardRef(function(o,n){var r=o.text,u=o.onCopy,e=o.children,t=o.className,a=P()(o,rn);return(0,w.jsx)(tn,s()(s()({},a),{},{ref:n,className:(0,N.Z)("uc-copy-to-clipboard",t),onClick:function(){on(r),u==null||u()},children:e}))});W.displayName="UC-CopyToClipboard";var an=W;function ln(o,n){function r(u){var e;n!=null&&(e=n.current)!==null&&e!==void 0&&e.contains(u==null?void 0:u.target)&&(o==null||o())}(0,f.useEffect)(function(){window.addEventListener("click",function(u){var e=this;return r(u),function(){e.removeEventListener("click",r)}})},[])}var un=function(n){var r=(0,f.useState)(""),u=C()(r,2),e=u[0],t=u[1];return(0,f.useEffect)(function(){var a;n==null||(a=n.current)===null||a===void 0||a.addEventListener("contextmenu",function(i){var d;console.log("event",i),i.preventDefault();var m=n==null||(d=n.current)===null||d===void 0?void 0:d.innerText;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m).then(function(){t(m),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")},function(b){console.error("\u65E0\u6CD5\u5C06\u5185\u5BB9\u590D\u5236\u5230\u526A\u8D34\u677F\uFF1A",b)});else{console.log("event",i);var g=document.createElement("input");g.style.position="fixed",g.style.opacity="0",g.value=m,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),t(m),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")}})},[]),{text:e}},sn=un,cn=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:window,e=null;return function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];e&&clearTimeout(e),e=setTimeout(function(){n.call.apply(n,[u].concat(a))},r*1e3)}},dn=cn;function fn(){var o=(0,f.useState)(!1),n=C()(o,2),r=n[0],u=n[1];function e(d){var m=document.documentElement;u(d),d&&(document.fullscreenElement||m.requestFullscreen().catch(function(g){console.error("\u8FDB\u5165\u5168\u5C4F\u6A21\u5F0F\u5931\u8D25:",g)})),d||document.fullscreenElement&&document.exitFullscreen()}var t=function(){return e(!0)},a=function(){return e(!1)},i=function(){return e(!r)};return[r,{enterFullscreen:t,exitFullscreen:a,toggleFullscreen:i}]}var vn=function(n){(0,f.useEffect)(function(){n&&typeof n=="function"&&(n==null||n())},[])},gn=vn,bn=v(15009),G=v.n(bn),hn=v(99289),pn=v.n(hn),mn={manual:!1,init:{}},yn=function(n,r){var u=(0,f.useState)(!1),e=C()(u,2),t=e[0],a=e[1],i=(0,f.useState)({}),d=C()(i,2),m=d[0],g=d[1],b=s()(s()({},mn),r),R=b.manual,F=b.init,l=b.onError,h=b.onSuccess,y=b.onRepeat,j=function(p){console.log(p),a(!1),l&&typeof l=="function"&&l(p)},z=(0,f.useCallback)(pn()(G()().mark(function k(){var p,B=arguments;return G()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,!t){c.next=5;break}return y==null||y(),console.log("\u4E0D\u8981\u91CD\u590D\u8BF7\u6C42"),c.abrupt("return");case 5:return a(!0),g({}),c.prev=7,c.next=10,n.apply(void 0,B);case 10:if(p=c.sent,!(p!=null&&p.success)){c.next=16;break}return g(p==null?void 0:p.data),a(!1),typeof h=="function"&&(h==null||h(p.data)),c.abrupt("return");case 16:g({}),a(!1),c.next=23;break;case 20:return c.prev=20,c.t0=c.catch(7),c.abrupt("return",j(c.t0));case 23:c.next=28;break;case 25:return c.prev=25,c.t1=c.catch(0),c.abrupt("return",j(c.t1));case 28:case"end":return c.stop()}},k,null,[[0,25],[7,20]])})),[n,r]);return(0,f.useEffect)(function(){R&&z(F)},[]),{loading:t,data:m,query:z}},Cn=yn,S={manual:!1,isRowSelect:!1,remeberRow:!1,pagination:{current:1,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(n){return"\u603B\u5171".concat(n,"\u6761\u6570\u636E")},pageSizeOptions:["10","25","50","100"]}},Sn=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S,u=(0,f.useState)(s()(s()(s()({},S),r),{},{pagination:r!=null&&r.pagination?s()(s()({},S.pagination),r==null?void 0:r.pagination):S==null?void 0:S.pagination})),e=C()(u,2),t=e[0],a=e[1],i=(0,f.useState)([]),d=C()(i,2),m=d[0],g=d[1],b=(0,f.useCallback)(function(l,h){a(s()(s()({},t),{},{loading:!0})),r.remeberRow||g([]),n(l,h).then(function(y){a(s()(s()({},t),{},{loading:!1,dataSource:y==null?void 0:y.data,pagination:s()(s()({},t==null?void 0:t.pagination),{},{total:y==null?void 0:y.total,current:l,pageSize:h})}))}).catch(function(){a(s()(s()({},t),{},{loading:!1,dataSource:[],pagination:s()(s()({},t==null?void 0:t.pagination),{},{total:0,current:l,pageSize:h})}))})},[n]);(0,f.useEffect)(function(){if(!r.manual){var l=t.pagination;b(l==null?void 0:l.current,l==null?void 0:l.pageSize)}},[]);var R=(0,f.useCallback)(function(){var l=S.pagination;b(l.current,l.pageSize)},[b]),F=(0,f.useCallback)(function(){var l=t.pagination;b(l==null?void 0:l.current,l==null?void 0:l.pageSize)},[b]);return{tableProps:s()(s()({},t),{},{pagination:s()(s()({},t.pagination),{},{onChange:b,onShowSizeChange:b}),rowSelection:r!=null&&r.isRowSelect?{preserveSelectedRowKeys:r==null?void 0:r.remeberRow,onChange:function(h){g(h)}}:null}),reset:R,renew:F,selectRowsKeys:m}},xn=Sn,wn=function(n){return n?new Date(n).getTime()/1e3:Math.floor(Date.now()/1e3)},kn=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:window,e=Date.now()/1e3;return function(){if(wn(Date.now())-e>r){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];n.call.apply(n,[u].concat(a)),e=Date.now()/1e3}}},Tn=kn;function En(o){(0,f.useEffect)(function(){return function(){o==null||o()}},[])}}}]);
