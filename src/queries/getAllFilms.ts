import { gql } from '@apollo/client';

export const GetAllFilms = gql`
query AllFilms {
    allFilms {
        films {
            title
            episodeID
            openingCrawl
        }
    }
}
`;