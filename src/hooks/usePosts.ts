import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchPostById,
  createPost,
  updatePost,
  deletePost
} from "../api/posts";
import { CreatePostPayload, UpdatePostPayload } from "../types/post";

// Hook to fetch paginated posts
export const usePosts = (page: number, perPage: number) => {
  return useQuery({
    queryKey: ["posts", page, perPage],
    queryFn: () => fetchPosts(page, perPage)
    // keepPreviousData: true
  });
};

// Hook to fetch a single post by ID
export const usePostById = (id: number) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
    enabled: !!id
  });
};

// Hook to create a new post
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      user_id,
      payload
    }: {
      user_id: number;
      payload: CreatePostPayload;
    }) => createPost(user_id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"]
      });
    }
  });
};

// Hook to update an existing post
export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdatePostPayload }) =>
      updatePost(id, payload),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["post", id] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });
};

// Hook to delete a post
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });
};
