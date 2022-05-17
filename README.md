# redux 三大核心觀念

## action

1. 動作的對象
2. 包含兩屬性：
   type: 標示屬性，值為字符串，唯一，必要屬性
   data: 數據屬性，值的類型任意，可選屬性
   ex: {type: "ADD_STUDENT", data: {name: "Tom", age: 18}}

### 不要在 Reducer 裡做這些操作

    1. 修改傳入的參數
    2. 執行有副作用的操作，如 API 請求和路由跳轉
    3. 調用非純函數，如：Date.now() 或 Math.random()

count_action.js 專門用於創建 action 對象
constant.js 放置由於編碼疏忽寫錯 action 中的 type 值

## 求和案例 redux 異步 action 版

    1. 明確：延遲的動作不想交給組件，而是交給 action
    2. 何時需要異步 action: 想要狀態樹進行操作，但是具體的數據靠任務異步返回(非必須)
    3. 異步action不是必須的，完全自己等待異步任務的結果再去分發同步action

## react-redux 模型

    1. 所有 UI 容器都應該包裹一個容器組件(wrapper component)，他們是父子關係
    2. 容器組件(wrapper component)是真正和redux打交道的，但裡面可以隨意地使用redux的api
    3. UI組件中不能使用任何redux的api
    4. 容器組件(wrapper component)會傳給UI組件：(1)redux中所保存的狀態 (2)用於操作狀態的方法
    5. 備註：容器UI傳遞：狀態、操作狀態的方法，均通過props傳遞
    基本使用
    1. 明確兩個概念：
        1) UI組件：不能使用任何redux的api，只負責頁面的呈現、交互等
        2) 容器組件(wrapper component)：負責和redux通信，將結果交給UI組件
    2. 如何創建一個容器組件(wrapper component)：靠react-redux的connect函數
        connect(mapStateToProps, mapDispatchToProps)(UI組件)
        mapStateToProps：映射狀態，返回值是一個對象
        mapDispatchToProps：映射操作狀態的方法，返回值是一個對象
    3. 備註一：容器組件(wrapper component)中的store是靠props傳遞進去的，而不是在容器組件(wrapper component)中直接引入
    4. 備註二：mapDispatchToProps也可以是一個對象

## 數據共享版

    1. 定義一個Person組件，和Count組件通過redux共享數據
    2. 為Person組件編寫：reducer, action, 配置constant常量
    3. 重點：
        Person 的 reducer 和 Count 的 reducer 要使用 combineReducers 進行合併，合併後的總狀態是一個對象
    4. 交給 store 的是總 reducer，最後注意在組件中取出狀態的時候，記得“取到位”
