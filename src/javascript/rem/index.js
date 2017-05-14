/**
 * Created by 李世明 on 2017/5/14 0014.
 * QQ:1278915838
 * TEL:18518769512
 * TODO:
 */
!(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = () => {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 14 * (clientWidth / 375) + 'px'
    window.htmlFontSize = 14 * (clientWidth / 375)
  }
  recalc()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
  console.log(docEl.style.fontSize)
})(document, window)
