'use client'

import Crawl from "@liorpo/react-star-wars-crawl";
import { useQuery } from '@apollo/client';
import { GET_FILM_BY_ID } from '../queries/getFilmById';
import { Root, RootFilmArgs } from '../generated/graphql';

export default function Home() {
  const { data, loading, error } = useQuery<Root, RootFilmArgs>(GET_FILM_BY_ID, {
    variables: { filmID: "1" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const subTitle = data?.film?.title ?? "FAILED TO LOAD";
  const text = data?.film?.openingCrawl ?? "FAILED TO LOAD";

  return (
    <Crawl containerStyles={{
        height: "100vh",
        width: "100vw"
      }}
      title="Episode IV"
      subTitle={subTitle}
      text={text}
    />
  );
}
