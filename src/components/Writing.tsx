// src/components/MarkdownDisplay.tsx
import React from 'react';
import { useMarkdownService } from '../hooks/useMarkdownService';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
// Other imports...

const Writing: React.FC = () => {
    // Extract fileName from URL
    const { fileName } = useParams<{ fileName: any }>();

    const { markdownContent, isLoading, error } = useMarkdownService(fileName, false);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div id='content'>
            <div className='section'>
                <a href="/" className="link">&lt;-<span className="X">Go back</span></a>
            </div>
            
            <div className="section">
                <Markdown>{markdownContent}</Markdown>
            </div>
        </div>
    );
};

export default Writing;