import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL);
    const data = await res.json();
  
    const sizes: Size[] = data.data;
  
    return sizes;
  }

export default getSizes