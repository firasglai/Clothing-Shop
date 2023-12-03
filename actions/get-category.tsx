import { Category , SingleCategoryResponse } from "@/types";
import { fetchAPI } from "@/utils/fetch-api";
const URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`;
import qs from "query-string";

export const getCategory = async ( id: number ): Promise<SingleCategoryResponse> => {
  try {
  const url = `${URL}/${id}`+`?populate[billboard][populate][0]=imageUrl`;
   // console.log("Loading category from", url);
    const res = await fetch(url);
    const data = await res.json();
  //  console.log("One Category for the API", data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch Categories. Please check your network connection.');
  }
 
};


//using the qs Library to populate Images from the Billboard ?populate[billboard][populate][0]=imageUrl

export const getCategory2Billbaord =  async (id: number): Promise<SingleCategoryResponse> => {
  try {
    const query = qs.stringify(
      {
        populate: {
          billboard: {
            populate: ['imageUrl'],
          },
        },
      },
    );
    const path = `/categories/${id}?${query}`;
    console.log("Loading category from", path);
    const responseData: SingleCategoryResponse = await fetchAPI(path);
    console.log("Category response from Actions", responseData);
    return responseData;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch category. Please check your network connection.');
  }
};


