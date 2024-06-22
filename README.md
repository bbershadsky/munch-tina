# Munch Recipe Database

### TODO

Scaffold out ETL pipeline from TinaETL
Work on styling and translations

## ETL Process

```python
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./process_all.sh <youtube_url>
```

### Prerequisites

- Ollama and openhermes
- `brew install yt-dlp`
- `pip install --user youtube_transcript_api`

### Development

To embed a video in MDX using Tina, you can create a custom component for the video and then use it within your MDX files. Here's a step-by-step guide:

    Create a Video Component: First, create a new component for your video embed. For example, you can create a VideoEmbed.js file:

    // components/VideoEmbed.js
    import React from 'react';

    const VideoEmbed = ({ src, title }) => (
      <div className="video-embed">
        <iframe
          width="560"
          height="315"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );

    export default VideoEmbed;

    Register the Component in Your Schema: Next, add the fields for your video component to your schema. Open your .tina/schema.ts file and add the component:

    // .tina/schema.ts
    import { defineSchema } from 'tinacms';

    export default defineSchema({
      collections: [
        {
          label: 'Blog Posts',
          name: 'posts',
          path: 'content/posts',
          fields: [
            {
              type: 'rich-text',
              label: 'Body',
              name: 'body',
              templates: [
                {
                  name: 'VideoEmbed',
                  label: 'Video Embed',
                  fields: [
                    { name: 'src', label: 'Video URL', type: 'string' },
                    { name: 'title', label: 'Video Title', type: 'string' },
                  ],
                },
              ],
              isBody: true,
            },
          ],
        },
      ],
    });

    Use the Component in Your MDX File: Now, you can use the VideoEmbed component in your MDX files:

    import VideoEmbed from '../components/VideoEmbed';

    # My Blog Post

    Here is an embedded video:

    <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Example Video" />

Filter on a category
https://tina.io/docs/graphql/queries/advanced/filter-documents/

https://tina.io/docs/features/data-fetching/

Add document directly through API
https://tina.io/docs/graphql/queries/add-document/

### Fooocus image generation prompt for munch

- Fat happy panda eating noodles
- MRE Manga, Adorable Kawaii, Simple Vector Art, Sticker Designs

---

This Next.js starter is powered by [TinaCMS](https://app.tina.io) for you and your team to visually live edit the structured content of your website. ✨

The content is managed through Markdown and JSON files stored in your GitHub repository, and queried through Tina GraphQL API.

### Features

- [Tina Headless CMS](https://app.tina.io) for authentication, content modeling, visual editing and team management.
- [Vercel](https://vercel.com) deployment to visually edit your site from the `/admin` route.
- Local development workflow from the filesystem with a local GraqhQL server.

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), Yarn installed for local development.
- A [TinaCMS](https://app.tina.io) account for live editing.

## Local Development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

### Local URLs

- http://localhost:3000 : browse the website
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
yarn build
```

## Getting Help

To get help with any TinaCMS challenges you may have:

- Visit the [documentation](https://tina.io/docs/) to learn about Tina.
- [Join our Discord](https://discord.gg/zumN63Ybpf) to share feedback.
- Visit the [community forum](https://community.tinacms.org/) to ask questions.
- Get support through the chat widget on the TinaCMS Dashboard
- [Email us](mailto:support@tina.io) to schedule a call with our team and share more about your context and what you're trying to achieve.
- [Search or open an issue](https://github.com/tinacms/tinacms/issues) if something is not working.
- Reach out on Twitter at [@tina_cms](https://twitter.com/tina_cms).

## Development tips

### Visual Studio Code GraphQL extension

[Install the GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) to benefit from type auto-completion.

### Typescript

A good way to ensure your components match the shape of your data is to leverage the auto-generated TypeScript types.
These are rebuilt when your `tina` config changes.

## LICENSE

Licensed under the [Apache 2.0 license](./LICENSE).
