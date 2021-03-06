// import fs from 'fs'
// import url from 'url'
// import http from 'http'
var fs = require('fs')
var url = require('url')
var http = require('http')

const download = ({
  filePath,
  fileURI,
  resolve = () => {},
  reject = () => {}
}) => {
  fileURI = encodeURI(fileURI)
  let options = {
    host: url.parse(fileURI).host,
    path: url.parse(fileURI).pathname
  }
  let file = fs.createWriteStream(filePath)
  http.get(options, res => {
    res.on('data', data => {
      file.write(data)
    }).on('end', () => {
      console.log('end')
      file.end()
      resolve()
    }).on('error', err => {
      console.log('error')
      file.end()
      reject(err)
    })
  }).on('error', err => {
    console.log('http error')
    reject(err)
  })
}

// export default download

let payload = {
  filePath: '',
  fileURI: ''
}

download(payload)
