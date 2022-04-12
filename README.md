# React-17

## Redux

    1. Redux 是一個專門用於做狀態管理的 JS 庫(不是 react 插件庫)
    2. 它可以用在 react, angular, vue 等項目中，但基本與 react 配合使用
    3. 作用：集中管理 react 應用中多個組件共享的狀態

### 什麼情況下用 Redux

    1. 某個組件的狀態需要讓其他組件可以隨時拿到(共享)
    2. 一個組件需要改變另一個組件的狀態(通信)
    3. 總體原則：能不用就不用，如果不用比較吃力才考慮使用

#### action

    1. 動作對象
    2. 包含 2 種屬性
        type: 標示屬性，值為字符串，唯一，必要屬性
        data: 數據類型，值為任意類型，可選屬性
    3. 例子：{type: 'ADD_STUDENT', data: {name: 'Tom', age: 18}}
    4. 有分同步＆異步
        1. 同步：同步 action ，就是指 action 的值為對象
        2. 異步：異步 action ，就是指 action 的值為函數

#### reducer

    1. 用於初始化狀態、加工狀態
    2. 加工時，根據舊的 state 和 action，產生新的 state 的純函數

#### store

    1. 將 state, action, reducer 聯繫在一起的對象

## Redux 異步action版

    1. 明確：延遲的動作不想交給組件自身，想交給action
    2. 何時需要異步action：想要對狀態進行操作，但是具體的數據靠異步任務返回
    3. 具體編碼：
        1) 安裝redux-thunk並配置在store中
        2) 創建action的函數不再返回一般對象而是一個函數，該函數中寫異步任務
        3) 異步任務有結果後，分發一個同步的action去真正操作數據
    4. 備註：異步action不是必須要寫的，完全可以自己等待異步任務的結果再去分發同步action