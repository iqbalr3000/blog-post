export interface Post {
  id: number;
  title: string;
  body: string;
  user_id: number;
}

export interface PostsResponse {
  data: Post[];
  meta: {
    total: number;
  };
}

export interface CreatePostPayload {
  title: string;
  body: string;
}

export interface UpdatePostPayload {
  title?: string;
  body?: string;
}
