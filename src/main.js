import './style.css'
import homeContent from '../content/home.md'
import chapter1Content from '../content/chapter-1.md'
import chapter2Content from '../content/chapter-2.md'
import chapter3Content from '../content/chapter-3.md'
import bibliographyContent from '../content/bibliography.md'

const app = document.querySelector('#app')
const pageKey = document.body.dataset.page || 'home'

const pageTitles = {
  home: 'History of Interaction Design',
  'chapter-1': 'Chapter 1: Introduction',
  'chapter-2': 'Chapter 2: Interaction Design Before Computers',
  'chapter-3': 'Chapter 3',
  bibliography: 'Bibliography'
}

const pageContentMap = {
  home: homeContent,
  'chapter-1': chapter1Content,
  'chapter-2': chapter2Content,
  'chapter-3': chapter3Content,
  bibliography: bibliographyContent
}

const directLinks = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/bibliography.html', key: 'bibliography', label: 'Bibliography' }
]

const chapterLinks = [
  { href: '/chapter-1.html', key: 'chapter-1', label: 'Chapter 1' },
  { href: '/chapter-2.html', key: 'chapter-2', label: 'Chapter 2' },
  { href: '/chapter-3.html', key: 'chapter-3', label: 'Chapter 3' }
]

const linkMarkup = (link) => {
  const active = pageKey === link.key
  return `<a href="${link.href}" class="block rounded px-3 py-2 ${active ? 'font-semibold text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-700'}">${link.label}</a>`
}

const navMarkup = `
  ${directLinks.map(linkMarkup).join('')}
  <details class="relative group" ${pageKey.startsWith('chapter-') ? 'open' : ''}>
    <summary class="flex cursor-pointer list-none items-center gap-1 rounded py-2 text-gray-600 hover:text-indigo-700 [&::-webkit-details-marker]:hidden">
      <span class="${pageKey.startsWith('chapter-') ? 'font-semibold text-indigo-700' : ''}">Chapters</span>
      <span aria-hidden="true" class="text-xs">&#9662;</span>
    </summary>
    <div class="absolute right-0 z-10 mt-1 min-w-40 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
      ${chapterLinks.map(linkMarkup).join('')}
    </div>
  </details>
`

const contentMarkup = `
  <div class="mt-6 space-y-4 text-gray-700">
    ${pageContentMap[pageKey] || pageContentMap.home}
  </div>
`

app.innerHTML = `
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">${pageTitles[pageKey] || 'Page'}</h1>
        </div>
        <nav class="flex flex-wrap gap-4 text-sm">${navMarkup}</nav>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-10">
      <section class="rounded-2xl bg-white p-8 shadow-sm">
        ${contentMarkup}
      </section>
    </main>
  </div>
`
