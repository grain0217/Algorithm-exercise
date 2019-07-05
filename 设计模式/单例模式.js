/**
 * 一个类只有一个实例
 */

class singleObject {
  constructor () {
    //
  }
}

singleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new singleObject()
    }
    return instance
  }
})()

const instance1 = singleObject.getInstance()
const instance2 = singleObject.getInstance()

instance1 === instance2 // true

const instance3 = new singleObject()
instance3 === instance2 // false

// JavaScript的构造函数无法私有化，在外部仍可通过 new singleObject()创建实例
// 无法完全控制，只好通过类的静态方法来实现