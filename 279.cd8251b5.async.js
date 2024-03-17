"use strict";(self.webpackChunkyxhooks=self.webpackChunkyxhooks||[]).push([[279],{30279:function(Rn,Q,s){s.d(Q,{zx:function(){return nn},h9:function(){return an},eS:function(){return ln},FU:function(){return dn},b6:function(){return cn},QT:function(){return pn},x6:function(){return Cn}});var U=s(97857),i=s.n(U),J=s(5574),m=s.n(J),H=s(13769),B=s.n(H),V=s(68400),$=s.n(V),X=s(77145),D=s(90512),d=s(67294),L=s(97653),w="#fff",F="#4C84FF",N="#ff817d",T="#d9d9d9",j="rgba(0, 0, 0, 0.8);",k=s(85893),Y=["type","size","disabled","debounce","ghost","loading","block","children","shape","icon","onClick"],O,I=L.ZP.button(O||(O=$()([`
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
`])),j,w,T,w,T,j,F,F,w,w,T,j,N,N,w,F,j,T,T),q=function(n){return n?typeof n=="boolean"?1:n:0},_=d.forwardRef(function(o,n){var e=o.type,f=e===void 0?"default-btn":e,t=o.size,r=t===void 0?"default":t,u=o.disabled,c=o.debounce,v=c===void 0?0:c,y=o.ghost,g=o.loading,b=o.block,R=o.children,E=o.shape,a=o.icon,p=o.onClick,C=B()(o,Y),A=(0,d.useState)(!0),z=m()(A,2),h=z[0],P=z[1],W=(0,d.useState)(0),l=m()(W,2),mn=l[0],G=l[1],Sn=function(wn){if(!(!h||g||u)&&(p==null||p(wn),v)){var x=q(v);if(P(!1),typeof x=="number"&&x>0){G(x);var Tn=setInterval(function(){if(x=x-1,G(x),x===0){P(!0),clearInterval(Tn);return}},1e3)}}},xn=function(){return(0,k.jsxs)(k.Fragment,{children:[g?(0,k.jsx)(X.Z,{spin:!0,style:{marginRight:5}}):null,a,R]})};return(0,k.jsx)(I,i()(i()({},C),{},{ref:n,onClick:Sn,className:(0,D.Z)([[f,r,E],{disabled:u||!h?"disabled":null,ghost:y,block:b}]),children:h?xn():(0,k.jsxs)("div",{children:[mn,"s\u540E\u53EF\u70B9\u51FB"]})}))}),nn=_;function en(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.target,f=e===void 0?document.body:e,t=document.createElement("textarea"),r=document.activeElement;t.value=o,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";var u=document.getSelection(),c=u.rangeCount>0&&u.getRangeAt(0);f.append(t),t.select(),t.selectionStart=0,t.selectionEnd=o.length;var v=!1;try{v=document.execCommand("copy")}catch(y){}return t.remove(),c&&(u.removeAllRanges(),u.addRange(c)),r&&r.focus(),v}var on=["text","onCopy","children","className"],Z,rn=L.ZP.div(Z||(Z=$()([`
  display: inline-flex;
  cursor: pointer;
`]))),K=d.forwardRef(function(o,n){var e=o.text,f=o.onCopy,t=o.children,r=o.className,u=B()(o,on);return(0,k.jsx)(rn,i()(i()({},u),{},{ref:n,className:(0,D.Z)("uc-copy-to-clipboard",r),onClick:function(){en(e),f==null||f()},children:t}))});K.displayName="UC-CopyToClipboard";var an=K,tn=function(n){var e=(0,d.useState)(0),f=m()(e,2),t=f[0],r=f[1];return(0,d.useEffect)(function(){return window.addEventListener("click",function(u){var c;u.stopPropagation(),n!=null&&(c=n.current)!==null&&c!==void 0&&c.contains(u.target)&&r(function(v){return v+1})}),function(){window.removeEventListener("click",function(){})}},[]),{count:t}},ln=tn,un=function(n){var e=(0,d.useState)(""),f=m()(e,2),t=f[0],r=f[1];return(0,d.useEffect)(function(){var u;n==null||(u=n.current)===null||u===void 0||u.addEventListener("contextmenu",function(c){var v;console.log("event",c),c.preventDefault();var y=n==null||(v=n.current)===null||v===void 0?void 0:v.innerText;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(y).then(function(){r(y),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")},function(b){console.error("\u65E0\u6CD5\u5C06\u5185\u5BB9\u590D\u5236\u5230\u526A\u8D34\u677F\uFF1A",b)});else{console.log("event",c);var g=document.createElement("input");g.style.position="fixed",g.style.opacity="0",g.value=y,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),r(y),console.log("\u5DF2\u6210\u529F\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01")}})},[]),{text:t}},dn=un,sn=function(n){(0,d.useEffect)(function(){n&&typeof n=="function"&&n()},[])},cn=sn,fn=s(15009),M=s.n(fn),vn=s(99289),gn=s.n(vn),bn={isAuto:!0,initParam:{}},hn=function(n,e){var f=(0,d.useState)(!1),t=m()(f,2),r=t[0],u=t[1],c=(0,d.useState)({}),v=m()(c,2),y=v[0],g=v[1],b=i()(i()({},bn),e),R=b.isAuto,E=b.initParam,a=b.onError,p=b.onSuccess,C=function(h){console.log(h),u(!1),a&&typeof a=="function"&&a(h)},A=(0,d.useCallback)(gn()(M()().mark(function z(){var h,P=arguments;return M()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,!r){l.next=4;break}return console.log("\u4E0D\u8981\u91CD\u590D\u8BF7\u6C42"),l.abrupt("return");case 4:return u(!0),g({}),l.prev=6,l.next=9,n.apply(void 0,P);case 9:if(h=l.sent,!(h!=null&&h.success)){l.next=14;break}return g(h==null?void 0:h.data),u(!1),l.abrupt("return",typeof p=="function"&&(p==null?void 0:p(h.data)));case 14:g({}),u(!1),l.next=21;break;case 18:return l.prev=18,l.t0=l.catch(6),l.abrupt("return",C(l.t0));case 21:l.next=26;break;case 23:return l.prev=23,l.t1=l.catch(0),l.abrupt("return",C(l.t1));case 26:case"end":return l.stop()}},z,null,[[0,23],[6,18]])})),[n,e]);return(0,d.useEffect)(function(){R&&A(E)},[]),{loading:r,data:y,query:A}},pn=hn,S={manual:!1,isRowSelect:!1,remeberRow:!1,pagination:{current:1,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(n){return"\u603B\u5171".concat(n,"\u6761\u6570\u636E")},pageSizeOptions:["10","25","50","100"]}},yn=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S,f=(0,d.useState)(i()(i()(i()({},S),e),{},{pagination:e!=null&&e.pagination?i()(i()({},S.pagination),e==null?void 0:e.pagination):S==null?void 0:S.pagination})),t=m()(f,2),r=t[0],u=t[1],c=(0,d.useState)([]),v=m()(c,2),y=v[0],g=v[1],b=(0,d.useCallback)(function(a,p){u(i()(i()({},r),{},{loading:!0})),e.remeberRow||g([]),n(a,p).then(function(C){u(i()(i()({},r),{},{loading:!1,dataSource:C==null?void 0:C.data,pagination:i()(i()({},r==null?void 0:r.pagination),{},{total:C==null?void 0:C.total,current:a,pageSize:p})}))}).catch(function(){u(i()(i()({},r),{},{loading:!1,dataSource:[],pagination:i()(i()({},r==null?void 0:r.pagination),{},{total:0,current:a,pageSize:p})}))})},[n]);(0,d.useEffect)(function(){if(!e.manual){var a=r.pagination;b(a==null?void 0:a.current,a==null?void 0:a.pageSize)}},[]);var R=(0,d.useCallback)(function(){var a=S.pagination;b(a.current,a.pageSize)},[b]),E=(0,d.useCallback)(function(){var a=r.pagination;b(a==null?void 0:a.current,a==null?void 0:a.pageSize)},[b]);return{tableProps:i()(i()({},r),{},{pagination:i()(i()({},r.pagination),{},{onChange:b,onShowSizeChange:b}),rowSelection:e!=null&&e.isRowSelect?{preserveSelectedRowKeys:e==null?void 0:e.remeberRow,onChange:function(p){g(p)}}:null}),reset:R,renew:E,selectRowsKeys:y}},Cn=yn}}]);
