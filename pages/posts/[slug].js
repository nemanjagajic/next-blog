import Head from "next/head";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'first-post' } },
      { params: { slug: 'second-post' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      post: {
        title: slug,
        body: 'My first post, as static props.'
      }
    }
  }
}

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post?.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
      </main>
    </>
  )
}

export default PostPage