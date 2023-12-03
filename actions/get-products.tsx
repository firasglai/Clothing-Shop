import { Product, ProductsResponse } from "@/types";
import qs from "query-string";
import { fetchAPI } from "@/utils/fetch-api";
const URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  description?: string;
  isFeatured?: boolean;
}
//? Refactor to one passing urlParamsObject dynamically
export const getProductsByCategory2 = async (categoryId: number): Promise<ProductsResponse> => {
  try {
    const path = '/products';
    const urlParamsObject = {
      populate: 'image1,color,size',
      filters: {
        category: {
          id: {
            $eq: categoryId,
          },
        },
      },
      // Add any other parameters if needed
    };

    const decodedQuery = qs.stringify(urlParamsObject, { encode: false });
    console.log("decodedQUERY: ", decodedQuery);

    const responseData: ProductsResponse = await fetchAPI(path, urlParamsObject);
    console.log("the products response from category", responseData);
    return responseData;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products. Please check your network connection.');
  }
};

//! to refactor
export const getProductsByCategory = async (categoryId: number): Promise<ProductsResponse> => {
  try {
    const path = `/products?populate=image1,color,size&filters[category][id][$eq]=${categoryId}`;
    const urlParamsObject = {
      populate: 'image1,color,size'// Add any other parameters if needed
    };
    const responseData: ProductsResponse = await fetchAPI(path);
   // console.log("the products response from category", responseData);
    return responseData;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products. Please check your network connection.');
  }
};



export const getProducts = async (): Promise<ProductsResponse> => {
  /*
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      description: query.description,
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      populate: '*',//or specify it like this 'category,color,size,images'
    }
  });
  */
  try {
    const res = await fetch(`${URL}?populate=*`);
    if (!res.ok) {
      throw new Error(`Failed to fetch categories. Status: ${res.status}`);
    }
    const data = await res.json();
    // console.log("Products for the API", data.data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to fetch products. Please check your network connection."
    );
  }
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${URL}?populate=*&filters[isFeatured][$eq]=true`);
  const data = await res.json();
  //console.log("Data from the response",data);
  const products: Product[] = data.data;
  //console.log("Categories",products.map(product => product.attributes.category.data.attributes.name));
  return products;
};


export const getOneProduct = async (id: number): Promise<null> => {
  return null   ;
};
