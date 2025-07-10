import { getAllProducts } from "@/services/productServices";
export default function handler(request, response) {
  const { id } = request.query;

  const allProducts = getAllProducts();

  const productObjectwithId = allProducts.find((product) => {
    return product.id === id;
  });

  response.status(200).json(productObjectwithId);
}
