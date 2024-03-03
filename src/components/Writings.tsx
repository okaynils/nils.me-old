// src/components/MarkdownDisplay.tsx
import React from 'react';
import { useMarkdownService } from '../hooks/useMarkdownService';
// Replace this import statement with the actual import from the library you are using
import Markdown from 'react-markdown';

interface MarkdownDisplayProps {
  fileName: string;
}

const Writings: React.FC<MarkdownDisplayProps> = ({ fileName }) => {
  const { markdownContent, isLoading, error } = useMarkdownService(fileName);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Markdown Content</h2>
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
};

export default Writings;