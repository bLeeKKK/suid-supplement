function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["onResize", "width"],
  _excluded2 = ["columns", "className", "rowKey", "request", "params"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useAntdTable, useLocalStorageState } from 'ahooks';
import { Checkbox, Icon, Popover, Table } from 'antd';
import classnames from 'classnames';
import React, { useMemo } from 'react';
import { Resizable } from 'react-resizable';
import "./styles.less";
var blankColumn = {
  title: '',
  key: '_blank_workspace',
  dataIndex: '_blank_workspace',
  disableCustomize: true
};
var ResizeableTitle = function ResizeableTitle(props) {
  var onResize = props.onResize,
    width = props.width,
    restProps = _objectWithoutProperties(props, _excluded);
  if (width === undefined || width === null) {
    return /*#__PURE__*/React.createElement("th", restProps);
  }
  return /*#__PURE__*/React.createElement(Resizable, {
    width: width,
    height: 0,
    onResize: onResize,
    draggableOpts: {
      enableUserSelectHack: false
    }
  }, /*#__PURE__*/React.createElement("th", restProps));
};

// const STbody = ({ children, ...props }) => {
//   const tbodyRef = useRef();
//   const tbodySb = useRef();
//   useLayoutEffect(() => {
//     tbodySb.current = new Ps(tbodyRef.current);
//   }, []);
//   console.log(tbodySb, tbodyRef);
//
//   return (
//     <tbody {...props} ref={tbodyRef} className="s-s-table-body ant-table-tbody">
//       {children}
//     </tbody>
//   );
// };

var STable = function STable(props) {
  var initialColumns = props.columns,
    className = props.className,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    request = props.request,
    params = props.params,
    rest = _objectWithoutProperties(props, _excluded2);
  var _useAntdTable = useAntdTable(request, _objectSpread({
      defaultPageSize: 10
    }, params)),
    tableProps = _useAntdTable.tableProps;
  var _useLocalStorageState = useLocalStorageState('tableColumns', {
      defaultValue: '{}'
    }),
    _useLocalStorageState2 = _slicedToArray(_useLocalStorageState, 2),
    tableColumnsConfig = _useLocalStorageState2[0],
    setTableColumnsConfig = _useLocalStorageState2[1];
  var columns = useMemo(function () {
    var newColumns = initialColumns.map(function (item) {
      var _columnConfig$key, _columnConfig$key2;
      var key = item.dataIndex || item.title;
      var columnConfig = {};
      try {
        columnConfig = JSON.parse(tableColumnsConfig);
      } catch (error) {
        console.log(error);
      }
      var width = ((_columnConfig$key = columnConfig[key]) === null || _columnConfig$key === void 0 ? void 0 : _columnConfig$key.width) || item.width || 100;
      var hidden = ((_columnConfig$key2 = columnConfig[key]) === null || _columnConfig$key2 === void 0 ? void 0 : _columnConfig$key2.hidden) || false;
      return _objectSpread(_objectSpread({
        ellipsis: true
      }, item), {}, {
        width: width,
        hidden: hidden,
        onHeaderCell: function onHeaderCell() {
          return {
            width: width,
            onResize: handleResize(key)
          };
        }
      });
    });
    newColumns.push(blankColumn);
    return newColumns;
  }, [tableColumnsConfig]);
  var handleResize = function handleResize(key) {
    return function (_, _ref) {
      var size = _ref.size;
      setTableColumnsConfig(function (oldKvStr) {
        var oldKv = {};
        try {
          oldKv = JSON.parse(oldKvStr);
        } catch (error) {
          console.log(error);
        }
        var oldVal = oldKvStr[key] || {};
        var newKvStr = JSON.stringify(_objectSpread(_objectSpread({}, oldKv), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, oldVal), {}, {
          width: size.width
        }))));
        return newKvStr;
      });
    };
  };
  var handleColumnVisibilityChange = function handleColumnVisibilityChange(key, checked) {
    setTableColumnsConfig(function (oldKvStr) {
      var oldKv = {};
      try {
        oldKv = JSON.parse(oldKvStr);
      } catch (error) {
        console.log(error);
      }
      var oldVal = oldKvStr[key] || {};
      var newKvStr = JSON.stringify(_objectSpread(_objectSpread({}, oldKv), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, oldVal), {}, {
        hidden: !checked
      }))));
      return newKvStr;
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Popover, {
    content: /*#__PURE__*/React.createElement("div", null, columns.map(function (column) {
      var key = column.dataIndex || column.title;
      return /*#__PURE__*/React.createElement(Checkbox, {
        disabled: column.optional === false,
        checked: !column.hidden,
        key: key,
        onChange: function onChange(e) {
          return handleColumnVisibilityChange(key, e.target.checked);
        }
      }, column.title);
    })),
    trigger: "click"
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "setting"
  })), /*#__PURE__*/React.createElement(Table, _extends({
    className: classnames('s-s-table', 'h-full', className),
    size: "small",
    scroll: {
      x: '100%'
    },
    columns: columns.filter(function (column) {
      return !column.hidden;
    }),
    rowKey: rowKey,
    components: {
      header: {
        cell: ResizeableTitle
      }
      // body: {
      //   wrapper: STbody,
      // },
    },
    bordered: true
  }, tableProps, rest)));
};
export default STable;