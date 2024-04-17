import { useDeepCompareEffect, useMemoizedFn } from 'ahooks';
import { Button, Form } from 'antd';
import classnames from 'classnames';
import objectPath from 'object-path';
import React, {
  createContext,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import SCheckbox from '../Field/SCheckbox';
import SDatePicker from '../Field/SDatePicker';
import SInput from '../Field/SInput';
import SInputNumber from '../Field/SInputNumber';
import SRadio from '../Field/SRadio';
import SSearchPro from '../Field/SSearchPro';
import SSelect from '../Field/SSelect';
import SSwitch from '../Field/SSwitch';
import STags from '../Field/STags';
import STextArea from '../Field/STextArea';
import STimePicker from '../Field/STimePicker';
import SAddix from '../SAddix';
import { SIcon } from '../SIconBox';
import SRow, { withFormColItem } from '../SRow';
import styles from './styles.module.less';

const LabelBox = ({ label, tip, tipIcon = 'question-circle-o' }) => {
  return (
    <span title={label}>
      {label}
      {tip && (
        <>
          &nbsp;
          <SIcon type={tipIcon} title={tip} />
        </>
      )}
    </span>
  );
};
const SCol = SRow.SCol;

// Context
export const SFormContext = createContext();
export const useGetForm = () => React.useContext(SFormContext);
export const SRowContext = createContext();

/**
 * 表单项值监听
 * @param names {Array} 监听的表单项名称
 * @param f {Object} form对象
 *
 * @returns {Object} 返回监听的表单项值
 * */
export const useWatch = (names, f) => {
  const [watch, setWatch] = useState({});
  const formObj = useGetForm();
  const form = f || formObj?.form;
  const vals = form?.getFieldsValue(names) || {};
  useDeepCompareEffect(() => {
    setWatch(vals);
  }, [vals]);

  return watch;
};

// 创建Form.Item包裹的表单项
export const withFormItem = (Component, type) => {
  const App = (props) => {
    const {
      form,
      disabled,
      justShow,
      labelCol: formLabelCol,
      wrapperCol: formWrapperCol,
      initialValues,
      itemPropsDefault,
    } = useGetForm() || {
      form: props.form,
    };

    const {
      name,
      filedTip,
      show,
      filedOptions = {},
      fieldLayout,
      autoScale = 0,
      initialValue,
      rules,
      onChange,
      renderCondition,
      tip,
      tipIcon,
      hideMb8px,
      styleFiled,

      // FormItem 的属性
      className,
      style,
      label,
      colon,
      extra,
      hasFeedback,
      help,
      htmlFor,
      labelCol,
      wrapperCol,
      labelAlign,
      required,
      validateStatus,

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

    if (!form) return null;

    const { getFieldDecorator } = form;

    const layoutLabelCol = labelCol || formLabelCol || { span: 8 };
    const layoutWrapperCol = wrapperCol || formWrapperCol || { span: 16 };
    const hideMb8pxFlag = hideMb8px === undefined ? justShow : hideMb8px;
    const showOwn = typeof show === 'function' ? show(form) : show;
    const showFlag = show !== undefined ? showOwn : justShow;
    const scale =
      layoutLabelCol.span / (layoutLabelCol.span + layoutWrapperCol.span);

    const initVal = initialValues
      ? objectPath.get(initialValues, name)
      : initialValue;

    let filed = getFieldDecorator(name, {
      type,
      initialValue: initVal,
      rules,
      ...filedOptions,
    })(
      <Component
        show={showFlag}
        form={form}
        onChange={onChange && ((...params) => onChange(...params, form))}
        disabled={disabled}
        style={styleFiled}
        {...residue}
      />,
    );

    return (
      <Form.Item
        label={label && <LabelBox tip={tip} label={label} tipIcon={tipIcon} />}
        style={{
          ...(hideMb8pxFlag ? { marginBottom: '0' } : {}),
          ...(style || {}),
          ...(autoScale ? { display: 'flex' } : {}),
        }}
        labelCol={
          autoScale
            ? {
                style: {
                  width: `calc(${
                    (autoScale *
                      scale *
                      (layoutLabelCol.span + layoutWrapperCol.span)) /
                    24
                  } * 100%)`,
                },
              }
            : layoutLabelCol
        }
        wrapperCol={
          autoScale
            ? {
                style: {
                  width: `calc(${
                    (layoutLabelCol.span + layoutWrapperCol.span) / 24 -
                    autoScale * scale
                  } * 100%)`,
                },
              }
            : layoutWrapperCol
        }
        className={classnames(styles['ss-form-item'], className)}
        colon={colon}
        extra={extra}
        hasFeedback={hasFeedback}
        help={help}
        htmlFor={htmlFor}
        labelAlign={labelAlign}
        required={required}
        validateStatus={validateStatus}
      >
        {filed}
      </Form.Item>
    );
  };

  return App;
};

// 切换按钮
export const FormSwitch = withFormItem(SSwitch, 'switch');
export const ColFormSwitch = withFormColItem(FormSwitch);
// 单选框
export const FormRadio = withFormItem(SRadio, 'radio');
export const ColFormRadio = withFormColItem(FormRadio);
// 单选
export const FormRadioGroup = withFormItem(SRadio.SRadioGroup, 'radioGroup');
export const ColFormRadioGroup = withFormColItem(FormRadioGroup);
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
      labelCol,
      wrapperCol,
      justShow = false,
      initialValues,
      onFinish,
      loading,
      itemPropsDefault,
      children,
      // 不需要Form包裹
      noFormWrap = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [inLoading, setInLoading] = useState(false);
    const load = loading || inLoading;
    useImperativeHandle(ref, () => form);

    const finish = useMemoizedFn(
      async ({ verification = true, trim = false, andScroll = true } = {}) => {
        let types = null;
        let values = null;

        if (verification) {
          if (andScroll) {
            values = await form.validateFieldsAndScroll();
          } else {
            values = await form.validateFields();
          }
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

        if (onFinish) {
          const result = onFinish(values, types);
          if (result?.finally) {
            setInLoading(true);
            result.finally((res) => {
              setInLoading(false);
              return res;
            });
          }
          return result;
        } else {
          return [values, types];
        }
      },
    );

    // eslint-disable-next-line no-param-reassign
    form.finish = finish;
    const child = typeof children === 'function' ? children(form) : children;

    return (
      <SFormContext.Provider
        value={{
          form,
          labelCol,
          wrapperCol,
          justShow,
          initialValues,
          itemPropsDefault,
          disabled: disabled ?? load,
          loading: load,
        }}
      >
        {noFormWrap ? child : <Form {...props}>{child}</Form>}
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

export const SFormBox = forwardRef(({ form, ...props }, ref) => {
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
 * @param {boolean} justShow 是否只显示
 * @param {ReactNode} formButtons 表单按钮
 * @param {object} initialValues 表单初始值 (注意: initialValues的优先级大于表单项目上的initialValue。)
 * @param {object} ref
 * @returns {*}
 *
 * */
const SForm = forwardRef(
  (
    {
      formButtons,
      children,

      // SRow的属性
      basicSpan = 8,
      align,
      gutter,
      justify,
      rowType,

      ...props
    },
    ref,
  ) => {
    const warp = useRef();

    return (
      <div ref={warp}>
        <SFormBox ref={ref} {...props}>
          <SRow
            basicSpan={basicSpan}
            align={align}
            gutter={gutter}
            justify={justify}
            type={rowType}
          >
            {children}
          </SRow>

          {formButtons && (
            <SFormContext.Consumer>
              {({ loading, form, ...props }) => {
                // console.log(form.getFieldsError())

                const reset = (
                  <Button
                    key="_reset"
                    disabled={loading}
                    onClick={() => form.resetFields()}
                    {...(formButtons?.resetButtonProps || {})}
                  >
                    重置
                  </Button>
                );

                const submit = (
                  <Button
                    loading={loading}
                    key="_submit"
                    type="primary"
                    onClick={() => form.finish()}
                    {...(formButtons?.okButtonProps || {})}
                  >
                    提交
                  </Button>
                );

                let btns = [reset, submit];

                if (typeof formButtons === 'function') {
                  btns = formButtons({
                    reset,
                    submit,
                    loading,
                    form,
                    ...props,
                  });
                } else if (Array.isArray(formButtons)) {
                  btns = formButtons;
                }

                return (
                  <SAddix scope={warp} offsetBottom={0}>
                    <div className="mb-4 text-right py-2 px-4 space-x-2 bg-white border-x-0 border-b-0 border-solid border-gray-300">
                      {btns}
                    </div>
                  </SAddix>
                );
              }}
            </SFormContext.Consumer>
          )}
        </SFormBox>
      </div>
    );
  },
);

SFormBox.Provider = SFormContext.Provider;
SFormBox.Consumer = SFormContext.Consumer;

export default SForm;
