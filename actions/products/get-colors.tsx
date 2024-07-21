import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URL);
    const data = await res.json();
  
    const colors: Color[] = data.data;
  
    return colors;
  }

export default getColors