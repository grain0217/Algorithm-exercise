class Product {
  constructor (name) {
    this.name = name
  }
  init () {
    //
  }
  fun1 () {}
  fun2 () {}
}

class Factory {
  create (name) {
    return new Product(name)
  }
}

const factory = new Factory()
const p1 = factory.create('p1')
const p2 = factory.create('p2')