console.log(22222);

interface PersonField {
  name: string,
  age: number
}

function demo(param: PersonField) {
  console.log(param.age, param.name)
}

demo({
  name: 'aaa1112222',
  age: 18
})


// let str = 'hello word11'
// str = 1111


console.log('meta', import.meta.env.VITE_PROXY_TARGET)


import { forEach } from 'lodash'

const mainArr = []

forEach(mainArr, (elm) => {
  console.log('elm', elm)
})

import { test1 } from './test'

console.log(test1)