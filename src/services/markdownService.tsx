import Markdown from 'react-markdown'
import writingsList from '../assets/writingsList.json';

interface FetchMarkdownResult {
    content: string;
    error: string | null;
}

interface FetchMarkdownListResult {
    files: string[];
    error: string | null;
}

export const fetchMarkdown = async (fileName: string): Promise<FetchMarkdownResult> => {
    try {
        const response = await fetch(`../writings/${fileName}.md`);
        if (!response.ok) {
            console.error(`Markdown file not found: ${fileName}`);
            throw new Error(`Markdown file not found: ${fileName}`);
        }
        const content = await response.text();
        return { content, error: null };
    } catch (error) {
        return { content: '', error: error instanceof Error ? error.message : 'An unknown error occurred' };
    }
};

// Function to convert markdown content to HTML
export const markdownToHtml = (markdownContent: string) => {
    return <Markdown>{markdownContent}</Markdown>;
};

export const fetchMarkdownList = async (): Promise<FetchMarkdownListResult> => {
    try {
        const files = writingsList

        return { files, error: null };
    } catch (error) {
        return { files: [], error: error instanceof Error ? error.message : 'An unknown error occurred' };
    }
};

export const fetchMarkdownDate = async (fileName: string): Promise<{ date: string | null, error: string | null }> => {
    try {
        // Use the existing fetchMarkdown function to get the content of the markdown file
        const { content, error } = await fetchMarkdown(fileName);

        // If there was an error fetching the markdown, return the error
        if (error) {
            return { date: null, error };
        }

        // Define the regex pattern to extract the frontmatter
        const frontmatterPattern = /---\s*date:\s*(\d{4}-\d{2}-\d{2})\s*---/;
        const match = content.match(frontmatterPattern);

        // Check if a date was found
        if (match && match[1]) {
            // Return the extracted date
            return { date: match[1], error: null };
        } else {
            // If no date is found in the frontmatter, return an error message
            return { date: null, error: 'Date field not found in the frontmatter.' };
        }
    } catch (error) {
        return { date: null, error: error instanceof Error ? error.message : 'An unknown error occurred' };
    }
};