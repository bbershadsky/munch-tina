---
title: Munch Recipes
blocks:
  - headline: Munch does recipes right
    text: >
      ## **Munch on this!**


      **Click on Recipes to get started**. These are being automatically
      populated from user submissions of online videos. You can run your own
      instance of Munch by forking this Tina Repo and running the MunchETL
      process on your own machine. 


      ### How does it work?


      Ever stumble across a great recipe video without a list of steps, or even
      without english subtitles? Or you are being bombarded with ads from other
      recipe websites when you just want a list of steps that loads fast without
      the extra bloat?
    text2: >
      ## Developers


      This project is set up to show you the basics of working with Tina. You're
      looking at the landing page, which pulls content from
      `content/pages/home.md`, components from components/blocks, and puts them
      all together in `pages/[filename].tsx`, all based on a config
      `tina/config.tsx`.\

      \

      You can edit the markdown files directly in the repo or using the awesome
      Tina online editor at
      [https://munch-tina.vercel.app/admin/](https://munch-tina.vercel.app/admin/)
    actions:
      - label: Show me Recipes!
        type: button
        icon: true
        link: /posts
    image:
      src: /uploads/royce-green.jpg
      alt: >-
        Photo of palm trees at sunset by Adam Birkett -
        unsplash.com/photos/75EFpyXu3Wg
    color: default
    _template: hero
  - items:
      - icon:
          name: BiCodeBlock
          color: red
          style: float
        title: Amazing Feature
        text: >-
          Aliquam blandit felis rhoncus, eleifend ipsum in, condimentum nibh.
          Praesent ac faucibus risus, eu lacinia enim.
      - icon:
          name: BiLike
          color: primary
          style: float
        title: This Is a Feature
        text: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
      - icon:
          name: BiPalette
          color: green
          style: float
        title: Configurable Theme
        text: >-
          Edit global theme configuration with Tina. Change your theme's primary
          color, font, or icon set.
    color: tint
    _template: features
  - quote: >-
      There are only two hard things in Computer Science: cache invalidation and
      naming things.
    author: Phil Karlton
    color: primary
    _template: testimonial
---

