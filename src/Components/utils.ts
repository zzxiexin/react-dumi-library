import { css } from 'styled-components';
import * as CssConfig from './constant';
export const setActiveStyle = (
  prop: keyof typeof CssConfig,
  value = '',
): any => {
  return css`
    ${prop}:${value};
  `;
};
