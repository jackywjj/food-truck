import request from '../utils/request'

export const reqLogin = (params) => {
  // get请求传params,post传data
  return request({
    url: '/app-cloud/v1/animal/determine/records/list',
    method: 'post',
    data: params
  })
}