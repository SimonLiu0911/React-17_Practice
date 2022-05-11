# redux三大核心觀念

## action

1. 動作的對象
2. 包含兩屬性：
  type: 標示屬性，值為字符串，唯一，必要屬性
  data: 數據屬性，值的類型任意，可選屬性
ex: {type: "ADD_STUDENT", data: {name: "Tom", age: 18}}
