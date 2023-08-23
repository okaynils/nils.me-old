import { gql } from '@apollo/client';

const GET_PODCASTS_QUERY = gql`
        query {
            hubermanlab: getPodcastSeries(name: "Huberman Lab") {
                uuid
                name
                description
                imageUrl
            }
            lexfridman: getPodcastSeries(name: "Lex Fridman Podcast") {
                uuid
                name
                description
                imageUrl
            }
            jre: getPodcastSeries(name: "Joe Rogan Experience") {
                uuid
                name
                description
                imageUrl
            }
      }
    `;

export default GET_PODCASTS_QUERY;