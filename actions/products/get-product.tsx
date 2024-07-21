import { Product, ProductsResponse } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`;

const getProduct = async ( id: string ): Promise<Product> => {
  const res = await fetch(`${URL}/${id}?populate=*`);
  const data = await res.json();
  const product: Product = data.data;
  
  return product;
};

export default getProduct;
