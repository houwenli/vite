
const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new Koa()

const viteConfig = require('./vite.config')
const aliasResolver = require('./help/aliasResolver')

console.log(2222, viteConfig)

app.use(async (ctx) => {
  console.log('ctx', ctx.request, ctx.response);
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(path.join(__dirname, './index.html'))
    console.log('indexContent', indexContent.toString())

    ctx.response.body = indexContent
    ctx.response.set('Content-type', 'text/html')
  }

  // 判断当前文件是否由.js结尾
  if (ctx.request.url.endsWith('.js')) {
    const mainContent = await fs.promises.readFile(path.join(__dirname, ctx.request.url))
    console.log('mainContent', mainContent.toString())

    let lastRes = aliasResolver(viteConfig.resolve.alias, mainContent.toString(), path.join(__dirname, ctx.request.url))

    ctx.response.body = lastRes
    ctx.response.set('Content-type', 'text/javascript')
  }

  // if (ctx.request.url === '/main.js') {
  //   const mainContent = await fs.promises.readFile(path.join(__dirname, './main.js'))
  //   console.log('mainContent', mainContent.toString())

  //   ctx.response.body = mainContent
  //   ctx.response.set('Content-type', 'text/javascript')
  // }

  if (ctx.request.url === '/App.vue') {
    const appContent = await fs.promises.readFile(path.join(__dirname, './App.vue'))
    console.log('appContent', appContent.toString())

    ctx.response.body = appContent
    ctx.response.set('Content-type', 'text/javascript')
  }
})

app.listen(5173, () => {
  console.log('vite dev server listen 5173');
})
