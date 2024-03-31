"use strict";(self.webpackChunkyxhooks=self.webpackChunkyxhooks||[]).push([[978],{25978:function(Bn,Q,d){d.d(Q,{zx:function(){return nn},h9:function(){return tn},eS:function(){return ln},FU:function(){return sn},Nr:function(){return dn},b6:function(){return vn},QT:function(){return yn},x6:function(){return Sn},fB:function(){return wn}});var U=d(97857),i=d.n(U),J=d(5574),C=d.n(J),H=d(13769),A=d.n(H),V=d(68400),$=d.n(V),X=d(77145),P=d(90512),c=d(67294),N=d(97653),w="#fff",F="#4C84FF",L="#ff817d",T="#d9d9d9",D="rgba(0, 0, 0, 0.8);",k=d(85893),Y=["type","size","disabled","debounce","ghost","loading","block","children","shape","icon","onClick"],O,I=N.ZP.button(O||(O=$()([`
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
`])),D,w,T,w,T,D,F,F,w,w,T,D,L,L,w,F,D,T,T),q=function(n){return n?typeof n=="boolean"?1:n:0},_=c.forwardRef(function(o,n){var e=o.type,s=e===void 0?"default-btn":e,a=o.size,r=a===void 0?"default":a,t=o.disabled,f=o.debounce,v=f===void 0?0:f,m=o.ghost,g=o.loading,b=o.block,R=o.children,E=o.shape,l=o.icon,p=o.onClick,y=A()(o,Y),j=(0,c.useState)(!0),z=C()(j,2),h=z[0],B=z[1],W=(0,c.useState)(0),u=C()(W,2),Tn=u[0],G=u[1],Rn=function(Dn){if(!(!h||g||t)&&(p==null||p(Dn),v)){var x=q(v);if(B(!1),typeof x=="number"&&x>0){G(x);var jn=setInterval(function(){if(x=x-1,G(x),x===0){B(!0),clearInterval(jn);return}},1e3)}}},En=function(){return(0,k.jsxs)(k.Fragment,{children:[g?(0,k.jsx)(X.Z,{spin:!0,style:{marginRight:5}}):null,l,R]})};return(0,k.jsx)(I,i()(i()({},y),{},{ref:n,onClick:Rn,className:(0,P.Z)([[s,r,E],{disabled:t||!h?"disabled":null,ghost:m,block:b}]),children:h?En():(0,k.jsxs)("div",{children:[Tn,"s\u540E\u53EF\u70B9\u51FB"]})}))}),nn=_;function en(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.target,s=e===void 0?document.body:e,a=document.createElement("textarea"),r=document.activeElement;a.value=o,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var t=document.getSelection(),f=t.rangeCount>0&&t.getRangeAt(0);s.append(a),a.select(),a.selectionStart=0,a.selectionEnd=o.length;var v=!1;try{v=document.execCommand("copy")}catch(m){}return a.remove(),f&&(t.removeAllRanges(),t.addRange(f)),r&&r.focus(),v}var on=["text","onCopy","children","className"],Z,rn=N.ZP.div(Z||(Z=$()([`
  display: inline-flex;
  cursor: pointer;
`]))),K=c.forwardRef(function(o,n){var e=o.text,s=o.onCopy,a=o.children,r=o.className,t=A()(o,on);return(0,k.jsx)(rn,i()(i()({},t),{},{ref:n,className:(0,P.Z)("uc-copy-to-clipboard",r),onClick:function(){en(e),s==null||s()},children:a}))});K.displayName="UC-CopyToClipboard";var tn=K,an=function(n){var e=(0,c.useState)(0),s=C()(e,2),a=s[0],r=s[1];return(0,c.useEffect)(function(){return window.addEventListener("click",function(t){var f;t.stopPropagation(),n!=null&&(f=n.current)!==null&&f!==void 0&&f.contains(t.target)&&r(function(v){return v+1})}),function(){window.removeEventListener("click",function(){})}},[]),{count:a}},ln=an,un=function(n){var e=(0,c.useState)(""),s=C()(e,2),a=s[0],r=s[1];return(0,c.useEffect)(function(){var t;n==null||(t=n.current)===null||t===void 0||t.addEventListener("contextmenu",function(f){var v;console.log("event",f),f.preventDefault();var m=n==null||(v=n.current)===null||v===void 0?void 0:v.innerText;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m).then(function(){r(m),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")},function(b){console.error("\u65E0\u6CD5\u5C06\u5185\u5BB9\u590D\u5236\u5230\u526A\u8D34\u677F\uFF1A",b)});else{console.log("event",f);var g=document.createElement("input");g.style.position="fixed",g.style.opacity="0",g.value=m,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),r(m),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")}})},[]),{text:a}},sn=un,cn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,s=null;return function(){for(var a=arguments.length,r=new Array(a),t=0;t<a;t++)r[t]=arguments[t];s&&clearTimeout(s),s=setTimeout(function(){n.apply(void 0,r)},e*1e3)}},dn=cn,fn=function(n){(0,c.useEffect)(function(){n&&typeof n=="function"&&n()},[])},vn=fn,gn=d(15009),M=d.n(gn),bn=d(99289),hn=d.n(bn),pn={manual:!1,init:{}},mn=function(n,e){var s=(0,c.useState)(!1),a=C()(s,2),r=a[0],t=a[1],f=(0,c.useState)({}),v=C()(f,2),m=v[0],g=v[1],b=i()(i()({},pn),e),R=b.manual,E=b.init,l=b.onError,p=b.onSuccess,y=function(h){console.log(h),t(!1),l&&typeof l=="function"&&l(h)},j=(0,c.useCallback)(hn()(M()().mark(function z(){var h,B=arguments;return M()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,!r){u.next=4;break}return console.log("\u4E0D\u8981\u91CD\u590D\u8BF7\u6C42"),u.abrupt("return");case 4:return t(!0),g({}),u.prev=6,u.next=9,n.apply(void 0,B);case 9:if(h=u.sent,!(h!=null&&h.success)){u.next=15;break}return g(h==null?void 0:h.data),t(!1),typeof p=="function"&&(p==null||p(h.data)),u.abrupt("return");case 15:g({}),t(!1),u.next=22;break;case 19:return u.prev=19,u.t0=u.catch(6),u.abrupt("return",y(u.t0));case 22:u.next=27;break;case 24:return u.prev=24,u.t1=u.catch(0),u.abrupt("return",y(u.t1));case 27:case"end":return u.stop()}},z,null,[[0,24],[6,19]])})),[n,e]);return(0,c.useEffect)(function(){R&&j(E)},[]),{loading:r,data:m,query:j}},yn=mn,S={manual:!1,isRowSelect:!1,remeberRow:!1,pagination:{current:1,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(n){return"\u603B\u5171".concat(n,"\u6761\u6570\u636E")},pageSizeOptions:["10","25","50","100"]}},Cn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S,s=(0,c.useState)(i()(i()(i()({},S),e),{},{pagination:e!=null&&e.pagination?i()(i()({},S.pagination),e==null?void 0:e.pagination):S==null?void 0:S.pagination})),a=C()(s,2),r=a[0],t=a[1],f=(0,c.useState)([]),v=C()(f,2),m=v[0],g=v[1],b=(0,c.useCallback)(function(l,p){t(i()(i()({},r),{},{loading:!0})),e.remeberRow||g([]),n(l,p).then(function(y){t(i()(i()({},r),{},{loading:!1,dataSource:y==null?void 0:y.data,pagination:i()(i()({},r==null?void 0:r.pagination),{},{total:y==null?void 0:y.total,current:l,pageSize:p})}))}).catch(function(){t(i()(i()({},r),{},{loading:!1,dataSource:[],pagination:i()(i()({},r==null?void 0:r.pagination),{},{total:0,current:l,pageSize:p})}))})},[n]);(0,c.useEffect)(function(){if(!e.manual){var l=r.pagination;b(l==null?void 0:l.current,l==null?void 0:l.pageSize)}},[]);var R=(0,c.useCallback)(function(){var l=S.pagination;b(l.current,l.pageSize)},[b]),E=(0,c.useCallback)(function(){var l=r.pagination;b(l==null?void 0:l.current,l==null?void 0:l.pageSize)},[b]);return{tableProps:i()(i()({},r),{},{pagination:i()(i()({},r.pagination),{},{onChange:b,onShowSizeChange:b}),rowSelection:e!=null&&e.isRowSelect?{preserveSelectedRowKeys:e==null?void 0:e.remeberRow,onChange:function(p){g(p)}}:null}),reset:R,renew:E,selectRowsKeys:m}},Sn=Cn,xn=function(n){return n?new Date(n).getTime()/1e3:Math.floor(Date.now()/1e3)},kn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,s=Date.now()/1e3;return function(){xn(Date.now())-s>e&&(n.apply(void 0,arguments),s=Date.now()/1e3)}},wn=kn}}]);
