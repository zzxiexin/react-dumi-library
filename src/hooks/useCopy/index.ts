import { MutableRefObject, useEffect, useState } from 'react';

const useCopy = (dom: MutableRefObject<any>) => {
  const [text, setText] = useState('');
  useEffect(() => {
    dom?.current?.addEventListener('contextmenu', function (event: any) {
      console.log('event', event);
      event.preventDefault(); // 取消默认右键菜单事件
      let textToCopy = dom?.current?.innerText;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        // 支持Clipboard API的情况下直接调用API进行复制
        navigator.clipboard.writeText(textToCopy).then(
          function () {
            setText(textToCopy);
            console.log('已成功复制到剪贴板！');
          },
          function (err) {
            console.error('无法将内容复制到剪贴板：', err);
          },
        );
      } else {
        console.log('event', event);
        // 不支持Clipboard API时，创建临时输入框并选中其中的文本再模拟点击复制按钮
        let tempInput = document.createElement('input');
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        setText(textToCopy);
        console.log('已成功复制到剪贴板！');
      }
    });
  }, []);
  return {
    text,
  };
};

export default useCopy;
