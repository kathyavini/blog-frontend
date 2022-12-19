import { useState, useEffect } from 'react';
import axios from '../config/axios';

export interface Post {
  author: { displayName: string };
  body: string;
  created_at: string;
  slug: string;
  title: string;
  url: string;
  id: string;
  image_cloud_url: string;
  image_cloud_id: string;
}

export const usePostFetch = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/posts')
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      })
      .finally(() => {});
  }, []);

  return [posts, error, loading] as const;
};
