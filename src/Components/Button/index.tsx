import { SyncOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as styleConfigs from '../utils';

export type ButtonType =
  | 'primary'
  | 'dashed'
  | 'default'
  | 'danger'
  | 'link'
  | 'text';

export type ButtonSize = 'large' | 'default' | 'small';

export type ButtonDebounce = number | boolean;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    /**按钮类型 */
    type: ButtonType;
    /**按钮大小 */
    size: ButtonSize;
    /** 禁用 */
    disabled: boolean;
    /** 防抖点击  */
    debounce: ButtonDebounce;
    /** 幽灵按钮 */
    ghost: boolean;
    /** 块级按钮 */
    block: boolean;
    children: React.ReactNode;
    /** icon图标 */
    icon: React.ReactNode;
    /**加载态 */
    loading: boolean;
    /**形状 */
    shape: 'circle';
    /**点击 */
    onClick: (event: any) => void;
  }>;

const StyledButton = styled.button`
  border: 1px solid transparent;
  color: ${styleConfigs.black};
  background-color: ${styleConfigs.white};
  border-color: ${styleConfigs.gray};
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

  /**块级按钮 */
  &.block {
    width: 100%;
  }

  /** 背景 */
  &.default-btn {
    background: ${styleConfigs.white};
    border-color: ${styleConfigs.gray};
    color: ${styleConfigs.black};
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
    background: ${styleConfigs.primary};
    border-color: ${styleConfigs.primary};
    color: ${styleConfigs.white};
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
    background: ${styleConfigs.white};
    border-color: ${styleConfigs.gray};
    color: ${styleConfigs.black};
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
    background: ${styleConfigs.danger};
    border-color: ${styleConfigs.danger};
    color: ${styleConfigs.white};
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
    color: ${styleConfigs.primary};
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
    color: ${styleConfigs.black};
    &.text:hover {
      color: rgba(0, 0, 0, 0.8);
      background-color: rgba(0, 0, 0, 0.018);
    }
    &.text.circle {
      border-radius: 50%;
    }
  }

  /**尺寸大小 */
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
  /**禁用 */
  &.disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: ${styleConfigs.gray};
    text-shadow: none;
    box-shadow: none;
    &.disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: ${styleConfigs.gray};
      text-shadow: none;
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`;

/**处理debounce设置为true时默认值 */
const handleDebounceBool = (debounce: ButtonDebounce) =>
  debounce ? (typeof debounce === 'boolean' ? 1 : debounce) : 0;

/** 按钮 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      type = 'default-btn',
      size = 'default',
      disabled,
      debounce = 0,
      ghost,
      loading,
      block,
      children,
      shape,
      icon,
      onClick,
      ...rest
    } = props;

    const [canClick, setCanClick] = useState(true);
    const [count, setCount] = useState(0);

    /**防抖点击处理 */
    const handleDebounceClick = (e: any) => {
      if (!canClick || loading || disabled) {
        return;
      }
      onClick?.(e);
      if (debounce) {
        let time = handleDebounceBool(debounce);
        setCanClick(false);
        if (typeof time === 'number' && time > 0) {
          setCount(time);
          const timer = setInterval(() => {
            time = time - 1;
            setCount(time);
            if (time === 0) {
              setCanClick(true);
              clearInterval(timer);
              return;
            }
          }, 1000);
        }
      }
    };

    /**按钮内容展示 */
    const contentRender = () => {
      return (
        <>
          {loading ? <SyncOutlined spin style={{ marginRight: 5 }} /> : null}
          {icon}
          {children}
        </>
      );
    };

    return (
      <StyledButton
        {...rest}
        ref={ref}
        onClick={handleDebounceClick}
        /**字符串直接做classname，布尔不能直接使用需要处理 */
        className={clsx([
          [type, size, shape],
          {
            disabled: disabled || !canClick ? 'disabled' : null,
            ghost,
            block,
          },
        ])}
      >
        {canClick ? contentRender() : <div>{count}s后可点击</div>}
      </StyledButton>
    );
  },
);

export default Button;
