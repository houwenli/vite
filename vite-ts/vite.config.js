import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
// console.log(2222, checker)
import path from 'path'
import viteCompression from 'vite-plugin-compression'


export default defineConfig({
  build: {
    // minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
        product: path.resolve(__dirname, './product.html')
      },
      output: {
        manualChunks(id) {
          // console.log('id', id)
          // if(id.includes('node_modules')) {
          //   return 'vender'
          // }
        },
      }
    }
  },
  plugins: [
    checker({
      typescript: true,
    }),
    viteCompression()
  ]
})