import { marked } from 'marked'

// Every .md file in src/content/articles becomes an article. The file name is the URL slug.
const files = import.meta.glob('../content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }
  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    const value = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
    if (key) data[key] = value
  }
  return { data, body: match[2] }
}

function readingTime(text) {
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

const today = new Date().toISOString().slice(0, 10)

const all = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const { data, body } = parseFrontmatter(raw)
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      category: data.category || 'Guides',
      date: data.date || today,
      draft: data.draft === 'true',
      minutes: readingTime(body),
      html: marked.parse(body),
    }
  })
  // Drafts and future-dated articles stay hidden until their date (after the next deploy).
  .filter((a) => !a.draft && a.date <= today)
  .sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : b.date.localeCompare(a.date)))

export const articles = all

export function getArticle(slug) {
  return all.find((a) => a.slug === slug)
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
