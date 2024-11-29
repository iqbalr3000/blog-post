import api from "./axiosInstance";
import { Post, CreatePostPayload, UpdatePostPayload } from "../types/post";

// Fetch all posts with pagination
export const fetchPosts = async (page: number, perPage: number) => {
  const response = await api.get<Post[]>("/posts", {
    params: { page, per_page: perPage }
  });
  return response.data;
};

// Fetch a single post by ID
export const fetchPostById = async (id: number) => {
  const response = await api.get<Post>(`/posts/${id}`);
  return response.data;
};

// Create a new post
export const createPost = async (
  user_id: number,
  payload: CreatePostPayload
) => {
  const response = await api.post<Post>(`/users/${user_id}/posts`, payload);
  return response.data;
};

// Update an existing post
export const updatePost = async (id: number, payload: UpdatePostPayload) => {
  const response = await api.put<Post>(`/posts/${id}`, payload);
  return response.data;
};

// Delete a post
export const deletePost = async (id: number) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};
