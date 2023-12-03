
import { Billboard } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const getBillboard = async ( id: Number ): Promise<Billboard> => {
  const url = `${URL}/${id}`+`?populate=imageUrl`;
  console.log("Loading billboard from", url);
  const res = await fetch(url);
  const data = await res.json();
  console.log("Response for the API for the BillBoard", data);
  return data;
};

export default getBillboard;
