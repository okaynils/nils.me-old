import React, { useState, useEffect } from "react";
import { taddyApiKey, taddyUserId } from "../api/config";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Podcast from "../viewmodels/Podcast";
import GET_PODCASTS_QUERY from "../api/queries.taddy";

const Podcasts = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);

    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://api.taddy.org/',
            cache: new InMemoryCache(),
            headers: {
                "X-API-Key": taddyApiKey.toString(),
                "X-USER-ID": taddyUserId.toString()
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
            <div className="artist-box">
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

export default Podcasts;