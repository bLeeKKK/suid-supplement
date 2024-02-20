import { useDeepCompareEffect, useMemoizedFn } from 'ahooks';
import { Button, Form, Icon, Radio, Switch, Tooltip } from 'antd';
import classnames from 'classnames';
import React, {
  createContext,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import SCheckbox from '../Field/SCheckbox';
import SDatePicker from '../Field/SDatePicker';
import SInput from '../Field/SInput';
import SInputNumber from '../Field/SInputNumber';
import SSearchPro from '../Field/SSearchPro';
import SSelect from '../Field/SSelect';
import STags from '../Field/STags';
import STextArea from '../Field/STextArea';
import STimePicker from '../Field/STimePicker';
import SRow from '../SRow';
import styles from './styles.module.less';
// import Address from '../Address';
// import EditFile from '../EditFile';
// import AntdUpload from '../AntdUpload';

const LabelBox = ({ title, tip }) => {
  return (
    <span className="align-middle" title={title}>
      {title}
      {tip ? (
        <Tooltip title={tip}>
          &nbsp;
          <Icon type="question-circle-o" />
        </Tooltip>
      ) : null}
    </span>
  );
};
const SCol = SRow.SCol;

// Context
export const SFormContext = createContext();
export const useGetForm = () => React.useContext(SFormContext);
export const SRowContext = createContext();

// hooks
export const useWatch = (names, f) => {
  const formObj = useGetForm();
  const form = formObj?.form || f;
  const [watch, setWatch] = useState({});
  const vals = form?.getFieldsValue(names) || {};
  useDeepCompareEffect(() => {
    setWatch(vals);
  }, [vals]);

  return watch;
};

// 创建Form.Item包裹的表单项
export const withFormItem = (Component, type) => {
  const App = (props) => {
    const { form, justShow, formFieldLayout, initialValues, itemPropsDefault } =
      useGetForm() || {
        form: props.form,
      };

    const {
      name,
      label,
      tip,
      styleItem,
      className,
      show,
      filedOptions = {},
      fieldLayout,
      hideMb8px,
      autoScale = 0,
      initialValue,
      rules,
      renderCondition,
      ...residue
    } = { ...(itemPropsDefault || {}), ...props };

    if (!form || !form.getFieldDecorator) {
      // 如果没有form对象，直接返回null
      return null;
    }

    if (renderCondition !== undefined) {
      // 条件判断，该项是否需要渲染到表单上
      let flag = renderCondition;
      if (typeof renderCondition === 'function') {
        flag = renderCondition(form);
      } else {
        try {
          let str = '';
          for (const [key, valArr, operation] of renderCondition) {
            const valTrue = form.getFieldValue(key);
            str += valArr.includes(valTrue) + (operation || '');
          }
          // eslint-disable-next-line no-eval
          flag = eval(str);
        } catch (error) {
          throw new Error('renderCondition 格式错误');
        }
      }

      if (!flag) return null;
    }

    const layout = fieldLayout ||
      formFieldLayout || {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    if (!form) return null;

    const { getFieldDecorator } = form;

    const hideMb8pxFlag = hideMb8px === undefined ? justShow : hideMb8px;
    const showOwn = typeof show === 'function' ? show(form) : show;
    const showFlag = show !== undefined ? showOwn : justShow;
    const scale =
      layout.labelCol.span / (layout.wrapperCol.span + layout.labelCol.span);

    const initVal = initialValues ? initialValues[name] : initialValue;

    return (
      <Form.Item
        label={label && <LabelBox tip={tip} title={label} />}
        {...layout}
        style={{
          ...(hideMb8pxFlag ? { marginBottom: '0' } : {}),
          ...(autoScale ? { display: 'flex' } : {}),
          ...(styleItem || {}),
        }}
        // 自动计算占用比例
        {...(autoScale
          ? {
              labelCol: {
                style: { width: `calc(${autoScale * scale} * 100%)` },
              },
              wrapperCol: {
                style: {
                  width: `calc(${1 - autoScale * scale} * 100%)`,
                },
              },
            }
          : {})}
        className={classnames(styles['ss-form-item'], className)}
      >
        {getFieldDecorator(name, {
          type,
          initialValue: initVal,
          rules,
          ...filedOptions,
        })(<Component show={showFlag} form={form} {...residue} />)}
      </Form.Item>
    );
  };

  return App;
};

// 创建Col包裹的项目
export const withFormColItem = (Component) => {
  const App = ({ span, hide, colProps = {}, flexSpan, rules, ...props }) => {
    return (
      <SCol {...colProps} hide={hide} span={span}>
        {({ basicSpan, itemSpan }) => {
          return (
            <Component
              rules={hide ? [] : rules}
              autoScale={flexSpan ? basicSpan / itemSpan : flexSpan} // 自动计算占用比例
              {...props}
            />
          );
        }}
      </SCol>
    );
  };

  return App;
};

// 单选
export const FormRadioGroup = withFormItem(Radio.Group, 'radioGroup');
export const ColFormRadioGroup = withFormColItem(FormRadioGroup);
// 单选框
export const FormRadio = withFormItem(Radio, 'radio');
export const ColFormRadio = withFormColItem(FormRadio);
// 切换按钮
export const FormSwitch = withFormItem(Switch, 'switch');
export const ColFormSwitch = withFormColItem(FormSwitch);

// 多选
export const FormCheckboxGroup = withFormItem(
  SCheckbox.SCheckboxGroup,
  'checkboxGroup',
);
export const ColFormCheckboxGroup = withFormColItem(FormCheckboxGroup);
// 复选框
export const FormCheckbox = withFormItem(SCheckbox, 'checkbox');
export const ColFormCheckbox = withFormColItem(FormCheckbox);
// 日期选择
export const FormDatePicker = withFormItem(SDatePicker, 'datePicker');
export const ColFormDatePicker = withFormColItem(FormDatePicker);
// 时间段选择
export const FormRangePicker = withFormItem(
  SDatePicker.SRangePicker,
  'rangePicker',
);
export const ColFormRangePicker = withFormColItem(FormRangePicker);
// 月份时间选择
export const FormMonthPicker = withFormItem(
  SDatePicker.SMonthPicker,
  'monthPicker',
);
export const ColFormMonthPicker = withFormColItem(FormMonthPicker);
// 周时间选择
export const FormWeekPicker = withFormItem(
  SDatePicker.SWeekPicker,
  'monthPicker',
);
export const ColFormWeekPicker = withFormColItem(FormWeekPicker);
// 时间选择time格式
export const FormTimePicker = withFormItem(STimePicker, 'timePicker');
export const ColFormTimePicker = withFormColItem(FormTimePicker);
// 输入框
export const FormInput = withFormItem(SInput, 'input');
export const ColFormInput = withFormColItem(FormInput);
// 下拉选择
export const FormSelect = withFormItem(SSelect, 'select');
export const ColFormSelect = withFormColItem(FormSelect);
// 下拉选择
export const FormTextArea = withFormItem(STextArea, 'textArea');
export const ColFormTextArea = withFormColItem(FormTextArea);
// 自定义新增标签
export const FormTags = withFormItem(STags, 'tags');
export const ColFormTags = withFormColItem(FormTags);
// 数字输入
export const FormInputNumber = withFormItem(SInputNumber, 'number');
export const ColFormInputNumber = withFormColItem(FormInputNumber);
// 输入框（快速搜索）
export const FormSearch = withFormItem(SSearchPro, 'search');
export const ColFormSearch = withFormColItem(FormSearch);

const FormBox = forwardRef(
  (
    {
      form,
      formFieldLayout,
      justShow,
      initialValues,
      onFinish,
      itemPropsDefault,
      children,
      // 不需要Form包裹
      noFormWrap = false,
      passageValue,
      ...props
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => form);

    const finish = useMemoizedFn(
      async ({ verification = true, trim = false } = {}) => {
        let types = null;
        let values = null;

        if (verification) {
          values = await form.validateFields();
        } else {
          values = await form.getFieldsValue();
        }

        const keys = Object.keys(values);

        if (trim) {
          keys.forEach((key) => {
            if (typeof values[key] === 'string') {
              values[key] = values[key].trim();
            }
          });
        }

        types = keys.reduce((obj, key) => {
          const newObj = { ...obj };
          const type = form.getFieldProps(key)?.['data-__meta']?.type;
          newObj[key] = type;
          return newObj;
        }, {});

        if (onFinish) onFinish(values, types);

        return [values, types];
      },
    );

    // eslint-disable-next-line no-param-reassign
    form.finish = finish;
    const child = typeof children === 'function' ? children(form) : children;

    return (
      <SFormContext.Provider
        value={{
          form,
          formFieldLayout,
          justShow,
          initialValues,
          itemPropsDefault,
          ...(passageValue || {}),
        }}
      >
        {noFormWrap ? (
          child
        ) : (
          <Form form={form} {...props}>
            {child}
          </Form>
        )}
      </SFormContext.Provider>
    );
  },
);

const FormCom = Form.create({
  onFieldsChange(props, changedFields) {
    if (props.onFieldsChange) props.onFieldsChange(changedFields, props);
  },
  onValuesChange(props, changedFields) {
    if (props.onValuesChange) props.onValuesChange(changedFields, props);
  },
})(FormBox);

const SFormBox = forwardRef(({ form, ...props }, ref) => {
  if (form) {
    return <FormBox form={form} ref={ref} {...props} />;
  }
  return (
    <FormCom
      wrappedComponentRef={(f) => {
        if (ref) {
          // eslint-disable-next-line no-param-reassign
          ref.current = f;
        }
      }}
      {...props}
    />
  );
});

/**
 * 表单组件
 * @param {object} form 表单对象
 * @param {object} FormItemProps 表单项属性
 * @param {object} rowProps 行属性
 * @param {boolean} justShow 是否只显示
 * @param {object} formFieldLayout 表单布局
 * @param {ReactNode} formButtons 表单按钮
 * @param {object} initialValues 表单初始值 (注意: initialValues的优先级大于表单项目上的initialValue。和formFieldLayout、justShow的规律相反)
 * @param {object} ref
 * @returns {*}
 *
 * */
const SForm = forwardRef(
  ({ basicSpan = 8, rowProps = {}, formButtons, children, ...props }, ref) => {
    const saveFormRef = React.useRef();
    useImperativeHandle(ref, () => saveFormRef?.current);

    return (
      <SFormBox ref={saveFormRef} {...props}>
        <SRow basicSpan={basicSpan} {...rowProps}>
          {children}
          {formButtons && (
            <SCol
              span={24}
              style={{
                textAlign: 'right',
                borderTop: '1px solid #D9D9D9',
                margin: '8px 0 0 0',
                padding: '8px 16px 0 16px',
              }}
            >
              {Array.isArray(formButtons) ? (
                formButtons
              ) : (
                <>
                  {formButtons.readditionBtns}
                  <Button
                    style={{ marginRight: 8 }}
                    onClick={() => saveFormRef?.current?.resetFields()}
                  >
                    重置
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => saveFormRef?.current?.finish()}
                    {...(formButtons.submitButtonProps || {})}
                    htmlType="submit"
                  >
                    提交
                  </Button>
                </>
              )}
            </SCol>
          )}
        </SRow>
      </SFormBox>
    );
  },
);

SForm.SFormBox = SFormBox;

export default SForm;
