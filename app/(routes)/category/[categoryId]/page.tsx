import {getCategory , getCategory2Billbaord}  from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import {getProducts,getProductsByCategory} from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import { Billboard } from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import { Billboard as BillBoardType , Meta } from "@/types";
export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: number;
  };
  searchParams: {
    colorId: number;
    sizeId: number;
  };
}

// TODO: ADD the Populate query to the Category component
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
 //const products1 = await getProducts();
  //console.log("products", products)
  const sizes = await getSizes();
  const colors = await getColors();
  console.log("CategoryID: ", params.categoryId)
  const categoryResponse = await getCategory(params.categoryId);
  const category = categoryResponse.data;
  const productsResponse = await getProductsByCategory(params.categoryId);
  const products = productsResponse.data;
 // console.log("products", products)
  console.log("ONE Category: ", category.attributes.billboard)
 // console.log("Category Response",categoryResponse)
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.attributes.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors}/>
            <div className="hidden lg:block">
           {/*   <Filter valueKey="sizeId" name="Sizes" data={sizes} /> 
                <Filter valueKey="colorId" name="Colors" data={colors} />
           */}
             
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
