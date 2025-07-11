import useSWR from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  console.log(data);

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <>
      <p>{JSON.stringify(data)}</p>
      <p>{data.character.randomEmail}</p>
      <p>{data.character.randomfirstName}</p>
      <p>{data.character.randomlastName}</p>
    </>
  );
}
