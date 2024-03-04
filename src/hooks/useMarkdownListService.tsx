import { useState, useEffect } from 'react';
import { fetchMarkdownList, fetchMarkdownDate } from '../services/markdownService';

export const useMarkdownListService = () => {
  const [markdownFiles, setMarkdownFiles] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([]); // [2022-01-01, 2022-01-02, ...
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndSetMarkdownList = async () => {
      setIsLoading(true); // Ensure loading state is reset on each call
      const { files, error: listError } = await fetchMarkdownList();
      if (listError) {
        setError(listError);
        setIsLoading(false);
      } else {
        setMarkdownFiles(files);
        // Fetch dates for each markdown file
        const datesPromises = files.map(file => fetchMarkdownDate(file));
        try {
          // Await all the date fetching to complete
          const datesResults = await Promise.all(datesPromises);
          // Extract dates or null if there was an error fetching a particular date
          const fetchedDates = datesResults.map(result => result.date ? result.date : "No date");
          setDates(fetchedDates);
          setError(null); // Reset any previous errors
        } catch (fetchDateError) {
          setError('An error occurred fetching markdown dates.');
          console.error(fetchDateError);
        }
        setIsLoading(false);
      }
    };

    fetchAndSetMarkdownList();
  }, []);
  return { markdownFiles, dates, isLoading, error };
};
