import React from 'react';
/** 按钮 */
declare const Button: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    /**按钮类型 */
    type?: "link" | "text" | "default" | "primary" | "dashed" | "danger" | undefined;
    /**按钮大小 */
    size: 'large' | 'default' | 'small';
    /** 禁用 */
    disabled?: boolean | undefined;
    /** 防抖点击  */
    debounce?: number | boolean | undefined;
    debounceNode: React.ReactNode;
    /** 幽灵按钮 */
    ghost?: boolean | undefined;
    /** 块级按钮 */
    block?: boolean | undefined;
    children?: React.ReactNode;
    /** icon图标 */
    icon?: React.ReactNode;
    /**加载态 */
    loading?: boolean | undefined;
    /**形状 */
    shape?: "circle" | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
export default Button;
