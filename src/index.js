/*入口js
*
* */
import React from 'react'

import  ReactDom from 'react-dom'

import  App from './App'
import storageUtil from './util/storageUtil'
import MemoryUtil from './util/MemoryUtils'


// 将localStroage存储的user保存到内存中

const user = storageUtil.getUser()

if(user._id) { // 前面登陆过
  MemoryUtil.user = user
}

ReactDom.render(<App/>,document.getElementById('root'))