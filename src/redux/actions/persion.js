import { ADD_PERSON } from '../constants'

// 創建增加一個人的action動作對象
export const createAddPerson = personObj => ({ type: ADD_PERSON, data: personObj })