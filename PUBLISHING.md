# Publishing a weekly article

Articles live in `src/content/articles/`. Each Markdown (`.md`) file is one article, and the file name becomes its web address:

`what-are-backlinks.md` → `linocondigital.com/articles/what-are-backlinks`

## Add a new article

1. Copy `src/content/articles/_TEMPLATE.md.example` to a new file, for example `google-business-profile-guide.md`. Use lowercase words separated by hyphens.
2. Fill in the section between the `---` lines:
   - `title`: the headline (also used as the Google title).
   - `description`: one or two sentences shown in Google results and on the Articles page.
   - `date`: publish date as `YYYY-MM-DD`.
   - `category`: for example `SEO`, `Websites`, or `Backlinks`.
   - `draft: true` keeps it hidden. Remove that line when it's ready.
3. Write the article below the second `---` using Markdown (`## Heading`, `**bold**`, `- bullet`, `[link](/articles/other-slug)`).
4. Commit and push. The article appears once the site redeploys.

Articles with a future `date` stay hidden until that date, but only show up after the site is rebuilt on or after that day.

## Weekly routine

- **Pick the topic:** a question a customer asked you this week, or one from the idea list below.
- **One question per article:** answer it clearly in 800 to 1,500 words.
- **Link to one or two other articles** and end with the strategy call invitation.
- **Publish the same day each week** so the section stays fresh.

## Topic ideas

- How to set up a Google Business Profile (step by step)
- How to get more Google reviews without being pushy
- Website vs. social media: does a small business need both?
- What makes a website convert visitors into customers?
- How long does SEO take to work?
- Local SEO checklist for service businesses
- Do I need a blog on my business website?
- How to choose a domain name for your business
- 5 signs your website is costing you customers
- What is a landing page, and when do you need one?
- How to measure if your website is working (simple metrics)
- Website redesign checklist: what to do before you start
