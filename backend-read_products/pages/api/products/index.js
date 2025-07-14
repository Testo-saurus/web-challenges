import dbConnect from "@/db/connect";

import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    // Use the Product model to query the database
    const products = await Product.find(); // This gets all products from DB
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    const data = request.body;

    await Product.create(data);

    return response.status(201).json({ status: "joke created" });
  }
}
