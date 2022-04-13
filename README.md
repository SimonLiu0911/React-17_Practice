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

## Redux 異步 action 版

    1. 明確：延遲的動作不想交給組件自身，想交給action
    2. 何時需要異步action：想要對狀態進行操作，但是具體的數據靠異步任務返回
    3. 具體編碼：
        1) 安裝redux-thunk並配置在store中
        2) 創建action的函數不再返回一般對象而是一個函數，該函數中寫異步任務
        3) 異步任務有結果後，分發一個同步的action去真正操作數據
    4. 備註：異步action不是必須要寫的，完全可以自己等待異步任務的結果再去分發同步action

## react-redux 基本使用

    1. 明確兩個概念：
        1) UI組件：不能使用任何redux的api，只負責頁面的呈現、交互等
        2) 容器組件：負責和redux通信，將結果交給UI組件
    2. 如何創建一個容器組件--靠react-redux的connect函數
        connect(mapStateToProps, mapDispatchToProps)(UI組件)
            -mapStateToProps: 映射狀態，返回值是一個對象
            -mapDispatchToProps: 又射操作狀態的方法，返回值是一個對象
    3. 備註1：容器組件中的store是靠props傳進去的，而不是在容器組件中直接引入
    4. 備註2：mapDispatchToProps，也可以是一個對象

## react-redux 優化

    1. 容器組件和UI組件整合成一個文件
    2. 無需自己給容器組件傳遞store，給<App />包裹一個<Provider store={store}>即可
    3. 使用了react-redux後，不用再自己檢測redux狀態的改變，容器組件可以自動完成這項工作
    4. mapDispatchToProps也可以簡單地寫成一個對象
    5. 一個組件要和redux打交道，需要經過以下步驟：
        a. 定義好UI組件
        b. 引入connect生成一個容器組件並export
            ex: connect(
                state: {key: value}, // 映射狀態
                {key: xxxAction}  // 映射操作狀態的方法
            )(UI組件)

## 求和案例 react-redux 數據共享版

    1. 定義一個Person組件，和Count組件通過redux共享數據
    2. 為Person組件編寫：reducer, action, 配置constant常量
    3. 重點：Person的reducer和Count的Reducer要使用combineReducers進行合併，合併後的總狀態是一個對象
    4. 交給store的是總reducer，最後注意在組件中取出狀態的時候，記得"取到位"

### 純函數與高階函數

    1. 純函數
        1) 一類特別的函數：只要是同樣的輸入(實參)，必定得到同樣的輸出(返回)
        2) 必須遵守以下一些約束
            a. 不得改寫參數數據
            b. 不會產生任何副作用，例如網路請求, 輸入和輸出設備
            c. 不能調用 Date.now()或者Math.random()等不純的方法
        3) redux的reducer函數必須是一個純函數!!
    2. 高階函數
        1) 理解：一類特別的函數
            a. 情況1：參數是函數
            b. 情況2：返回是函數

### react-redux 開發者工具的使用

    1. npm i redux-devtools-extension
    2. store中進行配置
        import { composeWithDevTools } from 'redux-devtools-extension'
        const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

### react-redux 最終版

    1. 所有變量名字要規範，儘量觸發對象的簡寫形式
    2. reducers文件夾中，編寫index.js專用於彙總非輸出的所有reducer
