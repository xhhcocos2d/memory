/**
 * Created by 李世明 on 2017/5/7 0007.
 * QQ:1278915838
 * TEL:18518769512
 * TODO:系统扩展类库
 */
// =====================================日期类型===========================================================================
/**
 * 将数字格式化为两位数
 * @param num
 * @returns {string}
 */
const dNumber = (num) => {
  return num < 10 ? ('0' + num) : num
}
/**
 * 日期格式化
 * @param format
 * 格式化参数，支持各种日期格式
 * @returns {string}
 * 返回格式化后日期
 */
/* eslint-disable no-extend-native */
/* eslint-disable indent */
Date.prototype.dateFormart = Date.prototype.dateFormart || function (format) {
    console.log(this)
    /* eslint-disable no-useless-escape */
    let formatString = format.match(/[A-Za-z]{1,4}|[\--\/-年-月-日-时-分-秒-\s-:]/g)
    let date = []
    for (let i = 0, len = formatString.length; i < len; i++) {
      switch (formatString[i]) {
        case 'yyyy':
          date.push(this.getFullYear())
          break
        case 'yy':
          date.push(this.getYear())
          break
        case 'MM':
          let month = this.getMonth() + 1
          date.push(dNumber(month))
          break
        case 'M':
          date.push(this.getMonth() + 1)
          break
        case 'dd':
          date.push(dNumber(this.getDate()))
          break
        case 'd':
          date.push(this.getDate())
          break
        case 'HH':
          date.push(dNumber(this.getHours()))
          break
        case 'H':
          date.push(this.getHours())
          break
        case 'mm':
          date.push(dNumber(this.getMinutes()))
          break
        case 'm':
          date.push(this.getMinutes())
          break
        case 'ss':
          date.push(dNumber(this.getSeconds()))
          break
        case 's':
          date.push(this.getSeconds())
          break
        default:
          date.push(formatString[i])
          break
      }
    }
    return date.join('')
  }
