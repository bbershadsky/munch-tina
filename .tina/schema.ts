import { defineSchema } from "tinacms";

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "rich-text",
          label: "Body",
          name: "body",
          templates: [
            {
              name: "VideoEmbed",
              label: "Video Embed",
              fields: [
                { name: "src", label: "Video URL", type: "string" },
                { name: "title", label: "Video Title", type: "string" },
              ],
            },
          ],
          isBody: true,
        },
      ],
    },
  ],
});
