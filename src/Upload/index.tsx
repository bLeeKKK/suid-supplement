import { Button, Icon, Spin, Upload } from 'antd';
import type { UploadProps } from 'antd/lib/upload';
import type { FC, ReactNode } from 'react';
import React, { useMemo, useRef } from 'react';
import styles from './index.module.less';

type uploadType = 'file' | 'btn' | undefined;

export interface SUploadProps extends UploadProps {
  /**
   * @description 属性描述
   * @default "file"
   */
  uploadType?: uploadType;
  inDomRender?: ({ uploadType }: { uploadType: uploadType }) => ReactNode;
  loading?: boolean;
  pastePower?: boolean;
  dragPower?: boolean;
  uploadForce?: boolean;
  show?: boolean;
}

const SUpload: FC<SUploadProps> = ({
  uploadType = 'file',
  inDomRender,
  loading,
  pastePower,
  dragPower,
  show,
  ...props
}) => {
  const pasteAndDropRef = useRef<HTMLDivElement | null>(null);
  const showUploadArea = useMemo(() => {
    let dom: ReactNode = null;
    // 自定义上传区域
    if (inDomRender) {
      if (typeof inDomRender === 'function') {
        dom = inDomRender({ uploadType });
      } else {
        dom = inDomRender;
      }
      return dom;
    }

    if (uploadType === 'file') {
      dom = (
        <div>
          <Icon style={{ fontSize: '22px' }} type="plus" />
          <p style={{ fontSize: '14px' }}>上传</p>
        </div>
      );
    } else if (uploadType === 'btn') {
      dom = (
        <>
          <Button size="small">
            <Icon type="upload" />
            <span>上传</span>
          </Button>
        </>
      );
    }

    return dom;
  }, [uploadType, inDomRender]);

  const child = show ? null : showUploadArea;
  const renderShow = (
    <>
      <Spin spinning={!!loading}>
        <Upload {...props}>{child}</Upload>
      </Spin>
    </>
  );

  if (pastePower || dragPower) {
    // 粘贴文件上传
    return (
      <div ref={pasteAndDropRef} className={styles['paster-box']}>
        {renderShow}
      </div>
    );
  }

  return renderShow;
};

export default SUpload;
