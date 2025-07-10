import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => {
  return fetch(url).then((res) => {
    return res.json();
  });
};

export default function ProductList() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  const router = useRouter();

  console.log(data);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  function handleProductClick(prodObj) {
    router.push({
      pathname: `/products/${prodObj.id}`,

      query: { productData: JSON.stringify(prodObj) },
    });

    console.log(router, router.query);
  }

  return (
    <>
      <h1> Products</h1>

      <ul>
        {data.map((obj) => (
          <li key={obj.id} onClick={() => handleProductClick(obj)}>
            <p>Name: {obj.name}</p>
            <p>{obj.description}</p>
            <p>${obj.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
