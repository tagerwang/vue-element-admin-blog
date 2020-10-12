import request from '@/utils/request'
const baseURL = 'http://wtaog.com:8085'
export function fetchList(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}

export function fetchDeleteArticle(data) {
  return request({
    url: '/admin/delete',
    method: 'post',
    data,
    baseURL
  })
}
export function fetchEditArticle(data) {
  return request({
    url: '/admin/edit',
    method: 'post',
    data,
    baseURL
  })
}
export function createArticle(data) {
  return request({
    url: '/admin/create',
    method: 'post',
    data,
    baseURL
  })
}
export function fetchArticle(id) {
  return request({
    url: `/admin/detail/${id}`,
    method: 'get',
    baseURL
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

// export function createArticle(data) {
//   return request({
//     url: '/vue-element-admin/article/create',
//     method: 'post',
//     data
//   })
// }

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
