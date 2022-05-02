import { makeObservable, observable, action } from 'mobx'

class RootStore {
  constructor() {
    makeObservable(this)
  }
  // @observable es7的装饰器语法 表示数据可监控 表示是全局数据
  @observable
  name = '悟空'
  // action行为 表示 changeName是个可以修改全局共享数据的方法
  @action
  changeName(name) {
    this.name = name
  }
}

const rootStore = new RootStore()

export default rootStore
