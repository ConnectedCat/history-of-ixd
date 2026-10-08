import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { marked } from 'marked'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function markdownToHtmlPlugin(base) {
  return {
    name: 'markdown-to-html',
    transform(code, id) {
      if (!id.endsWith('.md')) {
        return null
      }

      const html = marked.parse(code, {
        walkTokens(token) {
          if (token.type === 'image' && token.href.startsWith('/images/')) {
            token.href = `${base}${token.href.slice(1)}`
          }
        },
      })
      return {
        code: `export default ${JSON.stringify(html)}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  base: '/history-of-ixd/',
    publicDir: resolve(__dirname, 'public'),
    plugins: [
      tailwindcss(),
      markdownToHtmlPlugin('/history-of-ixd/'),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          chapter1: resolve(__dirname, 'chapter-1.html'),
          chapter2: resolve(__dirname, 'chapter-2.html'),
          chapter3: resolve(__dirname, 'chapter-3.html'),
          chapter4: resolve(__dirname, 'chapter-4.html'),
          chapter5: resolve(__dirname, 'chapter-5.html'),
          chapter6: resolve(__dirname, 'chapter-6.html'),
          chapter7: resolve(__dirname, 'chapter-7.html'),
          chapter8: resolve(__dirname, 'chapter-8.html'),
          chapter9: resolve(__dirname, 'chapter-9.html'),
          chapter10: resolve(__dirname, 'chapter-10.html'),
          chapter11: resolve(__dirname, 'chapter-11.html'),
          chapter12: resolve(__dirname, 'chapter-12.html'),
          chapter13: resolve(__dirname, 'chapter-13.html'),
          chapter14: resolve(__dirname, 'chapter-14.html'),
          bibliography: resolve(__dirname, 'bibliography.html'),
        },
      },
    },
})
