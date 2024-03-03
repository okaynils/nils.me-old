import { useState, useEffect } from 'react';
import { fetchMarkdown } from '../services/markdownService';

export const useMarkdownService = (fileName: string) => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndSetMarkdown = async () => {
      const { content, error } = await fetchMarkdown(fileName);
      if (error) {
        setError(error);
      } else {
        setMarkdownContent(content);
      }
      setIsLoading(false);
    };

    fetchAndSetMarkdown();
  }, [fileName]);

  return { markdownContent, isLoading, error };
};