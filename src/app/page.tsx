'use client'

import Crawl from "@liorpo/react-star-wars-crawl";
import { useQuery } from '@apollo/client';
import { GetAllFilms } from '../queries/getAllFilms';
import { Root } from '../generated/graphql';

export default function Home() {
  const { data, loading, error } = useQuery<Root>(GetAllFilms);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const subTitle = data?.allFilms?.films?.[0]?.title ?? "FAILED TO LOAD";
  const text = data?.allFilms?.films?.[0]?.openingCrawl ?? "FAILED TO LOAD";

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
