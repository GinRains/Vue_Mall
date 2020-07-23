import { v4 as uuidv4 } from 'uuid';

function createUserTempId () {
  const userTempId = localStorage.getItem("USERTEMPID_KEY")
  if(!userTempId) {
    localStorage.setItem("USERTEMPID_KEY", uuidv4())
  }

  return userTempId
}

export { createUserTempId }
