import { useCallback, useMemo } from "react";
import useCurrentUser from "./useCurrentUser";
import { useLoginModal } from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";
import { toast } from "react-hot-toast";
import axios from "axios";

const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutatefetchedPost } = usePost(postId);
  const { mutate: mutatefetchedPosts } = usePosts(userId);

  const loginModal = useLoginModal();

  const hasLike = useMemo(() => {
    const list = fetchedPost?.likeIds || [];

    return list.includes(currentUser?.id);
  }, [currentUser?.id, fetchedPost?.likeIds]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;
      if (hasLike) {
        request = () => axios.delete("/api/like", { data: {postId} });
      } else {
        request = () => axios.post("/api/like", { postId });
      }

      await request();
      mutatefetchedPost();
      mutatefetchedPosts();
      toast("Success");
    } catch (error) {
      toast.error("Somethign went wrong with like");
    }
  }, [
    currentUser,
    hasLike,
    postId,
    mutatefetchedPost,
    mutatefetchedPosts,
    loginModal,
  ]);

  return {
    hasLike, toggleLike, 
  }
};
export default useLike; 