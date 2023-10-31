import clsx from 'clsx';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as CssConfigs from '../constant';

type ButtonProps = React.HTMLAttributes<
  HTMLAnchorElement | HTMLButtonElement
> & {
  /**按钮类型 */
  type?: 'primary' | 'dashed' | 'default' | 'danger' | 'link' | 'text';
  /** icon图标 */
  icon?: React.ReactNode;
  /**按钮大小 */
  size: 'large' | 'default' | 'small';
  /** 禁用 */
  disabled?: boolean;
  /** 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s  */
  wait?: number | boolean;
  /**加载态 */
  loading?: boolean;
  /** 块级按钮 */
  block?: boolean;
  children?: React.ReactNode;
  /** 圆形按钮 */
  circle?: boolean;
  /** 是否幽灵按钮 */
  ghost?: boolean;
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
};

const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;
  padding: 0px 16px;
  height: 32px;

  /** type类展示 */
  &.default {
    background: ${CssConfigs.white};
    border: ${CssConfigs.border};
    &.default:hover,
    &.default:active {
      color: #75a5ff;
      border-color: #75a5ff;
    }
  }
  &.primary {
    background: ${CssConfigs.primary};
    color: ${CssConfigs.white};
    &.primary:hover,
    &.primary:active {
      color: #fff;
      background-color: #75a5ff;
      border-color: #75a5ff;
    }
  }

  &.danger {
    background: ${CssConfigs.danger};
    border: ${CssConfigs.border};
    color: ${CssConfigs.white};
    &.danger:hover,
    &.danger:active {
      color: #fff;
      background-color: #ffaca6;
      border-color: #ffaca6;
    }
  }

  &.dashed {
    border: ${CssConfigs.border};
    border-style: dashed;
    &.dashed:hover {
      color: #75a5ff;
      border-color: #75a5ff;
    }
  }

  &.link {
    color: #4c84ff;
    &.link:hover {
      color: #75a5ff;
    }
  }

  &.text {
    color: rgba(0, 0, 0, 0.8);
    &.text:hover {
      color: rgba(0, 0, 0, 0.8);
      background-color: rgba(0, 0, 0, 0.018);
      border-color: transparent;
    }
  }

  /** 按钮大小 */
  &.large {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }

  &.default {
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
  }

  &.small {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
  }

  /** 按钮禁用状态 */
  &.disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    &.disabled:hover {
      cursor: not-allowed;
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      text-shadow: none;
      color: rgba(0, 0, 0, 0.25);
    }
  }

  /**与父级同宽 */
  &.block {
    width: 100%;
  }

  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }

  &.ghost {
    background: transparent;
  }
`;

/** 按钮 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      type = 'default',
      icon,
      size = 'default',
      disabled,
      block,
      className,
      children,
      htmlType,
      circle,
      ghost,
      onClick,
      wait,
      ...rest
    } = props;

    const [canClick, setCanClick] = useState<boolean>(true);

    return (
      <StyledButton
        {...rest}
        ref={ref}
        type={htmlType}
        onClick={(e: any) => {
          onClick?.(e);
          let time = 0;
          time = wait ? (typeof wait === 'boolean' ? 1000 : wait) : 0;
          setCanClick(false);
          setTimeout(() => {
            setCanClick(true);
          }, time as number);
        }}
        className={clsx(
          type,
          size,
          block,
          circle,
          ghost,
          { disabled: !canClick || disabled, ghost },
          className,
        )}
      >
        <>
          {icon}
          {children}
        </>
      </StyledButton>
    );
  },
);

Button.displayName = 'UC-Button';

export default Button;
