import { Button, Dropdown, Icon, Menu, Tooltip } from 'antd';
import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import './styles.less';

export const SBtn = (props) => {
  const {
    tooltip = {},
    tip,
    children,
    afterIcon,
    className,
    mr8 = true,
    ...restProps
  } = props;

  const btn = (
    <Button
      className={classnames(className, { 's-btn-item-mr-8': mr8 })}
      {...restProps}
    >
      {children || '请定义标题'}
      {afterIcon}
    </Button>
  );

  return (
    <>
      {tip || tooltip ? (
        <Tooltip title={tip} {...tooltip}>
          {btn}
        </Tooltip>
      ) : (
        btn
      )}
    </>
  );
};

export const ActionBtn = (props) => {
  const { render, loading = false, onClick, children, ...resProps } = props;
  const [inLoading, setInLoading] = useState(false);
  const click = useCallback(
    (...args) => {
      if (!onClick) return;
      const r = onClick(...args);
      // console.log(r, 'r');
      if (r && r.finally) {
        setInLoading(true);
        r.finally(() => {
          setInLoading(false);
        });
      }
      return r;
    },
    [onClick],
  );

  const load = loading || inLoading;
  const IconDom = (
    <SBtn loading={load} onClick={click} {...resProps}>
      {children}
    </SBtn>
  );

  return render ? render({ dom: IconDom, btnOrMenu: 'btn' }) : IconDom;
};

export const ActionMenu = ({ res }) => {
  const [inLoading, setInLoading] = useState(false);
  const {
    tooltip = {},
    tip,
    render,
    loading = false,
    onClick,
    disabled,
    icon,
    style,
    ...resProps
  } = res;
  const click = (...args) => {
    const r = onClick(...args);
    if (r && r.finally) {
      setInLoading(true);
      r.finally(() => {
        setInLoading(false);
      });
    }
    return r;
  };
  const load = loading || inLoading;
  const iconDom =
    typeof icon === 'string' ? (
      <Icon style={{ marginRight: '8px' }} type={icon} />
    ) : (
      icon
    );

  let DomA = (
    <>
      {load ? <Icon type="loading" style={{ marginRight: '8px' }} /> : iconDom}
      {res.title || '请定义标题！'}
    </>
  );

  DomA = render ? render({ dom: DomA, btnOrMenu: 'menu' }) : DomA;
  const domFinaly = (
    <div
      style={{
        textAlign: 'center',
        ...(style || {}),
        // ...(load || disabled ? { pointerEvents: 'none' } : {}),
        ...(load ? { opacity: 0.5 } : {}),
      }}
      onClick={load || disabled ? undefined : click}
      {...resProps}
    >
      {DomA}
    </div>
  );

  return tip || tooltip ? (
    <Tooltip title={tip} placement="right" {...tooltip}>
      {domFinaly}
    </Tooltip>
  ) : (
    domFinaly
  );
};

const BtnMore = (
  <Button>
    更多
    <Icon type="down" />
  </Button>
);

export const BtnsBox = ({ btnArr = [], limt, moreBtn = BtnMore }) => {
  const arr = btnArr.filter((res) => !res.hide);

  const len = limt || arr.length;
  const beforArr = arr.splice(0, len);

  const btns = (
    <div className="s-btn-box">
      {beforArr.map(({ title, ...res }) => {
        return (
          <span key={`map-${title}`}>
            <ActionBtn {...res}>{title}</ActionBtn>
          </span>
        );
      })}

      {arr.length ? (
        <Dropdown
          overlay={
            <Menu>
              {arr.map((res) => (
                <Menu.Item disabled={res.disabled} key={`list-${res.title}`}>
                  <ActionMenu res={res} />
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          {moreBtn}
        </Dropdown>
      ) : null}
    </div>
  );

  return btns;
};

export default BtnsBox;
