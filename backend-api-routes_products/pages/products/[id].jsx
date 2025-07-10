import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();

  const { id, productData } = router.query;

  const product = productData ? JSON.parse(productData) : null;

  console.log(router.query);

  return (
    <h1>
      {" "}
      The id: {id}
      <p>Name: {product.name}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </h1>
  );
}
