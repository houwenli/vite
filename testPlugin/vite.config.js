import {
  defineConfig
} from 'vite'



export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 静态资源打包，注意，这里不会修改js的文件名
        // js是动态资源
        assetFileNames: 'static/[hash:5].[name].[ext]',
        chunkFileNames: 'js/[hash:5].[name].js',
        entryFileNames: `js/[hash:6]-[name].js`,
      }
    }
  },
  plugins: [
    {
      config(options) {
        // console.log(2222, options)
        return {
          mode: 'test'
        }
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          next()
        })
      },
      transformIndexHtml(html) {
        // console.log(222, html)
      },
      // 整个配置文件得解析流程完全完毕后走得钩子
      // 返回一个完整得配置文件
      configResolved(options) {
        // console.log(options)
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          next()
        })
      },

      // 和rollup共用
      options(rollupOptions) {
        console.log(3333, rollupOptions)
      }
    }
  ]
})
