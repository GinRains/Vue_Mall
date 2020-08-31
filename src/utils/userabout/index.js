import { v4 as uuidv4 } from 'uuid';


// 获取用户临时id
export function getUserTempId () {
  // 先从 localStorage 获取临时ID
  let userTempId = localStorage.getItem("USER_TEMP_ID_KEY")
  if(!userTempId) {
    // localStorage没有临时ID，则创建临时ID
    userTempId = uuidv4();
    // 并存入localStorage
    localStorage.setItem("USER_TEMP_ID_KEY", userTempId)
  }

  return userTempId
}
