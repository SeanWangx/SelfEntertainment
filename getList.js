function getList () {
  return new Promise((resolve, reject) => {
    console.log('get list start')
    setTimeout(() => {
      console.log('get list end!')
      resolve([1,3,5,2,4])
    }, 1000)
  })
}
function getDetail (id) {
  return new Promise((resolve, reject) => {
    console.log(`get detail ${id} start`)
    setTimeout(() => {
      console.log(`get detail ${id} end`)
      resolve({id})
    }, 1000 * id)
  })
}
getList().then(arr => {
  return Promise.all(arr.map(id => getDetail(id)))
}).then(res => console.log(res))