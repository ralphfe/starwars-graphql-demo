import { gql } from '@apollo/client';

export const GET_FILM_BY_ID = gql`
query GetFilmById ($filmID: ID!) {
    film(filmID: $filmID) {
        title
        openingCrawl
    }
}
`;