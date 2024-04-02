// 准确判断数据类型
export const getType = (variable) => {
  const type = Object.prototype.toString.call(variable);
  return type.slice(8, -1).toLowerCase();
};
