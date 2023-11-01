var _excluded = ["type", "size", "disabled", "debounce", "debounceNode", "ghost", "loading", "block", "children", "shape", "icon", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { SyncOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import * as styleConfigs from "../utils";
var StyledButton = styled.button.withConfig({
  displayName: "StyledButton",
  componentId: "react-ui-dumi-library__sc-1v4rjip-0"
})(["border:1px solid transparent;color:", ";background-color:", ";border-color:", ";appearance:button;text-shadow:none;box-shadow:none;outline:0;line-height:1.499;position:relative;display:inline-block;font-weight:400;white-space:nowrap;text-align:center;cursor:pointer;transition:all 0.3s cubic-bezier(0.645,0.045,0.355,1);user-select:none;touch-action:manipulation;height:32px;padding:0 15px;font-size:14px;border-radius:4px;text-transform:none;overflow:visible;box-sizing:border-box;&.block{width:100%;}&.default-btn{background:", ";border-color:", ";color:", ";&.default-btn:hover{color:#75a5ff;border-color:#75a5ff;}&.default-btn.ghost{background:transparent;color:white;border-color:white;text-shadow:none;}&.default-btn.ghost:hover{border-color:#75a5ff;color:#75a5ff;}&.default-btn.circle{border-radius:50%;}}&.primary{background:", ";border-color:", ";color:", ";text-shadow:0 -1px 0 rgba(0,0,0,0.12);box-shadow:0 2px 0 rgba(105,73,73,0.045);&.primary:hover{background-color:#75a5ff;border-color:#75a5ff;}&.primary.ghost{background:transparent;color:#4c84ff;border-color:#4c84ff;text-shadow:none;}&.primary.ghost:hover{border-color:#75a5ff;color:#75a5ff;}&.primary.circle{border-radius:50%;}}&.dashed{background:", ";border-color:", ";color:", ";border-style:dashed;&.dashed:hover{color:#75a5ff;border-color:#75a5ff;}&.dashed.ghost{background:transparent;color:white;border-color:white;text-shadow:none;}&.dashed.ghost:hover{border-color:#75a5ff;color:#75a5ff;}&.dashed.circle{border-radius:50%;}}&.danger{background:", ";border-color:", ";color:", ";&.danger:hover{background:#ffaca6;border-color:#ffaca6;}&.danger.ghost{color:#ff817d;background-color:transparent;border-color:#ff817d;text-shadow:none;}&.danger.ghost:hover{color:#ffaca6;background-color:transparent;border-color:#ffaca6;}&.danger.circle{border-radius:50%;}}&.link{background:transparent;border-color:transparent;color:", ";&.link:hover{color:#75a5ff;}&.link.circle{border-radius:50%;}}&.text{background:transparent;border-color:transparent;color:", ";&.text:hover{color:rgba(0,0,0,0.8);background-color:rgba(0,0,0,0.018);}&.text.circle{border-radius:50%;}}&.default{height:32px;padding:0 15px;font-size:14px;}&.small{height:24px;padding:0 7px;font-size:14px;border-radius:4px;}&.large{height:40px;padding:0 15px;font-size:16px;border-radius:4px;}&.disabled{color:rgba(0,0,0,0.25);background-color:#f5f5f5;border-color:", ";text-shadow:none;box-shadow:none;&.disabled:hover{color:rgba(0,0,0,0.25);background-color:#f5f5f5;border-color:", ";text-shadow:none;box-shadow:none;cursor:not-allowed;}}"], styleConfigs.black, styleConfigs.white, styleConfigs.gray, styleConfigs.white, styleConfigs.gray, styleConfigs.black, styleConfigs.primary, styleConfigs.primary, styleConfigs.white, styleConfigs.white, styleConfigs.gray, styleConfigs.black, styleConfigs.danger, styleConfigs.danger, styleConfigs.white, styleConfigs.primary, styleConfigs.black, styleConfigs.gray, styleConfigs.gray);

/**处理debounce设置为true */
var handleDebounceBool = function handleDebounceBool(debounce) {
  return debounce ? typeof debounce === 'boolean' ? 1 : debounce : null;
};

/** 按钮 */
var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'default-btn' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size,
    disabled = props.disabled,
    debounce = props.debounce,
    _props$debounceNode = props.debounceNode,
    debounceNode = _props$debounceNode === void 0 ? "".concat(handleDebounceBool(debounce), "s\u540E\u53EF\u70B9\u51FB") : _props$debounceNode,
    ghost = props.ghost,
    loading = props.loading,
    block = props.block,
    children = props.children,
    shape = props.shape,
    icon = props.icon,
    onClick = props.onClick,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    canClick = _useState2[0],
    setCanClick = _useState2[1];

  /**防抖点击处理 */
  var handleDebounceClick = function handleDebounceClick(e) {
    // 防抖中和不在加载中才可以点击
    if (canClick && !loading && !disabled) {
      onClick === null || onClick === void 0 || onClick(e);
      if (debounce) {
        var time = 0;
        time = debounce ? typeof debounce === 'boolean' ? 1000 : debounce * 1000 : 0;
        setCanClick(false);
        setTimeout(function () {
          setCanClick(true);
        }, time);
      }
    }
  };

  /**按钮内容展示 */
  var contentRender = useCallback(function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement(SyncOutlined, {
      spin: true,
      style: {
        marginRight: 5
      }
    }) : null, icon, children);
  }, []);
  return /*#__PURE__*/React.createElement(StyledButton, _extends({}, rest, {
    ref: ref,
    onClick: handleDebounceClick
    /**字符串直接做classname，布尔不能直接使用需要处理 */,
    className: clsx([[type, size, shape], {
      disabled: disabled || !canClick ? 'disabled' : null,
      ghost: ghost,
      block: block
    }])
  }), canClick ? contentRender() : debounceNode);
});
export default Button;