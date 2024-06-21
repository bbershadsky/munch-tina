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
      without English subtitles? Or you are being bombarded with ads from other
      recipe websites when you just want a list of steps that loads fast without
      the extra bloat?


      ### What does this accomplish?


      The problem with A.I slop is quality. Sourcing quality recipes from
      experienced and established chefs is much better than trying out the
      latest GPT hallucination. Munch bridges the gap by scraping videos without
      API limits to give you just the ingredients and directions you need.
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
          name: BiBowlHot
          color: red
          style: float
        title: So Fast
        text: 'No Popups, no ads, no surveys'
      - icon:
          name: BiLike
          color: primary
          style: float
        title: Hand Picked Recipes
        text: Only the most delicious
      - icon:
          name: BiPalette
          color: green
          style: float
        title: Simple Interface
        text: Easy to find what you're looking for!
    color: tint
    _template: features
  - quote: >-
      There are only two hard things in Computer Science: cache invalidation and
      naming things.
    author: Phil Karlton
    color: primary
    _template: testimonial
---

