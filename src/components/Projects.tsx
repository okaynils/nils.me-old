import React, { useState, useEffect } from "react";

interface Repository {
    id: number;
    name: string;
    html_url: string;
}

const Projects: React.FC = () => {
    // Use the Repository[] type for the state
    const [repos, setRepos] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchRepos = async () => {
        setIsLoading(true);
        try {
          const response = await fetch('https://api.github.com/users/okaynils/repos?type=sources&per_page=4&sort=pushed');
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          const data: Repository[] = await response.json();

          setRepos(data);
        } catch (error) {
          console.error('Error fetching repositories:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchRepos();
    }, []);
  
    return (
      <div>
        {isLoading ? (
          <p>Loading repositories...</p>
        ) : (
          <ul>
            {repos.map(repo => (
              <li key={repo.id} className="artist-li">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <div className="artist-div">
                        {repo.name}
                    </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default Projects;