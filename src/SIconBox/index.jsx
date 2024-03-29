import { Divider, Dropdown, Icon, Menu, Tooltip } from 'antd';
import classnames from 'classnames';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import './styles.less';

export const IconContext = createContext({});
export const useIconContext = () => useContext(IconContext);

export const SIcon = (props) => {
  const { tooltip = {}, title, className, ...restProps } = props;

  const icon = (
    <span>
      <Icon
        {...restProps}
        className={classnames(className, 'hover:text-[#198FFF]')}
      />
    </span>
  );

  return (
    <>
      {title ? (
        <Tooltip title={title} {...tooltip}>
          {icon}
        </Tooltip>
      ) : (
        icon
      )}
    </>
  );
};

export const ActionIcon = ({ ...props }) => {
  const { render, loading = false, onClick, ...resProps } = props;
  const [inLoading, setInLoading] = useState(false);
  const click = useCallback(
    (...args) => {
      const r = onClick(...args);
      if (r && r.then) {
        setInLoading(true);
        r.then(() => {
          setInLoading(false);
        });
      }
      return r;
    },
    [onClick],
  );

  const IconDom = (
    <>
      {loading || inLoading ? (
        <SIcon type="loading" />
      ) : (
        <SIcon onClick={click} {...resProps} hide={undefined} />
      )}
    </>
  );
  const IconDomA = IconDom;

  return render ? render({ dom: IconDomA, iconOrMenu: 'icon' }) : IconDomA;
};

export const ActionMenu = ({ res }) => {
  const [inLoading, setInLoading] = useState(false);
  const { render, loading = false, onClick, ...resProps } = res;
  const click = (...args) => {
    const r = onClick(...args);
    if (r && r.then) {
      setInLoading(true);
      r.then(() => {
        setInLoading(false);
      });
    }
    return r;
  };
  const load = loading || inLoading;

  let DomA = (
    <>
      {load ? <SIcon type="loading" style={{ marginRight: '8px' }} /> : null}
      {res.title || '请定义标题'}
    </>
  );

  DomA = render ? render({ dom: DomA, iconOrMenu: 'menu' }) : DomA;

  return (
    <div
      style={{
        textAlign: 'center',
        ...(load
          ? {
              pointerEvents: 'none',
              opacity: 0.5,
            }
          : {}),
      }}
      onClick={click}
      {...resProps}
    >
      {DomA}
    </div>
  );
};

export const IconsBox = ({ iconArr = [], limt, moreIcon = 'more' }) => {
  const arr = iconArr.filter((res) => !res.hide);

  const len = limt || arr.length;
  const beforArr = arr.splice(0, len);

  const icons = (
    <>
      {beforArr.map((res, index) => {
        return (
          <span key={`map-${res.type}`}>
            {index !== 0 ? <Divider type="vertical" /> : null}
            <ActionIcon {...res} />
          </span>
        );
      })}

      {arr.length ? (
        <Dropdown
          placement="topLeft"
          overlay={
            <Menu>
              {arr.map((res) => (
                <Menu.Item key={`list-${res.type}`}>
                  <ActionMenu res={res} />
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <span>
            {!!beforArr.length ? <Divider type="vertical" /> : null}
            <SIcon type={moreIcon} />
          </span>
        </Dropdown>
      ) : null}
    </>
  );

  return icons;
};

const DividerLine = ({ className, props }) => {
  return (
    <>
      <Divider
        type="vertical"
        className={classnames(className, 's-s-icon-divider-horizontal')}
        {...props}
      />
      <Divider
        type="horizontal"
        className={classnames(className, 's-s-icon-divider-vertical')}
        {...props}
      />
    </>
  );
};

const Item = ({
  title,
  tip,
  tooltip,
  iconDom,
  children,
  className,
  disabled,
  ...props
}) => {
  const tipStr = tip || title;
  const { inLoadingObj } = useIconContext();
  const eventKey = props.eventKey;

  const icon = useMemo(() => {
    const inLoading = inLoadingObj[eventKey];
    if (inLoading) {
      return <Icon type="loading" />;
    }
    if (iconDom) {
      return iconDom;
    }
    return null;
  }, [iconDom, tipStr, inLoadingObj]);

  return (
    <Menu.Item
      className={classnames(className)}
      disabled={disabled || inLoadingObj[eventKey]}
      {...props}
    >
      {tipStr ? (
        <Tooltip title={tipStr} {...(tooltip || {})}>
          {icon}
          <span className="title-span">{tipStr}</span> {children}
        </Tooltip>
      ) : (
        <>
          {icon} {children}
        </>
      )}
    </Menu.Item>
  );
};

const ItemGroup = ({ children, ...props }) => {
  return <Menu.ItemGroup {...props}>{children}</Menu.ItemGroup>;
};

const SubMenu = ({
  // tip,
  // tooltip,
  title,
  titleIconDom,
  children,
  popupClassName,
  ...props
}) => {
  const { inLoadingObj } = useIconContext();
  const eventKey = props.eventKey;
  const values = Object.values(inLoadingObj);

  const titleBox = useMemo(() => {
    let titleIcon = null;

    if (titleIconDom) {
      titleIcon = titleIconDom;
    }

    if (values.some((val) => Array.isArray(val) && val.includes(eventKey))) {
      titleIcon = <Icon type="loading" />;
    }

    let titleWithIcon = (
      <>
        {titleIcon} {title}
      </>
    );

    return titleWithIcon;
    // return tip ? (
    //   <Tooltip title={tip} {...(tooltip || {})}>
    //     {titleWithIcon}a
    //   </Tooltip>
    // ) : (
    //   titleWithIcon
    // );
  }, [titleIconDom, title, values, eventKey]);

  return (
    <Menu.SubMenu
      title={titleBox}
      // popupClassName={classnames(popupClassName, 's-s-icon-submenu')}
      {...props}
    >
      {children}
    </Menu.SubMenu>
  );
};

const IconMenus = ({ children, onClick, ...props }) => {
  const [inLoadingObj, setInLoadingObj] = useState({});

  const click = useCallback(
    ({ item, key, keyPath, domEvent }) => {
      if (!onClick) return;

      // 防止重复点击
      // const val = inLoadingObj[key];
      // if (val) return;

      const p = onClick({ item, key, keyPath, domEvent });

      if (p && p.then) {
        setInLoadingObj((obj) => ({
          ...(obj || {}),
          [key]: keyPath,
        }));
        p.then(() => {
          setInLoadingObj((obj) => ({
            ...(obj || {}),
            [key]: false,
          }));
        });
      }
    },
    [onClick, inLoadingObj],
  );

  return (
    <IconContext.Provider value={{ inLoadingObj }}>
      <div className="s-s-icon-menu">
        <Menu selectable={false} onClick={click} {...props} mode="horizontal">
          {children}
        </Menu>
      </div>
    </IconContext.Provider>
  );
};

const Dependency = ({ children }) => {
  const context = useIconContext();

  return <>{children(context)}</>;
};

IconMenus.Dependency = Dependency;
IconMenus.Item = Item;
IconMenus.ItemGroup = ItemGroup;
IconMenus.DividerLine = DividerLine;
IconMenus.SubMenu = SubMenu;

export default IconMenus;
