  import { Category, CategoryResponse } from "@/types";

  const URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`
  const getCategories = async (): Promise<CategoryResponse> => {
      try {
        //console.log("Loading categories");
        const res = await fetch(URL);
    
        if (!res.ok) {
          throw new Error(`Failed to fetch categories. Status: ${res.status}`);
        }
        const data = await res.json();
    
        //console.log("Response for the API", data);
        return data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch categories. Please check your network connection.');
      }
    };
    
    export default getCategories;