const path = require('path')

module.exports = function (aliasConf, jsContent, fileUrl) {
  const entrys = Object.entries(aliasConf)

  let lastRes = ''
  entrys.forEach(entry => {
    const [alia, curPath] = entry

    lastRes = jsContent.replace(alia, '/src')

  })

  console.log(333, lastRes)

  return lastRes
}