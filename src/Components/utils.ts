import { css } from 'styled-components';

/**常用颜色 */
export const white = '#fff';
export const primary = '#4C84FF';
export const danger = '#ff817d';
export const gray = '#d9d9d9';
export const black = 'rgba(0, 0, 0, 0.8);';

/**动态设置css */
export const setActiveStyle = (prop: string, value = ''): any => {
  return css`
    ${prop}:${value};
  `;
};
