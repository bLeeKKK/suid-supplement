import { useDrop, useHover } from 'ahooks';
import { Button, Icon, Spin, Upload } from 'antd';
import type { UploadProps } from 'antd/lib/upload';
import type { FC, ReactNode } from 'react';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import styles from './index.module.less';

type uploadType = 'file' | 'btn' | undefined;

type IUploadProps = UploadProps & {
  /**
   * @description 默认的上传按钮触发样式
   * @type "file" | "btn"
   * @default "file"
   */
  uploadType?: uploadType;
  /**
   * @description 上传中状态，包裹整个组件
   * @type boolean
   * @default false
   * */
  loading?: boolean;
  /**
   * @description 是否开启粘贴上传
   * @type boolean
   * @default true
   * */
  pastePower?: boolean;
  /**
   * @description 是否开启拖拽上传
   * @type boolean
   * @default true
   * */
  dragPower?: boolean;
  /**
   * @description 自定义上传区域
   * @type undefined | ReactNode | (({ uploadType, dragPower, pastePower }: { uploadType: uploadType; dragPower: boolean; pastePower: boolean; }) => ReactNode)
   * @default null
   */
  uploadHandlerRender?: ({
    uploadType,
  }: {
    uploadType: uploadType;
    dragPower: boolean;
    pastePower: boolean;
  }) => ReactNode;
  /**
   * @description 是否展示上传区域
   * @type boolean
   * @default true
   * */
  uploadHandlerShow?: boolean;
  /**
   * @description 上传区域样式
   * @type React.CSSProperties
   * @default undefined
   * */
  areaStyle?: React.CSSProperties;
};

// let num = 0;
// interface TFileToFileListItem {
//   (
//     ...args:
//       | [file: File, other?: { [key: string]: any }]
//       | [file: File & { uid?: string }, other?: { [key: string]: any }]
//   ): UploadFile;
// }

// // file 转 UploadFile
// const fileToFileListItem: TFileToFileListItem = (file, other = {}) => {
//   const uid =
//     (file as File & UploadFile).uid ??
//     `ss-rc-upload-${file.lastModified}-${(num += 1)}`;
//
//   return {
//     ...file,
//     uid,
//     lastModifiedDate: new Date(file?.lastModified as number),
//     lastModified: file.lastModified,
//     type: file.type,
//     size: file.size,
//     name: file.name,
//     percent: 0,
//     originFileObj: file,
//     ...other,
//   };
// };

const SsUpload: FC<IUploadProps> = forwardRef(
  (
    {
      uploadType = 'file',
      loading,
      pastePower = true,
      dragPower = true,
      disabled,
      uploadHandlerRender,
      uploadHandlerShow = true,
      areaStyle,
      ...props
    },
    ref,
  ) => {
    const defaultListType = uploadType === 'btn' ? 'text' : 'picture-card';
    const areaRef = useRef<HTMLDivElement | null>(null);
    const uploadRef = useRef<Upload>(null);
    useImperativeHandle(ref, () => uploadRef.current);
    const ajaxUploaderVDom = useMemo(
      () => uploadRef?.current?.upload?.uploader,
      [uploadRef.current],
    );
    const isHovering = useHover(areaRef);
    const showUploadArea = useMemo(() => {
      let dom: ReactNode = null;
      // 自定义上传区域
      if (uploadHandlerRender) {
        if (typeof uploadHandlerRender === 'function') {
          dom = uploadHandlerRender({ uploadType, dragPower, pastePower });
        } else {
          dom = uploadHandlerRender;
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
    }, [uploadType, uploadHandlerRender]);

    // 绑定拖拽、粘贴功能
    useDrop(areaRef, {
      onFiles: (files) => {
        // 拖拽
        if (isHovering && !disabled)
          ajaxUploaderVDom?.onChange?.({ target: { files: files } });
      },
    });

    const options: UploadProps = {
      multiple: true,
      listType: defaultListType,
      ...props,
    };

    const child = uploadHandlerShow ? showUploadArea : null;
    const renderShow = (
      <>
        <Spin spinning={!!loading}>
          <Upload {...options} ref={uploadRef}>
            {child}
          </Upload>
        </Spin>
      </>
    );

    if (pastePower || dragPower) {
      // 粘贴文件上传
      return (
        <div ref={areaRef} className={styles['paster-box']} style={areaStyle}>
          {renderShow}
        </div>
      );
    }

    return renderShow;
  },
);

export default SsUpload;
