import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文message

VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`  // 修改内置规则的message
  },
  attributes: { // 给校验的field属性名映射中文名称
    phone: '手机号',
    code: '验证码',
  }
})

VeeValidate.Validator.extend('agree', {
  validate: value => {
    return value
  },
  getMessage: field => field + '必须同意'
})
