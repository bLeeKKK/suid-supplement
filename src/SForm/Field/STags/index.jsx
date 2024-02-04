import { useControllableValue } from 'ahooks';
import { Icon, Input, Tag, Tooltip } from 'antd';
import React, { useCallback, useRef, useState } from 'react';

const SelectTags = (props) => {
  const [tags, setTags] = useControllableValue(props);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const input = useRef();
  const show = props.show === 'true' || props.show === true;
  const tagsFlag = Array.isArray(tags);

  const handleClose = (removedTag) => {
    const t = tags.filter((tag) => tag !== removedTag);
    setTags(t);
  };

  const handleInputConfirm = useCallback(() => {
    let arr = [...(tags || [])];
    if (inputValue && arr.indexOf(inputValue) === -1) {
      arr = [...arr, inputValue];
    }
    setTags(arr);
    setInputVisible(false);
    setInputValue('');
  }, [inputValue, tags, setTags]);

  return (
    <div>
      {tagsFlag &&
        tags.map((tag) => {
          const isLongTag = tag.length > 10;
          let str = tag;
          // 超过10个字符串，就让字符串前后展示3个字符，中间使用...省略
          if (isLongTag) {
            str = `${tag.slice(0, 3)}...${tag.slice(-3)}`;
          }
          const tagElem = (
            <Tag key={tag} closable={!show} onClose={() => handleClose(tag)}>
              {str}
            </Tag>
          );

          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
      {show ? null : (
        <>
          {inputVisible && (
            <Input
              ref={input}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={() => setInputVisible(true)}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type="plus" /> New Tag
            </Tag>
          )}
        </>
      )}
    </div>
  );
};

export default SelectTags;
