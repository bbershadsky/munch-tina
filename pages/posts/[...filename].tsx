import { Post } from "../../components/posts/post";
import { client } from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import YouTube from "../../components/YouTube";
import { InferGetStaticPropsType } from "next";
import Layout from "../../components/layout/layout";

export default function BlogPostPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  if (data && data.post) {
    return (
      <Layout rawData={data} data={data.global}>
        <Post {...data.post} />
        {data.post.youtubeVideoId && <YouTube id={data.post.youtubeVideoId} />}
      </Layout>
    );
  }
  return (
    <Layout>
      <div>No data</div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const relativePath = Array.isArray(params.filename)
    ? `${params.filename.join("/")}.mdx`
    : `${params.filename}.mdx`;

  const tinaProps = await client.queries.blogPostQuery({
    relativePath,
  });

  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename.split("/") },
    })),
    fallback: "blocking",
  };
};

export type PostType = InferGetStaticPropsType<
  typeof getStaticProps
>["data"]["post"];
