# 📰 Blog

<img width="680" alt="Sample" src="https://github.com/user-attachments/assets/fb38b2c9-8f4c-4bd7-9b56-ef92fcb56b91" />

## 🏎️ Features

- Next.js with Typescript
- [Contentlayer](https://www.contentlayer.dev/) to manage content logic
- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/230805_BiDcBQ_4H7)
- Lightweight, 85kB first load JS
- Mobile-friendly view
- Light and dark theme
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- Integration with [pliny](https://github.com/timlrx/pliny) that provides:
  - Multiple analytics options including [Umami](https://umami.is/), [Plausible](https://plausible.io/), [Simple Analytics](https://simpleanalytics.com/), Posthog and Google Analytics
  - Comments via [Giscus](https://github.com/laymonage/giscus), [Utterances](https://github.com/utterance/utterances) or Disqus
  - Newsletter API and component with support for Mailchimp, Buttondown, Convertkit, Klaviyo, Revue, Emailoctopus and Beehiiv
  - Command palette search with [Kbar](https://github.com/timc1/kbar) or Algolia
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Math display supported via [KaTeX](https://katex.org/)
- Citation and bibliography support via [rehype-citation](https://github.com/timlrx/rehype-citation)
- [Github alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) via [remark-github-blockquote-alert](https://github.com/jaywcjlove/remark-github-blockquote-alert)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- 3 different blog layouts
- 2 different blog listing layouts
- Support for nested routing of blog posts
- Projects page
- Preconfigured security headers
- SEO friendly with RSS feed, sitemaps and more!

## 🗞️ Posts

Content is modelled using [Contentlayer](https://www.contentlayer.dev/), define content schema and use it to generate typed content objects. See [Contentlayer documentation](https://www.contentlayer.dev/docs/getting-started) for more information.

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Showcase for projects - hero image specs: (16 x 9 - 1920 x 1080)

Please refer to `contentlayer.config.ts` for an up to date list of supported fields. The following fields are supported:

```
title (required)
date (required)
tags (optional)
lastmod (optional)
draft (optional)
summary (optional)
images (optional)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Starter Blog'
date: '2025-01-20'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'A performant Stsarter Blog.'
images: ['/static/images/blog-pic.jpg', '/static/images/blog-pic-2.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://frankcarv.com/blog/
---
```


## 📯 Sample posts

- [A markdown guide](https://tailwind-nextjs-starter-blog.vercel.app/blog/github-markdown-guide)
- [Learn more about images in Next.js](https://tailwind-nextjs-starter-blog.vercel.app/blog/guide-to-using-images-in-nextjs)
- [A tour of math typesetting](https://tailwind-nextjs-starter-blog.vercel.app/blog/deriving-ols-estimator)
- [Simple MDX image grid](https://tailwind-nextjs-starter-blog.vercel.app/blog/pictures-of-canada)
- [Example of long prose](https://tailwind-nextjs-starter-blog.vercel.app/blog/the-time-machine)
- [Example of Nested Route Post](https://tailwind-nextjs-starter-blog.vercel.app/blog/nested-route/introducing-multi-part-posts-with-nested-routing)

## 🪜 Steps:

1. Personalized `siteMetadata.js` (site related information)
2. Modify the content security policy in `next.config.js` to use
   other analytics provider or a commenting solution other than giscus.
3. Personalized `authors/default.md` (main author)
4. Modified `projectsData.ts`
5. Modified `headerNavLinks.ts` to customize navigation links
6. Added a blog post
7. Deployed on Vercel

## 👨🏻‍💻 Development

devcontainer runs and opens [http://localhost:3000](http://localhost:3000)

Edit the layout in `app` or content in `data`. With live reloading, the pages auto-updates as you edit them.

## 🎨 Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - logo.

`data/blog` - blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - tailwind configuration and stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Customizeable to preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`contentlayer.config.ts` - configuration for Contentlayer, including definition of content sources and MDX plugins used. See [Contentlayer documentation](https://www.contentlayer.dev/docs/getting-started) for more information.

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then use them directly in the `.mdx` or `.md` file. By default, a custom link, `next/image` component, table of contents component and Newsletter form are passed down. Note that the components should be default exported to avoid [existing issues with Next.js](https://github.com/vercel/next.js/issues/51593).

`layouts` - main used in pages:

- There are currently 3 post layouts available: `PostLayout`, `PostSimple` and `PostBanner`. `PostLayout` is the default 2 column layout with meta and author information. `PostSimple` is a simplified version of `PostLayout`, while `PostBanner` features a banner image.
- There are 2 blog listing layouts: `ListLayout`, the layout used in version 1 of the template with a search bar and `ListLayoutWithTags`, currently used in version 2, which omits the search bar but includes a sidebar with information on the tags.

`app` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs/app) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## 👨🏻‍🚀 Deploy

### Vercel

The easiest way to deploy is on [Vercel](https://vercel.com). The [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
