import { Billboard as BillboardType } from "@/types";
import getBillboard from "@/actions/get-billboard";
import { getStrapiMedia } from "@/utils/api-helpers";
interface BillboardProps {
  data: BillboardType;
}


// TODO: ADD the Populate query to the Billboard component get the id and pass it to BaseURL?populate=imageUrl
export const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const imageUrl = getStrapiMedia(data?.data.attributes.imageUrl.data.attributes.url);
  console.log("Billbaord data from Category: ", data)
  console.log("Billboard Image",data?.data.attributes.imageUrl.data.attributes.url)
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1.4] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.data.attributes.label}
          </div>
        </div>
      </div>
    </div>
  );
};
