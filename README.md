# Munch Recipe Database

### TODO

Scaffold out ETL pipeline from TinaETL
Work on styling and translations

#### Ideas

assign a health level ranking for each food and bioavailability based on the ingredients and method of preparation

sort by type of food

filter out ingredients you don't like

mission: solve the problem of "what are you cooking tonight?"

beef tongue

napa with beef tallow

make european beef stew

top 20 recipes
if can't find the english translation then find a different source

2x green beans
1 part flour

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

After updating schema to generate typescript types `npx tinacms dev`

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
