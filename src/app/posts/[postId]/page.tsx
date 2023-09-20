import { getPostData, getSortedPost } from "@/lib/posts";
import React from "react";
import { notFound } from "next/navigation";

type Props = {
  params: {
    postId: string;
  };
};

export function generateMetadata({ params: { postId } }: Props) {
  const posts = getSortedPost();

  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

async function PostPages({ params: { postId } }: Props) {
  const posts = getSortedPost();

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const post = await getPostData(postId);

  return (
    <div className="prose mx-auto py-12">
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

export default PostPages;
