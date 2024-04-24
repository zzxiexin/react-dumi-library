"use strict";(self.webpackChunkyxhooks=self.webpackChunkyxhooks||[]).push([[978],{25978:function(An,U,f){f.d(U,{zx:function(){return en},h9:function(){return an},eS:function(){return un},FU:function(){return cn},Nr:function(){return fn},b6:function(){return gn},QT:function(){return Cn},x6:function(){return xn},fB:function(){return Tn}});var J=f(97857),i=f.n(J),H=f(5574),C=f.n(H),V=f(13769),P=f.n(V),X=f(68400),N=f.n(X),Y=f(77145),L=f(90512),d=f(67294),O=f(47411),T="#fff",B="#4C84FF",Z="#ff817d",R="#d9d9d9",D="rgba(0, 0, 0, 0.8);",w=f(85893),I=["type","size","disabled","debounce","ghost","loading","block","children","shape","icon","onClick"],K,q=O.ZP.button(K||(K=N()([`
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
`])),D,T,R,T,R,D,B,B,T,T,R,D,Z,Z,T,B,D,R,R),_=function(n){return n?typeof n=="boolean"?1:n:0},nn=d.forwardRef(function(t,n){var e=t.type,c=e===void 0?"default-btn":e,r=t.size,o=r===void 0?"default":r,a=t.disabled,l=t.debounce,v=l===void 0?0:l,y=t.ghost,b=t.loading,g=t.block,E=t.children,z=t.shape,u=t.icon,h=t.onClick,m=P()(t,I),A=(0,d.useState)(!0),j=C()(A,2),k=j[0],p=j[1],F=(0,d.useState)(0),$=C()(F,2),s=$[0],Q=$[1],Rn=function(jn){if(!(!k||b||a)&&(h==null||h(jn),v)){var x=_(v);if(p(!1),typeof x=="number"&&x>0){Q(x);var Dn=setInterval(function(){if(x=x-1,Q(x),x===0){p(!0),clearInterval(Dn);return}},1e3)}}},En=function(){return(0,w.jsxs)(w.Fragment,{children:[b?(0,w.jsx)(Y.Z,{spin:!0,style:{marginRight:5}}):null,u,E]})};return(0,w.jsx)(q,i()(i()({},m),{},{ref:n,onClick:Rn,className:(0,L.Z)([[c,o,z],{disabled:a||!k?"disabled":null,ghost:y,block:g}]),children:k?En():(0,w.jsxs)("div",{children:[s,"s\u540E\u53EF\u70B9\u51FB"]})}))}),en=nn;function on(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.target,c=e===void 0?document.body:e,r=document.createElement("textarea"),o=document.activeElement;r.value=t,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var a=document.getSelection(),l=a.rangeCount>0&&a.getRangeAt(0);c.append(r),r.select(),r.selectionStart=0,r.selectionEnd=t.length;var v=!1;try{v=document.execCommand("copy")}catch(y){}return r.remove(),l&&(a.removeAllRanges(),a.addRange(l)),o&&o.focus(),v}var rn=["text","onCopy","children","className"],M,tn=O.ZP.div(M||(M=N()([`
  display: inline-flex;
  cursor: pointer;
`]))),W=d.forwardRef(function(t,n){var e=t.text,c=t.onCopy,r=t.children,o=t.className,a=P()(t,rn);return(0,w.jsx)(tn,i()(i()({},a),{},{ref:n,className:(0,L.Z)("uc-copy-to-clipboard",o),onClick:function(){on(e),c==null||c()},children:r}))});W.displayName="UC-CopyToClipboard";var an=W,ln=function(n){var e=(0,d.useState)(0),c=C()(e,2),r=c[0],o=c[1];return(0,d.useEffect)(function(){return window.addEventListener("click",function(a){var l;a.stopPropagation(),n!=null&&(l=n.current)!==null&&l!==void 0&&l.contains(a.target)&&o(function(v){return v+1})}),function(){window.removeEventListener("click",function(){})}},[]),{count:r}},un=ln,sn=function(n){var e=(0,d.useState)(""),c=C()(e,2),r=c[0],o=c[1];return(0,d.useEffect)(function(){var a;n==null||(a=n.current)===null||a===void 0||a.addEventListener("contextmenu",function(l){var v;console.log("event",l),l.preventDefault();var y=n==null||(v=n.current)===null||v===void 0?void 0:v.innerText;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(y).then(function(){o(y),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")},function(g){console.error("\u65E0\u6CD5\u5C06\u5185\u5BB9\u590D\u5236\u5230\u526A\u8D34\u677F\uFF1A",g)});else{console.log("event",l);var b=document.createElement("input");b.style.position="fixed",b.style.opacity="0",b.value=y,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b),o(y),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")}})},[]),{text:r}},cn=sn,dn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:window,r=null;return function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];r&&clearTimeout(r),r=setTimeout(function(){n.call.apply(n,[c].concat(a))},e*1e3)}},fn=dn,vn=function(n){(0,d.useEffect)(function(){n&&typeof n=="function"&&n()},[])},gn=vn,bn=f(15009),G=f.n(bn),hn=f(99289),pn=f.n(hn),mn={manual:!1,init:{}},yn=function(n,e){var c=(0,d.useState)(!1),r=C()(c,2),o=r[0],a=r[1],l=(0,d.useState)({}),v=C()(l,2),y=v[0],b=v[1],g=i()(i()({},mn),e),E=g.manual,z=g.init,u=g.onError,h=g.onSuccess,m=g.onRepeat,A=function(p){console.log(p),a(!1),u&&typeof u=="function"&&u(p)},j=(0,d.useCallback)(pn()(G()().mark(function k(){var p,F=arguments;return G()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,!o){s.next=5;break}return m==null||m(),console.log("\u4E0D\u8981\u91CD\u590D\u8BF7\u6C42"),s.abrupt("return");case 5:return a(!0),b({}),s.prev=7,s.next=10,n.apply(void 0,F);case 10:if(p=s.sent,!(p!=null&&p.success)){s.next=16;break}return b(p==null?void 0:p.data),a(!1),typeof h=="function"&&(h==null||h(p.data)),s.abrupt("return");case 16:b({}),a(!1),s.next=23;break;case 20:return s.prev=20,s.t0=s.catch(7),s.abrupt("return",A(s.t0));case 23:s.next=28;break;case 25:return s.prev=25,s.t1=s.catch(0),s.abrupt("return",A(s.t1));case 28:case"end":return s.stop()}},k,null,[[0,25],[7,20]])})),[n,e]);return(0,d.useEffect)(function(){E&&j(z)},[]),{loading:o,data:y,query:j}},Cn=yn,S={manual:!1,isRowSelect:!1,remeberRow:!1,pagination:{current:1,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(n){return"\u603B\u5171".concat(n,"\u6761\u6570\u636E")},pageSizeOptions:["10","25","50","100"]}},Sn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S,c=(0,d.useState)(i()(i()(i()({},S),e),{},{pagination:e!=null&&e.pagination?i()(i()({},S.pagination),e==null?void 0:e.pagination):S==null?void 0:S.pagination})),r=C()(c,2),o=r[0],a=r[1],l=(0,d.useState)([]),v=C()(l,2),y=v[0],b=v[1],g=(0,d.useCallback)(function(u,h){a(i()(i()({},o),{},{loading:!0})),e.remeberRow||b([]),n(u,h).then(function(m){a(i()(i()({},o),{},{loading:!1,dataSource:m==null?void 0:m.data,pagination:i()(i()({},o==null?void 0:o.pagination),{},{total:m==null?void 0:m.total,current:u,pageSize:h})}))}).catch(function(){a(i()(i()({},o),{},{loading:!1,dataSource:[],pagination:i()(i()({},o==null?void 0:o.pagination),{},{total:0,current:u,pageSize:h})}))})},[n]);(0,d.useEffect)(function(){if(!e.manual){var u=o.pagination;g(u==null?void 0:u.current,u==null?void 0:u.pageSize)}},[]);var E=(0,d.useCallback)(function(){var u=S.pagination;g(u.current,u.pageSize)},[g]),z=(0,d.useCallback)(function(){var u=o.pagination;g(u==null?void 0:u.current,u==null?void 0:u.pageSize)},[g]);return{tableProps:i()(i()({},o),{},{pagination:i()(i()({},o.pagination),{},{onChange:g,onShowSizeChange:g}),rowSelection:e!=null&&e.isRowSelect?{preserveSelectedRowKeys:e==null?void 0:e.remeberRow,onChange:function(h){b(h)}}:null}),reset:E,renew:z,selectRowsKeys:y}},xn=Sn,wn=function(n){return n?new Date(n).getTime()/1e3:Math.floor(Date.now()/1e3)},kn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:window,r=Date.now()/1e3;return function(){if(wn(Date.now())-r>e){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];n.call.apply(n,[c].concat(a)),r=Date.now()/1e3}}},Tn=kn}}]);
