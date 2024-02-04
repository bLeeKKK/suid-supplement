import { useDeepCompareEffect, useMemoizedFn } from 'ahooks';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Icon,
  Input,
  Radio,
  Row,
  Switch,
  TimePicker,
  Tooltip,
} from 'antd';
import classnames from 'classnames';
import React, {
  createContext,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import SInput from './Field/SInput';
import SInputNumber from './Field/SInputNumber';
import SSearchPro from './Field/SSearchPro';
import Sselect from './Field/SSelect';
import STags from './Field/STags';
import styles from './styles.module.less';
// import Address from '../Address';
// import EditFile from '../EditFile';
// import AntdUpload from '../AntdUpload';

const { RangePicker, MonthPicker } = DatePicker;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
export const Combos = {
  // antd
  timePicker: TimePicker, // 时间选择time格式
  datePicker: DatePicker, // 时间选择
  rangePicker: RangePicker, // 时间段选择
  monthPicker: MonthPicker, // 月份时间选择
  textarea: TextArea, // 文字输入区域
  checkboxGroup: CheckboxGroup, // 多选
  checkbox: Checkbox, // 复选框
  radioGroup: Radio.Group, // 单选
  radio: Radio, // 单选框
  switch: Switch, // 单选框

  // 自定义
  input: SInput, // 文字输入
  select: Sselect, // 下拉选择
  tags: STags, // 自定义新增标签
  number: SInputNumber, // 数字输入
  search: SSearchPro, // 文字输入区域（快速搜索）

  // upload: EditFile, // 上传
  // antdUpload: AntdUpload, //  使用antd上传
  // address: Address, // 地址选择
};

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

export const SFormContext = createContext();
export const useGetForm = () => React.useContext(SFormContext);
export const SRowContext = createContext();
export const useRow = () => React.useContext(SRowContext);

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

const withFormItem = (Component, type) => {
  const App = (props) => {
    const { form, justShow, formFieldLayout, initialValues, itemPropsDefault } =
      useGetForm() || {
        form: props.form,
      };

    const {
      name,
      label,
      tip,
      style,
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
          ...(style || {}),
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

const withColItem = (Component) => {
  const App = ({ span, hide, colProps = {}, flexSpan, rules, ...props }) => {
    const { basicSpan } = useRow() || {};
    const style = hide ? { display: 'none' } : colProps.style;

    // 自动计算占用比例表单项目layout比例
    const itemSpan = span === undefined ? basicSpan : span;

    return (
      <Col {...colProps} style={style} span={itemSpan}>
        <Component
          rules={hide ? [] : rules}
          autoScale={flexSpan ? basicSpan / itemSpan : flexSpan} // 自动计算占用比例
          {...props}
        />
      </Col>
    );
  };

  return App;
};

// antd 自带
// 时间选择time格式
export const FormTimePicker = withFormItem(TimePicker, 'timePicker');
export const ColFormTimePicker = withColItem(FormTimePicker);
// 时间选择
export const FormDatePicker = withFormItem(DatePicker, 'datePicker');
export const ColFormDatePicker = withColItem(FormDatePicker);
// 时间段选择
export const FormRangePicker = withFormItem(RangePicker, 'rangePicker');
export const ColFormRangePicker = withColItem(FormRangePicker);
// 月份时间选择
export const FormMonthPicker = withFormItem(MonthPicker, 'monthPicker');
export const ColFormMonthPicker = withColItem(FormMonthPicker);
// 文字输入区域
export const FormTextArea = withFormItem(TextArea, 'textarea');
export const ColFormTextArea = withColItem(FormTextArea);
// 多选
export const FormCheckboxGroup = withFormItem(CheckboxGroup, 'checkboxGroup');
export const ColFormCheckboxGroup = withColItem(FormCheckboxGroup);
// 复选框
export const FormCheckbox = withFormItem(Checkbox, 'checkbox');
export const ColFormCheckbox = withColItem(FormCheckbox);
// 单选
export const FormRadioGroup = withFormItem(Radio.Group, 'radioGroup');
export const ColFormRadioGroup = withColItem(FormRadioGroup);
// 单选框
export const FormRadio = withFormItem(Radio, 'radio');
export const ColFormRadio = withColItem(FormRadio);
// 切换按钮
export const FormSwitch = withFormItem(Switch, 'switch');
export const ColFormSwitch = withColItem(FormSwitch);

// 自定义
// 输入框
export const FormInput = withFormItem(SInput, 'input');
export const ColFormInput = withColItem(FormInput);
// 下拉选择
export const FormSelect = withFormItem(Sselect, 'select');
export const ColFormSelect = withColItem(FormSelect);
// 自定义新增标签
export const FormTags = withFormItem(STags, 'tags');
export const ColFormTags = withColItem(FormTags);
// 数字输入
export const FormInputNumber = withFormItem(SInputNumber, 'number');
export const ColFormInputNumber = withColItem(FormInputNumber);
// 输入框（快速搜索）
export const FormSearch = withFormItem(SSearchPro, 'search');
export const ColFormSearch = withColItem(FormSearch);

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

const RowBox = ({ basicSpan, children, ...props }) => {
  return (
    <SRowContext.Provider value={{ basicSpan }}>
      <Row {...(props || {})}>{children}</Row>
    </SRowContext.Provider>
  );
};

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
        <RowBox basicSpan={basicSpan} {...rowProps}>
          {children}
          {formButtons && (
            <Col
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
            </Col>
          )}
        </RowBox>
      </SFormBox>
    );
  },
);

SForm.RowBox = RowBox;
SForm.SFormBox = SFormBox;

export default SForm;
