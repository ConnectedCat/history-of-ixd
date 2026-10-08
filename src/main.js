import './style.css'
import homeContent from '../content/home.md'
import chapter1Content from '../content/chapter-1.md'
import chapter2Content from '../content/chapter-2.md'
import chapter3Content from '../content/chapter-3.md'
import chapter4Content from '../content/chapter-4.md'
import chapter5Content from '../content/chapter-5.md'
import chapter6Content from '../content/chapter-6.md'
import chapter7Content from '../content/chapter-7.md'
import chapter8Content from '../content/chapter-8.md'
import chapter9Content from '../content/chapter-9.md'
import chapter10Content from '../content/chapter-10.md'
import chapter11Content from '../content/chapter-11.md'
import chapter12Content from '../content/chapter-12.md'
import chapter13Content from '../content/chapter-13.md'
import chapter14Content from '../content/chapter-14.md'
import bibliographyContent from '../content/bibliography.md'

const app = document.querySelector('#app')
const pageKey = document.body.dataset.page || 'home'
const basePath = import.meta.env.BASE_URL;

const pageTitles = {
  home: 'History of Interaction Design',
  'chapter-1': 'Chapter 1: Introduction',
  'chapter-2': 'Chapter 2: Interaction Design Before Computers',
  'chapter-3': 'Chapter 3: Early Computation',
  'chapter-4': 'Chapter 4: Formation of Digital Computing and Information Theory',
  'chapter-5': 'Chapter 5: Computers Communicate to Humans and Each Other',
  'chapter-6': 'Chapter 6: The Rise of Interactive Computing',
  'chapter-7': 'Chapter 7: The Battle of WIMPs',
  'chapter-8': 'Chapter 8: Artificial Intelligence and Interaction Design',
  'chapter-9': 'Chapter 9: Modile Interaction Design',
  'chapter-10': 'Chapter 10: Interaction Design for Games',
  'chapter-11': 'Chapter 11: Interaction Design for Social Connection',
  'chapter-12': 'Chapter 12: Interaction Design for Multimedia and Constructed Realities',
  'chapter-13': 'Chapter 13: Interaction Design for Control Systems',
  'chapter-14': 'Chapter 14: Interaction Design for Embodied and Spacial Experiences',
  bibliography: 'Bibliography'
}

const pageContentMap = {
  home: homeContent,
  'chapter-1': chapter1Content,
  'chapter-2': chapter2Content,
  'chapter-3': chapter3Content,
  'chapter-4': chapter4Content,
  'chapter-5': chapter5Content,
  'chapter-6': chapter6Content,
  'chapter-7': chapter7Content,
  'chapter-8': chapter8Content,
  'chapter-9': chapter9Content,
  'chapter-10': chapter10Content,
  'chapter-11': chapter11Content,
  'chapter-12': chapter12Content,
  'chapter-13': chapter13Content,
  'chapter-14': chapter14Content,
  bibliography: bibliographyContent
}

const directLinks = [
  { href: basePath, key: 'home', label: 'Home' },
  { href: basePath+'bibliography.html', key: 'bibliography', label: 'Bibliography' }
]

const chapterLinks = [
  { href: basePath+'chapter-1.html', key: 'chapter-1', label: 'Chapter 1' },
  { href: basePath+'chapter-2.html', key: 'chapter-2', label: 'Chapter 2' },
  { href: basePath+'chapter-3.html', key: 'chapter-3', label: 'Chapter 3' },
  { href: basePath+'chapter-4.html', key: 'chapter-4', label: 'Chapter 4' },
  { href: basePath+'chapter-5.html', key: 'chapter-5', label: 'Chapter 5' },
  { href: basePath+'chapter-6.html', key: 'chapter-6', label: 'Chapter 6' },
  { href: basePath+'chapter-7.html', key: 'chapter-7', label: 'Chapter 7' },
  { href: basePath+'chapter-8.html', key: 'chapter-8', label: 'Chapter 8' },
  { href: basePath+'chapter-9.html', key: 'chapter-9', label: 'Chapter 9' },
  { href: basePath+'chapter-10.html', key: 'chapter-10', label: 'Chapter 10' },
  { href: basePath+'chapter-11.html', key: 'chapter-11', label: 'Chapter 11' },
  { href: basePath+'chapter-12.html', key: 'chapter-12', label: 'Chapter 12' },
  { href: basePath+'chapter-13.html', key: 'chapter-13', label: 'Chapter 13' },
  { href: basePath+'chapter-14.html', key: 'chapter-14', label: 'Chapter 14' },
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
