import React, { useState, useEffect } from "react";
import { lastfmApiKey, lastfmUsername } from "../api/config";

const Artists = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${lastfmUsername}&api_key=${lastfmApiKey}&format=json&limit=5&period=7day`)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setArtists(data["topartists"]["artist"]);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return error

    } else if (!isLoaded) {
        return <div>Loading artists...</div>;
    } else {
        console.log(artists)
        return (
            <div className="artist-box">
                <ul>
                    {artists.map(artist => (
                        <li className="artist-li">
                            <a href={artist["url"]} rel="noreferrer" target="_blank">
                                <div className="artist-div">
                                    <p>{artist["name"]}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Artists;