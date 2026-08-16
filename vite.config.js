import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { marked } from 'marked'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function markdownToHtmlPlugin() {
  return {
    name: 'markdown-to-html',
    transform(code, id) {
      if (!id.endsWith('.md')) {
        return null
      }

      const html = marked.parse(code)
      return {
        code: `export default ${JSON.stringify(html)}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    markdownToHtmlPlugin(),
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
        bibliography: resolve(__dirname, 'bibliography.html'),
      },
    },
  },
})
