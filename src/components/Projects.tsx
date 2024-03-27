import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Podcast from "../viewmodels/Podcast";
import GET_PODCASTS_QUERY from "../api/queries.taddy";

const Projects = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);

    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://api.taddy.org/',
            cache: new InMemoryCache(),
            headers: {
                "X-API-Key": process.env.TADDY_API_KEY!.toString(),
                "X-USER-ID": process.env.TADDY_USERID!.toString()
            },
        });

        client.query({
            query: GET_PODCASTS_QUERY
        })
        .then((result) => setPodcasts(Object.values(result["data"])))
        .catch((error) => setError(error));
        setIsLoaded(true);
    }, []);
    
    if (error) {
        return error
    } else if (!isLoaded) {
        return <div className="loading">Loading favorite podcasts...</div>;
    } else {
        return (
            <div>
                <div className="cover-container">
                    {podcasts.map(podcast => (
                        <div className="cover-item">
                            <img className="cover-image" src={podcast["imageUrl"]} alt="Cover 1" />
                            <p className="podcastName">{podcast["name"]}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;