import usePosts from "@/hooks/usePosts";
import React from "react";
import PostItem from "./PostItem";

interface PostsFeedProps {
  userId?: string;
}
const PostsFeed: React.FC<PostsFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <div>
      <>
        {posts.map((post: Record<string, any>) => (
          <PostItem userId={userId} key={post.id} data={post} />
        ))}
      </>
    </div>
  );
};

export default PostsFeed;
