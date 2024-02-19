import { useFocusWithin } from 'ahooks';
import { Input, Tooltip } from 'antd';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

const isMacOS =
  navigator.userAgentData.platform.toUpperCase().indexOf('MAC') >= 0;
const { Search } = Input;

/**
 * @params shortcutKey {boolean} 是否开启快捷键
 * */
const SearchPro = forwardRef(({ shortcutKey, ...props }, ref) => {
  const ckFocus = props?.ckFocus;
  const searchRef = useRef();
  const includeDiv = useRef();
  const isFocusWithin = useFocusWithin(includeDiv.current);
  const tabFocusOutSearch = useCallback(
    (e) => {
      if (isMacOS && e.metaKey && e.keyCode === 75) {
        searchRef.current.focus();
      } else if (!isMacOS && e.keyCode === 75 && e.ctrlKey) {
        searchRef.current.focus();
      }
    },
    [searchRef],
  );

  useImperativeHandle(ref, () => searchRef.current);

  useEffect(() => {
    if (!shortcutKey) {
      document.removeEventListener('keydown', tabFocusOutSearch);
      return;
    }

    document.addEventListener('keydown', tabFocusOutSearch);
    return () => document.removeEventListener('keydown', tabFocusOutSearch);
  }, [ckFocus, shortcutKey, tabFocusOutSearch]);

  return (
    <Tooltip placement="bottom" title={props?.placeholder}>
      <div
        className="w-full h-full relative"
        ref={includeDiv}
        onKeyDown={(e) => {
          // esc 退出
          if (e.keyCode === 27) {
            searchRef.current.blur();
          }
        }}
      >
        <Search {...props} ref={searchRef} />
        {!isFocusWithin && shortcutKey && (
          <span
            onClick={(e) => {
              e.preventDefault();
              // 获取焦点
              searchRef.current.focus();
            }}
            className="cursor-pointer text-xs px-2 right-[4px] rounded-full shadow absolute top-1/2 transform -translate-y-1/2 bg-white z-10"
          >
            {isMacOS ? '⌘' : 'Ctrl'} K
          </span>
        )}
      </div>
    </Tooltip>
  );
});

export default SearchPro;
