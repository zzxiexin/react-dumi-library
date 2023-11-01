import { css } from 'styled-components';

/**常用颜色 */
export var white = '#fff';
export var primary = '#4C84FF';
export var danger = '#ff817d';
export var gray = '#d9d9d9';
export var black = 'rgba(0, 0, 0, 0.8);';

/**动态设置css */
export var setActiveStyle = function setActiveStyle(prop) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return css(["", ":", ";"], prop, value);
};