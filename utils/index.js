// 准确判断数据类型
export var getType = function getType(variable) {
  var type = Object.prototype.toString.call(variable);
  return type.slice(8, -1).toLowerCase();
};