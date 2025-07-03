import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const fetcher = (URL) =>
  fetch(URL).then((res) => {
    if (!res.ok) {
      throw new Error("oops, data fetching went wrong");
    }
    return res.json();
  });

export default function Character() {
  const router = useRouter();
  console.log("router", router);
  console.log(router.query);

  const { id } = router.query;

  const { data, isLoading, error } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );

  console.log(data);
  console.log("Error:", error);

  // early return for loading
  if (isLoading) {
    return <h1>Is Loading ...</h1>;
  }

  // early return for error
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
