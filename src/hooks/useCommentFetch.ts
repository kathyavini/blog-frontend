import { useState, useEffect } from 'react';
import axios from '../config/axios';

export interface Comment {
  id: string;
  author: {
    displayName: string;
  };
  body: string;
  childComments: Comment[];
  published_at: string;
}

export const useCommentFetch = (blogId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`/${blogId}/comments/`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {});
  }, []);

  return [comments, error] as const;
};
