/**
 * Created by 李世明 on 2017/5/7 0007.
 * QQ:1278915838
 * TEL:18518769512
 * TODO:VUE全局扩展方法
 */
export default {
  install (vue, options) {
    /**
     * 深复制
     * @param obj
     * 传入对象或者数组
     * @returns {*}
     */
    vue.prototype.copy = (obj) => {
      let newObj = Array.isArray(obj) ? [] : {}
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
            newObj[key] = this.copy(obj[key])
          } else {
            newObj[key] = obj[key]
          }
        }
      }
      return newObj
    }
    vue.http.interceptors.push((request, next) => {
      // loading
      // request.headers.map['Content-Type'] = ['application/json;charset=UTF-8']
      request.url += '?v=' + Date.now()
      request.headers.map['CURRENT-TOKEN'] = [sessionStorage.getItem('token')]
      // ...
      // 请求发送前的处理逻辑
      // ...
      next((response) => {
        // 关闭loading
        // ...
        // 请求发送后的处理逻辑
        //    ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
      })
    })
  }
}

