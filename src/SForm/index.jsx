import {
  useMemoizedFn,
  useMount,
  usePrevious,
  useUnmount,
  useUpdate,
} from 'ahooks';
import { Button, Form } from 'antd';
import classnames from 'classnames';
import objectPath from 'object-path';
import React, {
  createContext,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
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
import SAffix from '../SAffix';
import { SIcon } from '../SIconBox';
import SRow, { withColItem } from '../SRow';
import { isNil } from '../utils/isNil';
import './styles.less';

function deepEqual(obj1, obj2) {
  // 如果两个值都是基本类型，直接比较值是否相等
  if (obj1 === obj2) {
    return true;
  }

  // 如果其中一个值是null，另一个不是，返回false
  if (obj1 === null || obj2 === null) {
    return false;
  }

  // 如果两个值的类型不同，返回false
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // 如果是对象类型，则逐一比较每个属性
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // 检查属性数量是否一致
    if (keys1.length !== keys2.length) {
      return false;
    }

    // 逐一比较每个属性值
    for (let key of keys1) {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    // 所有属性值都相等
    return true;
  }

  // 其他情况，值不相等
  return false;
}

const merge = (...rest) => {
  const obj = {};
  const il = rest.length;
  let key;
  let i = 0;
  for (; i < il; i += 1) {
    // eslint-disable-next-line no-restricted-syntax
    for (key in rest[i]) {
      if (rest[i].hasOwnProperty(key)) {
        if (
          typeof obj[key] === 'object' &&
          typeof rest[i][key] === 'object' &&
          obj[key] !== undefined &&
          obj[key] !== null &&
          !Array.isArray(obj[key]) &&
          !Array.isArray(rest[i][key])
        ) {
          obj[key] = {
            ...obj[key],
            ...rest[i][key],
          };
        } else {
          obj[key] = rest[i][key];
        }
      }
    }
  }
  return obj;
};

/**
 * 暂时还不支持 Set和 Map 结构 判断是不是一个能遍历的对象
 *
 * @param itemValue
 * @returns Boolean
 */
export function isPlainObj(itemValue) {
  if (typeof itemValue !== 'object') return false;

  /** Null 也要处理，不然omit空会失效 */
  if (itemValue === null) return true;

  if (React.isValidElement(itemValue)) return false;
  if (itemValue.constructor === RegExp) return false;
  if (itemValue instanceof Map) return false;
  if (itemValue instanceof Set) return false;
  if (itemValue instanceof HTMLElement) return false;
  if (itemValue instanceof Blob) return false;
  if (itemValue instanceof File) return false;
  if (Array.isArray(itemValue)) return false;
  return true;
}

const transformKeySubmitValue = (values, dataFormatMapRaw, omit = true) => {
  // ignore nil transform
  const dataFormatMap = Object.keys(dataFormatMapRaw).reduce((ret, key) => {
    const value = dataFormatMapRaw[key];
    if (!isNil(value)) {
      // eslint-disable-next-line no-param-reassign
      ret[key] = value;
    }
    return ret;
  }, {});

  if (Object.keys(dataFormatMap).length < 1) {
    return values;
  }

  if (typeof window === 'undefined') return values;

  // 如果 value 是 string | null | Array | Blob类型 其中之一，直接返回
  // 形如 {key: [File, File]} 的表单字段当进行第二次递归时会导致其直接越过 typeof value !== 'object' 这一判断 https://github.com/ant-design/pro-components/issues/2071
  if (typeof values !== 'object' || isNil(values) || values instanceof Blob) {
    return values;
  }

  let finalValues = Array.isArray(values) ? [] : {};

  const gen = (tempValues, parentsKey) => {
    const isArrayValues = Array.isArray(tempValues);
    let result = isArrayValues ? [] : {};
    if (tempValues === null || tempValues === undefined) {
      return result;
    }

    Object.keys(tempValues).forEach((entityKey) => {
      const transformForArray = (transformList, subItemValue) => {
        if (!Array.isArray(transformList)) return entityKey;

        transformList.forEach((transform, idx) => {
          // 如果不存在直接返回
          if (!transform) return;

          const subTransformItem = subItemValue?.[idx];

          // 如果是个方法，把key设置为方法的返回值
          if (typeof transform === 'function') {
            subItemValue[idx] = transform(subItemValue, entityKey, tempValues);
          }
          if (typeof transform === 'object' && !Array.isArray(transform)) {
            Object.keys(transform).forEach((transformArrayItem) => {
              const subTransformItemValue =
                subTransformItem?.[transformArrayItem];
              if (
                typeof transform[transformArrayItem] === 'function' &&
                subTransformItemValue
              ) {
                const res = transform[transformArrayItem](
                  subTransformItem[transformArrayItem],
                  entityKey,
                  tempValues,
                );
                subTransformItem[transformArrayItem] =
                  typeof res === 'object' ? res[transformArrayItem] : res;
              } else if (
                typeof transform[transformArrayItem] === 'object' &&
                Array.isArray(transform[transformArrayItem]) &&
                subTransformItemValue
              ) {
                transformForArray(
                  transform[transformArrayItem],
                  subTransformItemValue,
                );
              }
            });
          }
          if (
            typeof transform === 'object' &&
            Array.isArray(transform) &&
            subTransformItem
          ) {
            transformForArray(transform, subTransformItem);
          }
        });
        return entityKey;
      };

      const key = parentsKey
        ? [parentsKey, entityKey].flat(1)
        : [entityKey].flat(1);
      const itemValue = tempValues[entityKey];
      const transformFunction = objectPath.get(dataFormatMap, key);

      const transform = () => {
        let tempKey,
          transformedResult,
          isTransformedResultPrimitive = false;

        /**
         * 先判断是否是方法，是的话执行后拿到值，如果是基本类型，则认为是直接 transform 为新的值，
         * 如果返回是 Object 则认为是 transform 为新的 {newKey: newValue}
         */
        if (typeof transformFunction === 'function') {
          transformedResult = transformFunction?.(
            itemValue,
            entityKey,
            tempValues,
          );
          const typeOfResult = typeof transformedResult;
          if (typeOfResult !== 'object' && typeOfResult !== 'undefined') {
            tempKey = entityKey;
            isTransformedResultPrimitive = true;
          } else {
            tempKey = transformedResult;
          }
        } else {
          tempKey = transformForArray(transformFunction, itemValue);
        }

        // { [key:string]:any } 数组也能通过编译
        if (Array.isArray(tempKey)) {
          objectPath.set(result, tempKey, itemValue);
          return;
        }
        if (typeof tempKey === 'object' && !Array.isArray(finalValues)) {
          // console.log(finalValues, tempKey)
          // finalValues = deepMerge(finalValues, tempKey);
          finalValues = { ...finalValues, ...tempKey };
        } else if (typeof tempKey === 'object' && Array.isArray(finalValues)) {
          result = { ...result, ...tempKey };
        } else if (tempKey !== null || tempKey !== undefined) {
          objectPath.set(
            result,
            [tempKey],
            isTransformedResultPrimitive ? transformedResult : itemValue,
          );
        }
      };

      /** 如果存在转化器提前渲染一下 */
      if (transformFunction && typeof transformFunction === 'function') {
        transform();
      }

      if (typeof window === 'undefined') return;
      if (isPlainObj(itemValue)) {
        const genValues = gen(itemValue, key);
        if (Object.keys(genValues).length < 1) {
          return;
        }
        objectPath.set(result, [entityKey], genValues);
        return;
      }
      transform();
    });
    // namePath、transform在omit为false时需正常返回 https://github.com/ant-design/pro-components/issues/2901#issue-908097115
    return omit ? result : tempValues;
  };

  finalValues =
    Array.isArray(values) && Array.isArray(finalValues)
      ? [...gen(values)]
      : merge({}, gen(values), finalValues);

  return finalValues;
};

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

// Form表单的一下基础状态,justShow
export const SFormContext = createContext();
export const useGetForm = () => React.useContext(SFormContext);

// 组件内部使用的Context,一般不对外暴露
const SFormContextIner = createContext();
const useGetFormIner = () => React.useContext(SFormContextIner);

/**
 * @description 表单项值监听可能不及时,推荐使用FormBoxDependency
 * @param nameList {Array} 监听的表单项名称
 * @param f {Object} form对象
 *
 * @returns {Object} 返回监听的表单项值
 * */
export const useWatch = (nameList, f) => {
  const valueList = useRef({});
  const formObj = useGetForm();
  const form = f || formObj?.form;

  if (!form) {
    throw new Error(
      'useWatch 必须在FormBox中使用，或者指定form作为第二个参数传入',
    );
  }

  const depend = useRef({});
  const dependency = form.dependency || depend;
  form.dependency = dependency;
  // const { dependency } = useGetFormIner() || { dependency: depend };
  const up = useUpdate();

  const update = useMemoizedFn((newVal, name) => {
    const oldVal = objectPath.get(valueList.current, name);
    if (deepEqual(oldVal, newVal)) return;
    up();
    objectPath.set(valueList.current, name, newVal);
  });

  // 监听form 自动更新
  const vals = form?.getFieldsValue(nameList) || {};
  nameList.forEach((name) => {
    const oldUpdates = objectPath.get(dependency.current, `${name}`) || [];
    objectPath.set(dependency.current, `${name}`, [
      ...new Set([...oldUpdates, update]),
    ]);
  });

  useUnmount(() => {
    nameList.forEach((name) => {
      const oldUpdates = objectPath.get(dependency.current, `${name}`) || [];
      objectPath.set(
        dependency.current,
        name,
        oldUpdates.filter((item) => item !== update),
      );
    });
  });

  return vals;
};

export const FormBoxDependency = ({ nameList, children, form }) => {
  const val = useWatch(nameList, form);

  return children?.(val || {});
};

// export const SRowContext = createContext();

// 创建Form.Item包裹的表单项
export const withFormItem = (Component, type) => {
  const App = (props) => {
    const fatherForm = useGetForm();
    const { form, disabled: disabledForm } = (props.form && {
      form: props.form,
    }) ||
      fatherForm || {
        form: props.form || {
          getFieldDecorator: (name, options) => (dom) =>
            React.cloneElement(dom, {
              ...dom.props,
              name,
              options,
            }),
        },
      };
    const dependency = form?.dependency;
    const {
      justShow,
      labelCol: formLabelCol,
      wrapperCol: formWrapperCol,
      initialValues,
      itemPropsDefault,
      setFieldValueType,
      // dependency,
    } = useGetFormIner() || {};

    const {
      disabled,
      name,
      filedTip,
      show,
      filedOptions = {},
      fieldLayout,
      autoScale = 0,
      initialValue,
      rules,
      onChange,
      // renderCondition,

      hide,
      tip,
      tipIcon,
      hideMb8px,
      styleFiled,
      transform,
      convertInitValue,

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
      errInline = false,
      formItem = {},

      ...residue
    } = { ...(itemPropsDefault || {}), ...props };

    // name必须存在
    if (!name) {
      throw new Error('name is required');
    }

    const showFlag = useMemo(() => {
      const showOwn = typeof show === 'function' ? show(form) : show;
      return show !== undefined ? showOwn : justShow;
    }, [show, justShow, form]);

    /**
     * 注：表单数据变化，表单自动回更新表单下的依赖。
     * 所以只用处理组件挂载和卸载时候表单数据更新不及时的问题
     *
     * */
    const dependencyEx = useMemoizedFn((newVal) => {
      if (!dependency?.current) return;
      // FormBoxDependency 触发
      const funs = objectPath.get(dependency.current, name);
      if (funs && funs?.length) {
        funs.forEach((fun) => fun(newVal, name));
      }

      // useWatch 触发
      // const funsWatch = objectPath.get(dependency.current,  `_watch_${name}`);
      // if (funsWatch && funsWatch?.length) {
      //   funsWatch.forEach((fun) => fun(newVal, name));
      // }
    });
    useMount(() => {
      // 挂载时触发一下依赖项目变动
      dependencyEx(form?.getFieldValue?.(name));
    });
    useUnmount(() => {
      // 卸载时触发一下依赖项目变动
      dependencyEx(undefined);
    });

    // 设置transform,到表单顶部
    useEffect(() => {
      if (transform === undefined) return;
      setFieldValueType(name, { transform });

      return () => {
        setFieldValueType(name, { transform: undefined });
      };
    }, [name, setFieldValueType, transform]);

    // if (!form || !form.getFieldDecorator) {
    //   // 如果没有form对象，直接返回null
    //   return null;
    // }

    // if (renderCondition !== undefined) {
    //   // 条件判断，该项是否需要渲染到表单上
    //   let flag = renderCondition;
    //   if (typeof renderCondition === 'function') {
    //     flag = renderCondition(form);
    //   } else {
    //     try {
    //       let str = '';
    //       for (const [key, valArr, operation] of renderCondition) {
    //         const valTrue = form.getFieldValue(key);
    //         str += valArr.includes(valTrue) + (operation || '');
    //       }
    //       // eslint-disable-next-line no-eval
    //       flag = eval(str);
    //     } catch (error) {
    //       throw new Error('renderCondition 格式错误');
    //     }
    //   }
    //
    //   if (!flag) return null;
    // }

    const { getFieldDecorator } = form;

    const layoutLabelCol = labelCol || formLabelCol || { span: 8 };
    const layoutWrapperCol = wrapperCol || formWrapperCol || { span: 16 };
    const hideMb8pxFlag = hideMb8px === undefined ? justShow : hideMb8px;
    const scale =
      layoutLabelCol.span / (layoutLabelCol.span + layoutWrapperCol.span);

    const initVal = initialValues
      ? objectPath.get(initialValues, name)
      : initialValue;
    const init =
      typeof convertInitValue === 'function'
        ? convertInitValue({ initVal, initialValues, form })
        : initVal;

    const previous = usePrevious(init);
    if (previous !== init) {
      const val = form?.getFieldValue?.(name);
      dependencyEx(val ?? init);
    }

    let filed = getFieldDecorator(name, {
      type,
      // initialValue: initVal,
      initialValue: init,
      rules,
      // 隐藏后忽略校验
      // hidden: !!hide ?? false,
      ...filedOptions,
    })(
      <Component
        show={showFlag}
        form={form}
        onChange={onChange && ((...params) => onChange(...params, form))}
        disabled={disabled || disabledForm}
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
          ...(hide ? { display: 'none' } : {}),
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
        className={classnames(
          'ss-form-item',
          {
            ['ss-form-item-err-inline']: errInline,
          },
          className,
        )}
        colon={colon}
        extra={extra}
        hasFeedback={hasFeedback}
        help={help}
        htmlFor={htmlFor}
        labelAlign={labelAlign}
        required={required}
        validateStatus={validateStatus}
        {...formItem}
      >
        {filed}
      </Form.Item>
    );
  };

  return App;
};

// 切换按钮
export const FormSwitch = withFormItem(SSwitch, 'switch');
export const ColFormSwitch = withColItem(FormSwitch);
// 单选框
export const FormRadio = withFormItem(SRadio, 'radio');
export const ColFormRadio = withColItem(FormRadio);
// 单选
export const FormRadioGroup = withFormItem(SRadio.SRadioGroup, 'radioGroup');
export const ColFormRadioGroup = withColItem(FormRadioGroup);
// 多选
export const FormCheckboxGroup = withFormItem(
  SCheckbox.SCheckboxGroup,
  'checkboxGroup',
);
export const ColFormCheckboxGroup = withColItem(FormCheckboxGroup);
// 复选框
export const FormCheckbox = withFormItem(SCheckbox, 'checkbox');
export const ColFormCheckbox = withColItem(FormCheckbox);
// 日期选择
export const FormDatePicker = withFormItem(SDatePicker, 'datePicker');
export const ColFormDatePicker = withColItem(FormDatePicker);
// 时间段选择
export const FormRangePicker = withFormItem(
  SDatePicker.SRangePicker,
  'rangePicker',
);
export const ColFormRangePicker = withColItem(FormRangePicker);
// 月份时间选择
export const FormMonthPicker = withFormItem(
  SDatePicker.SMonthPicker,
  'monthPicker',
);
export const ColFormMonthPicker = withColItem(FormMonthPicker);
// 周时间选择
export const FormWeekPicker = withFormItem(
  SDatePicker.SWeekPicker,
  'monthPicker',
);
export const ColFormWeekPicker = withColItem(FormWeekPicker);
// 时间选择time格式
export const FormTimePicker = withFormItem(STimePicker, 'timePicker');
export const ColFormTimePicker = withColItem(FormTimePicker);
// 输入框
export const FormInput = withFormItem(SInput, 'input');
export const ColFormInput = withColItem(FormInput);
// 下拉选择
export const FormSelect = withFormItem(SSelect, 'select');
export const ColFormSelect = withColItem(FormSelect);
// 下拉选择
export const FormTextArea = withFormItem(STextArea, 'textArea');
export const ColFormTextArea = withColItem(FormTextArea);
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
      labelCol,
      wrapperCol,
      justShow = false,
      initialValues,
      onFinish,
      loading,
      itemPropsDefault,
      omitNil = true,
      children,
      // 不需要Form包裹
      noFormWrap = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    /** 保存 transformKeyRef，用于对表单key transform */
    const transformKeyRef = useRef({});
    form.transformKeyRef = form.transformKeyRef || transformKeyRef;

    // const dependency = useRef({});
    const [inLoading, setInLoading] = useState(false);
    const load = loading || inLoading;

    /** 使用 callback 的类型 */
    const transformKey = useMemoizedFn((values, paramsOmitNil) => {
      return transformKeySubmitValue(
        values,
        form.transformKeyRef.current,
        paramsOmitNil,
      );
    });

    const formatValues = useMemo(() => ({
      /**
       * 获取被格式化后的所有数据
       *
       * @example  getFieldsFormatValue() ->返回所有数据，即使没有被 form 托管的
       */
      getFieldsFormatValue: (...params) => {
        return transformKey(form?.getFieldsValue(...params), !!omitNil);
      },
      /**
       *验字段后返回格式化之后的所有数据
       *
       * @example validateFieldsReturnFormatValue -> {a:{b:value}}
       */
      validateFieldsReturnFormatValue: async (nameList, ...rest) => {
        if (!Array.isArray(nameList) && nameList)
          throw new Error('nameList must be array');

        const values = await form.validateFields(nameList, ...rest);
        const transformedKey = transformKey(values, !!omitNil);
        return transformedKey ? transformedKey : {};
      },
      /**
       * 验字段后混动到验证报错的位置后，返回格式化之后的所有数据
       *
       * @example validateFieldsReturnFormatValue -> {a:{b:value}}
       */
      validateFieldsReturnAndScrollFormatValue: async (nameList, ...rest) => {
        if (!Array.isArray(nameList) && nameList)
          throw new Error('nameList must be array');

        const values = await form.validateFieldsAndScroll(nameList, ...rest);
        const transformedKey = transformKey(values, !!omitNil);
        return transformedKey ? transformedKey : {};
      },
    }));

    const tempForm = useMemo(
      () => ({
        ...form,
        ...formatValues,
      }),
      [form, formatValues],
    );

    const finish = useMemoizedFn(
      async ({ verification = true, trim = false, andScroll = true } = {}) => {
        let types = null;
        let values = null;

        if (verification) {
          if (andScroll) {
            values = await tempForm.validateFieldsReturnAndScrollFormatValue();
          } else {
            values = await tempForm.validateFieldsReturnFormatValue();
          }
        } else {
          values = await tempForm.getFieldsFormatValue();
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
          const type = tempForm.getFieldProps(key)?.['data-__meta']?.type;
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

    tempForm.finish = finish;
    useImperativeHandle(ref, () => tempForm, [tempForm]);
    const child =
      typeof children === 'function' ? children(tempForm) : children;

    return (
      <SFormContextIner.Provider
        value={{
          labelCol,
          wrapperCol,
          justShow,
          itemPropsDefault,
          initialValues,
          setFieldValueType: (name, { transform }) => {
            objectPath.set(form.transformKeyRef.current, name, transform);
          },
          // dependency,
        }}
      >
        <SFormContext.Provider
          value={{
            form: tempForm,
            disabled: disabled ?? load,
            loading: load,
          }}
        >
          {noFormWrap ? child : <Form {...props}>{child}</Form>}
        </SFormContext.Provider>
      </SFormContextIner.Provider>
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
                  <SAffix scope={warp} offsetBottom={0}>
                    <div className="text-right py-2 px-4 space-x-2 bg-white border-x-0 border-b-0 border-solid border-gray-300">
                      {btns}
                    </div>
                  </SAffix>
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
